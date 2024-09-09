import { useState } from "react"


export default function SelectedProject({project}){
    const [currentTask,setCurrentTask]= useState('');
    const [tasks,setTasks]= useState([]);

    const formattedDate= new Date(project.dueDate).toLocaleDateString('en-kr',{
        year:'numeric',
        month:'short',
        day:'numeric'
    })

    function handleAddTasks(e){
        e.preventDefault();
        setTasks(prev=>[...prev,currentTask]);
        setCurrentTask('');
       
    }

    return <div className="w-[35rem] mt-16">
        <header className="pb-4 mb-4 border-b-2 border-stone-300 ">
            <div className="flex items-center justify-between">
                <h1 className=' text-3xl font-bold text-stone-700 mb-2'>{project.title}</h1>
                <button className="font-bold text-stone-700 hover:text-stone-900 ">Delete</button>
            </div>

            <p className='text-stone-500 mb-5'>{formattedDate}</p>
            {/* whitespace: 요소의 공복 속성을 제어, pre-wrap: 요소의 줄바꿈이 유지 */}
            <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p> 
        </header>
      
      
        
        <h1 className=' mb-5 text-3xl text-stone-700 font-bold'>Tasks</h1>
        <form className='mb-4 flex' onSubmit={handleAddTasks}>
            <input type="text" className="bg-stone-200 rounded-sm w-2/5 mr-5 border-b-2   border-stone-300 hover:border-stone-600 focus:outline-none focus:border-stone-600 p-1.5" 
            value={currentTask} onChange={(e)=>setCurrentTask(e.target.value)}  />
            <button className="font-semibold">Add Task</button>
         </form>    
         <ul className="bg-stone-100 py-10 px-4">
           {tasks.map((task,index)=>{
               return <div  key={index} className="flex justify-between mb-5 font-semibold">
                    <li className="">{task}</li>
                    <button>Clear</button>
                </div>  
           })}
         </ul>
    </div>
}