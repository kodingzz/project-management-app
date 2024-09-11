import NewTask from './NewTask'
import { useContext } from 'react';
import { TaskManagmenet } from '../store/task_management';
export default function Tasks(){
    
    const {taskLists,deleteTask} = useContext(TaskManagmenet);
    
    return  <section>
           <h1 className=' mb-5 text-2xl text-stone-700 font-bold'>Tasks</h1>
            <NewTask />
            <ul className="bg-stone-100 py-10 px-4">
                {taskLists.length===0 
                 ? <p className='text-stone-700 mb-4 font-semibold'>This project does not have any tasks yet.</p> 
                 :taskLists.map((item)=>{
                return <li key={item.taskId} className='flex justify-between mb-5  font-bold text-stone-700'>
                            <span>{item.enteredTask}</span>
                            <button className='font-bold text-stone-700 hover:text-red-400 ' onClick={()=>deleteTask(item.taskId)}>Clear</button>
                        </li>
                        
                })}
            </ul>
    </section>
}