import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";
import { useRef, useState } from "react";
function App() {
  const [isProjectSelected, setIsProjectSelected] = useState(false);

  const [titleList, setTitleList] = useState([]);
  const ref = [useRef(""), useRef(""), useRef("")];

  function handleMakeProject() {
    setIsProjectSelected(true);
  }
  function handleSaveProject() {
    setIsProjectSelected(false);
    setTitleList((prevArr) => [...prevArr, ref[0].current.value]);
  }
  function handleCancelProject() {
    setIsProjectSelected(false);
  }

  return (
    <div className=" h-screen my-8 flex gap-8 ">
      <Sidebar onClick={handleMakeProject} list={titleList} />
      {isProjectSelected ? (
        <NewProject
          ref={ref}
          onSave={handleSaveProject}
          onCancel={handleCancelProject}
        />
      ) : (
        <NoProject />
      )}
    </div>
  );
}

export default App;
