import React, { useState } from 'react';

const RadioMap = () => {
    const [city, nameVal] = useState('');
    const cityList = [
        {name: '서울', val: 'seoul'},
        {name: '부산', val: 'busan'},
        {name: '제주', val: 'jeju'}
    ]
    function changeHandler(e) {
        nameVal(e.target.value) // e.target.value = item.name = city
    }
    function submitHandler(e) {
        e.preventDefault();
        alert(city);
    }
    return (
        <div>
            <h2>라디오 버튼 value를 출력</h2>
            <form onSubmit={submitHandler}>
                {
                    cityList.map((item) => (
                        <label key={item.val}>
                            <input
                                type='radio'
                                name='city'
                                value={item.val}
                                onChange={changeHandler}
                            />
                            {item.name} 
                        </label>
                    ))
                }
                <button type='submit'>클릭</button>
            </form>
        </div>
    );

};

export default RadioMap;