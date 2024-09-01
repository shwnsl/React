import React, { useState } from 'react';

const SelectBox = () => {
    const [val, setVal] = useState('과일')
    const fruitsList = [
        {value: 'grape', name: 'Grape'},
        {value: 'lime', name: 'Lime'},
        {value: 'coconut', name: 'Coconut'},
        {value: 'mango', name: 'Mango'}
    ]
    function chgHan(e) {
        setVal(e.target.value);
    }
    function subHan(e) {
        e.preventDefault();
        console.log('선택한 과일은 ',val)
    }
    return (
        <div>
            <h3>{val}</h3>
            <select value={val} onChange={chgHan}>
                {
                    fruitsList.map((item) => (
                        <option value={item.value}>{item.name}</option>
                    ))
                }
            </select>
            <button type='submit' onClick={subHan}>전송</button>
        </div>
    );
};

export default SelectBox;