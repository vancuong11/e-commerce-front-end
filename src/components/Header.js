import React from 'react';
import logo from '../assets/logo.png';
import icons from '../utils/icons';
import { Link } from 'react-router-dom';
import path from '../utils/path';

const Header = () => {
    const { RiPhoneFill, MdEmail, FaCartArrowDown, FaUserCircle } = icons;
    return (
        <>
            <div className="w-main h-[110px] py-[35px] flex justify-between">
                <Link to={`${path.HOME}`}>
                    <img className="w-[234px] object-contain " src={logo} alt="Logo" />
                </Link>

                <div className="flex text-[13px]">
                    <div className="flex flex-col items-center px-5">
                        <span className="flex gap-4 items-center">
                            <RiPhoneFill color="red" />
                            <span className="font-semibold">(+1800) 000 8808</span>
                        </span>
                        <span>Mon-Sat 9:00AM - 8:00PM</span>
                    </div>
                    <div className="flex flex-col items-center border-l px-5">
                        <span className="flex gap-4 items-center">
                            <MdEmail color="red" />
                            <span className="font-semibold">SUPPORT@TADATHEMES.COM</span>
                        </span>
                        <span>Online Support 24/7</span>
                    </div>
                    <div className="flex gap-2 items-center justify-center px-5 border-l">
                        <FaCartArrowDown color="red" />
                        <span>0 item</span>
                    </div>
                    <div className="flex justify-center items-center px-5 border-l">
                        <FaUserCircle />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
