import Button from "./Button";

export default function Sidebar({ onClick, list }) {
  return (
    <aside className="bg-stone-900 w-1/3   rounded-r-xl text-white  py-16 px-8 md:w-72 ">
      <h2 className=" uppercase font-bold mb-8 md:text-xl text-stone-200">
        Your Projects
      </h2>
      {/* <button onClick={()=>onClick()}  className="px-4 py-3 text-lg  md:text-xl text-stone-400 bg-stone-700  rounded-md hover:bg-stone-600 hover:text-stone-300">
        + Add Project
      </button> */}
      <Button onClick={onClick}>+ Add Project</Button>

      <ul className="mt-10">
        {/* <li className="p-1 text-xl">Learning React</li>
        <li className="p-1 text-xl">Mastering React</li> */}
        {list.map((item, index) => (
          <li key={index} className="p-1 text-xl">
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
}
