import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router'



const initialState = { firstname: '', lastName: '', email: '', password: '', confirmPassword: ''}
const Auth = () => {
    
    const [isSignUp, setIsSignUp] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const dispatch = useDispatch()
    const history = useHistory()
    const [formData, setFormData] = useState(initialState)

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(login(formData, history))
        /*
        if (isSignUp) {
            dispatch(signup(formData, history))
        } else {
            dispatch(signin(formData, history))
        }
        */
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    //just an email and a password to mock login to an account
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name='email' label='Email Address' handleChange={handleChange} type='email'/>
                <input name='password' label='Password' handleChange={handleChange} type='password'/>
            </form>
        </div>
    )
}

export default Auth
