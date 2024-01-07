import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Blogs, DetailsProduct, FAQ, Home, Login, Product, Public, Service } from './pages/public';
import path from './utils/path';
import { getCategories } from './store/app/asyncAction';
import { useDispatch } from 'react-redux';

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategories());
    }, []);
    return (
        <div className="min-h-screen font-main">
            <Routes>
                <Route path={path.PUBLIC} element={<Public />}>
                    <Route path={path.HOME} element={<Home />} />
                    <Route path={path.BLOGS} element={<Blogs />} />
                    <Route path={path.DETAIL_PRODUCT__PID__TITLE} element={<DetailsProduct />} />
                    <Route path={path.OUR_SERVICES} element={<Service />} />
                    <Route path={path.FAQ} element={<FAQ />} />
                    <Route path={path.PRODUCTS} element={<Product />} />
                </Route>
                <Route path={path.LOGIN} element={<Login />} />
            </Routes>
        </div>
    );
}

export default App;
