import Button from "./Button";

export default function Sidebar({ onMakeProject, lists, onGotoProject,selectedProjectId }) {
  
  
  return (
    <aside className="bg-stone-900 w-1/3   rounded-r-xl text-white  py-16 px-8 md:w-72 ">
      <h2 className=" uppercase font-bold mb-8 md:text-xl text-stone-200">
        Your Projects
      </h2>
    
      {/* 버튼 컴포넌트를 만들어 재사용성 증가 */}
      <Button onClick={onMakeProject}>+ Add Project</Button>

      <ul className="mt-10">
        {[...lists].map((item) => {
        let cssClasses= 'w-full text-left py-2 px-3 my-2  hover:text-stone-100 hover:bg-stone-800 rounded-md';

        //  선택된 프로젝트 강조 표시
        if( item.id===selectedProjectId ){
          cssClasses+= 'text-stone-100 bg-stone-800 '
        }
        else{
          cssClasses+= 'text-stone-300'
        }
          return (
            <li key={item.id}>
            <button className={cssClasses}onClick={()=>onGotoProject(item.id)}>
              {item.title}
              </button>
          </li>
          )
        
        })}
      </ul>
    </aside>
  );
}
