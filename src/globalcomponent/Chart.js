import React, { useEffect, useRef } from "react";
import { createChart } from "lightweight-charts";

const Chart = ({ chartData }) => {
  const chartContainerRef = useRef(null);
  const chartRef = useRef(null);

  const resizeChart = () => {
    if (chartRef.current && chartContainerRef.current) {
      const width = window.innerWidth;

      // Adjust width and height based on screen size (media query logic)
      const chartWidth = width > 1024 ? 600 : width > 768 ? 400 : 300;
      const chartHeight = width > 1024 ? 400 : width > 768 ? 300 : 200;

      chartRef.current.applyOptions({ width: chartWidth, height: chartHeight });
    }
  };

  useEffect(() => {
    if (!chartData?.Data?.Data || chartData.Data.Data.length === 0) {
      return;
    }

    // Initialize the chart
    const chart = createChart(chartContainerRef.current, {
      width: 600, // Default width
      height: 400, // Default height
      layout: {
        background: {
          type: "solid",
          color: "#000000",
        },
        textColor: "red",
      },
      grid: {
        vertLines: {
          color: "#444",
        },
        horzLines: {
          color: "#444",
        },
      },
    });

    const candlestickSeries = chart.addCandlestickSeries({
      upColor: "#26a69a",
      downColor: "#ef5350",
      borderVisible: false,
      wickUpColor: "#26a69a",
      wickDownColor: "#ef5350",
    });

    candlestickSeries.setData(chartData.Data.Data);

    chartRef.current = chart;

    // Resize the chart dynamically on window resize
    window.addEventListener("resize", resizeChart);
    resizeChart(); // Call resize initially

    return () => {
      chart.remove();
      window.removeEventListener("resize", resizeChart);
    };
  }, [chartData]);

  return (
    <div ref={chartContainerRef} style={{ width: "100%", height: "100%" }} />
  );
};

export default Chart;
