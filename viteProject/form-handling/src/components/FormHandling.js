import { useRef, useState } from 'react'

const FormHandling = () => {

    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const phoneRef = useRef(null)

    const [nameError, setNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [formData, setFormData] = useState({})

    const handleFocus = (ref) => {
        ref.current.focus()
    }

    const validateName = () => {
        if(nameRef.current.value.length < 4){
            setNameError("Name must be greater than 4 character")
        } else {
            setNameError('')
        }
    }

    const validateEmail = () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ ;
        if (!emailPattern.test(emailRef.current.value)){
            setEmailError('Invalid email address')
        } else {
            setEmailError('')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const phone = phoneRef.current.value;

        if(name && email && phone){
            setFormData({name,email,phone});
        } else {

        }
    }

    return (
        <div>
            <h1>Advance Form Handling with useRef</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                     ref={nameRef}
                        type='text'
                        onChange={validateName}
                    />
                    {nameError && <span style={{color: 'red'}}>{nameError}</span>}
                    <button type='button' onClick={() => handleFocus(nameRef)}>Focus Name</button>
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        ref={emailRef}
                        type='text'
                        onChange={validateEmail}
                    />
                     {emailError && <span style={{color: 'red'}}>{emailError}</span>}
                    <button type='button' onClick={() => handleFocus(emailRef)}>Focus Email</button>
                </div>
                <div>
                    <label>Phone Number:</label>
                    <input
                        ref={phoneRef}
                        type='number'
                    />
                    <button type='button' onClick={() => handleFocus(phoneRef)}>Focus Number</button>
                </div>
                <button type='submit'>Submit</button>
            </form>
            {formData.name && (
                <div>
                    <h2>Form Data</h2>
                    <p>Name: {formData.name}</p>
                    <p>Email: {formData.email}</p>
                    <p>Phone: {formData.phone}</p>
                </div>
            )}
        </div>
    )
}
export default FormHandling