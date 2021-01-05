import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [state, setState] = useState({
    show_categories: false
  });

  const { show_categories } = state;
  return (
    <Fragment>
      <div class="off-canvas-nav">
        <div class="left-nav-toplink">
          <div class="left-nav">
            <ul class="list-unstyled m-0">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="#">New Arrivals</Link>
              </li>
              <li class="show-mobile parent" onClick={() => setState({ ...state, show_categories: true })}>
                <Link to="#" data-related="title_1">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="#">Discounts</Link>
              </li>
              <li>
                <Link to="#">Bogo</Link>
              </li>
              <li>
                <Link to="#">Check My Voucher Status</Link>
              </li>
              <li>
                <Link to="#">Resend My Voucher</Link>
              </li>
              <li>
                <Link to="#">My Transactions</Link>
              </li>
              <li>
                <Link to="#">Customer Care</Link>
              </li>
            </ul>
            <div class={show_categories ? "subMenu openSub" : "subMenu"} id="categories">
              <div class="text-right nav-back" onClick={() => setState({ ...state, show_categories: false })}>
                <span>Categories</span>
              </div>
              <ul class="list-unstyled m-0">
                <li>
                  <Link to="category.html">Apparel & Accessories</Link>
                </li>
                <li>
                  <Link to="category.html">Food & Beverage</Link>
                </li>
                <li>
                  <Link to="category.html">Grocery & Home Needs</Link>
                </li>
                <li>
                  <Link to="category.html">Mobile & Electronics</Link>
                </li>
                <li>
                  <Link to="category.html">Health & Wellness</Link>
                </li>
                <li>
                  <Link to="category.html">e-Com & Online</Link>
                </li>
                <li>
                  <Link to="category.html">Entertainment & Magazines</Link>
                </li>
                <li>
                  <Link to="category.html">Cabs & Travel</Link>
                </li>
                <li>
                  <Link to="category.html">All Brands</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
