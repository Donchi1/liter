import React, { useState } from 'react'

import Card from '@material-tailwind/react/Card'
import CardHeader from '@material-tailwind/react/CardHeader'
import CardBody from '@material-tailwind/react/CardBody'
import Button from '@material-tailwind/react/Button'

import { useSelector, useDispatch } from 'react-redux'
import { useFirebase } from 'react-redux-firebase'
import { updateProfileAction, passwordUpdate } from '../State/Actions'
import Compressor from 'compressorjs'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export default function SettingsForm({ profileInfo }) {
  const profileUpdateInfo = useSelector((state) => state.authReducer)

  const firebase = useFirebase()
  const dispatch = useDispatch()
  const [userData, setUserData] = useState({
    firstname: profileInfo?.firstname,
    lastname: profileInfo?.lastname,
    occupation: profileInfo?.occupation,
    aboutMe: profileInfo?.aboutMe,
    state: profileInfo?.state,
    country: profileInfo?.country,
    email: profileInfo?.email,
    phone: profileInfo?.phone,
    postalCode: profileInfo?.postalCode,
    city: profileInfo.city,
    img: profileInfo.photo,
    address: profileInfo.address,

    profileIsSubmitting: false,
  })
  const [password, setPassword] = useState({
    newPassword: '',
    oldPassword: '',
    passIsSubmitting: false,
  })

  const { newPassword, oldPassword, passIsSubmitting } = password
  const {
    firstname,
    lastname,
    occupation,
    aboutMe,
    state,
    country,
    email,
    phone,
    postalCode,
    city,

    address,

    profileIsSubmitting,
  } = userData

  const handlePassword = (e) => {
    return setPassword({ ...password, [e.target.name]: e.target.value })
  }
  const handleProfile = (e) => {
    return setUserData({ ...userData, [e.target.name]: e.target.value })
  }

  const profileOptions = {
    title: <p>Profile Update</p>,
    html: (
      <span className="text-success">
        {profileUpdateInfo.profileSuccessMessage}
      </span>
    ),
    icon: 'success',
    closeButtonColor: 'red',
    showCloseButton: true,
    closeButtonText: 'OK',
  }
  const passwordOptionsError = {
    title: <p>Password Update</p>,
    text: profileUpdateInfo.passwordSuccessMessage,
    icon: 'error',
    color: 'red',
    closeButtonColor: 'red',
    showCloseButton: true,
    closeButtonText: 'OK',
  }
  const profileOptionsError = {
    title: <p>Profile Update Error</p>,
    text: profileUpdateInfo.profileErrorMessage,
    color: 'red',
    icon: 'error',
    closeButtonColor: 'red',
    showCloseButton: true,
    closeButtonText: 'OK',
  }
  const passwordOptions = {
    title: <p>Password Update</p>,
    html: (
      <span className="text-success">
        {profileUpdateInfo.passwordSuccessMessage}
      </span>
    ),
    icon: 'success',
    closeButtonColor: 'red',
    showCloseButton: true,
    closeButtonText: 'OK',
  }
  const requiredOption = {
    title: <p>Required</p>,
    text: 'All fields are required',
    icon: 'error',
    color: 'red',
    closeButtonColor: 'red',
    showCloseButton: true,
    closeButtonText: 'OK',
  }
  const matchOption = {
    title: <p>Must Match</p>,
    text: 'Password Must Match',
    icon: 'error',
    color: 'red',
    closeButtonColor: 'red',
    showCloseButton: true,
    closeButtonText: 'OK',
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setUserData({ ...userData, isSubmitting: true })
    return updateProfileAction(userData, firebase, dispatch, setUserData)
  }

  const handlePasswordUpdate = (e) => {
    e.preventDefault()
    setPassword({ ...password, passIsSubmitting: true })
    if (oldPassword === '' || newPassword === '') {
      setPassword({ ...password, passIsSubmitting: false })
      return MySwal.fire(requiredOption)
    }
    if (oldPassword !== newPassword) {
      setPassword({ ...password, passIsSubmitting: false })
      return MySwal.fire(matchOption)
    }

    return passwordUpdate(profileInfo, password, setPassword)
  }

  if (profileUpdateInfo.profileSuccessMessage) {
    MySwal.fire(profileOptions).then(() => {
      dispatch({ type: 'PROFILE_UPLOAD_SUCCESS', message: '' })
    })
  }
  if (profileUpdateInfo.profileErrorMessage) {
    MySwal.fire(profileOptionsError).then(() => {
      dispatch({ type: 'PROFILE_UPLOAD_ERROR', message: '' })
    })
  }
  if (profileUpdateInfo.passwordSuccessMessage) {
    MySwal.fire(passwordOptions).then(() => {
      dispatch({ type: 'PASSWORD_UPLOAD_SUCCESS', message: '' })
    })
  }
  if (profileUpdateInfo.passwordErrorMessage) {
    MySwal.fire(passwordOptionsError).then(() => {
      dispatch({ type: 'PASSWORD_UPLOAD_ERROR', message: '' })
    })
  }

  const compressImg = (img) => {
    return new Compressor(img, {
      quality: 8.0,
      success: (e) => setUserData({ ...userData, img: e }),
    })
  }

  return (
    <Card className="c-bg ">
      <CardBody>
        <form onSubmit={handleSubmit}>
          <h6 className="gradient-text text-xl mt-3 mb-2 font-light uppercase">
            User Information
          </h6>
          <div className="row mt-10">
            <div className="col-12  pr-4 mb-10 font-light">
              <input
                className="w-full px-8 py-4 rounded-lg font-medium bg-transparent border border-[white] placeholder-white text-sm focus:outline-none focus:bg-opacity-10 text-white mt-4"
                type="file"
                color="purple"
                name="img"
                onChange={(e) => compressImg(e.target.files[0])}
              />
            </div>
            <div className=" pr-4 mb-10 font-light flex space-x-8 ">
              <input
                className="w-full px-8 py-4 rounded-lg font-medium bg-transparent border border-[white] placeholder-white text-sm focus:outline-none focus:bg-opacity-10 text-white mt-4"
                type="tel"
                color="purple"
                placeholder="Phone"
                name="phone"
                value={phone}
                onChange={handleProfile}
              />
              <input
                className="w-full px-8 py-4 rounded-lg font-medium bg-transparent border border-[white] placeholder-white text-sm focus:outline-none focus:bg-opacity-10 text-white mt-4"
                type="email"
                color="purple"
                placeholder="Email Address"
                name="email"
                value={email}
                onChange={handleProfile}
              />
            </div>

            <div className="pr-4 mb-10 font-light flex space-x-8">
              <input
                type="text"
                color="purple"
                className="w-full px-8 py-4 rounded-lg font-medium bg-transparent border border-[white] placeholder-white text-sm focus:outline-none focus:bg-opacity-10 text-white mt-4"
                placeholder="First Name"
                name="firstname"
                value={firstname}
                onChange={handleProfile}
              />

              <input
                className="w-full px-8 py-4 rounded-lg font-medium bg-transparent border border-[white] placeholder-white text-sm focus:outline-none focus:bg-opacity-10 text-white mt-4"
                type="text"
                color="purple"
                placeholder="Last Name"
                name="lastname"
                value={lastname}
                onChange={handleProfile}
              />
            </div>
          </div>

          <h6 className="gradient-text text-xl my-2 font-light uppercase">
            Contact Information
          </h6>
          <div className="row mt-10">
            <div className="pr-4 mb-10 font-light flex space-x-8 ">
              <input
                className="w-full px-8 py-4 rounded-lg font-medium bg-transparent border border-[white] placeholder-white text-sm focus:outline-none focus:bg-opacity-10 text-white mt-4"
                type="text"
                color="purple"
                placeholder="Address"
                name="address"
                value={address}
                onChange={handleProfile}
              />

              <input
                className="w-full px-8 py-4 rounded-lg font-medium bg-transparent border border-[white] placeholder-white text-sm focus:outline-none focus:bg-opacity-10 text-white mt-4"
                type="text"
                color="purple"
                placeholder="City"
                name="city"
                value={city}
                onChange={handleProfile}
              />
            </div>
            <div className="pr-4 mb-10 font-light flex space-x-8">
              <input
                className="w-full px-8 py-4 rounded-lg font-medium bg-transparent border border-[white] placeholder-white text-sm focus:outline-none focus:bg-opacity-10 text-white mt-4"
                type="text"
                color="purple"
                placeholder="Country"
                name="country"
                value={country}
                onChange={handleProfile}
              />

              <input
                className="w-full px-8 py-4 rounded-lg font-medium bg-transparent border border-[white] placeholder-white text-sm focus:outline-none focus:bg-opacity-10 text-white mt-4"
                type="text"
                color="purple"
                placeholder="State"
                name="state"
                value={state}
                onChange={handleProfile}
              />
            </div>
            <div className="pr-4 mb-10 font-light flex space-x-8">
              <input
                type="text"
                className="w-full px-8 py-4 rounded-lg font-medium bg-transparent border border-[white] placeholder-white text-sm focus:outline-none focus:bg-opacity-10 text-white mt-4"
                color="purple"
                placeholder="Occupation"
                name="occupation"
                value={occupation}
                onChange={handleProfile}
              />

              <input
                type="text"
                color="purple"
                className="w-full px-8 py-4 rounded-lg font-medium bg-transparent border border-[white] placeholder-white text-sm focus:outline-none focus:bg-opacity-10 text-white mt-4"
                placeholder="Postal Code"
                name="postalCode"
                value={postalCode}
                onChange={handleProfile}
              />
            </div>
          </div>

          <h6 className="gradient-text text-xl my-3 font-light uppercase">
            About Me
          </h6>
          <div className="row  mt-10 font-light">
            <div className="col-12">
              <textarea
                color="purple"
                placeholder="About Me"
                className="w-full px-8 py-4 rounded-lg font-medium bg-transparent border border-[white] placeholder-white text-sm focus:outline-none focus:bg-opacity-10 text-white mt-4"
                name="aboutMe"
                cols={5}
                rows={5}
                value={aboutMe}
                onChange={handleProfile}
              />
            </div>
          </div>
          <div className="flex flex-wrap mt-5 font-light">
            <button
              type="submit"
              disabled={profileIsSubmitting}
              className="more-btn w-full mt-4"
            >
              Update
            </button>
          </div>
        </form>
        <form onSubmit={handlePasswordUpdate}>
          <h6 className="gradient-text text-xl my-4 font-light uppercase">
            Password
          </h6>
          <div className="flex flex-wrap mt-4">
            <div className="w-full lg:w-12/12 mb-8 font-light">
              <input
                className="w-full px-8 py-4 rounded-lg font-medium bg-transparent border border-[white] placeholder-white text-sm focus:outline-none focus:bg-opacity-10 text-white mt-4"
                type="password"
                name="newpassword"
                color="purple"
                placeholder="New password"
                value={newPassword}
                onChange={handlePassword}
              />
            </div>
            <div className="w-full lg:w-12/12  mb-10 font-light">
              <input
                type="text"
                color="purple"
                name="oldpassword"
                className="w-full px-8 py-4 rounded-lg font-medium bg-transparent border border-[white] placeholder-white text-sm focus:outline-none focus:bg-opacity-10 text-white mt-4"
                placeholder="Repeat Password"
                value={oldPassword}
                onChange={handlePassword}
              />
            </div>
            <div className="w-full lg:w-12/12 pr-4 mb-5 font-light">
              <button
                type="submit"
                disabled={passIsSubmitting}
                className="more-btn w-full mt-4"
              >
                Update
              </button>
            </div>
          </div>
        </form>
      </CardBody>
    </Card>
  )
}
