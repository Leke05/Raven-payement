import styled from "styled-components";
import { useState } from "react";
import TradeCard from "./TradeCard";

const Booking = ({ data }) => {
  const [activeTab, setActiveTab] = useState("order-book");

  const sellingTempelate = data?.map((order) => {
    return (
      <OrderRow type="sell" key={order.id}>
        <Price type="sell">{order.askPrice.toFixed(2)}</Price>
        <Amount>{order.amount}</Amount>
        <Total>{(order.askPrice * order.amount).toFixed(2)}</Total>
      </OrderRow>
    );
  });

  const buyingTemplate = data?.map((order) => {
    return (
      <OrderRow type="buy" key={order.id}>
        <Price type="buy">{order.bidPrice.toFixed(2)}</Price>
        <Amount>{order.amount}</Amount>
        <Total>{(order.bidPrice * order.amount).toFixed(2)}</Total>
      </OrderRow>
    );
  });
  const totalPrice = data.reduce((acc, current) => {
    return acc + current.bidPrice;
  }, 0);

  return (
    <OrderBookContainer>
      {/* Header Tabs */}
      <Header>
        <TabButton
          active={activeTab === "order-book"}
          onClick={() => setActiveTab("order-book")}
        >
          Order Book
        </TabButton>
        <TabButton
          active={activeTab === "recent-trades"}
          onClick={() => setActiveTab("recent-trades")}
        >
          Recent Trades
        </TabButton>
      </Header>

      {/* Content Based on Active Tab */}
      {activeTab === "order-book" ? (
        <OrderList>
          {/* Sell Orders */}

          {sellingTempelate}

          {/* Current Price */}
          <CurrentPrice>{totalPrice} ↑</CurrentPrice>

          {/* Buy Orders */}
          {buyingTemplate}
        </OrderList>
      ) : (
        <TradeCard />
      )}
    </OrderBookContainer>
  );
};

export default Booking;
const OrderBookContainer = styled.div`
  width: 300px;
  background-color: #0d0d0d;
  color: #ffffff;
  border-radius: 8px;
  padding: 16px;
  font-family: Arial, sans-serif;
  font-size: 12px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const TabButton = styled.button`
  flex: 1;
  text-align: center;
  padding: 8px 0;
  font-size: 14px;
  background: none;
  border: none;
  color: ${(props) => (props.active ? "#ffffff" : "#8e8e8e")};
  border-bottom: ${(props) => (props.active ? "2px solid #ffffff" : "none")};
  cursor: pointer;
  transition: color 0.2s, border-bottom 0.2s;

  &:hover {
    color: #ffffff;
  }
`;

const OrderList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const OrderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 8px;
  background-color: ${(props) =>
    props.type === "sell" ? "#3b1e1e" : "#1e3b1e"};
  border-radius: 4px;
`;

const Price = styled.div`
  color: ${(props) => (props.type === "sell" ? "#ff5e5e" : "#5eff5e")};
  flex: 1;
  text-align: left;
`;

const Amount = styled.div`
  color: #ffffff;
  flex: 1;
  text-align: center;
`;

const Total = styled.div`
  color: #8e8e8e;
  flex: 1;
  text-align: right;
`;

const CurrentPrice = styled.div`
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  color: #5eff5e;
  margin: 8px 0;
  padding: 8px;
  background-color: #1e3b1e;
  border-radius: 4px;
`;
