import React from 'react';
import { useParams } from 'react-router-dom';
const DetailsProduct = () => {
    const { id, name } = useParams();
    // console.log(id, name);
    return <div>DetailsProduct</div>;
};

export default DetailsProduct;
