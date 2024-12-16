import { useNavigate } from "react-router-dom";
import { Back } from "./utilities";
import styled from "styled-components";

export const BackBtn = ({ inset }) => {
  const navigate = useNavigate();

  return (
    <Back inset={inset} onClick={() => navigate(-1)}>
      &lt; Back
    </Back>
  );
};

export const PageHeading = styled.h1`
  margin-bottom: 16px;
  font-size: 24px;
  text-align: center;
  text-transform: capitalize;
  font-weight: 700;

  & + p {
    text-align: center;
    max-width: 50ch;
    margin-inline: auto;
    font-size: 18px;
    font-weight: 300;
    line-height: 1.4;
    color: #575f6e;
  }

  @media screen and (max-width: 768px) {
    font-size: 18px;
    margin-right: 3rem;
  }
`;
