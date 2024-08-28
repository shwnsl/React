import React from 'react';

const Name = ({children}) => {
    return (
        <div>
            내 이름은 {children}이다.
        </div>
    );
};

export default Name;