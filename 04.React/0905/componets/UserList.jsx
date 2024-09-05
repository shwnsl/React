import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMember } from '../features/counter/userSlice';

const UserList = (props) => {
    const userList = useSelector((state) => state.user.member);
    const dispatch = useDispatch();

    return (
        <ul>
           <li>
                <span>이름</span> / 
                <span>나이</span> / 
                <span>지역</span> / 
                <span>삭제</span>
            </li> 
            {
                userList.map((user, idx) => (
                    <li key={idx}>
                        <span>{user.name}</span>
                        <span>{user.age}</span>
                        <span>{user.address}</span>
                        <button onClick={() => dispatch(deleteMember(user.name))}>delete</button>
                    </li>
                ))
            }
        </ul>
    );
};

export default UserList;