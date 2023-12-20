import React, { useEffect, useState, memo } from 'react';
import icons from '../utils/icons';
import { getApiProduct } from '../apis/product';
import { formatPrice, renderStarFromNumber } from '../utils/helpers';
import { CountDown } from '../components';

const { FaStar, HiMenu } = icons;
let idInterval;

const DealDaily = () => {
    const [dealDaily, setDealDaily] = useState('');
    const [hours, setHours] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);
    const [expireTime, setExpireTime] = useState(false);

    const fetchDealDaily = async () => {
        const response = await getApiProduct({ limit: 1, page: Math.round(Math.random() * 10), totalRatings: 5 });
        if (response.status === 'OK') {
            setDealDaily(response.data[0]);
            setHours(23);
            setMinute(59);
            setSecond(59);
        }
    };

    // useEffect(() => {
    //     fetchDealDaily();
    // }, []);

    useEffect(() => {
        if (expireTime) {
            clearInterval(idInterval);
            fetchDealDaily();
        }
    }, [expireTime]);

    useEffect(() => {
        idInterval = setInterval(() => {
            if (second > 0) {
                setSecond((pre) => pre - 1);
            } else {
                if (minute > 0) {
                    setMinute((pre) => pre - 1);
                    setSecond(60);
                } else {
                    if (hours > 0) {
                        setHours((pre) => pre - 1);
                        setMinute(60);
                        setSecond(60);
                    } else {
                        setExpireTime(!expireTime);
                    }
                }
            }
        }, 1000);
        return () => {
            clearInterval(idInterval);
        };
    }, [second, minute, hours, expireTime]);
    return (
        <div className="border w-full flex-auto">
            <div className="flex items-center justify-between p-4">
                <span className="flex-1 flex justify-center">
                    <FaStar size={20} color="#dd1111" />
                </span>
                <span className="flex-8 font-semibold text-[20px] text-center text-gray-700">Deal Daily</span>
                <span className="flex-1 flex justify-center"></span>
            </div>
            <div className="w-full flex flex-col items-center pt-8 gap-2 px-4">
                <img
                    src={
                        dealDaily?.thumb || 'https://nayemdevs.com/wp-content/uploads/2020/03/default-product-image.png'
                    }
                    alt=""
                    className="w-full object-contain"
                />
                <span className="line-clamp-1 text-center   ">{dealDaily?.name}</span>
                <span className="flex h-4">{renderStarFromNumber(dealDaily?.totalRatings, 20)}</span>
                <span>{`${formatPrice(dealDaily?.price)} VND`}</span>
            </div>
            <div className="pt-4 mt-8">
                <div className="flex justify-center items-center gap-2 mb-4">
                    <CountDown unit={'Hours'} number={hours} />
                    <CountDown unit={'Minutes'} number={minute} />
                    <CountDown unit={'Seconds'} number={second} />
                </div>
                <button
                    type="button"
                    className="flex gap-2 items-center justify-center w-full py-2 bg-main hover:bg-gray-800 text-white font-medium"
                >
                    <HiMenu />
                    <span>Option</span>
                </button>
            </div>
        </div>
    );
};

export default memo(DealDaily);
