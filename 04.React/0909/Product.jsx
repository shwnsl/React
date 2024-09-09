import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Product = () => {
    const [productId, setProductId] = useState("");
    const navigate = useNavigate();

    const clkHandler = (e) => {
        setProductId(e.target.value);
    }

    useEffect(() => {
        navigate(`/product/${productId}`);
    },[productId])

    return (
        <div>
            <button onClick={clkHandler} value="p001">1번 제품</button>
            <button onClick={clkHandler} value="p002">2번 제품</button>
            <button onClick={clkHandler} value="p003">3번 제품</button>
        </div>
    );
};

export default Product;