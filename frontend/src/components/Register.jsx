import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const Register = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm_password, setConfirmPassword] = useState('')
    const [errors, setErrors] = useState({})
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleRegistration = async (e) => {
        e.preventDefault();
        setLoading(true)
        const userData = {username, email, password, confirm_password}
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/v1/register/', userData)
            console.log('response.data====>',response.data)
            console.log('Registration successful')
            setErrors({})
            setSuccess(true)
            setUsername('')
            setEmail('')
            setPassword('')
            setConfirmPassword('')
        } catch (error) {
            setErrors(error.response.data)
            console.error('Registration error: ', error.response.data)
        } finally{
            setLoading(false)
        }
    }
  return (
    <>
        
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6 bg-light-dark p-5 rounded">
                    {success && 
                    <div className="alert alert-success alert-dismissible fade show" role="alert">
                        <strong>Registration</strong> Successful.
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                    }
                    <h3 className="text-light text-center mb-5">Create an Account</h3>
                    <form action="" onSubmit={handleRegistration}>
                        <div className="mb-3">
                            <input type="text" className='form-control' placeholder='Username' value={username} onChange={(e)=>setUsername(e.target.value)} />
                            <small>{errors.username && <div className="text-danger">{errors.username}</div>}</small>
                        </div>
                        
                        <div className="mb-3"> 
                            <input type="email" className='form-control' placeholder='Email address' value={email} onChange={(e)=>setEmail(e.target.value)} />
                            <small>{errors.email && <div className="text-danger">{errors.email}</div>}</small>
                        </div>

                        <div className="mb-3">
                            <input type="password" className='form-control' placeholder='Create password' value={password} onChange={(e)=>setPassword(e.target.value)} />
                            <small>{errors.password && <div className="text-danger">{errors.password}</div>}</small>
                        </div>

                        <div className="mb-5">
                            <input type="password" className='form-control' placeholder='Confirm password' value={confirm_password} onChange={(e)=>setConfirmPassword(e.target.value)} />
                            <small>{errors.password && <div className="text-danger">{errors.password}</div>}</small>
                        </div>

                        {loading?(
                            <button type="submit" className={`btn btn-secondary d-block mx-auto mb-3`} disabled><FontAwesomeIcon icon={faSpinner} spin />Please wait..</button>
                        ): (
                            <button type="submit" className='btn btn-light d-block mx-auto mb-3'>Register</button>
                        )}
                        
                        <p className='text-white text-center'>Already have an account? <Link to={'/login'}>Sign In</Link></p>
                    </form>
                </div>

            </div>
        </div>
    </>
  )
}

export default Register