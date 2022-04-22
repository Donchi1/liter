import React, { useState } from 'react'
import { forgetAction } from '../../State/Actions'
import resetSvg from '../../assets/img/banner_img2.png'
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
    textChange: 'Submit',
  })

  const authMessage = useSelector((state) => state.authReducer)

  const { email, textChange } = formData
  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setFormData({ ...formData, textChange: 'Submiting...' })

    if (email) {
      return forgetAction(dispatch, firebase, formData, setFormData)
    }
    setFormData({ ...formData, textChange: 'Submit' })
    return MySwal.fire({
      title: 'Error',
      text: 'All fields are required',
      color: 'red',
      icon: 'error',
      timer: 6000,
      showCloseButton: true,
    })
  }
  if (authMessage.passResetSuccessMessage) {
    return MySwal.fire({
      title: 'Success',
      html: (
        <span className="text-green-500">
          {authMessage.passResetSuccessMessage}
        </span>
      ),
      showCloseButton: true,
      timer: 6000,
    }).then(() => {
      return dispatch({ type: 'PASSRESET_SUCCESS', message: '' })
    })
  }
  if (authMessage.passResetErrorMessage) {
    return MySwal.fire({
      title: 'Error',
      text: authMessage.passResetErrorMessage,
      color: 'orange',
      showCloseButton: true,
      timer: 6000,
    }).then(() => {
      return dispatch({ type: 'PASSRESET_ERROR', message: '' })
    })
  }

  return (
    <div className="min-h-screen  flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-20 bg-[#322194] shadow sm:rounded-lg  flex justify-center flex-1 flex-wrap">
        <div className="lg:w-1/2 xl:w-5/12 sm:w-full p-6 sm:p-12">
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-2xl font-black uppercase text-white">
              Password Reset
            </h1>

            <form className="w-full flex-1 mt-8 " onSubmit={handleSubmit}>
              <div className="mx-auto max-w-xl  relative ">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-transparent border border-[white] placeholder-white text-sm focus:outline-none focus:bg-opacity-10 text-white mt-3"
                  type="email"
                  placeholder="Email"
                  onChange={handleChange('email')}
                  value={email}
                />

                <button type="submit" className="w-full more-btn mt-4 ">
                  <i className="fas fa-user-plus fa 1x w-6  -ml-2" />
                  <span className="ml-3">{textChange}</span>
                </button>
                <div className="my-12 border-b text-center">
                  <div className="leading-none px-2 inline-block text-md text-indigo-400 tracking-wide font-medium  transform translate-y-1/2">
                    Or Login
                  </div>
                </div>
                <div className="mx-auto mx-w-sm w-full">
                  <Link className="w-full more-btn mt-4" to="/login">
                    <i className="fas fa-sign-in-alt fa 1x w-6  -ml-2 text-white" />
                    <span className="ml-4">Login</span>
                  </Link>
                  <Link className="w-full more-btn mt-4 " to="/register">
                    <i className="fas fa-sign-in-alt fa 1x w-6  -ml-2 text-white" />
                    <span className="ml-4">Register</span>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="flex-1 bg-indigo-100 text-center lg:flex hidden">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${resetSvg})` }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default Login
