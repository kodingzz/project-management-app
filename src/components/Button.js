

export default function Button({children,onClick,...props}){
    return <button onClick={onClick} {...props} className="px-4 py-3 text-lg  md:text-xl text-stone-400 bg-stone-700  rounded-md hover:bg-stone-600 hover:text-stone-300">
    {children}
  </button>
}