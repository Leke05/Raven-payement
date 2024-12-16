import React, { useState, useMemo } from "react";
import { Fields, FormGroup } from "../globalcomponent/utilities";
import GlobalInput from "../globalcomponent/GlobalInput";
import styled from "styled-components";
import { useGetTrading } from "../hooks/useQuery";

const TradeCard = () => {
  // Data fetching query
  const { data: tradingData } = useGetTrading();

  // Sample data
  const marketData = useMemo(() => {
    return [
      { id: 1, symbol: "BTC-USDT", price: "23,234.6", change: "+2.5%" },
      { id: 2, symbol: "ETH-USDT", price: "1,834.2", change: "-1.2%" },
      { id: 3, symbol: "XRP-USDT", price: "0.6253", change: "+0.8%" },
      { id: 4, symbol: "ADA-USDT", price: "0.2617", change: "-0.5%" },
    ];
  }, []);

  const [search, setSearch] = useState("");

  // Filtered data based on search input
  const filteredData = useMemo(() => {
    return marketData.filter((item) =>
      item.symbol.toLowerCase().includes(search.toLowerCase())
    );
  }, [marketData, search]);

  return (
    <>
      <Fields>
        <div className="description">Select Market</div>
        <FormGroup columns="1">
          <GlobalInput
            inputPlaceholder="Search by symbol"
            inputName="search"
            inputValue={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </FormGroup>
      </Fields>

      <Container>
        <ul className="market-options">
          <li className="active">All</li>
          <li>USD</li>
          <li>BTC</li>
        </ul>

        {/* Display filtered data */}
        {filteredData.map((item) => (
          <div key={item.id} className="money">
            <div className="logo">
              <img src="/images/coinLogo.png" alt={`${item.symbol} Logo`} />
              <h6>{item.symbol}</h6>
            </div>
            <div className="price-info">
              <p className="price">${item.price}</p>
              <p
                className={`change ${
                  item.change.startsWith("+") ? "positive" : "negative"
                }`}
              >
                {item.change}
              </p>
            </div>
          </div>
        ))}

        {/* Show a message when no results are found */}
        {filteredData.length === 0 && (
          <p className="no-results">No results found.</p>
        )}
      </Container>
    </>
  );
};

export default TradeCard;

const Container = styled.div`
  padding: 1rem;
  background-color: #1c2127;
  border-radius: 8px;
  color: #ddd;

  .market-options {
    display: flex;
    gap: 1.5rem;
    margin-bottom: 1rem;

    li {
      list-style: none;
      font-size: 0.9rem;
      font-weight: 400;
      color: #9aa4ae;
      cursor: pointer;
      transition: color 0.3s ease;

      &:hover {
        color: #fff;
      }
    }

    .active {
      color: #fff;
      font-weight: 500;
    }
  }

  .money {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #2a2f35;
    border-radius: 8px;
    margin-bottom: 0.5rem;

    .logo {
      display: flex;
      align-items: center;
      gap: 0.8rem;

      img {
        width: 24px;
        height: 24px;
        object-fit: contain;
      }

      h6 {
        font-size: 0.5rem;
        font-weight: 500;
        color: #fff;
      }
    }

    .price-info {
      display: flex;
      flex-direction: row;
      gap: 0.6rem;

      .price {
        font-size: 1rem;
        font-weight: bold;
        color: #26a69a;
      }

      .change {
        font-size: 1rem;
        font-weight: 400;

        &.positive {
          color: #26a69a;
        }

        &.negative {
          color: #ef5350;
        }
      }
    }
  }

  .no-results {
    text-align: center;
    font-size: 1rem;
    color: #ef5350;
    margin-top: 1rem;
  }

  @media screen and (max-width: 768px) {
    .money {
      flex-direction: column;
      text-align: center;
      gap: 1rem;

      .logo {
        justify-content: center;
        gap: 0.5rem;

        img {
          width: 32px;
          height: 32px;
        }

        h6 {
          font-size: 1rem;
        }
      }

      .price-info {
        align-items: center;

        .price {
          font-size: 1.5rem;
        }

        .change {
          font-size: 1.2rem;
        }
      }
    }
  }

  @media screen and (max-width: 480px) {
    .money {
      gap: 0.5rem;

      .logo {
        gap: 0.3rem;

        img {
          width: 28px;
          height: 28px;
        }

        h6 {
          font-size: 0.9rem;
        }
      }

      .price-info {
        .price {
          font-size: 1.2rem;
        }

        .change {
          font-size: 1rem;
        }
      }
    }
  }
`;
