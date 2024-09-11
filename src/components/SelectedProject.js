import Tasks from './Tasks';
import { ProjectManagmenet } from '../store/project_management';
import { useContext } from 'react';

export default function SelectedProject(){

    const {selectedProject,deleteProject} = useContext(ProjectManagmenet);


    const formattedDate= new Date(selectedProject.dueDate).toLocaleDateString('en-kr',{
        year:'numeric',
        month:'short',
        day:'numeric'
    })
    
           return <div className="w-2/3 mt-16">
                    <header className="pb-4 mb-4 border-b-2 border-stone-300 ">
                        <div className="flex items-center justify-between">
                            <h1 className=' text-3xl font-bold text-stone-700 mb-2'>{selectedProject.title}</h1>
                            <button className="font-bold text-stone-700  hover:text-red-400 " onClick={deleteProject}>Delete</button>
                        </div>

                        <p className='text-stone-500 mb-5'>{formattedDate}</p>
                        {/* whitespace: 요소의 공복 속성을 제어, pre-wrap: 요소의 줄바꿈이 유지 */}
                        <p className="text-stone-600 whitespace-pre-wrap">{selectedProject.description}</p> 
                    </header>
                
                    <Tasks />
                    

                </div>
    
}