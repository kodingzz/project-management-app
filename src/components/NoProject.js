
import noProjectImg from '../assets/no-projects.png';
import Button from './Button';

import { ProjectManagmenet } from '../store/project_management';
import { useContext } from 'react';

export default function NoProject(){
    const {makeProject}= useContext(ProjectManagmenet);
    
    return <div className='w-3/5 py-20 px-5 text-center'>
                <img className="mx-auto mb-5 object-contain w-16 h-16" src={noProjectImg} alt='noProjectImg' />
                <h2 className='mb-5 text-xl text-stone-700 font-bold'>No Project Selected</h2>
                <p className='text-stone-500 mb-5'>Select a project or get started with a new one</p>
                {/* <button className='bg-stone-900 rounded-md p-2 text-stone-300 hover:bg-stone-800 hover:text-stone-200'>Create a new project</button> */}
                <Button onClick={makeProject} className='bg-stone-900 rounded-md text-stone-300 hover:bg-stone-800 hover:text-stone-20 px-1 py-1'>Create a new project</Button>
         </div>
}