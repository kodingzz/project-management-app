import { useRef, useState } from 'react'
import Modal from './Modal';
import { useContext } from 'react';
import { TaskManagmenet } from '../store/task_management';
export default function NewTask(){

    const {addTask} = useContext(TaskManagmenet);

    const [enteredTask,setEnteredTask]= useState('');
    const dialog =useRef();

    function handleChange(e){
        setEnteredTask(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault();
        if(enteredTask.trim()===''){
            dialog.current.open();
            return;
        }
        addTask(enteredTask);
        setEnteredTask('');
    }
    return (
        <>
            <Modal ref={dialog}>
                <h1 className='mb-5 text-xl text-stone-700 font-bold'>Invalid Input!</h1>
                <p className='text-stone-500 mb-5'>Please input valid value.</p>
            </Modal>
            <form className='mb-4 flex items-center' onSubmit={handleSubmit}>
                        <input type="text" 
                        className="text-stone-700 bg-stone-200  w-2/5 mr-5 border-b-2 rounded-sm   border-stone-200 hover:border-stone-600 focus:outline-none focus:border-stone-600 p-1.5" 
                        value={enteredTask}
                        onChange={handleChange}/>
                        <button className="font-bold text-stone-700 hover:text-stone-900">Add Task</button>
                    </form>  
            </>
    )
    
   
}