import React, { useState } from 'react';

const InputField = ({ value, setValue, nameKey, type, invalidField, setInvalidField }) => {
    const [forcus, setForcus] = useState(false);
    return (
        <div className="relative flex flex-col gap-1">
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
                onFocus={() => setInvalidField([])}
                onBlur={() => setForcus(false)}
            />
            {/* some => true/false  || find => thoa dieu kien */}
            {invalidField?.some((el) => el.name === nameKey) && (
                <small className="text-main italic">{invalidField.find((el) => el.name === nameKey)?.message}</small>
            )}
        </div>
    );
};

export default InputField;
