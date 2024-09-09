import React from 'react';

const TodoNode = () => {
    return fetch("http://localhost:5000/api/todo")
    .then((response) => response.json())
    .then((data) => console.log(data))
};

function TodoFetchingNode() {
    TodoNode();
    return <></>
}

export default TodoNode;