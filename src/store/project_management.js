import { createContext } from 'react'

export const ProjectManagmenet = createContext({
    projectLists: [],
    selectedProjectId  : '',
    taskLists: [],
    selectedProject :{},
    makeProject :()=>{},
    endProject :()=>{},
    cancelProject: ()=>{},
    deleteProject: ()=>{},
    gotoProject:()=>{},
    addTask:()=>{},
    deleteTask:()=>{},
})