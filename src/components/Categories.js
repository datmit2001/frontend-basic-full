import React from 'react'

const Categories = () => {
    return (
        <div>
            {/* Categories */}
            <section className>
                <div className="section-padding container-fluid bg-image text-center overlay-light90" data-background-img="img/bg/bg_5.jpg" data-bg-position-x="center center">
                    <div className="container">
                        <h2 className="page-title">Shop by Categories</h2>
                    </div>
                </div>
                <div className="container container-margin-minus-t">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="categories-box">
                                <div className="categories-image-wrap">
                                    <img src="img/categories/Categories_cupple.jpg" alt />
                                </div>
                                <div className="categories-content">
                                    <a href="#">
                                        <div className="categories-caption">
                                            <h6 className="normal">Cupple's</h6>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="categories-box">
                                <div className="categories-image-wrap">
                                    <img src="img/categories/Categories_women.jpg" alt />
                                </div>
                                <div className="categories-content">
                                    <a href="#">
                                        <div className="categories-caption">
                                            <h6 className="normal">Women</h6>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="categories-box">
                                <div className="categories-image-wrap">
                                    <img src="img/categories/Categories_man.jpg" alt />
                                </div>
                                <div className="categories-content">
                                    <a href="#">
                                        <div className="categories-caption">
                                            <h6 className="normal">Man</h6>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Categories */}
        </div>

    )
}

export default Categories
