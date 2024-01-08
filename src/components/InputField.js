import React, { useState } from 'react';

const InputField = ({ value, setValue, nameKey, type, invalidField, setInvalidField }) => {
    const [forcus, setForcus] = useState(false);
    return (
        <div className="relative">
            {forcus && (
                <label
                    className="text-[10px] absolute top-0 left-[12px] block bg-white px-1 animate-slide-top-sm"
                    htmlFor={nameKey}
                >
                    {nameKey.slice(0, 1).toUpperCase() + nameKey.slice(1)}
                </label>
            )}
            <input
                type={type || 'text'}
                value={value}
                className="px-4 py-2 rounded-sm w-full my-2 border placeholder:text-sm placeholder:italic outline-none"
                placeholder={nameKey.slice(0, 1).toUpperCase() + nameKey.slice(1)}
                onChange={(e) => setValue((prev) => ({ ...prev, [nameKey]: e.target.value }))}
                onFocus={() => setForcus(true)}
                onBlur={() => setForcus(false)}
            />
        </div>
    );
};

export default InputField;
