import React from 'react'

const ListProductPage = (props) => {
    console.log(props)
    return (
        <div>
            {/* Page Content Wraper */}
            <div className="page-content-wraper">
              
                {/* Page Content */}
                <section className="content-page">
                    <div className="container">
                        <div className="row">
                            {/* Product Content */}
                            <div className="col-md-9 push-md-3">
                                {/* Title */}
                                <div className="list-page-title">
                                    <h2 className>Sản Phẩm</h2>
                                </div>
                                {/* End Title */}
                                {/* Product Filter */}
                          
                                {/* End Product Filter */}
                                {/* Product filters Toggle*/}
                                <div className="container product-filter-dropdown toggle-content" id="filter-slide-toggle">
                                    <div className="row col mlr-0">
                                        {/* Shop Categories */}
                                        <div className="widget-sidebar col-sm-12 col-md-6 col-lg-3">
                                            <h6 className="widget-title">Categories</h6>
                                            <ul className="widget-content widget-product-categories jq-accordian">
                                                <li>
                                                    <a href="#">Accessories</a>
                                                </li>
                                                <li>
                                                    <a className="javascript:void(0)">Clothings<span className="jq-accordionIcon" /></a>
                                                    <ul className="children" style={{ display: 'none' }}>
                                                        <li><a href="#">All</a></li>
                                                        <li><a href="#">Coats &amp; Jackets</a></li>
                                                        <li><a href="#">Shirts</a></li>
                                                        <li><a href="#">Sportswear</a></li>
                                                        <li><a href="#">Swimwear</a></li>
                                                        <li><a href="#">Trousers</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)">Man<span className="jq-accordionIcon" /></a>
                                                    <ul style={{ display: 'none' }}>
                                                        <li><a href="#">All</a></li>
                                                        <li><a href="#">Coats &amp; Jackets</a></li>
                                                        <li><a href="#">Shirts</a></li>
                                                        <li><a href="#">Sportswear</a></li>
                                                        <li><a href="#">Swimwear</a></li>
                                                        <li><a href="#">Trousers</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">Jacket</a></li>
                                                <li><a href="#">New arrivals</a></li>
                                                <li><a href="#">Shoes</a></li>
                                                <li><a href="sdsd.html">Socks</a></li>
                                            </ul>
                                        </div>
                                        {/* End Shop Categories */}
                                        {/* Filter Price */}
                                        <div className="widget-sidebar widget-filter-price col-sm-12 col-md-6 col-lg-3">
                                            <h6 className="widget-title">Select Price</h6>
                                            <ul className="widget-content">
                                                <li>
                                                    <a href="#">All</a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="amount"><span className="currencySymbol">$</span>0.00</span>
                                                        -
                                                        <span className="amount"><span className="currencySymbol">$</span>500.00</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="amount"><span className="currencySymbol">$</span>500.00</span>
                                                        -
                                                        <span className="amount"><span className="currencySymbol">$</span>1100.00</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="amount"><span className="currencySymbol">$</span>1100.00</span>
                                                        -
                                                        <span className="amount"><span className="currencySymbol">$</span>1600.00</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="amount"><span className="currencySymbol">$</span>1600.00</span>
                                                        -
                                                        <span className="amount"><span className="currencySymbol">$</span>2100.00</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="amount"><span className="currencySymbol">$</span>2100.00</span>
                                                        -
                                                        <span className="amount"><span className="currencySymbol">$</span>2600.00</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span className="amount"><span className="currencySymbol">$</span>2600.00</span>
                                                        +
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* End Filter Price */}
                                        {/* Filter Color */}
                                        <div className="widget-sidebar widget-filter-color col-sm-12 col-md-6 col-lg-3">
                                            <h6 className="widget-title">Select Color</h6>
                                            <ul className="widget-content">
                                                <li>
                                                    <a href="#">
                                                        <div className="filter-color-switcher"><span style={{ backgroundColor: '#ff4040' }} /></div>
                                                        Red</a>
                                                    <span className="color-count">(9)</span>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <div className="filter-color-switcher"><span style={{ backgroundColor: '#000' }} /></div>
                                                        Black</a>
                                                    <span className="color-count">(112)</span>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <div className="filter-color-switcher"><span style={{ backgroundColor: '#ff9000' }} /></div>
                                                        Orange</a>
                                                    <span className="color-count">(56)</span>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <div className="filter-color-switcher"><span style={{ backgroundColor: '#ffcf3d' }} /></div>
                                                        Yellow</a>
                                                    <span className="color-count">(24)</span>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <div className="filter-color-switcher"><span style={{ backgroundColor: '#55b0da' }} /></div>
                                                        Blue</a>
                                                    <span className="color-count">(18)</span>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <div className="filter-color-switcher"><span style={{ backgroundColor: '#9ada55' }} /></div>
                                                        Green</a>
                                                    <span className="color-count">(72)</span>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <div className="filter-color-switcher"><span style={{ backgroundColor: '#7a463b' }} /></div>
                                                        Brown</a>
                                                    <span className="color-count">(5)</span>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* End Filter Color */}
                                        {/* Filter Size */}
                                        <div className="widget-sidebar widget-filter-size col-sm-12 col-md-6 col-lg-3">
                                            <h6 className="widget-title">Select Size</h6>
                                            <ul className="widget-content ">
                                                <li>
                                                    <a href="#">L</a>
                                                    <span>(24)</span>
                                                </li>
                                                <li>
                                                    <a href="#">M</a>
                                                    <span>(34)</span>
                                                </li>
                                                <li>
                                                    <a href="#">S</a>
                                                    <span>(45)</span>
                                                </li>
                                                <li>
                                                    <a href="#">X</a>
                                                    <span>(102)</span>
                                                </li>
                                                <li>
                                                    <a href="#">XL</a>
                                                    <span>(60)</span>
                                                </li>
                                                <li>
                                                    <a href="#">XS</a>
                                                    <span>(78)</span>
                                                </li>
                                                <li>
                                                    <a href="#">XXL</a>
                                                    <span>(35)</span>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* End Filter Size */}
                                    </div>
                                </div>
                                {/* End Product filters Toggle*/}
                                {/* Product Grid */}
                                <div className="row product-list-item">
                                    {/* item.1 */}
                                    {props.products.map((product, index) => { 
                                   return <div className="product-item-element col-sm-6 col-md-6 col-lg-4">
                                        {/*Product Item*/}
                                        <div className="product-item">
                                            <div className="product-item-inner">
                                                <div className="product-img-wrap">
                                                    <img src={`http://localhost:4000/api/product/photo/${product._id}`} alt />
                                                </div>
                                                <div className="product-button">
                                                    <a href="#" className="js_tooltip" data-mode="top" data-tip="Add To Cart"><i className="fa fa-shopping-bag" /></a>
                                                    <a href="#" className="js_tooltip" data-mode="top" data-tip="Add To Whishlist"><i className="fa fa-heart" /></a>
                                                    <a href="#" className="js_tooltip" data-mode="top" data-tip="Quick View"><i className="fa fa-eye" /></a>
                                                </div>
                                            </div>
                                            <div className="product-detail">
                                                <a className="tag" href="#">Men Fashion</a>
                                                <p className="product-title"><a href="product_detail.html">{product.name}</a></p>
                                                <div className="product-rating">
                                                    <div className="star-rating" itemProp="reviewRating" itemScope itemType="http://schema.org/Rating" title="Rated 4 out of 5">
                                                        <span style={{ width: '60%' }} />
                                                    </div>
                                                    <a href="#" className="product-rating-count"><span className="count">3</span> Reviews</a>
                                                </div>
                                                <p className="product-description">
                                                   {product.description}
                                                </p>
                                                <h5 className="item-price">{product.price}</h5>
                                            </div>
                                        </div>
                                        {/* End Product Item*/}
                                    </div>
                                      })}
                                </div>
                                {/* End Product Grid */}
                                <div className="pagination-wraper">
                                    <p>Showing 1 - 15 of 120 results</p>
                                    <div className="pagination">
                                        <ul className="pagination-numbers">
                                            {/*<li>
                                      <a href="#" class="prev page-number"><i class="fa fa-angle-double-left"></i></a>
                                  </li>*/}
                                            <li>
                                                <a href="#" className="page-number current">1</a>
                                            </li>
                                            <li>
                                                <a href="#" className="page-number">2</a>
                                            </li>
                                            <li>
                                                <a href="#" className="page-number">3</a>
                                            </li>
                                            <li>
                                                <span className="page-number dots">...</span>
                                            </li>
                                            <li>
                                                <a href="#" className="page-number">29</a>
                                            </li>
                                            <li>
                                                <a href="#" className="next page-number"><i className="fa fa-angle-double-right" /></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* End Product Content */}
                            {/* Sidebar */}
                            <div className="sidebar-container col-md-3 pull-md-9">
                                {/* Categories */}
                                <div className="widget-sidebar">
                                    <h6 className="widget-title">Danh mục</h6>
                                    <ul className="widget-content widget-product-categories jq-accordian">
                                    {props.categories.map((category, index) => {
                                      return  <li>
                                            <a href="#">{category.name}</a>
                                        </li>
                                    })}
                                    </ul>
                                </div>
                                </div>
                            </div>
                            {/* End Sidebar */}
                        </div>
                  
                </section>
                {/* End Page Content */}
            </div>
            {/* End Page Content Wraper */}
        </div>

    )
}

export default ListProductPage
