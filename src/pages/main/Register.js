import React, { useState } from 'react'
import Swal from 'sweetalert2'
import { registerAction } from '../../State/Actions'
import withReactContent from 'sweetalert2-react-content'
import authSvg from '../../assets/img/about-3.png'
import { useDispatch, useSelector } from 'react-redux'
import { useFirebase } from 'react-redux-firebase'
import { useHistory } from 'react-router-dom'
import Compressor from 'compressorjs'
import { Link } from 'react-router-dom'

const MySwal = withReactContent(Swal)

const Register = () => {
  const firebase = useFirebase()
  const dispatch = useDispatch()
  const authMessage = useSelector((state) => state.authReducer)
  const { push } = useHistory()

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    country: '',
    state: '',
    occupation: '',
    email: '',
    photo: '',
    phone: '',
    password1: '',
    password2: '',
    textChange: 'Sign Up',
  })

  const {
    firstname,
    lastname,
    email,
    password1,
    password2,
    phone,
    textChange,
    country,
    state,
    occupation,
    photo,
  } = formData
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      firstname &&
      lastname &&
      email &&
      password1 &&
      country &&
      state &&
      occupation &&
      phone &&
      photo
    ) {
      if (password1 === password2) {
        setFormData({ ...formData, textChange: 'Submitting...' })
        return registerAction(formData, firebase, dispatch, setFormData)
      } else {
        return MySwal.fire({
          title: 'Error',
          text: 'Password must match',
          color: 'red',
          icon: 'error',
          timer: 6000,
          showCloseButton: true,
        })
      }
    }

    return MySwal.fire({
      title: 'Error',
      text: 'All fields are required',
      color: 'red',
      icon: 'error',
      timer: 6000,
      showCloseButton: true,
    })
  }

  const compressPhoto = (img) => {
    new Compressor(img, {
      quality: 0.8,
      success: (file) => setFormData({ ...formData, photo: file }),
    })
  }

  if (authMessage.signupSuccess) {
    MySwal.fire({
      title: 'Success',
      html: <span className="text-green-500">{authMessage.signupSuccess}</span>,
      showCloseButton: true,
      timer: 6000,
      icon: 'success',
    }).then(() => {
      push('/login')
      return dispatch({ type: 'SIGNUP_SUCCESS', message: '' })
    })
  }
  if (authMessage.signupError) {
    MySwal.fire({
      title: 'Error',
      text: authMessage.signupError,
      color: 'orange',
      icon: 'error',
      showCloseButton: true,
      timer: 6000,
    }).then(() => {
      return dispatch({ type: 'SIGNUP_ERROR', message: '' })
    })
  }

  return (
    <div className="min-h-screen footer-bg homepage-3 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-20 bg-[#322194] shadow sm:rounded-lg flex justify-center flex-1 flex-wrap">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-2xl font-black uppercase text-white">
              Sign Up
            </h1>

            <form className="w-full flex-1 mt-8 " onSubmit={handleSubmit}>
              <div className="mx-auto max-w-xl  relative ">
                <div className="flex space-x-2">
                  <input
                    className="w-full  px-8 py-4 rounded-lg font-medium bg-transparent border border-[white] placeholder-white text-xs focus:outline-none focus:bg-opacity-10 text-white mt-4"
                    type="text"
                    placeholder="firstname"
                    name="firstname"
                    onChange={handleChange}
                    value={firstname}
                  />
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-transparent border border-[white] placeholder-white text-xs focus:outline-none focus:bg-opacity-10 text-white mt-4"
                    type="text"
                    placeholder="lastname"
                    onChange={handleChange}
                    name="lastname"
                    value={lastname}
                  />
                </div>
                <div className="flex space-x-2">
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-transparent border border-[white] placeholder-white text-xs focus:outline-none focus:bg-opacity-10 text-white mt-4"
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={handleChange}
                    value={email}
                  />
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-transparent border border-[white] placeholder-white text-xs focus:outline-none focus:bg-opacity-10 text-white mt-4"
                    type="tel"
                    placeholder="Number"
                    name="phone"
                    onChange={handleChange}
                    value={phone}
                  />
                </div>
                <div className="flex space-x-2">
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-transparent border border-[white] placeholder-white text-xs focus:outline-none focus:bg-opacity-10 text-white mt-4"
                    type="password"
                    placeholder="Password"
                    name="password1"
                    onChange={handleChange}
                    value={password1}
                  />
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-transparent border border-[white] placeholder-white text-xs focus:outline-none focus:bg-opacity-10 text-white mt-4"
                    type="password"
                    placeholder="Confirm Password"
                    onChange={handleChange}
                    name="password2"
                    value={password2}
                  />
                </div>
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-transparent border border-[white] placeholder-white text-xs focus:outline-none focus:bg-opacity-10 text-white mt-4"
                  type="text"
                  placeholder="Enter country"
                  name="country"
                  onChange={handleChange}
                  value={country}
                />
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-transparent border border-[white] placeholder-white text-xs focus:outline-none focus:bg-opacity-10 text-white mt-4"
                  type="text"
                  placeholder=" Enter state"
                  name="state"
                  onChange={handleChange}
                  value={state}
                />
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-transparent border border-[white] placeholder-white text-xs focus:outline-none focus:bg-opacity-10 text-white mt-4"
                  type="text"
                  placeholder="Enter occupation"
                  onChange={handleChange}
                  name="occupation"
                  value={occupation}
                />
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-transparent border border-[white] placeholder-white text-xs focus:outline-none focus:bg-opacity-10 text-white mt-4"
                  type="file"
                  placeholder="Your Photo"
                  onChange={(e) => compressPhoto(e.target.files[0])}
                />
                <button
                  disabled={textChange === 'Submitting...'}
                  type="submit"
                  className="mt-8 more-btn w-full"
                >
                  <i className="fas fa-user-plus fa 1x w-6  -ml-2" />
                  <span className="ml-3">{textChange}</span>
                </button>
                <div className="my-10 border-b text-center">
                  <div className="leading-none px-2 inline-block text-md text-indigo-400 tracking-wide font-medium transform translate-y-1/2">
                    Or sign with email
                  </div>
                </div>
                <div className="mx-auto mx-w-sm w-full">
                  <Link className=" more-btn w-full" to="/login">
                    <i className="fas fa-sign-in-alt fa 1x w-6  -ml-2 text-indigo-500" />
                    <span className="ml-4">Sign In</span>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${authSvg})` }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default Register
