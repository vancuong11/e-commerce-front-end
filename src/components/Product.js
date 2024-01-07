import React, { useState } from 'react';
import { formatPrice } from '../utils/helpers';
import sale from '../assets/new.png';
import trending from '../assets/trending.png';
import { renderStarFromNumber } from '../utils/helpers';
import { SelectOptions } from '../components';
import icons from '../utils/icons';
import { Link } from 'react-router-dom';
import path from '../utils/path';

const { FaEye, HiMenu, FaHeart } = icons;

const Product = ({ productData, isNew }) => {
    const [isShowOption, setIsShowOption] = useState(false);
    return (
        <>
            <div className="w-full text-base px-[10px]">
                <Link
                    to={`/${path.DETAIL_PRODUCT}/${productData?._id}/${productData?.name}`}
                    className="border w-full p-[15px] flex flex-col items-center"
                    onMouseEnter={(e) => {
                        e.stopPropagation();
                        setIsShowOption(true);
                    }}
                    onMouseLeave={(e) => {
                        e.stopPropagation();

                        setIsShowOption(false);
                    }}
                >
                    <div className="relative">
                        {isShowOption && (
                            <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 animate-slide-top">
                                <SelectOptions icon={<FaEye />} />
                                <SelectOptions icon={<HiMenu />} />
                                <SelectOptions icon={<FaHeart />} />
                            </div>
                        )}
                        <img
                            src={
                                productData?.thumb ||
                                'https://nayemdevs.com/wp-content/uploads/2020/03/default-product-image.png'
                            }
                            alt=""
                            className="w-[274px] h-[274px] object-cover"
                        />
                        <img
                            src={isNew ? sale : trending}
                            alt=""
                            className="absolute top-[-15px] right-[-31px] w-[100px] h-[35px] object-cover"
                        />
                    </div>
                    <div className="flex flex-col gap-1 mt-[15px] items-start w-full">
                        <span className="flex h-4">{renderStarFromNumber(productData?.totalRatings)}</span>
                        <span className="line-clamp-1">{productData?.name}</span>
                        <span>{`${formatPrice(productData?.price)} VND`}</span>
                    </div>
                </Link>
            </div>
        </>
    );
};

export default Product;
