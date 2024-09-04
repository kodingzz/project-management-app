import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";
import {  useState } from "react";
function App() {

  
  const [projectState,setProjectState]= useState({
    selectedProjectId: undefined,
    projectLists:[],
  })

  function handleMakeProject() {
    setProjectState(prev=>{
      return {
        ...prev,
        selectedProjectId: null,
      }
    })
  }

  function handleEndProject(projectData){
    setProjectState(prev=>{
      const newProject ={
        ...projectData,
         id: Math.random()*10000,
      }
      return {
        ...prev,
        selectedProjectId :undefined,
        projectLists:[...prev.projectLists,newProject],
      }
    })
  }


  let content;
  if(projectState.selectedProjectId===undefined){
    content=<NoProject onMakeProject={handleMakeProject} />
  }
  else{
    content = <NewProject
    onEndProject ={handleEndProject}
  />
  }
  

  return (
    <div className=" h-screen my-8 flex gap-8 ">
      <Sidebar onMakeProject={handleMakeProject} lists={projectState.projectLists} />
      {content}
    </div>
  );
}

export default App;
