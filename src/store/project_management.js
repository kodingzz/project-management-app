import { createContext } from 'react'

export const ProjectManagmenet = createContext({
    projectLists: [],
    selectedProjectId  : '',
    selectedProject :{},
    makeProject :()=>{},
    endProject :()=>{},
    cancelProject: ()=>{},
    deleteProject: ()=>{},
    gotoProject:()=>{},
})