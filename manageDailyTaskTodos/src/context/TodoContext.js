import { createContext, useContext } from "react";

export const TodoContext=createContext({
    todos:[
        {
            id:1,
            todo:"Hello World",
            checked:false
        }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleChecked:(id)=>{}
})

export const TodoProvider = TodoContext.Provider

export const useTodo=()=>{
    return useContext(TodoContext)
}