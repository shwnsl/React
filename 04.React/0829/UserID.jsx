import React from 'react';

const UserID = (props) => {
    function chkID(e) {
        props = props.onAddId(e.target.value)
    }
    return (
        <h3>
            ID : <input type="text" onChange={chkID}/>
        </h3>
    );
};

export default UserID;