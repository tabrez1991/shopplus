import React from 'react';
import { Link } from "react-router-dom"

export const BrandPage = () => {
    return (
        <section class="row brandPage pb-3 pb-md-4">
            <div class="col-12 px-0">
                <div class="container">
                    <div class="row">

                        <div class="col-12 col-lg-8">
                            <div class="bg-white px-3 border">
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb bg-transparent px-0 m-0 fs-14 fw-600 justify-content-end pb-md-0">
                                        <li class="breadcrumb-item text-uppercase"><Link to="/home">HOME</Link>
                                        </li>
                                        <li class="breadcrumb-item text-uppercase"><Link to="/home">Grocery &amp; Home Needs</Link>
                                        </li>
                                        <li class="breadcrumb-item text-uppercase active" aria-current="page">More</li>
                                    </ol>
                                </nav>
                                <div>
                                    <div class="pb-3">
                                        <img src={require("../assets/images/more.png")} />
                                    </div>
                                    <h2 class="h6">Buy/Redeem MORE Gift Vouchers &amp; Gift Card</h2>
                                    <p class="fs-14 m-0">Owned by More Retail Limited, More stores are hypermarkets for every home need. Customers find groceries, home essentials, cosmetics, fashion essentials, etc under one roof. Choose More Gift Cards and Gift Vouchers for cashless shopping.</p>
                                </div>
                                <div class="productPageCoupon p-3 my-3">
                                    <div class="row">
                                        <div class="col-12">
                                            <label class="fs-14 fw-700">Your Promo Code</label>
                                            <div class="row align-items-end pb-1 promoFild">
                                                <div class="col-7 col-md-9 pr-0">
                                                    <input type="text" class="form-control text-success" name="" value="SBNPZ" /> <a href="#" class="editPromo" title="Edit Promocode"><i class="far fa-edit"></i></a>
                                                </div>
                                                <div class="col-5 col-md-3 pl-0">
                                                    <button class="btn btn-outline-success btn-block fs-14 rounded-0">APPLIED</button>
                                                </div>
                                            </div>
                                            <p class="fs-14 m-0 pb-1"><i class="fas fa-check-circle text-success"></i> Promo applied successfully.</p>
                                            <p class="fs-14 m-0 pb-1"><i class="fas fa-times-circle text-danger"></i> Invalid Promo Code.</p>
                                            <p class="fs-14 m-0 pb-1">You got a discount of ₹ 515</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="productPageCoupon OrangeBox px-3 py-1 my-3 GreenBox">
                                    <div class="row align-items-center">
                                        <div class="col-auto border-right">
                                            <div class="custom-control custom-radio">
                                                <input type="radio" id="SBNPZ" name="customRadio" class="custom-control-input" checked="" />
                                                <label class="custom-control-label fs-16 fw-600" for="SBNPZ">SBNPZ</label>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <p class="m-0 fs-14">Save ₹ 500 (₹250 instant OFF + ₹250 cashback in PayZapp wallet on applying the code on PayZapp payment page).
                          <br /> <a href="#" class="text-danger">Terms &amp; Conditions</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="productPageCoupon OrangeBox px-3 py-1 my-3">
                                    <div class="row align-items-center">
                                        <div class="col-auto border-right">
                                            <div class="custom-control custom-radio">
                                                <input type="radio" id="SBAMZ" name="customRadio" class="custom-control-input" />
                                                <label class="custom-control-label fs-16 fw-600" for="SBAMZ">SBAMZ</label>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <p class="m-0 fs-14">Save ₹ 500 (₹250 instant OFF + ₹250 cashback in PayZapp wallet on applying the code on PayZapp payment page).
                          <br /> <a href="#" class="text-danger">Terms &amp; Conditions</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="pt-2">
                                    <h5 class="text-uppercase text-muted pb-2">Select Voucher Value (₹)</h5>
                                    <table class="table cart-table brand-2 m-0 fs-14">
                                        <thead>
                                            <tr class="thead">
                                                <th class="description">Value(₹)</th>
                                                <th class="pa hideOnMobile">Offer</th>
                                                <th class="quantity">Qty</th>
                                                <th class="price">Total(₹)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="description"><span>100</span>
                                                </td>
                                                <td class="pa hideOnMobile">
                                                    <div>
                                                        <p>Free Promocode</p>
                                                    </div>
                                                </td>
                                                <td class="qty-td">
                                                    <div class="define-quantity">
                                                        <input type="text" name="quantity" value="1" class="qty" /> <span class="inc button">+</span><span class="dec button">-</span>
                                                    </div>
                                                    <button type="button" class="btn btn-outline-danger fs-14 rounded-0 px-3 py-0">ADD</button>
                                                </td>
                                                <td class="description">
                                                    <div><span>90</span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="description"><span>250</span>
                                                </td>
                                                <td class="pa hideOnMobile">
                                                    <div>
                                                        <p>Free ₹100 Bata Gift Voucher</p>
                                                    </div>
                                                </td>
                                                <td class="qty-td">
                                                    <div class="define-quantity">
                                                        <input type="text" name="quantity" value="1" class="qty" /> <span class="inc button">+</span><span class="dec button">-</span>
                                                    </div>
                                                    <button type="button" class="btn btn-outline-danger fs-14 rounded-0 px-3 py-0">ADD</button>
                                                </td>
                                                <td class="description">
                                                    <div><span>225</span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="3" class="pa hideOnDesktop border-0 mobile-offer">
                                                    <div>
                                                        <p><span class="text-secondary">Offes:</span> Free ₹100 Bata Gift Voucher</p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="description"><span>500</span>
                                                </td>
                                                <td class="pa hideOnMobile">
                                                    <div>
                                                        <p>10% Off</p>
                                                    </div>
                                                </td>
                                                <td class="qty-td">
                                                    <div class="define-quantity">
                                                        <input type="text" name="quantity" value="1" class="qty" /> <span class="inc button">+</span><span class="dec button">-</span>
                                                    </div>
                                                    <button type="button" class="btn btn-outline-danger fs-14 rounded-0 px-3 py-0">ADD</button>
                                                </td>
                                                <td class="description">
                                                    <div><span>450</span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="description"><span>1000</span>
                                                </td>
                                                <td class="pa hideOnMobile">
                                                    <div>
                                                        <p>10% Off</p>
                                                    </div>
                                                </td>
                                                <td class="qty-td">
                                                    <div class="define-quantity">
                                                        <input type="text" name="quantity" value="1" class="qty" /> <span class="inc button">+</span><span class="dec button">-</span>
                                                    </div>
                                                    <button type="button" class="btn btn-outline-danger fs-14 rounded-0 px-3 py-0">ADD</button>
                                                </td>
                                                <td class="description">
                                                    <div><span>900</span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="description"><span>2000</span>
                                                </td>
                                                <td class="pa hideOnMobile">
                                                    <div>
                                                        <p>10% Off</p>
                                                    </div>
                                                </td>
                                                <td class="qty-td">
                                                    <div class="define-quantity">
                                                        <input type="text" name="quantity" value="1" class="qty" /> <span class="inc button">+</span><span class="dec button">-</span>
                                                    </div>
                                                    <button type="button" class="btn btn-outline-danger fs-14 rounded-0 px-3 py-0">ADD</button>
                                                </td>
                                                <td class="description">
                                                    <div><span>1800</span>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-lg-4 topSticky"> <a href="#" data-toggle="modal" data-target="#MobileSummaryPopup" class="MobileSummaryBtn"><span>Summary</span><span>₹ 800</span></a>
                            <div class="DesktopSummary">
                                <div class="SummaryRight shadow-none">
                                    <div class="productPageBox px-3">
                                        <div class="d-flex py-3 justify-content-between align-items-center">
                                            <h3 class="fs-16 fw-700 m-0">SUMMARY</h3>
                                        </div>
                                        <div class="repaeatBox">
                                            <div class="row py-2 border-bottom border-top">
                                                <div class="col-12 text-uppercase fw-700 pt-1 text-muted">
                                                    <div class="d-flex justify-content-between align-items-center"> <span>VERO MODA</span>
                                                        <a href="#" class="text-muted fs-12"><i class="fas fa-trash-alt m-0"></i></a>
                                                    </div>
                                                </div>
                                                <div class="col-8 py-1 fs-14">₹ 1000 <span class="text-success">(X 2)</span>
                                                </div>
                                                <div class="col-4 py-1 fs-14 text-right">₹ 2000</div>
                                            </div>
                                            <div class="row py-2 border-bottom border-dot">
                                                <div class="col-8 fs-14">Cash Savigs (10%)</div>
                                                <div class="col-4 fs-14 text-right">₹ 200</div>
                                            </div>
                                            <div class="row py-3 border-bottom border-dot">
                                                <div class="col-8 fs-14 fw-700">Sub Total</div>
                                                <div class="col-4 fs-14 text-right fw-700">₹ 1800</div>
                                            </div>
                                        </div>
                                        <div class="repaeatBox">
                                            <div class="row py-2 border-bottom border-top">
                                                <div class="col-12 text-uppercase fw-700 pt-1 text-muted">
                                                    <div class="d-flex justify-content-between align-items-center"> <span>BATA</span>
                                                        <a href="#" class="text-muted fs-12"><i class="fas fa-trash-alt m-0"></i></a>
                                                    </div>
                                                </div>
                                                <div class="col-8 py-1 fs-14">₹ 1000 <span class="text-success">(X 2)</span>
                                                </div>
                                                <div class="col-4 py-1 fs-14 text-right">₹ 2000</div>
                                            </div>
                                            <div class="row py-2 border-bottom border-dot">
                                                <div class="col-8 fs-14">Cash Savigs (10%)</div>
                                                <div class="col-4 fs-14 text-right">₹ 200</div>
                                            </div>
                                            <div class="row py-3 border-bottom border-dot">
                                                <div class="col-8 fs-14 fw-700">Sub Total</div>
                                                <div class="col-4 fs-14 text-right fw-700">₹ 1800</div>
                                            </div>
                                        </div>
                                        <div class="row m-0 py-2 bg-dark text-white rounded my-3">
                                            <div class="col-7 fs-18 fw-500">Net Payable</div>
                                            <div class="col-5 fs-18 fw-500 text-right text-nowrap">₹ 3600</div>
                                        </div>
                                    </div>
                                    <div class="productPageBox px-3 mt-3 mt-md-4">
                                        <div class="pt-3">
                                            <div class="custom-control custom-checkbox fs-14 py-2">
                                                <input type="checkbox" class="custom-control-input" id="customCheck1" checked="" />
                                                <label class="custom-control-label" for="customCheck1">I agree to the <a href="#" data-toggle="modal" data-target="#tc" class="text-danger">Terms and Conditions</a>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="py-2">
                                            <button type="button" class="btn btn-danger btn-block mb-2 fs-14" data-toggle="modal" data-target="#tcConfirmation">BUY NOW</button>
                                            <button type="button" class="btn btn-outline-danger btn-block mb-2 fs-14" data-toggle="modal" data-target="#tcConfirmation">ADD TO CART</button>
                                        </div>
                                        <div class="pb-3 fs-12">We accept Credit Card, Debit Card, Netbanking, EMIs, Wallets</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BrandPage;