import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const TrendingBrand = () => {

    return (
        <section class="row TrendingBrands py-3 py-md-4">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3 class="fs-22 text-uppercase fw-700 text-muted">
                            <span>Trending Brands</span>
                        </h3>
                    </div>
                    <div class="col-12">
                        <OwlCarousel className="TrendingBrands-owl-carousel owl-carousel" loop={true}
                            nav={false}
                            items={6}
                            dots={false}
                            margin={15}
                            smartSpeed={1000}>
                            <div class="item">
                                <div class="productList border rounded p-0">
                                    <img
                                        src={require("../assets/images/tranding-brand/1.jpg")}
                                        alt="product image"
                                        class="w-100 rounded"
                                    />
                                    <div class="pr-det text-center">
                                        <div class="logoBox">
                                            <img
                                                src={require("../assets/images/tranding-brand/1.png")}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="item">
                                <div class="productList border rounded p-0">
                                    <img
                                        src={require("../assets/images/tranding-brand/2.jpg")}
                                        alt="product image"
                                        class="w-100 rounded"
                                    />
                                    <div class="pr-det text-center">
                                        <div class="logoBox">
                                            <img
                                                src={require("../assets/images/tranding-brand/2.png")}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="item">
                                <div class="productList border rounded p-0">
                                    <img
                                        src={require("../assets/images/tranding-brand/3.jpg")}
                                        alt="product image"
                                        class="w-100 rounded"
                                    />
                                    <div class="pr-det text-center">
                                        <div class="logoBox">
                                            <img
                                                src={require("../assets/images/tranding-brand/3.png")}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="item">
                                <div class="productList border rounded p-0">
                                    <img
                                        src={require("../assets/images/tranding-brand/4.jpg")}
                                        alt="product image"
                                        class="w-100 rounded"
                                    />
                                    <div class="pr-det text-center">
                                        <div class="logoBox">
                                            <img
                                                src={require("../assets/images/tranding-brand/5.png")}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="item">
                                <div class="productList border rounded p-0">
                                    <img
                                        src={require("../assets/images/tranding-brand/5.jpg")}
                                        alt="product image"
                                        class="w-100 rounded"
                                    />
                                    <div class="pr-det text-center">
                                        <div class="logoBox">
                                            <img
                                                src={require("../assets/images/tranding-brand/4.png")}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="item">
                                <div class="productList border rounded p-0">
                                    <img
                                        src={require("../assets/images/tranding-brand/6.jpg")}
                                        alt="product image"
                                        class="w-100 rounded"
                                    />
                                    <div class="pr-det text-center">
                                        <div class="logoBox">
                                            <img
                                                src={require("../assets/images/tranding-brand/6.png")}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="item">
                                <div class="productList border rounded p-0">
                                    <img
                                        src={require("../assets/images/tranding-brand/7.jpg")}
                                        alt="product image"
                                        class="w-100 rounded"
                                    />
                                    <div class="pr-det text-center">
                                        <div class="logoBox">
                                            <img
                                                src={require("../assets/images/tranding-brand/1.png")}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default TrendingBrand