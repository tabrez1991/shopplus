import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const Discount = () => {
    return (
        <section class="row DiscountsOffersRecent">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-4 py-3 py-md-4">
                        <h3 class="fs-16 fw-400 border-bottom pb-2 text-uppercase">Best Discounts</h3>
                        <OwlCarousel className="Discounts-owl-carousel owl-carousel owl-loaded owl-drag" loop={true}
                            nav={false}
                            items={2}
                            dots={false}
                            margin={15}
                            autoplay={true}
                            smartSpeed={1000}
                            autoplayTimeout={5000}>
                            <div class="item"><div class="border"><img src={require("../assets/images/logos/1.png")} /></div></div>
                            <div class="item"><div class="border"><img src={require("../assets/images/logos/2.png")} /></div></div>
                            <div class="item"><div class="border"><img src={require("../assets/images/logos/3.png")} /></div></div>
                            <div class="item"><div class="border"><img src={require("../assets/images/logos/4.png")} /></div></div>
                            <div class="item"><div class="border"><img src={require("../assets/images/logos/5.png")} /></div></div>
                            <div class="item"><div class="border"><img src={require("../assets/images/logos/6.png")} /></div></div>
                            <div class="item"><div class="border"><img src={require("../assets/images/logos/7.png")} /></div></div>
                            <div class="item"><div class="border"><img src={require("../assets/images/logos/8.png")} /></div></div>
                        </OwlCarousel>
                    </div>

                    <div class="col-12 col-md-4 py-3 py-md-4">
                        <h3 class="fs-16 fw-400 border-bottom pb-2 text-uppercase">Best Offers</h3>
                        <OwlCarousel className="Offers-owl-carousel owl-carousel owl-loaded owl-drag" loop={true}
                            nav={false}
                            items={2}
                            dots={false}
                            margin={15}
                            autoplay={true}
                            smartSpeed={1000}
                            autoplayTimeout={4900}>
                            <div class="item"><div class="border"><img src={require("../assets/images/logos/9.png")} /></div></div>
                            <div class="item"><div class="border"><img src={require("../assets/images/logos/10.png")} /></div></div>
                            <div class="item"><div class="border"><img src={require("../assets/images/logos/1.png")} /></div></div>
                            <div class="item"><div class="border"><img src={require("../assets/images/logos/2.png")} /></div></div>
                            <div class="item"><div class="border"><img src={require("../assets/images/logos/3.png")} /></div></div>
                            <div class="item"><div class="border"><img src={require("../assets/images/logos/4.png")} /></div></div>
                            <div class="item"><div class="border"><img src={require("../assets/images/logos/5.png")} /></div></div>
                            <div class="item"><div class="border"><img src={require("../assets/images/logos/6.png")} /></div></div>
                        </OwlCarousel>
                    </div>

                    <div class="col-12 col-md-4 py-3 py-md-4">
                        <h3 class="fs-16 fw-400 border-bottom pb-2 text-uppercase">YOUR FAVOURITE</h3>
                        <OwlCarousel className="Recent-owl-carousel owl-carousel owl-loaded owl-drag" loop={true}
                            nav={false}
                            items={2}
                            dots={false}
                            margin={15}
                            autoplay={true}
                            smartSpeed={1000}
                            autoplayTimeout={4800}>
                            <div class="item"><div class="border"><img src={require("../assets/images/logos/7.png")} /></div></div>
                            <div class="item"><div class="border"><img src={require("../assets/images/logos/8.png")} /></div></div>
                            <div class="item"><div class="border"><img src={require("../assets/images/logos/9.png")} /></div></div>
                            <div class="item"><div class="border"><img src={require("../assets/images/logos/10.png")} /></div></div>
                            <div class="item"><div class="border"><img src={require("../assets/images/logos/1.png")} /></div></div>
                            <div class="item"><div class="border"><img src={require("../assets/images/logos/2.png")} /></div></div>
                            <div class="item"><div class="border"><img src={require("../assets/images/logos/3.png")} /></div></div>
                            <div class="item"><div class="border"><img src={require("../assets/images/logos/4.png")} /></div></div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Discount;