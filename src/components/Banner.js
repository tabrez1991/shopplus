import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Banner = () => {

    return (
        <section class="row">
            <div class="col-12 p-0">
                <div
                    id="carouselHome"
                    class="carousel slide"
                    data-ride="carousel"
                >
                    <div class="carousel-inner">
                        <div class="carousel-item active carousel-item-left">
                            <img
                                class="w-100 d-none d-md-block"
                                src={require("../assets/images/banner.jpg")}
                                alt="First slide"
                            />
                            <img
                                class="w-100 d-block d-md-none "
                                src={require("../assets/images/mobile-banner.jpg")}
                                alt="First slide"
                            />
                        </div>
                        <div class="carousel-item carousel-item-next carousel-item-left">
                            <img
                                class="w-100 d-none d-md-block"
                                src={require("../assets/images/banner.jpg")}
                                alt="First slide"
                            />
                            <img
                                class="w-100 d-block d-md-none"
                                src={require("../assets/images/mobile-banner.jpg")}
                                alt="First slide"
                            />
                        </div>
                    </div>

                    <a
                        class="carousel-control-prev"
                        href="#carouselHome"
                        role="button"
                        data-slide="prev"
                    >
                        <span
                            class="carousel-control-prev-icon"
                            aria-hidden="true"
                        ></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a
                        class="carousel-control-next"
                        href="#carouselHome"
                        role="button"
                        data-slide="next"
                    >
                        <span
                            class="carousel-control-next-icon"
                            aria-hidden="true"
                        ></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>

            </div>
        </section>

    )
}
export default Banner;