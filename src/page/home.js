import React from 'react'
import Banner from '../components/Banner'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Slide from '../components/Slide'


const HomePage = (props) => {
    // console.log(props)
    return (
        <div>
            <Slide />
            <Banner />
            <div class="container">
                <div class="tab-content">
                    <div className="row">
                        {props.products.map((product, index) => {
                            return <div className="col-3">
                                <div className="product-item">
                                    <div className="product-item-inner">
                                        <div className="product-img-wrap">
                                            <img src={`http://localhost:4000/api/product/photo/${product._id}`} alt={product.name} />
                                        </div>
                                        <div className="product-button">
                                            <a href="#" className="js_tooltip" data-mode="top" data-tip="Add To Cart"><i className="fa fa-shopping-bag" /></a>
                                            <a href="/#/products/${product._id}" className="js_tooltip" data-mode="top" data-tip="Quick View"><i className="fa fa-eye" /></a>
                                        </div>
                                    </div>
                                    <div className="product-detail">
                                        <a className="tag" href="#" />
                                        <p className="product-title"><a href={`/product/${product._id}`}>{product.name}</a></p>
                                        <div className="product-rating">
                                            <div className="star-rating" itemProp="reviewRating" itemScope itemType="http://schema.org/Rating" title="Rated 4 out of 5">
                                                <span style={{ width: '60%' }} />
                                            </div>
                                            <a href="#" className="product-rating-count"><span className="count">3</span> Reviews</a>
                                        </div>
                                        <p className="product-description">
                                            When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic remaining essentially unchanged.
      </p>
                                        <h5 className="item-price">{product.price} </h5>
                                    </div>
                                </div>
                            </div>

                        })}
                    </div>
                </div>
            </div>
            <Categories />
        </div>
    )
}

export default HomePage
