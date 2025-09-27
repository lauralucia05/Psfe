import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
// import { GoogleLogin } from '@react-oauth/google'
// import * as jwt_decode from 'jwt-decode'

const Login = () => {
  const [state, setState] = useState('Sign Up')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const { backendUrl, token, setToken } = useContext(AppContext)

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (state === 'Sign Up') {
      const { data } = await axios.post(backendUrl + '/api/user/register', { name, email, password })

      if (data.success) {
        localStorage.setItem('token', data.token)
        setToken(data.token)
        toast.success('Account created successfully!')
      } else {
        toast.error(data.message)
      }
    } else {
      const { data } = await axios.post(backendUrl + '/api/user/login', { email, password })

      if (data.success) {
        localStorage.setItem('token', data.token)
        setToken(data.token)
        toast.success('Login successful!')
      } else {
        toast.error(data.message)
      }
    }
  }

  // const handleLogin = async (credentialResponse) => {
  //   try {
  //     const decoded = jwt_decode(credentialResponse.credential);
  //     const res = await axios.post(backendUrl + '/api/user/google-login', decoded);
  //     const data = res.data;
  //     if (data.token) {
  //       localStorage.setItem('token', data.token);
  //       setToken(data.token);
  //       toast.success('Google login successful!')
  //     } else {
  //       toast.error("Google login failed");
  //     }
  //   } catch (error) {
  //     toast.error("Google login error: " + error.message);
  //   }
  // };

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [token, navigate])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <form onSubmit={onSubmitHandler} className='bg-white rounded-2xl shadow-xl p-8'>
            <div className='text-center mb-8'>
              <h2 className='text-3xl font-bold text-gray-800 mb-2'>{state === 'Sign Up' ? 'Create Account' : 'Welcome Back'}</h2>
              <p className='text-gray-600'>Please {state === 'Sign Up' ? 'sign up' : 'log in'} to access your account</p>
            </div>
            
            <div className='space-y-6'>
              {state === 'Sign Up' && (
                <div className='w-full'>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>Full Name</label>
                  <input 
                    onChange={(e) => setName(e.target.value)} 
                    value={name} 
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors' 
                    type="text" 
                    required 
                  />
                </div>
              )}
              
              <div className='w-full'>
                <label className='block text-sm font-medium text-gray-700 mb-2'>Email</label>
                <input 
                  onChange={(e) => setEmail(e.target.value)} 
                  value={email} 
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors' 
                  type="email" 
                  required 
                />
              </div>
              
              <div className='w-full'>
                <label className='block text-sm font-medium text-gray-700 mb-2'>Password</label>
                <input 
                  onChange={(e) => setPassword(e.target.value)} 
                  value={password} 
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors' 
                  type="password" 
                  required 
                />
              </div>
              
              <button 
                className='w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg'
                type="submit"
              >
                {state === 'Sign Up' ? 'Create Account' : 'Login'}
              </button>
            </div>
            
            <div className='mt-6 text-center'>
              {state === 'Sign Up' ? (
                <p className='text-gray-600'>
                  Already have an account? 
                  <span onClick={() => setState('Login')} className='text-blue-600 hover:text-blue-700 underline cursor-pointer ml-1'>
                    Login here
                  </span>
                </p>
              ) : (
                <p className='text-gray-600'>
                  Don't have an account? 
                  <span onClick={() => setState('Sign Up')} className='text-blue-600 hover:text-blue-700 underline cursor-pointer ml-1'>
                    Sign up here
                  </span>
                </p>
              )}
            </div>
          </form>
          
          {/* Temporarily disabled Google login
          <div className='mt-6 text-center'>
            <div className='relative'>
              <div className='absolute inset-0 flex items-center'>
                <div className='w-full border-t border-gray-300'></div>
              </div>
              <div className='relative flex justify-center text-sm'>
                <span className='px-2 bg-white text-gray-500'>Or continue with</span>
              </div>
            </div>
            
            <div className='mt-4 flex justify-center'>
              <GoogleLogin
                onSuccess={handleLogin}
                onError={() => toast.error("Google login failed")}
              />
            </div>
          </div>
          */}
        </div>
      </div>
    </div>
  )
}

export default Login


