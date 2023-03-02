import React, { useState } from 'react'
import { Link, Redirect, useHistory, useLocation } from 'react-router-dom'
import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'
import axios from 'axios'

import Image from '@material-tailwind/react/Image'
import Dropdown from '@material-tailwind/react/Dropdown'
import DropdownItem from '@material-tailwind/react/DropdownItem'
import ProfilePicture from 'assets/img/avater.png'
import { LogoutAction } from '../State/Actions'
import { isLoaded, useFirebase, useFirestoreConnect } from 'react-redux-firebase'
import { useDispatch, useSelector } from 'react-redux'
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Input,
} from '@material-tailwind/react'
import img1 from '../assets/img/qrcode.jpg'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export default function AdminNavbar({
  showSidebar,
  setShowSidebar,
  accessCodeInfo,
  setAccessCodeInfo,
}) {
  const location = useLocation().pathname
  const { push } = useHistory()
  const firebase = useFirebase()
  const dispatch = useDispatch()
  const profileInfo = useSelector((state) => state.firebase.profile)
  

  const handleLogout = () => {
    return LogoutAction(firebase, dispatch)
  }

  useFirestoreConnect([
    {
      collection: 'users',
      doc:
        profileInfo?.uid ||
        firebase.auth().currentUser.uid ||
        'sghfryujkydiluhugsfaghasjhajk',
    },
    {
      collection: 'payments',
      doc:
        profileInfo?.uid ||
        firebase.auth().currentUser.uid ||
        'sghfryujkydiluhugsfaghasjhajk',
      subcollections: [
        {
          collection: 'paymentDatas',

          orderBy: ['date', 'desc'],
          limit: 5,
        },
      ],

      storeAs: 'paymentInDatabase',
    },
    {
      collection: 'withdrawals',
      doc:
        profileInfo?.uid ||
        firebase.auth().currentUser.uid ||
        'sghfryujkydiluhugsfaghasjhajk',
      subcollections: [
        {
          collection: 'withdrawalDatas',

          orderBy: ['date', 'desc'],
          limit: 5,
        },
      ],
      storeAs: 'withdrawalInDatabase',
    },
  ])

  const [accessCodeProve, setAccessCodeProve] = useState({
    open: false,
    price: '',
    isSubmitting: false,
  })

  const [accessCodeSchema, setAccessCodeSchema] = useState({
    accessCode: '',
    accessProve: '',
  })

  const handleSubmit2 = (e) => {
    e.preventDefault()
    setAccessCodeInfo({ ...accessCodeInfo, isSubmitting: true })
    if (accessCodeSchema.accessProve === '') {
      return setAccessCodeInfo({ ...accessCodeInfo, isSubmitting: false })
    }
    return accessCodeProveAction(accessCodeSchema, setAccessCodeSchema)
  }

  const accessCodeProveAction = (values, setFormData) => {
    const user = firebase.auth().currentUser
    firebase
      .storage()
      .ref('accessCodeProves')
      .child(user.uid)
      .put(values.accessProve)
      .then(() => {
        firebase
          .storage()
          .ref(`accessCodeProves/${user.uid}`)
          .getDownloadURL()
          .then((url) => {
            firebase
              .firestore()
              .collection('users')
              .doc(user.uid)
              .update({
                accessCodeProve: url,
              })
              .then(() => {
                axios
                  .post(
                    `${process.env.REACT_APP_APIURL}/api/accessCodeProve`,
                    profileInfo,
                  )
                  .then((res) => {
                    setFormData({
                      ...values,
                      accessCodeProve: '',
                      isSubmitting: false,
                    })
                    return MySwal.fire({
                      title: (
                        <p className="text-green-500">Access prove success</p>
                      ),
                      html: (
                        <span className="text-green-500">
                          {' '}
                          Your access code prove has been sent successfully.
                          Wait for less than 24hours while we verify your
                          prove..
                        </span>
                      ),
                      icon: 'success',
                      timer: 7000,
                      showCloseButton: true,
                      closeButtonText: 'Ok',
                    })
                  })
                  .catch((error) => {
                    setFormData({
                      ...values,
                      accessCodeProve: '',
                      isSubmitting: false,
                    })
                    return MySwal.fire({
                      title: (
                        <p className="text-green-500">Access prove success</p>
                      ),
                      html: (
                        <span className="text-green-500">
                          {' '}
                          Your access code prove has been sent successfully.
                          Wait for less than 24hours while we verify your prove.
                          We are sorry we couldn't proccess your email. Please
                          check if your email is correct.
                        </span>
                      ),
                      icon: 'success',
                      timer: 7000,
                      showCloseButton: true,
                      closeButtonText: 'Ok',
                    })
                  })
              })
              .catch((err) => {
                setFormData({
                  ...values,
                  accessCodeProve: '',
                  isSubmitting: false,
                })
                return MySwal.fire({
                  title: <p className="text-red-500">Access prove error</p>,
                  html: <span className="text-red-500">{err}</span>,
                  icon: 'error',
                  timer: 3000,
                  showCloseButton: true,
                  closeButtonText: 'Ok',
                })
              })
          })
      })
  }

  const handleSubmit1 = (e) => {
    e.preventDefault()
    setAccessCodeInfo({ ...accessCodeInfo, isSubmitting: true })
    if (accessCodeInfo.accessCode === '') {
      setAccessCodeInfo({ ...accessCodeInfo, isSubmitting: false })
      return MySwal.fire({
        title: <p className="text-red-500">No Access</p>,
        html: <span className="text-red-500">Access Code Required</span>,
        showCloseButton: true,
      })
    }
    return accessCodeCheck()
  }
  const accessCodeCheck = () => {
    if (accessCodeInfo.accessCode !== profileInfo.accessCode) {
      return accessAction('notVerified')
    } else {
      return accessAction('verified')
    }
  }

  const accessAction = (status) => {
    if (status === 'notVerified') {
      return new Promise((resolve, reject) => {
        setTimeout(reject('Expired or Invalid Access Code'), 5000)
      }).catch((e) => {
        setAccessCodeInfo({
          ...accessCodeInfo,
          isSubmitting: false,
        })
        return MySwal.fire({
          title: <p className="text-red-500">Access Code Error</p>,
          html: <span className="text-red-500">{e}</span>,
          icon: 'error',
          showCloseButton: true,
          closeButtonText: 'Ok',
          footer: <p>Access code expired at {new Date().getFullYear()}</p>,
        })
      })
    }
    if (status === 'verified') {
      return new Promise((resolve, reject) => {
        setTimeout(resolve('Access Code Success'), 4000)
      }).then((message) => {
        setAccessCodeInfo({
          ...accessCodeInfo,

          isSubmitting: false,
        })
        MySwal.fire({
          title: <p className="text-green-500">Access Success</p>,
          html: <span className="text-green-500">{message}</span>,
          icon: 'success',

          showCloseButton: true,
          closeButtonText: 'Ok',
        }).then(() => {
          return push('/user/withdrawals')
        })
      })
    }
  }

  if (!isLoaded(profileInfo)) {
    return (
      <div className="flex justify-center items-center transform -translate-y-2/4 -translate-x-full">
        <div className="spinner-grow inline-block w-20 h-20 bg-red-400 rounded-full opacity-0">
          <span className="visually-hidden">loading...</span>
        </div>
      </div>
    )
  }
  
  if(!profileInfo?.verified || profileInfo?.verified === "false"){
    return <Redirect to="/verify"  />
  }

  return (
    <>
      <Modal
        active={accessCodeInfo.open}
        size="lg"
        toggler={() => setAccessCodeInfo({ ...accessCodeInfo, open: false })}
      >
        <form onSubmit={handleSubmit1}>
          <ModalHeader
            toggler={() =>
              setAccessCodeInfo({ ...accessCodeInfo, open: false })
            }
          >
            Access Code
          </ModalHeader>
          <ModalBody>
            <p>
              Access code is a personal withdrawal authorization code, to secure
              your withdrawal against scammers.
            </p>
            <div className="flex flex-wrap mt-10">
              <div className="w-full  pr-4 mb-10 font-light">
                <Input
                  type="text"
                  name="accessCode"
                  size="xl"
                  placeholder="Enter Access Code"
                  onChange={(e) =>
                    setAccessCodeInfo({
                      ...accessCodeInfo,
                      accessCode: e.target.value,
                    })
                  }
                  value={accessCodeInfo.accessCode}
                />
              </div>
            </div>
            <div className="flex flex-wrap mt-10">
              <div className="w-full  pr-4 mb-10 font-light">
                <p className="text-center gradient-text">Don"t have ?</p>
                <button
                  type="button"
                  className="more-btn w-full"
                  onClick={() => {
                    setAccessCodeProve({ ...accessCodeProve, open: true })
                    setAccessCodeInfo({ ...accessCodeInfo, open: false })
                  }}
                >
                  Get One
                </button>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <button className="more-btn w-full" type="submit">
              Submit
            </button>
            <button
              type="button"
              className="more-btn w-full"
              onClick={() =>
                setAccessCodeInfo({ ...accessCodeInfo, open: false })
              }
            >
              Cancel
            </button>
          </ModalFooter>
        </form>
      </Modal>

      <Modal
        active={accessCodeProve.open}
        toggler={() => setAccessCodeProve({ open: false })}
        size="lg"
      >
        <ModalHeader toggler={() => setAccessCodeProve({ open: false })}>
          Access Code Prove
        </ModalHeader>
        <ModalBody>
          <h6 className="text-gray-500 mb-2">
            Make payment with the bellow btc wallet address and upload Prove
          </h6>
          <div className="text-center flex flex-col justify-center items-center">
            <img src={img1} width="300px" alt="Code" />
            <p className="gradient-text"> 37GUcvSwbzRaMRQzVX83bdzKQSjoFjCqJS</p>
          </div>

          <form onSubmit={handleSubmit2}>
            <div className="flex flex-wrap mt-10">
              <div className="w-full  pr-4 mb-10 font-light">
                <Input
                  type="file"
                  name="accessProve"
                  required
                  onChange={(e) =>
                    setAccessCodeSchema({
                      ...accessCodeSchema,
                      accessProve: e.target.files[0],
                    })
                  }
                />
              </div>
            </div>
            <button
              className="more-btn w-full"
              type="submit"
              disabled={accessCodeProve.isSubmitting}
            >
              Upload
            </button>
          </form>
        </ModalBody>
      </Modal>
      <nav className="bg-[#ffffff0d] border py-6 px-3 shadow-lg">
        <div className="container max-w-full mx-auto flex items-center justify-between md:pr-8 md:pl-10">
          <div className="md:hidden">
            <Button
              color="transparent"
              buttonType="link"
              size="lg"
              iconOnly
              rounded
              ripple="light"
              onClick={() => setShowSidebar('-left-2')}
            >
              <Icon name="menu" size="2xl" color="white" />
            </Button>
            <div
              className={`absolute top-2 md:hidden ${
                showSidebar === '-left-2' ? 'left-60' : '-left-60'
              } z-50 transition-all duration-300`}
            >
              <Button
                color="transparent"
                buttonType="link"
                size="lg"
                iconOnly
                rounded
                ripple="light"
                onClick={() => setShowSidebar('-left-60')}
              >
                <Icon name="close" size="2xl" color="white" />
              </Button>
            </div>
          </div>

          <div className="flex justify-end lg:justify-between items-center  w-full ">
            <h4 className="uppercase hidden lg:block text-white text-lg tracking-wider mt-1 lg:ml-72">
              {location === '/user/dashboard'
                ? 'DASHBOARD'
                : location.toUpperCase().replace('/', '')}
            </h4>

            <div className="flex justify-center items-center">
              <div className="hidden lg:block">
                <span className="block px-10  rounded-full border text-white border-[#f17674]">
                  welcome {profileInfo.firstname && profileInfo.firstname}
                </span>
              </div>

              <div className="-mr-4 ml-6 ">
                <Dropdown
                  color="transparent"
                  buttonText={
                    <div className="w-12">
                      <Image
                        src={profileInfo.photo || ProfilePicture}
                        rounded
                      />
                    </div>
                  }
                  rounded
                  style={{
                    padding: 0,
                    color: 'transparent',
                  }}
                >
                  <DropdownItem color="red">
                    <Link to="/user/profile">Profile</Link>
                  </DropdownItem>
                  <DropdownItem color="red " onClick={handleLogout}>
                    Logout
                  </DropdownItem>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
