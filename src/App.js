import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Blogs, DetailsProduct, FAQ, Home, Login, Product, Public, ResetPassword, Service } from './pages/public';
import path from './utils/path';
import { getCategories } from './store/app/asyncAction';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategories());
    }, []);
    return (
        <>
            <div className="min-h-screen font-main">
                <Routes>
                    <Route path={path.PUBLIC} element={<Public />}>
                        <Route path={path.HOME} element={<Home />} />
                        <Route path={path.BLOGS} element={<Blogs />} />
                        <Route path={path.DETAIL_PRODUCT__PID__TITLE} element={<DetailsProduct />} />
                        <Route path={path.OUR_SERVICES} element={<Service />} />
                        <Route path={path.FAQ} element={<FAQ />} />
                        <Route path={path.PRODUCTS} element={<Product />} />
                        <Route path={path.RESET_PASSWORD} element={<ResetPassword />} />
                    </Route>
                    <Route path={path.LOGIN} element={<Login />} />
                </Routes>

                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
                {/* Same as */}
                <ToastContainer />
            </div>
        </>
    );
}

export default App;
