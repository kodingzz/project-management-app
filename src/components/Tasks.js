import NewTask from './NewTask'


export default function Tasks({taskList,onAddTask,onDeleteTask}){
    
    return  <section>
           <h1 className=' mb-5 text-2xl text-stone-700 font-bold'>Tasks</h1>
            <NewTask onAddTask={onAddTask}/>
       
            <ul className="bg-stone-100 py-10 px-4">
                {taskList.length===0 
                 ? <p className='text-stone-700 mb-4 font-semibold'>This project does not have any tasks yet.</p> 
                 :taskList.map((task)=>{
                return <li key={task.id} className='flex justify-between mb-5  font-bold text-stone-700'>
                            <span>{task.enteredTask}</span>
                            <button className='font-bold text-stone-700 hover:text-red-400 ' onClick={()=>onDeleteTask(task.id)}>Clear</button>
                        </li>
                        
                })}
            </ul>
    </section>
}