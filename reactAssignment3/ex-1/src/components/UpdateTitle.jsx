import { useState, useEffect } from "react";


const UpdateTitle =() =>{
    const [title,setTitle] = useState('Default Title');

    useEffect (()=>{
        document.title = title
    },[title])


    return(
        <div>
            <h1>Update Document Title</h1>
            <input
             type="text"
             value={title}
             onChange={(e)=> setTitle(e.target.value)}
             placeholder="Enter a new title"
         />
        </div>
    )
}

export default UpdateTitle