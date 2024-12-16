import React, { useEffect, useState } from "react";
import { PageContainer } from "../globalcomponent/utilities";
import BitCoinNav from "../components/dashboard/BitCoinNav";
import Chart from "../globalcomponent/Chart";
import styled from "styled-components";
import Booking from "../components/Booking";
import Trade from "../components/Trade";
import Order from "../components/order/Order";
import {
  useGetOrderBooking,
  useGetTrading,
  useGetTradingChart,
} from "../hooks/useQuery";

const Home = () => {
  //data fetching queries
  const { data: orderData } = useGetOrderBooking();
  const { data: chartData } = useGetTradingChart();
  const btcData = orderData?.DISPLAY?.BTC?.USD;
  const askPrice = parseFloat(btcData?.ASK?.replace(/[$,]/g, ""));
  const bidPrice = parseFloat(btcData?.BID?.replace(/[$,]/g, ""));
  // console.log(tradingData);

  const orders = [];
  for (let i = 0; i < 5; i++) {
    orders.push({
      askPrice: askPrice + i * 0.01,
      bidPrice: bidPrice - i * 0.01,
      amount: (0.758965).toFixed(6),
      id: i + 1,
    });
  }

  // console.log(orders);

  return (
    <HomeContainer>
      <BitCoinNav chartData={chartData} />
      <PageContainer className="mt-3" style={{ marginTop: "1rem" }}>
        <div>
          <Chart chartData={chartData} />
          <Order />
        </div>

        <div>
          <Booking data={orders} />
        </div>
        <Trade />
      </PageContainer>
    </HomeContainer>
  );
};

export default Home;
const HomeContainer = styled.div`
  background-color: #000;
`;
