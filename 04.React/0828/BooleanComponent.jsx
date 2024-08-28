import React from 'react';

const BooleanComponent = ({study}) => {
    const message = study ? "공부 ㄱㄱ" : "놀자 시발"
    return (
        <div>
            {message}
        </div>
    );
};

export default BooleanComponent;