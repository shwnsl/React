import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

// 데이터 조회
const fetchTodo = () => {
    return fetch("http://localhost:3000/api/todo")
    .then((response) => response.json())
};

// 할 일 상태 업데이트
const updateTodoStatus = async (todo) => {
    const res = await axios.put(
        `http://localhost:3000/api/todo/${todo.id}`,
        {status: !todo.status}
    );
    return res.data;
}

// 할 일 삭제 함수
const deleteTodoStatus = async (itemId) => {
    console.log(itemId)
    const res = await axios.delete(
        `http://localhost:3000/api/todo/${itemId}`
    )
    return res.data;
}

function TodoFetchingNode() {
    const queryClient = useQueryClient();

    // 데이터 조회
    const {data, error, isLoading} = useQuery({
        queryKey: ["todos"],
        queryFn: fetchTodo
    })

    // 아이템 추가
    const updateTodoMutation = useMutation({
        mutationFn: updateTodoStatus,
        onSuccess: (result) => {
            console.log("todo created successfully : ",result);
            queryClient.invalidateQueries({queryKey:["todos"]})
        },
        onError: (error) => {
            console.log('error adding Item : ', error);
        }
    })

    // 아이템 삭제
    const deleteTodoMutation = useMutation({
        mutationFn: deleteTodoStatus,
        onSuccess: (result) => {
            console.log("todo deletes successfully : ",result)
            // 아이템 추가 후 데이터를 다시 가져옴
            queryClient.invalidateQueries({queryKey:["todos"]})
        },
        onError: (error) => {
            console.log("Error deleting item:", error)
        }
    })

    const changeHandler = (todo) => {
        updateTodoMutation.mutate(todo);
    }

    const deleteHandler = (itemId) => {
        deleteTodoMutation.mutate(itemId);
    }

    return (
        <div>
            <h3>할 일 리스트</h3>
            {data?.map((todo) => (
                <p key={todo.id}>
                    <input type="checkbox" checked={todo.status} 
                    onChange={() => changeHandler(todo)}/>
                    {todo.text}
                    <button onClick={() => deleteHandler(todo.id)}>삭제</button>
                </p>
            ))}
        </div>
    )
}

export default TodoFetchingNode;