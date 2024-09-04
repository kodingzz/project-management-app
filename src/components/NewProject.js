import Input from "./Input";
import {  useRef } from "react";

 export default function NewProject({ onEndProject}) {
  
  
  const title =useRef();
  const desc =useRef();
  const dueDate =useRef();

  function handleSaveProject(){

    const enteredTitle =title.current.value;
    const enteredDescription =desc.current.value;
    const enteredDueDate =dueDate.current.value;
    onEndProject({
      title:enteredTitle,
      description:enteredDescription,
      dueDate:enteredDueDate
    });
  }
  function handleCancelProject(){

    const enteredTitle =title.current.value;
    const enteredDescription =desc.current.value;
    const enteredDueDate =dueDate.current.value;
    onEndProject({
      title:enteredTitle,
      description:enteredDescription,
      dueDate:enteredDueDate
    });
  }

  return (
    <div className="w-3/5 mt-16">
      <menu className="flex items-center justify-end">
        <button
          className="text-stone-950 px-5 py-2 hover:text-stone-500"
          onClick={handleCancelProject}
        >
          Cancel
        </button>
        <button
          className="bg-stone-800 text-stone-50 px-5 py-2 rounded-md hover:text-stone-200 hover:bg-stone-700 "
          onClick={handleSaveProject}
        >
          Save
        </button>
      </menu>
      <div className="mt-10">
        <Input ref={title}  label="Title" type="text" />
        <Input ref={desc} isTextarea={true} label="Description" />
        <Input ref={dueDate}  label="Due Date" type="date" />
      </div>
    </div>
  );
}
