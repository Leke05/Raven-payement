import React from "react";
import OrderNav from "./OrderNav";
import styled from "styled-components";

const Order = () => {
  return (
    <>
      <OrderNav />

      <Container>
        <h2>No Open Orders</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id pulvinar
          nullam sit imperdiet pulvinar.
        </p>
      </Container>
    </>
  );
};

export default Order;
const Container = styled.div`
  h2 {
    text-align: center;
    color: #fff;
    font-weight: 400;
  }
  p {
    color: #87909a;
    font-size: 0.8rem;
    text-align: center;
  }
`;
