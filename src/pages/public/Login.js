import React, { useCallback, useEffect, useState } from 'react';
import { InputField, Button } from '../../components';
import { apiLogin, apiRegister } from '../../apis/user';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import path from '../../utils/path';
import { register } from '../../store/user/userSlice';
import { useDispatch } from 'react-redux';

const Login = () => {
    const [payload, setPayload] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        phone: '',
    });
    const restPayload = () => {
        setPayload({
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            phone: '',
        });
    };
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isRegister, setIsRegister] = useState(false);
    const handleSubmit = useCallback(async () => {
        const { firstName, lastName, phone, ...data } = payload;
        if (isRegister) {
            const response = await apiRegister(payload);
            if (response.status === 'OK') {
                Swal.fire('Congratulations!', response.message, 'success').then(() => {
                    setIsRegister(false);
                    restPayload();
                });
            } else {
                Swal.fire('Oops!', response.message, 'error');
            }
        } else {
            const rs = await apiLogin(data);
            if (rs.status === 'OK') {
                dispatch(
                    register({
                        isLoggedIn: true,
                        token: rs.access_token,
                        current: rs.data,
                    }),
                );
                navigate(`/${path.HOME}`);
            } else {
                Swal.fire('Oops!', rs.message, 'error');
            }
        }
    }, [payload, isRegister]);
    return (
        <div className="w-screen h-screen relative">
            <img
                src="https://www.zerocompany.com/wp-content/uploads/2020/02/shopping-cart-on-blue-background-minimalism-style-DFKR8EJ-scaled.jpg"
                alt="image"
                className="w-full h-full object-cover"
            />
            <div className="absolute top-0 bottom-0 left-0 right-1/2 flex items-center justify-center">
                <div className="top-0 p-8 bg-white rounded-md min-w-[500px] ">
                    <h1 className="text-[28px] font-semibold text-main mb-8 flex flex-col items-center">
                        {isRegister ? 'Register' : 'Login'}
                    </h1>
                    {isRegister && (
                        <div className="flex items-center gap-2">
                            <InputField value={payload.firstName} setValue={setPayload} nameKey="firstName" />
                            <InputField value={payload.lastName} setValue={setPayload} nameKey="lastName" />
                        </div>
                    )}
                    <InputField value={payload.email} setValue={setPayload} nameKey="email" />
                    {isRegister && <InputField value={payload.phone} setValue={setPayload} nameKey="phone" />}
                    <InputField value={payload.password} setValue={setPayload} nameKey="password" type="password" />
                    <Button name={isRegister ? 'Register' : 'Login'} handleOnClick={handleSubmit} fw />
                    <div className="flex items-center justify-between my-2 w-full text-sm">
                        {!isRegister && (
                            <span className="text-blue-500 hover:opacity-30 cursor-pointer">Forgot your account?</span>
                        )}
                        {!isRegister && (
                            <span
                                className="text-blue-500 hover:opacity-30 cursor-pointer"
                                onClick={() => {
                                    setIsRegister(true);
                                }}
                            >
                                Create Account
                            </span>
                        )}
                        {isRegister && (
                            <span
                                className="text-blue-500 hover:opacity-30 cursor-pointer w-full text-center"
                                onClick={() => {
                                    setIsRegister(false);
                                }}
                            >
                                Go Login
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
