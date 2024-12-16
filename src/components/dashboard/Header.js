import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../Logo";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <NavContainer>
      <Logo maxWidth="70px" />

      {/* Hamburger Menu Button */}
      <MenuButton onClick={toggleMenu}>☰</MenuButton>

      {/* Navigation Links */}
      <NavList isMenuOpen={isMenuOpen}>
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="market">Market</NavLink>
        <NavLink to="wallet">Wallet</NavLink>
        <NavLink to="profile">Profile</NavLink>
      </NavList>

      {/* Search Input */}
      {/* <SearchInput placeholder="Search..." /> */}
    </NavContainer>
  );
};

export default Header;

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #1c2127;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: row;
    padding: 1rem;
  }
`;

// Hamburger Menu Button for mobile screens
const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #ddd;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavList = styled.div`
  display: flex;
  gap: 1.5rem;

  a {
    text-decoration: none;
    color: #ddd;
    font-weight: 500;
    font-size: 1rem;
    transition: color 0.3s;

    &:hover {
      color: #fff;
    }

    &:active {
      color: #007bff;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    position: absolute;
    top: 60px; /* Adjust based on header height */
    left: 0;
    width: 100%;
    background-color: #1c2127;
    padding: 1rem;
    display: ${({ isMenuOpen }) => (isMenuOpen ? "flex" : "none")};
    z-index: 1000;
  }
`;

const SearchInput = styled.input`
  width: 250px;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 1rem;
  }
`;
