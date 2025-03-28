import React from 'react';

const Wrapper = ({children}) => {
    const style = {
        border: '3px solid blue',
        padding: '20px'
    }
    return (
        <div style={style}>
            {children}
        </div>
    );
};

export default Wrapper;