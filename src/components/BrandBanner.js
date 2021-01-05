import React from 'react'

const BrandBanner = () => {
    return (
        <section class="row">
            <div class="col-12 px-0">
                <img src={require("../assets/images/brand-banner.jpg")} class="w-100 d-none d-md-block" />
                <img src={require("../assets/images/brand-mobile-banner.jpg")} class="w-100 d-block d-md-none" />
            </div>
        </section>
    )
}

export default BrandBanner;