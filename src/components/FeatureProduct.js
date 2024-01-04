import React, { useEffect, useState } from 'react';
import { getApiProduct } from '../apis';
import ProductCard from './ProductCard';

const FeatureProduct = () => {
    const [products, setProducts] = useState([]);
    const fetchProducts = async () => {
        const response = await getApiProduct({ limit: 9 });
        if (response.status === 'OK') {
            setProducts(response.data);
        }
    };
    useEffect(() => {
        fetchProducts();
    }, []);
    return (
        <div className="w-full">
            <h3 className="text-[20px] font-semibold py-[15px] border-b-2 border-main">FEATURE PRODUCT</h3>
            <div className="flex flex-wrap mt-[15px] mx-[-10px]">
                {products.map((el) => {
                    return (
                        <ProductCard
                            key={el._id}
                            image={el.thumb}
                            name={el.name}
                            totalRatings={el.totalRatings}
                            price={el.price}
                        />
                    );
                })}
            </div>
            <div className="flex justify-between">
                <img
                    className="w-[50%] object-contain"
                    src="https://digital-world-2.myshopify.com/cdn/shop/files/banner1-bottom-home2_b96bc752-67d4-45a5-ac32-49dc691b1958_600x.jpg?v=1613166661"
                />
                <div className="flex flex-col justify-between w-[24%]">
                    <img src="https://digital-world-2.myshopify.com/cdn/shop/files/banner2-bottom-home2_400x.jpg?v=1613166661" />
                    <img src="https://digital-world-2.myshopify.com/cdn/shop/files/banner3-bottom-home2_400x.jpg?v=1613166661" />
                </div>
                <img
                    className="w-[24%] object-contain"
                    src="https://digital-world-2.myshopify.com/cdn/shop/files/banner4-bottom-home2_92e12df0-500c-4897-882a-7d061bb417fd_400x.jpg?v=1613166661"
                />
            </div>
        </div>
    );
};

export default FeatureProduct;
