import {useEffect,useRef} from 'react'


function FocusInput() {

    const inputRef = useRef(null)
   
    useEffect (() =>{

        inputRef.current.focus()
    },[])
    return (
        <div>
            <h1>Below Input box is focusable input box</h1>
            <input ref={inputRef} type="text" name="" id="" />
           
        </div>
    )
}
export default FocusInput