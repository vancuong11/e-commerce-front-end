import React, { memo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import path from '../utils/path';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrent } from '../store/user/asyncAction';
import icons from '../utils/icons';
import { logout } from '../store/user/userSlice';

const { MdLogout } = icons;

const TopHeader = () => {
    const dispatch = useDispatch();
    const { isLoggedIn, current } = useSelector((state) => state.user);
    useEffect(() => {
        if (isLoggedIn) {
            dispatch(getCurrent());
        }
    }, [isLoggedIn]);

    const handleLogout = () => {
        dispatch(logout());
    };
    return (
        <div className="h-[38px] w-full bg-main flex items-center justify-center">
            <div className="w-main flex items-center justify-between text-xs text-white">
                <span>ORDER ONLINE OR CALL US (+1800) 000 8808</span>
                {isLoggedIn ? (
                    <div className="flex gap-4 text-sm items-center">
                        <span>{`Welcome, ${current?.lastName} ${current?.firstName}`}</span>
                        <span
                            onClick={() => handleLogout()}
                            className="cursor-pointer hover:rounded-full hover:opacity-30"
                        >
                            <MdLogout size={18} />
                        </span>
                    </div>
                ) : (
                    <Link className="hover:text-gray-800" to={`${path.LOGIN}`}>
                        Sign in or Create Account
                    </Link>
                )}
            </div>
        </div>
    );
};

export default memo(TopHeader);
