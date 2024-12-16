import { useQuery } from "react-query";
import axios from "axios";
import { API_KEY, baseUrl } from "./base";
import { bitcoin } from "./Api";

export const useGetTrading = (options) =>
  useQuery(
    "trading-info",
    async () => {
      const response = await axios.get(`${baseUrl}/${bitcoin.trading.trade}`);
      return response.data;
    },
    {
      select: (data) => data,
      ...options,
    }
  );
export const useGetOrderBooking = (options) =>
  useQuery(
    "order-info",
    async () => {
      const response = await axios.get(
        `${baseUrl}/${bitcoin.trading.order}=coinbase&api_key=${API_KEY}`
      );
      return response.data;
    },
    {
      select: (data) => data?.Data,
      ...options,
    }
  );
export const useGetTradingChart = (options) =>
  useQuery(
    "trading-chart",
    async () => {
      const response = await axios.get(`${baseUrl}/${bitcoin.trading.chart}`);
      return response.data;
    },
    {
      select: (data) => data,
      ...options,
    }
  );
