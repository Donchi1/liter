import React, { useState } from 'react'
import { loginAction } from '../../State/Actions'
import loginSvg from '../../assets/img/about-1.png'
import { useDispatch, useSelector } from 'react-redux'
import { useFirebase } from 'react-redux-firebase'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const Login = () => {
  const firebase = useFirebase()
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    email: '',
    password1: '',
    textChange: 'Login',
  })
  const authMessage = useSelector((state) => state.authReducer)

  const { email, password1, textChange } = formData
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (email && password1) {
      setFormData({ ...formData, textChange: 'Submitting...' })
      return loginAction(formData, firebase, dispatch, setFormData)
    } else {
      return MySwal.fire({
        title: 'Error',
        text: 'All fields are required',
        icon: 'error',
        color: 'orange',
        timer: 6000,
        showCloseButton: true,
      })
    }
  }

  if (authMessage.loginSuccess) {
    MySwal.fire({
      title: 'Success',
      html: <span className="text-green-500">{authMessage.loginSuccess}</span>,
      showCloseButton: true,
      icon: 'success',
      timer: 6000,
    }).then(() => {
      window.location.assign('/user/dashboard')
      return dispatch({ type: 'LOGIN_SUCCESS', message: '' })
    })
  }
  if (authMessage.loginError) {
    MySwal.fire({
      title: 'Error',
      text: authMessage.loginError,
      color: 'red',
      icon: 'error',
      showCloseButton: true,
      timer: 6000,
    }).then(() => {
      return dispatch({ type: 'LOGIN_ERROR', message: '' })
    })
  }

  return (
    <div className="min-h-screen footer-bg  homepage-3  flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-20 bg-[#322194] shadow sm:rounded-lg flex justify-center flex-1 flex-wrap">
        <div className="lg:w-1/2 xl:w-5/12 sm:w-full p-6 sm:p-12">
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-2xl font-black uppercase text-white">
              Login
            </h1>

            <form className="w-full flex-1 mt-8 " onSubmit={handleSubmit}>
              <div className="mx-auto max-w-xl  relative  ">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-transparent border border-[white] placeholder-white text-sm focus:outline-none focus:bg-opacity-10 text-white mt-2"
                  type="email"
                  placeholder="Enter Email"
                  onChange={handleChange}
                  name="email"
                  value={email}
                />

                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-transparent border border-[white] placeholder-white text-sm focus:outline-none focus:bg-opacity-10 text-white mt-8"
                  type="password"
                  placeholder="Enter Password"
                  name="password1"
                  onChange={handleChange}
                  value={password1}
                />

                <button
                  disabled={textChange === 'Submitting...'}
                  type="submit"
                  className="more-btn w-full  mt-8"
                >
                  <i className="fas fa-sign-in-alt fa 1x w-6 text-white -ml-2" />
                  <span className="ml-3">{textChange}</span>
                </button>
                <div className="my-9 border-b text-center">
                  <div className="leading-none px-2 inline-block text-md text-indigo-400 tracking-wide font-medium  transform translate-y-1/2">
                    Or Register
                  </div>
                </div>

                <div className="mx-auto mx-w-sm w-full">
                  <Link className="more-btn w-full " to="/register">
                    <i className="fas fa-user-plus  fa 1x w-6  -ml-2 text-indigo-700" />
                    <span className="ml-4">Register</span>
                  </Link>
                  <Link className="more-btn w-full mt-8" to="/reset">
                    <span className="ml-4">Forget password</span>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="flex-1 bg-indigo-100 text-center lg:flex hidden">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat "
            style={{ backgroundImage: `url(${loginSvg})` }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default Login
