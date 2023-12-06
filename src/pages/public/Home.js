import React from 'react';
import { Banner, Sidebar, BestSeller } from '../../components';

const Home = () => {
    return (
        <>
            <div className="w-main flex">
                <div className="flex flex-col gap-5 w-[20%] flex-auto ">
                    <Sidebar />
                    <span>Deal daily</span>
                </div>
                <div className="flex flex-col gap-5 pl-5 w-[80%] flex-auto ">
                    <Banner />
                    <BestSeller />
                </div>
            </div>
            <div className="h-56"></div>
        </>
    );
};

export default Home;
