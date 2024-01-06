import React from 'react';
import { formatPrice, renderStarFromNumber } from '../utils/helpers';

const ProductCard = ({ image, name, totalRatings, price }) => {
    return (
        <div className="w-1/3 flex flex-auto px-[10px] mb-[20px]">
            <div className="border flex w-full">
                <img src={image} alt="img" className="w-[90px] object-contain p-4" />
                <div className="flex flex-col gap-1 mt-[15px] items-start w-full">
                    <span className="line-clamp-1 capitalize text-sm">{name?.toLowerCase()}</span>
                    <span className="flex h-4">
                        {renderStarFromNumber(totalRatings, 14)?.map((el, index) => {
                            return <span key={index}>{el}</span>;
                        })}
                    </span>
                    <span>{`${formatPrice(price)} VND`}</span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
