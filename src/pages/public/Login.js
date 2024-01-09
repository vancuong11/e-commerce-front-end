import React, { useCallback, useEffect, useState } from 'react';
import { InputField, Button } from '../../components';
import { apiLogin, apiRegister, apiForgotPassword } from '../../apis';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import path from '../../utils/path';
import { login } from '../../store/user/userSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { validate } from '../../utils/helpers';

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
    const [isForgotPassword, setIsForgotPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [invalidField, setInvalidField] = useState([]);

    useEffect(() => {
        restPayload();
    }, [isRegister]);

    const handleSubmit = useCallback(async () => {
        const { firstName, lastName, phone, ...data } = payload;

        const invalids = isRegister ? validate(payload, setInvalidField) : validate(data, setInvalidField);
        if (invalids === 0) {
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
                        login({
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
        } else {
        }
    }, [payload, isRegister]);

    const handleForgotPassword = async () => {
        const response = await apiForgotPassword({ email: email });

        if (response.status === 'OK') {
            toast.success(response.message);
        } else {
            toast.error(response.message);
        }
    };

    return (
        <div className="w-screen h-screen relative">
            {isForgotPassword && (
                <div className="absolute animate-slide-right top-0 left-0 bottom-0 right-0 bg-white flex flex-col items-center pt-2">
                    <div className="flex flex-col gap-4">
                        <label htmlFor="email">Enter your email:</label>
                        <input
                            type="text"
                            id="email"
                            className="w-[800px] pb-2 border-b outline-none placeholder:text-sm"
                            placeholder="Exp: email@gmail.com"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                        <div className="flex items-center justify-end w-full gap-2">
                            <Button
                                name={'Submit'}
                                style="px-4 py-2 rounded-md text-white bg-blue-500 text-semibold my-2"
                                handleOnClick={handleForgotPassword}
                            />
                            <Button name={'Back'} handleOnClick={() => setIsForgotPassword(false)} />
                        </div>
                    </div>
                </div>
            )}
            <img
                src="https://www.zerocompany.com/wp-content/uploads/2020/02/shopping-cart-on-blue-background-minimalism-style-DFKR8EJ-scaled.jpg"
                alt="image"
                className="w-full h-full object-cover"
            />
            {!isForgotPassword && (
                <div className="absolute top-0 bottom-0 left-0 right-1/2 flex items-center justify-center">
                    <div className="top-0 p-8 bg-white rounded-md min-w-[500px] ">
                        <h1 className="text-[28px] font-semibold text-main mb-8 flex flex-col items-center">
                            {isRegister ? 'Register' : 'Login'}
                        </h1>
                        {isRegister && (
                            <div className="flex items-center gap-2">
                                <InputField
                                    value={payload.firstName}
                                    setValue={setPayload}
                                    nameKey="firstName"
                                    invalidField={invalidField}
                                    setInvalidField={setInvalidField}
                                />
                                <InputField
                                    value={payload.lastName}
                                    setValue={setPayload}
                                    nameKey="lastName"
                                    invalidField={invalidField}
                                    setInvalidField={setInvalidField}
                                />
                            </div>
                        )}
                        <InputField
                            value={payload.email}
                            setValue={setPayload}
                            nameKey="email"
                            invalidField={invalidField}
                            setInvalidField={setInvalidField}
                        />
                        {isRegister && (
                            <InputField
                                value={payload.phone}
                                setValue={setPayload}
                                nameKey="phone"
                                invalidField={invalidField}
                                setInvalidField={setInvalidField}
                            />
                        )}
                        <InputField
                            value={payload.password}
                            setValue={setPayload}
                            nameKey="password"
                            type="password"
                            invalidField={invalidField}
                            setInvalidField={setInvalidField}
                        />
                        <Button name={isRegister ? 'Register' : 'Login'} handleOnClick={handleSubmit} fw />
                        <div className="flex items-center justify-between my-2 w-full text-sm">
                            {!isRegister && (
                                <span
                                    className="text-blue-500 hover:opacity-30 cursor-pointer"
                                    onClick={() => setIsForgotPassword(true)}
                                >
                                    Forgot your account?
                                </span>
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
            )}
        </div>
    );
};

export default Login;
