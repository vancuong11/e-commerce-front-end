import React, { memo, useState } from 'react';
import Slider from 'react-slick';
import Product from './Product';

const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
};
const CustomSlider = ({ products, activeTab }) => {
    return (
        <>
            {products && (
                <Slider {...settings}>
                    {products.map((el) => {
                        return <Product key={el._id} productData={el} isNew={activeTab === 1 ? false : true} />;
                    })}
                </Slider>
            )}
        </>
    );
};

export default memo(CustomSlider);
