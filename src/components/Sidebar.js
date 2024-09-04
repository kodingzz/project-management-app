import Button from "./Button";

export default function Sidebar({ onMakeProject, list }) {
  
  
  return (
    <aside className="bg-stone-900 w-1/3   rounded-r-xl text-white  py-16 px-8 md:w-72 ">
      <h2 className=" uppercase font-bold mb-8 md:text-xl text-stone-200">
        Your Projects
      </h2>
    
      {/* 버튼 컴포넌트를 만들어 재사용성 증가 */}
      <Button onClick={onMakeProject}>+ Add Project</Button>

      <ul className="mt-10">
        {/* <li className="p-1 text-xl">Mastering React</li>  */}
        {[...list].map((item) => <li key={item.id} className="p-1 text-xl">{item.title}</li>)}
      </ul>
    </aside>
  );
}
