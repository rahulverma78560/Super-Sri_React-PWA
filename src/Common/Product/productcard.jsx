import React from 'react'
import styless from './productcard.module.css'
import proImg from '../../images/pAf-3.webp'
import proImg2 from '../../images/pa-2.webp'
import proImg3 from '../../images/pAb-5.webp'
import proImg4 from '../../images/pAf-1.webp'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Productcard = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        
        centerPadding: "60px",
        autoplaySpeed: 2500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                  
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    
                },
            },
        ],

    };
    return (
        <>
            <div className={styless.pro_container}>



                <div className={styless.card_content}>
                    <h2>Catogary 1</h2>

                    <Slider {...settings}>
                        <div className={styless.product_box}>
                            <div className={styless.pro_img}>
                                <img src={proImg} />
                            </div>
                            <h3>Product Nmae</h3>
                            <h4>₹ 50,000/-</h4>
                            <p><del>60,000</del> <span>60% off</span></p>

                        </div>
                        <div className={styless.product_box}>
                            <div className={styless.pro_img}>
                                <img src={proImg2} />
                            </div>
                            <h3>Product Nmae</h3>
                            <h4>₹ 50,000/-</h4>
                            <p><del>60,000</del> <span>60% off</span></p>

                        </div>
                        <div className={styless.product_box}>
                            <div className={styless.pro_img}>
                                <img src={proImg3} />
                            </div>
                            <h3>Product Nmae</h3>
                            <h4>₹ 50,000/-</h4>
                            <p><del>60,000</del> <span>60% off</span></p>

                        </div>
                        <div className={styless.product_box}>
                            <div className={styless.pro_img}>
                                <img src={proImg4} />
                            </div>
                            <h3>Product Nmae</h3>
                            <h4>₹ 50,000/-</h4>
                            <p><del>60,000</del> <span>60% off</span></p>

                        </div>
                        <div className={styless.product_box}>
                            <div className={styless.pro_img}>
                                <img src={proImg2} />
                            </div>
                            <h3>Product Nmae</h3>
                            <h4>₹ 50,000/-</h4>
                            <p><del>60,000</del> <span>60% off</span></p>

                        </div>
                    </Slider>
                </div>



                <div className={styless.card_content}>
                    <h2>Catogary 2</h2>
                    <Slider {...settings}>
                        <div className={styless.product_box}>
                            <div className={styless.pro_img}>
                                <img src={proImg} />
                            </div>
                            <h3>Product Nmae</h3>
                            <h4>₹ 50,000/-</h4>
                            <p><del>60,000</del> <span>60% off</span></p>

                        </div>
                        <div className={styless.product_box}>
                            <div className={styless.pro_img}>
                                <img src={proImg2} />
                            </div>
                            <h3>Product Nmae</h3>
                            <h4>₹ 50,000/-</h4>
                            <p><del>60,000</del> <span>60% off</span></p>

                        </div>
                        <div className={styless.product_box}>
                            <div className={styless.pro_img}>
                                <img src={proImg3} />
                            </div>
                            <h3>Product Nmae</h3>
                            <h4>₹ 50,000/-</h4>
                            <p><del>60,000</del> <span>60% off</span></p>

                        </div>
                        <div className={styless.product_box}>
                            <div className={styless.pro_img}>
                                <img src={proImg4} />
                            </div>
                            <h3>Product Nmae</h3>
                            <h4>₹ 50,000/-</h4>
                            <p><del>60,000</del> <span>60% off</span></p>

                        </div>
                        <div className={styless.product_box}>
                            <div className={styless.pro_img}>
                                <img src={proImg2} />
                            </div>
                            <h3>Product Nmae</h3>
                            <h4>₹ 50,000/-</h4>
                            <p><del>60,000</del> <span>60% off</span></p>

                        </div>
                    </Slider>
                </div>



                <div className={styless.card_content}>
                    <h2>Catogary 3</h2>
                    <Slider {...settings}>
                        <div className={styless.product_box}>
                            <div className={styless.pro_img}>
                                <img src={proImg} />
                            </div>
                            <h3>Product Nmae</h3>
                            <h4>₹ 50,000/-</h4>
                            <p><del>60,000</del> <span>60% off</span></p>

                        </div>
                        <div className={styless.product_box}>
                            <div className={styless.pro_img}>
                                <img src={proImg2} />
                            </div>
                            <h3>Product Nmae</h3>
                            <h4>₹ 50,000/-</h4>
                            <p><del>60,000</del> <span>60% off</span></p>

                        </div>
                        <div className={styless.product_box}>
                            <div className={styless.pro_img}>
                                <img src={proImg3} />
                            </div>
                            <h3>Product Nmae</h3>
                            <h4>₹ 50,000/-</h4>
                            <p><del>60,000</del> <span>60% off</span></p>

                        </div>
                        <div className={styless.product_box}>
                            <div className={styless.pro_img}>
                                <img src={proImg4} />
                            </div>
                            <h3>Product Nmae</h3>
                            <h4>₹ 50,000/-</h4>
                            <p><del>60,000</del> <span>60% off</span></p>

                        </div>
                        <div className={styless.product_box}>
                            <div className={styless.pro_img}>
                                <img src={proImg2} />
                            </div>
                            <h3>Product Nmae</h3>
                            <h4>₹ 50,000/-</h4>
                            <p><del>60,000</del> <span>60% off</span></p>

                        </div>
                    </Slider>
                </div>

            </div>


        </>
    )
}

