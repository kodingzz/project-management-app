import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";
import {  useReducer } from "react";
import SelectedProject from "./components/SelectedProject";
import { ProjectManagmenet } from './store/project_management';
import { TaskManagmenet } from './store/task_management';


function projectStateReducer(prev,action){
  if(action.type==='MAKE_PROJECT'){
    return {
      ...prev,
      selectedProjectId: null,
    } 
  }
  else if(action.type==='END_PROJECT'){
    const newProject ={
          ...action.projectData,
           id: Math.random()*100,
        }
        return {
          ...prev,
          selectedProjectId :undefined,
          projectLists:[...prev.projectLists,newProject],
        }
  }
  else if(action.type==='CANCEL_PROJECT'){
    return {
      ...prev,
      selectedProjectId: undefined,
    } 
  }
  else if(action.type==='GOTO_PROJECT'){
    return {
      ...prev,
      selectedProjectId: action.id,
    }
  }
  else if(action.type==='DELETE_PROJECT'){
 
    return {
          ...prev,
          selectedProjectId: undefined,
          projectLists: prev.projectLists.filter(project=>project!==action.selectedProject)
        }
  
  }
  else if(action.type==='ADD_TASK'){
       const newTask ={
           enteredTask : action.enteredTask,
           taskId: Math.random()*100,
           projectId: prev.selectedProjectId,
        }
        return {
          ...prev,
         taskLists: [...prev.taskLists, newTask],
        }
  }
  else if(action.type==='DELETE_TASK'){
 return {
        ...prev,
        taskLists : prev.taskLists.filter((item)=>item.taskId!==action.id),
      }
  }

}

function App() {
 

  const [projectState,projectStateDipatch] =useReducer(projectStateReducer,{
    selectedProjectId: undefined,
    projectLists:[],
    taskLists:[],
  })
  
  
  function handleMakeProject() {
    projectStateDipatch({
      type:'MAKE_PROJECT'
      }
    );
    
  }
  function handleCancelProject() {
    projectStateDipatch({
      type:'CANCEL_PROJECT'
    })
  }
  function handleEndProject(projectData){
  
    projectStateDipatch({
      type:'END_PROJECT',
      projectData: projectData,
    });
   
  }

  function  handleGotoProject(id){

      projectStateDipatch({
        type:'GOTO_PROJECT',
        id: id,
      })
    }

  
 function handleDeleteProject(){
      if(window.confirm('정말 삭제 할거에요?')){
        projectStateDipatch({
          type:'DELETE_PROJECT',
          selectedProject :selectedProject
        })
      
      }
     
    }

    function handleAddTask(enteredTask){
      projectStateDipatch({
        type:'ADD_TASK',
        enteredTask: enteredTask,
      })

    }
    function handleDeleteTask(id){
      projectStateDipatch({
        type:'DELETE_TASK',
        id: id,
      })
    }
   

    // find 메소드  : 제공된 배열에서 제공된 테스트 함수를 만족하는 첫 번째 요소를 반환,  만족하는 값이 없으면 undefined가 반환
    let selectedProject= projectState.projectLists.find(project=>project.id===projectState.selectedProjectId)
  
  const projectValue ={
    projectLists: projectState.projectLists,
    selectedProjectId : projectState.selectedProjectId,
    selectedProject :selectedProject,

    makeProject :handleMakeProject,
    endProject :handleEndProject,
    cancelProject: handleCancelProject,
    deleteProject: handleDeleteProject,
    gotoProject: handleGotoProject,

  }
  
  const taskValue= {
    taskLists: projectState.taskLists,
    addTask: handleAddTask,
    deleteTask: handleDeleteTask,
}

  let  content= <SelectedProject />;

  if(projectState.selectedProjectId===undefined){
    content=<NoProject/>
  }
  else if(projectState.selectedProjectId===null){
    content = <NewProject/>
  }

  return (
    <ProjectManagmenet.Provider value={projectValue}>
        <div className=" h-screen my-8 flex gap-8 ">
          <Sidebar/>
            <TaskManagmenet.Provider value={taskValue}>
                {content}
            </TaskManagmenet.Provider>
        </div>
    </ProjectManagmenet.Provider>

  );
}

export default App;
