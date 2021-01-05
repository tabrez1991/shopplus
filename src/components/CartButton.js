import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <Fragment>
      <Link to="#" class="cartBtn">
        <span>1</span>
        <img src={require("../assets/images/cart.png")} alt="cart" />
      </Link>
    </Fragment>
  );
};

export default Banner;
