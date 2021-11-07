import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'



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
        
        <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
            <h3 className="text-2xl font-bold text-center">Login to your account</h3>
            <form onSubmit={handleSubmit}>
                <div className="mt-4">
                    <div>
                        <label class="block" for="email">Email</label>
                                <input name='email' label='Email Address' handleChange={handleChange} type='email'
                                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                />
                    </div>
                    <div class="mt-4">
                        <label className="block">Password</label>
                                <input type="password" placeholder="Password" handleChange={handleChange}
                                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                    </div>
                    <div className="flex items-baseline justify-between">
                        <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Login</button>
                        
                    </div>
                </div>
            </form>
        </div>
    
    )
}

export default Auth
