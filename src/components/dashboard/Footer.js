import React from "react";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedin, FaTwitter, FaFacebookSquare } from "react-icons/fa";
import styled from "styled-components";

const Footer = () => {
  return (
    <Footers>
      <hr className="text-light" />
      <div className="d-flex justify-content-between footer-container">
        <div>
          <p style={{ color: "#6d6b7d" }}>
            © Copyright 2024 by RavenPay Limited.
          </p>
        </div>
        <div className="media-container">
          <FiInstagram size={20} color="#ffffff" />
          <FaLinkedin size={20} color="#ffffff" />
          <FaTwitter size={20} color="#ffffff" />
          <FaFacebookSquare size={20} color="#ffffff" />
        </div>
      </div>
    </Footers>
  );
};

export default Footer;
const Footers = styled.div`
  /* padding: 1rem; */
  background-color: #1c2127;

  .footer-container {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    .media-container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 1rem;
    }
  }
  @media screen and (max-width: 769px) {
    padding: 1rem;
    .footer-container {
      display: flex;
      flex-direction: column;
      place-items: center;
      justify-content: space-between;
    }
  }
`;
