import React, { useState } from 'react';

const TextArea = () => {
    const [val, setVal] = useState('')
    function chgHandler(e) {
        setVal(e.target.value);
    }
    function submitHan(e) {
        e.preventDefault();
        console.log('submit으로 받은 데이터 : ',val)
    }
    return (
        <div>
            <form onSubmit={submitHan}>
                <h3>{val}</h3>
                <textarea value={val} onChange={chgHandler}/>
                <button type='submit'>전송</button>
            </form>
        </div>
    );
};

export default TextArea;