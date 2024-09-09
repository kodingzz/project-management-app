import Input from "./Input";
import {  useRef } from "react";
import Modal from "./Modal";
 export default function NewProject({ onEndProject ,onCancelProject}) {
  
  
  const title =useRef();
  const desc =useRef();
  const dueDate =useRef();
  const dialog =useRef();

  function handleSaveProject(){

    const enteredTitle =title.current.value;
    const enteredDescription =desc.current.value;
    const enteredDueDate =dueDate.current.value;
    if(enteredTitle.trim()==='' || enteredDescription.trim()===''|| enteredDueDate.trim()===''){
      dialog.current.open();
      return;
    }
    onEndProject({
      title:enteredTitle,
      description:enteredDescription,
      dueDate:enteredDueDate,
    });
  }


 
  return (
    <>
    <Modal ref={dialog}>
            <h1 className='mb-5 text-xl text-stone-700 font-bold'>Invalid Input!</h1>
            <p className='text-stone-500 mb-5'>Please input valid value for every Input field.</p>
           
    </Modal>

    <div className="w-3/5 mt-16">
      <menu className="flex items-center justify-end">
        <button
          className="text-stone-950 px-5 py-2 hover:text-stone-500"
          onClick={onCancelProject}
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
    </>
    
  );
}
