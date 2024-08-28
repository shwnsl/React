import React from 'react';

const Introduce = (props) => {
    const {name, age, address} = props;
    const blue = {color : 'blue'};
    const red = {color : 'red'};
    const orange = {color : 'orange'};
    return (
        <div>
            안녕 내 이름은 <span style={blue}>{name}</span>이고, <span style={red}>{age}</span>살 이고, <span style={orange}>{address}</span>에 산다.
        </div>
    );
};



export default Introduce;