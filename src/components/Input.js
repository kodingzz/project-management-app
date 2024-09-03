import { useState } from 'react';

import { forwardRef } from 'react';

const  Input=forwardRef(function Input({label,isTextarea,type},ref){
    const [text,setText] =useState('');
    const textClasses= 'bg-stone-200 rounded-sm w-full border-b-2   border-stone-300 hover:border-stone-600 focus:outline-none focus:border-stone-600 p-1.5';
   return <p className='mb-4'>
    <label className='uppercase font-bold text-stone-600 '>{label}</label>
    {isTextarea 
    ?<textarea ref={ref} className={textClasses}  value={text} onChange={(e)=>setText(e.target.value)}></textarea> 
    : <input ref={ref} value={text} onChange={(e)=>setText(e.target.value)}  className={textClasses} type={type} />}
</p>    
})

export default Input;