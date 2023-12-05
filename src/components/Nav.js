import React from 'react';
import { navigation } from '../utils/contants';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="w-main h-[48px] py-2 text-sm flex items-center border-y mb-5">
            {navigation.map((el) => {
                return (
                    <NavLink
                        to={el.path}
                        key={el.id}
                        className={({ isActive }) =>
                            isActive ? 'pr-12 hover:text-main text-main' : 'pr-12 hover:text-main'
                        }
                    >
                        {el.value}
                    </NavLink>
                );
            })}
        </div>
    );
};

export default Nav;
