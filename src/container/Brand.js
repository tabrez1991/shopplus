import React, { Fragment } from "react";
import { connect } from "react-redux";
import Header from "../components/Header";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import TrendingBrand from "../components/TrendingBrand";
import BrandBanner from "../components/BrandBanner";
import BrandPage from "../components/BrandPage";
import ImportantInstructions from "../components/ImportantInstructions";
import Redeem from "../components/Redeem";

import { getCategories } from "../actions/home";
const Brand = (props) => {
    props.getCategories();
    return (
        <Fragment>
            <div className={props.show_login ? "modal-open" : props.show_navbar ? "open-nav" : ""}>
                {props.show_login ? <div><div className="modal-backdrop show"></div><Login /></div> : null}
                {props.show_navbar ? <div><Navbar /></div> : null}
                <div class="off-canvas-main">
                    <div class="container-fluid">
                        <Header />
                        <Categories />
                        <BrandBanner />
                        <BrandPage />
                        <ImportantInstructions />
                        <Redeem />
                        <TrendingBrand />
                        <Footer />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};
const mapStateToProps = (state) => ({
    show_navbar: state.home.show_navbar,
    show_login: state.home.show_login
});
export default connect(mapStateToProps, { getCategories })(Brand);
