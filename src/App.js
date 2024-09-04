import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";
import {  useState } from "react";
function App() {
  // const [isProjectSelected, setIsProjectSelected] = useState(false);

  // const [titleList, setTitleList] = useState([]);
  
  const [projectState,setProjectState]= useState({
    selectedProjectId: undefined,
    projectLists:[],
  })

  function handleMakeProject() {
    // setIsProjectSelected(true);
    setProjectState(prev=>{
      return {
        ...prev,
        selectedProjectId: null,
      }
    })
  }
  // function handleSaveProject() {
  //   // setIsProjectSelected(false);
  //   setProjectState(prev=>{
  //     return {
  //       ...prev,
  //       selectedProjectId :undefined,
  //       projectLists:[...prev.projectLists,refArr[0].current.value],
  //     }
  //   })
  //   // setTitleList((prevArr) => [...prevArr, ref[0].current.value]);
  // }
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
  // function handleCancelProject() {
  //   // setIsProjectSelected(false);
  //   setProjectState(prev=>{
  //     return {
  //       ...prev,
  //       selectedProjectId :undefined,
  //     }
  //   })
  // }

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
      <Sidebar onMakeProject={handleMakeProject} list={projectState.projectLists} />

      {/* {projectState.selectedProjectId===undefined? (
         <NoProject onMakeProject={handleMakeProject} />
      ) : (
        <NewProject
        ref={ref}
        onSaveProject={handleSaveProject}
        onCancelProject={handleCancelProject}
      />
      )} */}
      {content}
    </div>
  );
}

export default App;
