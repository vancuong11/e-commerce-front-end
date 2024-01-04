import React, { useEffect, useState } from 'react';
import { getApiProduct } from '../apis/product';
import { Product } from '../components';
import Slider from 'react-slick';

const tabs = [
    { id: 1, name: 'best sellers' },
    { id: 2, name: 'new arrivals' },
];

const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
};

const BestSeller = () => {
    const [bestSellers, setBestSellers] = useState([]);
    const [newProducts, setNewProducts] = useState([]);
    const [activeTab, setActiveTab] = useState(1);
    const [product, setProduct] = useState([]);

    const fetchProducts = async () => {
        const response = await Promise.all([getApiProduct({ sort: '-sold' }), getApiProduct({ sort: '-createdAt' })]);
        if (response[0].status === 'OK') {
            setBestSellers(response[0].data);
        }
        if (response[1].status === 'OK') {
            setNewProducts(response[1].data);
        }
        setProduct(response[0].data);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    useEffect(() => {
        if (activeTab === 1) {
            setProduct(bestSellers);
        }
        if (activeTab === 2) {
            setProduct(newProducts);
        }
    }, [activeTab]);
    return (
        <>
            <div>
                <div className="flex text-[20px]  ml-[-32px]">
                    {tabs.map((el) => {
                        return (
                            <span
                                key={el.id}
                                className={`font-semibold uppercase px-8 border-r cursor-pointer text-gray-400 ${
                                    activeTab === el.id ? 'text-gray-900' : ''
                                } `}
                                onClick={() => setActiveTab(el.id)}
                            >
                                {el.name}
                            </span>
                        );
                    })}
                </div>
                <div className="mt-4 mx-[-10px] pt-4 border-t-2 border-main">
                    <Slider {...settings}>
                        {product.map((el) => {
                            return <Product key={el._id} productData={el} isNew={activeTab === 1 ? false : true} />;
                        })}
                    </Slider>
                </div>
                <div className="w-full flex gap-4 mt-4">
                    <img
                        src="https://digital-world-2.myshopify.com/cdn/shop/files/banner1-home2_2000x_crop_center.png?v=1613166657"
                        alt="Banner"
                        className="flex-1 object-contain"
                    />
                    <img
                        src="https://digital-world-2.myshopify.com/cdn/shop/files/banner2-home2_2000x_crop_center.png?v=1613166657"
                        alt="Banner"
                        className="flex-1 object-contain"
                    />
                </div>
            </div>
        </>
    );
};

export default BestSeller;
