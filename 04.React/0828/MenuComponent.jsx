import React from 'react';

const MenuComponent = (props) => {
    const {name, color, src, price} = props;

    const block = {
        width: '30%',
        padding: '10px',
        borderRadius: '10px',
        backgroundColor: 'pink',
        textAlign: 'center'
    }
    const img = {
        width: '100px',
        height: '100px',
        borderRadius: '10px',
        backgroundColor: 'white'
    }
    const names = { fontSize: '30px', fontWeight: 'bold'}
    const des = { fontSize: '10px'}
    const prices = { fontSize: '20px'}
    return (
        <div style={block}>
            <img src={src} alt="" style={img} />
            <p style={names}>{name}</p>
            <p style={des}>{color}</p>
            <p style={prices}>{price}</p>
        </div>
    );
};

export default MenuComponent;