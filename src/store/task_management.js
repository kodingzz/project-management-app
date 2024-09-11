import { createContext } from 'react'

export const TaskManagmenet = createContext({
    taskLists: [],
    addTask:()=>{},
    deleteTask:()=>{},
})