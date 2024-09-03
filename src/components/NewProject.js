import { useRef } from "react";
import Input from "./Input";
import { forwardRef } from "react";

const NewProject = forwardRef(function NewProject({ onSave, onCancel }, ref) {
  //   const ref1 = useRef("");
  //   const ref2 = useRef("");
  //   const ref3 = useRef("");
  //   ref = [ref1, ref2, ref3];

  return (
    <div className="w-3/5 mt-16">
      <menu className="flex items-center justify-end">
        <button
          className="text-stone-950 px-5 py-2 hover:text-stone-500"
          onClick={() => onCancel()}
        >
          Cancel
        </button>
        <button
          className="bg-stone-800 text-stone-50 px-5 py-2 rounded-md hover:text-stone-200 hover:bg-stone-700 "
          onClick={() => onSave()}
        >
          Save
        </button>
      </menu>
      <div className="mt-10">
        <Input ref={ref[0]} isTextarea={false} label="Title" type="text" />
        <Input ref={ref[1]} isTextarea={true} label="Description" />
        <Input ref={ref[2]} isTextarea={false} label="Due Date" type="date" />
      </div>
    </div>
  );
});

export default NewProject;
