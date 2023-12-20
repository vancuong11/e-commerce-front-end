import React, { memo } from 'react';

const CountDown = ({ unit, number }) => {
    return (
        <div className="flex flex-col items-center justify-center w-[30%] flex-auto h-[60px] bg-gray-100 rounded-md">
            <span className="text-[18px] text-gray-800">{number}</span>
            <span className="text-xs text-gray-700">{unit}</span>
        </div>
    );
};

export default memo(CountDown);
