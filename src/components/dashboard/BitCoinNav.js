import React from "react";
import { FaArrowDown, FaArrowUp, FaRegClock } from "react-icons/fa";
import { IoBarChartOutline } from "react-icons/io5";
import styled from "styled-components";

const BitCoinNav = ({ chartData }) => {
  return (
    <NavContainer>
      <LogoContainer>
        <img src="/images/coinLogo.png" alt="bitcoin" />
        <span>BTC/USDT</span>
      </LogoContainer>
      <DetailsContainer>
        <DetailItem>
          <PriceContainer>
            <FaArrowDown size={10} color="#fff" />
            <Price>$20,634</Price>
          </PriceContainer>
        </DetailItem>
        <DetailItem>
          <FaRegClock size={10} color="#bbb" />
          <Label>24h change</Label>
          <ChangeText positive>520.80 +1.25%</ChangeText>
        </DetailItem>
        <DetailItem>
          <FaArrowUp size={10} color="#bbb" />
          <Label>24h high</Label>
          <ChangeText>$21,000</ChangeText>
        </DetailItem>
        <DetailItem>
          <FaArrowDown size={10} color="#bbb" />
          <Label>24h low</Label>
          <ChangeText>$20,500</ChangeText>
        </DetailItem>
        <DetailItem>
          <IoBarChartOutline size={10} color="#bbb" />
          <Label>24h volume</Label>
          <ChangeText>118 BTC</ChangeText>
        </DetailItem>
      </DetailsContainer>
    </NavContainer>
  );
};

export default BitCoinNav;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 15px 20px;
  background-color: #1e1e2f;
  border-radius: 8px;
  color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  width: 100%;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  span {
    font-size: 18px;
    font-weight: bold;
    color: #fff;
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  gap: 30px;
`;

const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  padding-top: 1.3rem;
`;

const Price = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: #4caf50;
`;

const Label = styled.span`
  margin-top: 5px;
  font-size: 0.8rem;
  color: #bbb;
`;

const ChangeText = styled.span`
  margin-top: 5px;
  font-size: 14px;
  font-weight: bold;
  color: ${(props) => (props.positive ? "#4caf50" : "##a3a4a7")};

  @media screen and (max-width: 768px) {
    font-size: 0.5rem;
  }
`;
