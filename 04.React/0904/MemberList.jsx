import React, { useState } from 'react';

const MemberList = (props) => {
    const {userList, dispatch2} = props;
    
    return (
        <ul>
            <li>
                <span>이름</span>/
                <span>나이</span>/
                <span>지역</span>/
                <span>삭제</span>
            </li>
            {
                userList.map((item, idx) => (
                    <li id={idx} key={idx}>
                        <span>{item.name}</span>/
                        <span>{item.age}</span>/
                        <span>{item.address}</span>/
                        <button onClick={() => dispatch2({ type: "deleteMember", username: item.name})}>삭제</button>
                    </li>
                ))
            }
        </ul>
    );
};

export default MemberList;