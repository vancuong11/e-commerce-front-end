import React, { useState } from 'react';
import { Button } from '../../components';
import { useParams } from 'react-router-dom';
import { apiResetPassword } from '../../apis';
import { toast } from 'react-toastify';

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const { token } = useParams();
    const handleResetPassword = async () => {
        const response = await apiResetPassword({ token: token, password: password });
        if (response.status === 'OK') {
            toast.success(response.message);
        } else {
            toast.error(response.message);
        }
    };
    return (
        <div className="absolute animate-slide-right top-0 left-0 bottom-0 right-0 bg-white flex flex-col items-center pt-2">
            <div className="flex flex-col gap-4">
                <label htmlFor="email">Enter your new password:</label>
                <input
                    type="text"
                    id="password"
                    className="w-[800px] pb-2 border-b outline-none placeholder:text-sm"
                    placeholder="Type here"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
                <div className="flex items-center justify-end w-full gap-2">
                    <Button
                        name={'Submit'}
                        style="px-4 py-2 rounded-md text-white bg-blue-500 text-semibold my-2"
                        handleOnClick={handleResetPassword}
                    />
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
