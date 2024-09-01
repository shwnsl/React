import React from 'react';

const UserPW = (props) => {
    function chkPW(e) {
        props = props.onAddPw(e.target.value)
    }
    return (
        <h3>
            PW : <input type="text" onChange={chkPW}/>
        </h3>
    );
};

export default UserPW;