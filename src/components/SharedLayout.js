import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./dashboard/Header";
import Footer from "./dashboard/Footer";

const SharedLayout = () => {
  return (
    <Container>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <MainContainer>
        <Outlet /> {/* This renders the child components (e.g., Home) */}
      </MainContainer>
      <Footer />
    </Container>
  );
};

export default SharedLayout;

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #1c2127;
`;

const HeaderContainer = styled.header`
  background-color: #1c2127;
  padding: 1rem 2rem;
  border-bottom: 1px solid #ddd;
`;

const MainContainer = styled.main`
  flex: 1;
  padding: 2rem;
  background-color: #1c2127;
`;
