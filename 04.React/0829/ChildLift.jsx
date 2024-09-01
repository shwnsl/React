import React from 'react';

const ChildLift = (props) => {
    
    function updateValue(e) {
        props.onAddData(e.target.value)
    }
    return (
        <h3>
            입력 : <input type="text" onChange={updateValue}/>
        </h3>
    );
};

export default ChildLift;