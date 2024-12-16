import React from "react";
import { UsersDetailsStyledNav } from "../../globalcomponent/utilities";
import { NavLink } from "react-router-dom";

const OrderNav = () => {
  return (
    <UsersDetailsStyledNav>
      <ul>
        <li>
          <NavLink to="open-order">Open Orders</NavLink>
        </li>
        <li>
          <NavLink to="position">Positions</NavLink>
        </li>
        <li>
          <NavLink to="order-history">Order History</NavLink>
        </li>
        <li>
          <NavLink to="trade-history">Trade History</NavLink>
        </li>
      </ul>
    </UsersDetailsStyledNav>
  );
};

export default OrderNav;
