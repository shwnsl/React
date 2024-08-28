import React from 'react';
import MenuComponent from './MenuComponent';

const MenuWrap = () => {
    const style = {
        width: '100%',
        padding: '20px',
        backgroundColor: 'yellow',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
    return (
        <div style={style}>
            <MenuComponent name="응가" color="하늘색" src="/logo192.png" price='2000' />
            <MenuComponent name="니얼굴" color="빨간색" src="/aaa.jpg" price='1000' />
            <MenuComponent name="시벌련" color="노란색" src="/bbb.jpg" price='5000' />
        </div>
    );
};

export default MenuWrap;