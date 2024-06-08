import {useRef,useState} from 'react'

const UncontrolledInput = () => {
    const inputRef = useRef(null)
    const [value, setValue] = useState('')

    const handleInputChange = () => {

        setValue(inputRef.current.value)
    }


    return (
        <div>
            <h1>Manage uncontrolled input change</h1>
            <input
            ref={inputRef}
            onChange={handleInputChange}
            type='text'
            />
            <p>Current Value: {value}</p>
        </div>
    )
}
export default UncontrolledInput