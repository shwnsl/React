import React, { useState } from 'react';

const Submit = () => {
    const [name, nameVal] = useState('jun')
    function changeHandler(e) {
        nameVal(e.target.value)
    }
    function submitHandler(e) {
        e.preventDefault();
        console.log('submit으로 받은 데이터 : ',name)
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <h1>이름 : {name}</h1>
                <input type="text" onChange={changeHandler} />
                <input type="submit" value="확인"/>
            </form>
        </div>
    );
};

export default Submit;