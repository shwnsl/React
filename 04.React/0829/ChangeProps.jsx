import React from 'react';

const ChangeProps = (props) => {
    let name = props.name;
    function changeName() {
        name = 'ghghghgh';
        console.log(name)
    }
    return (
        <div>
            <h1>{name}</h1>
            <button onClick={changeName}>클릭</button>
        </div>
    );
};

export default ChangeProps;