import React from 'react'

const Banner = () => {
    return (
        <div>
            {/* Promo Box */}
            <section id="promo" className="section-padding-sm promo ">
                <div className="container">
                    <div className="promo-box row">
                        <div className="col-md-4 mtb-sm-30 promo-item">
                            <div className="icon"><i className="fa fa-truck" aria-hidden="true" /></div>
                            <div className="info">
                                <a href="#">
                                    <h6 className="normal">Delivery Free</h6>
                                </a>
                                <p>On Order Over $150</p>
                            </div>
                        </div>
                        <div className="col-md-4 mtb-sm-30 promo-item">
                            <div className="icon"><i className="fa fa-repeat" aria-hidden="true" /></div>
                            <div className="info">
                                <a href="#">
                                    <h6 className="normal">Exchange or Return</h6>
                                </a>
                                <p>30 Day Money Back Guarantee</p>
                            </div>
                        </div>
                        <div className="col-md-4 mtb-sm-30 promo-item">
                            <div className="icon"><i className="fa fa-headphones" aria-hidden="true" /></div>
                            <div className="info">
                                <a href="#">
                                    <h6 className="normal">Support</h6>
                                </a>
                                <p>24/7 Online Support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Promo Box */}
            {/* Promo Banner */}
            <section id="promo-banner" className="section-padding-b">
                <div className="container">
                    <div className="row">
                        {/*Left Side*/}
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-12 mb-30">
                                    {/* banner No.1 */}
                                    <div className="promo-banner-wrap">
                                        <a href="#" className="promo-image-wrap">
                                            <img src="img/banner/promo-banner4.jpg" alt="Accesories" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-12 mb-sm-30">
                                    {/* banner No.2 */}
                                    <div className="promo-banner-wrap">
                                        <a href="#" className="promo-image-wrap">
                                            <img src="img/banner/promo-banner3.jpg" alt="Accesories" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Right Side*/}
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-12 mb-30">
                                    {/* banner No.3 */}
                                    <div className="promo-banner-wrap">
                                        <a href="#" className="promo-image-wrap">
                                            <img src="img/banner/promo-banner2.jpg" alt="Accesories" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-12 mb-sm-30">
                                    {/* banner No.4 */}
                                    <div className="promo-banner-wrap">
                                        <a href="#" className="promo-image-wrap">
                                            <img src="img/banner/promo-banner5.jpg" alt="Accesories" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Promo Banner */}
        </div>

    )
}

export default Banner
