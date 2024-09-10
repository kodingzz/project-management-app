import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";
import {  useState } from "react";
import SelectedProject from "./components/SelectedProject";
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
  function handleCancelProject() {
    setProjectState(prev=>{
      return {
        ...prev,
        selectedProjectId: undefined,
      }
    })
  }
  function handleEndProject(projectData){
  
    setProjectState(prev=>{
      const newProject ={
        ...projectData,
         id: Math.random()*100,
      }
      return {
        ...prev,
        selectedProjectId :undefined,
        projectLists:[...prev.projectLists,newProject],
      }
   
     
    })
  }
  function  handleGotoProject(id){
      setProjectState(prev=>{
        return {
          ...prev,
          selectedProjectId: id,
        }
      })
    }
   

  function handleDeleteProject(){
    if(window.confirm('정말 삭제 할거에요?')){
      setProjectState(prev=>{
        return {
          ...prev,
          selectedProjectId: undefined,
          projectLists: prev.projectLists.filter(project=>project!==selectedProject)
        }
      })
    
    }
   
  }
  // find 메소드  : 제공된 배열에서 제공된 테스트 함수를 만족하는 첫 번째 요소를 반환,  만족하는 값이 없으면 undefined가 반환
  let selectedProject= projectState.projectLists.find(project=>project.id===projectState.selectedProjectId)

  if(selectedProject===undefined){
    selectedProject={
      id: -1,
    }

  }
  
  
  let  content= <SelectedProject project={selectedProject} onDeleteProject={handleDeleteProject}/>;

  if(projectState.selectedProjectId===undefined){
    content=<NoProject onMakeProject={handleMakeProject}  />
  }
  else if(projectState.selectedProjectId===null){
    content = <NewProject
    onEndProject ={handleEndProject}
    onCancelProject={handleCancelProject}
  />
  }

  

  return (
    <>
        <div className=" h-screen my-8 flex gap-8 ">
          <Sidebar onMakeProject={handleMakeProject} lists={projectState.projectLists} selectedProjectId={selectedProject.id} onGotoProject={handleGotoProject} />
          {content}
        </div>
    </>

  );
}

export default App;
