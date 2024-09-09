import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const addItem = async(newItem) => {
    const response = await axios.post("http://localhost:3000/api/add", newItem);
    return response.data;
}



const UseMutationEx = () => {
    const queryClients = useQueryClient();
    const addItemMutation = useMutation({
        mutationFn: addItem,
        onSuccess: (result) => {
            console.log("todo created successfully : ", result);
            queryClients.invalidateQueries({queryKey:["todos"]})
        },
        onError:(error) => {
            console.log("Error creating todo:", error);
        }
    })
    
    // const sendData = () => {
    //     const newTodo = {text: "do something"};
    //     addItemMutation.mutate(newTodo);
    // }

    const sendData = () => {
        const itemName = prompt("새 할 일 입력")
        if(itemName) {
            addItemMutation.mutate({text: itemName})
        }
    }

    

    return (
        <div>
            <h1>할 일 추가</h1>
            <button onClick={sendData}>Add todo</button>
        </div>
    )
};

export default UseMutationEx;