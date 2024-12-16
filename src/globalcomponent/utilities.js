import styled from "styled-components";
import GlobalBtn from "./GlobalBtn";

export const PageContainer = styled.div`
  display: grid;
  grid-template-columns: 5fr 1fr 1fr;
  gap: 1.5rem;

  & > div {
    display: grid;
    gap: 1.5rem;
  }

  @media screen and (width <= 1200px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    place-items: center;
  }
`;

export const PageAside = styled.aside`
  gap: 1.5rem;

  @media screen and (width <= 1200px) {
    display: none;
  }
`;

export const UsersDetailsStyledNav = styled.nav`
  margin-bottom: 3rem;

  ul {
    display: grid;
    list-style: none;
    padding: 0;
    gap: 0.5rem;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }

  li {
    background-color: #1b1f24;
  }

  a {
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    padding: 1rem;
    color: #a1abb6;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;

    &.active {
      background-color: #1b1f24;
      color: #fff;
    }
  }
`;

export const Fields = styled.fieldset`
  appearance: none;
  border: none;
  margin-bottom: 30px;

  p {
    color: #8692a6;
    margin-bottom: 8px;
  }

  span {
    color: #8692a6;
    margin-bottom: 8px;
  }

  .description {
    color: #8692a6;
    margin-bottom: 8px;
  }

  div[role="group"] label {
    display: inline-flex;
    align-items: center;
    margin-right: 48px;
    font-size: 20px;
    font-weight: 400;
  }

  .img {
    width: 25px;
  }

  input[type="radio"] {
    width: 24px;
    height: 24px;
    margin-right: 10px;
    border: 2px solid var(--clr-primary);
    border-radius: 0;
    accent-color: var(--clr-primary);
  }
`;

export const GroupHeading = styled.h2`
  margin-bottom: ${({ mb }) => (mb ? mb : "1em")};
  font-size: 20px;
`;

export const FormGroup = styled.div`
  --gap: ${({ gap }) => gap || "20px"};

  position: relative;
  display: grid;
  grid-template-columns: ${({ columns, size }) =>
    size
      ? `repeat(auto-fit, minmax(calc(${size / columns + "px"} - ("#000" * ${
          columns * 2
        })), 1fr))`
      : `repeat(${columns}, 1fr)`};
  gap: var(--gap);
  margin-bottom: ${({ mb }) => (mb ? mb : "none")};

  @media only screen and (max-width: 756px) {
    grid-template-columns: 1fr;
    gap: var(--gap);
  }
`;
export const Back = styled(GlobalBtn)`
  position: absolute;
  inset: ${({ inset }) => (inset ? inset : "32px 0 auto 32px")};
  background-color: transparent;
  width: max-content;
  padding: 0.5rem 1rem;
  color: #000;
  font-size: 16px;
  z-index: 4;

  &:hover {
    background-color: transparent;
    color: var(--clr-primary);
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
