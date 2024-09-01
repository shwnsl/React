import React from 'react';

const TodoList = (props) => {
    const {task, fin} = props
    return (
        <div>
            <p>{task}</p>
        </div>
    );
};

export default TodoList;