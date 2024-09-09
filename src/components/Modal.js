import { forwardRef, useImperativeHandle, useRef } from "react"
import { createPortal } from "react-dom";
import Button from "./Button";

const Modal= forwardRef(function Modal({children},ref){

    const dialog =useRef();
    useImperativeHandle(ref,()=>{
        return {
            open(){
                dialog.current.showModal();
            },
            close(){
                dialog.current.close();
            }
        }
    })
    return createPortal(<dialog ref={dialog} className="bg-stone-50 rounded shadow  max-w-lg  text-stone-950 p-10  backdrop:bg-stone-900/90  " >
           {children}
           <form method="dialog" className="text-right mt-5  animation-slide">
                 <Button>Close</Button>
           </form>
    </dialog>,document.getElementById('modal'))
});


export default Modal;