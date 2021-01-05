import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Redeem = () => {
    return (
        <section class="row howTo pb-3">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3 class="h4 text-uppercase fw-700 text-muted"><span>How to Redeem</span></h3>
                    </div>
                    <div class="col-12">
                        <OwlCarousel class="how-to-Redeem-carousel owl-carousel stepsBox fs-12">
                            <div class="item m-1">
                                <figure>
                                    <img src={require("../assets/images/step_1.png")} />
                                    <figcaption>
                                        <p>Use the outlet locator to locate the nearest outlet that accepts this Gift Voucher.</p>
                                    </figcaption>
                                </figure>
                            </div>
                            <div class="item m-1">
                                <figure>
                                    <img src={require("../assets/images/step_2.png")} />
                                    <figcaption>
                                        <p>Select your choice of product.</p>
                                    </figcaption>
                                </figure>
                            </div>
                            <div class="item m-1">
                                <figure>
                                    <img src={require("../assets/images/step_3.png")} />
                                    <figcaption>
                                        <p>Share your Gift Voucher with the cashier at the time of billing & pay the remaining amount by cash or card if required.</p>
                                    </figcaption>
                                </figure>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Redeem;