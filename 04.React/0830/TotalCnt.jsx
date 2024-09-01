import React, { useState } from 'react';

const TotalCnt = (props) => {
    let [cnt, cntSet] = useState(0);
    function cntUp() {
        cntSet(++cnt);
        props.onCnt()
    }
    return (
        <div>
            <p>{cnt}</p>
            <button onClick={cntUp}>클릭</button>
        </div>
    );
};

export default TotalCnt;