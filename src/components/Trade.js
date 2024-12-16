import React, { useState } from "react";
import styled from "styled-components";

const Trade = () => {
  const [activeTab, setActiveTab] = useState("buy");
  const [activeSubTab, setActiveSubTab] = useState("limit");
  const [tradeInfo, setTradeInfo] = useState({
    price: "",
    amount: "",
    reject: "Good till cancelled",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTradeInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const payload = {
      price: +tradeInfo.price,
      amount: +tradeInfo.amount,
      reject: tradeInfo.reject,
    };
    console.log(payload);
  };

  // Calculate total dynamically
  const total =
    tradeInfo.price && tradeInfo.amount
      ? (parseFloat(tradeInfo.price) * parseFloat(tradeInfo.amount)).toFixed(2)
      : "0.00";

  return (
    <Container>
      {/* Tab Header */}
      <TabHeader>
        <TabButton
          active={activeTab === "buy"}
          onClick={() => setActiveTab("buy")}
        >
          Buy
        </TabButton>
        <TabButton
          active={activeTab === "sell"}
          onClick={() => setActiveTab("sell")}
        >
          Sell
        </TabButton>
      </TabHeader>

      {/* Sub Tab Header */}
      <SubTabHeader>
        <SubTabButton
          active={activeSubTab === "limit"}
          onClick={() => setActiveSubTab("limit")}
        >
          Limit
        </SubTabButton>
        <SubTabButton
          active={activeSubTab === "market"}
          onClick={() => setActiveSubTab("market")}
        >
          Market
        </SubTabButton>
        <SubTabButton
          active={activeSubTab === "stop-limit"}
          onClick={() => setActiveSubTab("stop-limit")}
        >
          Stop-Limit
        </SubTabButton>
      </SubTabHeader>

      {/* Input Fields */}
      <InputContainer>
        <div>
          <Input
            type="number"
            placeholder="Limit price  0.00 USD"
            name="price"
            value={tradeInfo.price}
            onChange={handleChange}
            max={0}
          />
        </div>
        <div>
          <Input
            type="number"
            placeholder="Amount     0.00 BTC"
            name="amount"
            value={tradeInfo.amount}
            onChange={handleChange}
            max={0}
          />
        </div>
        <div>
          <Select
            name="reject"
            value={tradeInfo.reject}
            onChange={handleChange}
          >
            <option>Good till cancelled</option>
            <option>Immediate or cancel</option>
          </Select>
        </div>
      </InputContainer>

      {/* Checkbox */}
      <CheckboxContainer>
        <Checkbox type="checkbox" />
        <p>Post Only</p>
      </CheckboxContainer>

      {/* Total */}
      <TotalContainer>
        <span>Total</span>
        <span>{total} USD</span>
      </TotalContainer>

      {/* Buy/Sell Button */}
      <BuyButton onClick={handleSubmit} type="submit">
        {activeTab === "buy" ? "Buy BTC" : "Sell BTC"}
      </BuyButton>

      {/* Account Info */}
      <AccountInfo>
        <div>
          <p>Total account value:</p> <span>NGN</span>
        </div>
        <div>
          <p>Open Orders:</p>
          <span> 0.00</span>
        </div>
        <div>
          <p>Available:</p>
          <span>0.00</span>
        </div>
        <DepositButton>Deposit</DepositButton>
      </AccountInfo>
    </Container>
  );
};

export default Trade;

// Styled Components (Same as Provided)
const Container = styled.div`
  width: 320px;
  background-color: #0d0d0d;
  color: #ffffff;
  border-radius: 8px;
  padding: 16px;
  font-family: Arial, sans-serif;
  font-size: 12px;
`;

const TabHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #1a1a1a;
  border-radius: 6px;
  margin-bottom: 16px;
`;

const TabButton = styled.button`
  flex: 1;
  padding: 8px 0;
  background: ${(props) => (props.active ? "#0d0d0d" : "none")};
  border: none;
  color: ${(props) => (props.active ? "#ffffff" : "#8e8e8e")};
  font-size: 14px;
  cursor: pointer;
  border-radius: 6px;
  transition: background 0.3s;

  &:hover {
    color: #ffffff;
  }
`;

const SubTabHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const SubTabButton = styled.button`
  flex: 1;
  padding: 8px 0;
  background: ${(props) => (props.active ? "#ffffff" : "none")};
  border: ${(props) =>
    props.active ? "2px solid #ffffff" : "2px solid transparent"};
  color: ${(props) => (props.active ? "#0d0d0d" : "#ffffff")};
  font-size: 12px;
  cursor: pointer;
  border-radius: 6px;
  transition: background 0.3s, border 0.3s;

  &:hover {
    background: #ffffff;
    color: #0d0d0d;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
  position: relative;
`;

const Input = styled.input`
  background: #1a1a1a;
  border: 1px solid #333;
  color: #ffffff;
  padding: 16px 8px 8px;
  border-radius: 4px;
  font-size: 14px;
  width: 90%;

  &:focus {
    outline: none;
    border-color: #ffffff;
  }
`;

const Select = styled.select`
  background: #1a1a1a;
  border: 1px solid #333;
  color: #ffffff;
  padding: 8px;
  border-radius: 4px;
  font-size: 14px;
  width: 96%;

  &:focus {
    outline: none;
    border-color: #ffffff;
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
`;

const Checkbox = styled.input`
  accent-color: #ffffff;
`;

const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin-bottom: 16px;
`;

const BuyButton = styled.button`
  width: 100%;
  padding: 10px;
  background: linear-gradient(90deg, #654ea3, #eaafc8);
  border: none;
  border-radius: 6px;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const AccountInfo = styled.div`
  margin-top: 16px;
  font-size: 12px;
  color: #8e8e8e;

  > div {
    display: flex;
    justify-content: space-between;

    span {
      margin-top: 0.4rem;
    }
  }
`;

const DepositButton = styled.button`
  width: 30%;
  padding: 8px;
  background-color: #0056f9;
  border: none;
  border-radius: 6px;
  color: #ffffff;
  font-size: 14px;
  cursor: pointer;
  margin-top: 8px;

  &:hover {
    background-color: #003cb3;
  }
`;
