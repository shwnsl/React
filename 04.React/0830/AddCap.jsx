import React, { useState } from 'react';


const AddCap = (props) => {
    const {list} = props;
    const [total, setTotal] = useState(0);
    function changeHandler(chk) {
        if(chk.checked) {
            // setTotal(total + parseInt(chk.value))
            setTotal((prevState) => prevState + parseInt(chk.value))
        } else {
            // setTotal(total - parseInt(chk.value))
            setTotal((prevState) => prevState - parseInt(chk.value))
        }
    }
    return (
        <div>
            {
                list.map((item) => (
                    <label key={item.name}>
                        <input
                         type='checkbox'
                         value={item.price}
                         onChange={(e) => changeHandler(e.target)}
                        />
                        {item.name}
                    </label>
                ))
            }
            <p>합계 : {total}</p>
        </div>
    );
};

export default AddCap;