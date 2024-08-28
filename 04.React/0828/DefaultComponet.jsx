import React from 'react';

const DefaultComponet = ({name}) => {
    return (
        <div>
            <h2>안녕 내이름은 {name}</h2>
        </div>
    );
};

// 컴포넌트이름.defaultProps = { 키 : 값 }
DefaultComponet.defaultProps = {
    name : '씌이뽤련'
}

export default DefaultComponet;