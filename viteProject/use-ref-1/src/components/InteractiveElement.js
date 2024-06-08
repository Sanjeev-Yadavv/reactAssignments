import { useRef } from "react";

const InteractiveElement = () => {

const divRef = useRef(null)

const handleClick = () => {
    divRef.current.style.backgroundColor = 'lightblue'
    console.log('clicked')
}




    return (
        <div>
            <div ref={divRef}
                 onClick={handleClick}
                 style={{width:'200px',height: '200px', backgroundColor: 'blue', cursor: 'pointer'}}
            >
                Click me to change the color
            </div>
        </div>
    )
}

export default InteractiveElement