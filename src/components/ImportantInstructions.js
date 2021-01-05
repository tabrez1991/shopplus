import React from 'react'

const ImportantInstructions = () => {
    return (
        <section class="row impIns pb-3 pb-md-4">
            <div class="container">
                <div class="bg-white border">
                    <div class="row m-0 bg-white ImportantInstructions align-items-center">
                        <div class="col-md-6 col-12 py-3 py-md-4 bg-light">
                            <h3 class="fs-16 text-uppercase">Important Instructions</h3>
                            <ul class="fs-14 m-0 ImportantInstructionsList">
                                <li>Multiple Gift Vouchers <span>CAN</span> be used in one bill.</li>
                                <li>Gift Vouchers <span>CAN</span> be used during Sale.</li>
                                <li>Gift Vouchers <span>ACCEPTED</span> at all Listed Outlets.</li>
                                <li class="dont">Gift Vouchers <span>CANNOT</span> be used Online.</li>
                            </ul>
                        </div>
                        <div class="col-md-6 col-lg-5 px-md-4 px-lg-5 col-12 py-3">
                            <div class="pb-3">
                                <div class="d-flex w-100 storeFinder align-items-center">
                                    <div class="form-group w-100 m-0">
                                        <input type="text" class="form-control" name="" placeholder="Store Locator" />
                                    </div>
                                    <button type="button" class="btn rounded-0 border-bottom fs-14 py-1 sls" data-toggle="modal" data-target="#StoreLocator"><i class="fas fa-search"></i>
                                    </button>
                                </div>
                            </div>
                            <button type="button" class="btn btn-outline-secondary text-uppercase rounded-0 btn-block" data-toggle="modal" data-target="#tc">Terms &amp; Conditions</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ImportantInstructions;