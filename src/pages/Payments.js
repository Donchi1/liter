import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFirebase } from 'react-redux-firebase'
import img1 from '../assets/img/qrcode.jpg'
import Compressor from 'compressorjs'

import { paymentAction } from '../State/Actions'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

function Payments() {
  const firebase = useFirebase()
  const dispatch = useDispatch()

  const profileInfo = useSelector((state) => state.firebase.profile)
  const paymentInfo = useSelector((state) => state.projectReducer)

  const [paymentData, setPaymentData] = useState({
    IsSubmitting: false,
    amount: '1',
    method: 'Bitcoin',
    prove: '',
  })

  const compressPhoto = (img) => {
    new Compressor(img, {
      quality: 0.8,
      success: (file) => setPaymentData({ ...paymentData, prove: file }),
    })
  }

  const paymentOptionsError = {
    title: <p>Payment Error</p>,
    text: paymentInfo.paymentError,
    color: 'red',
    icon: 'error',
    closeButtonColor: 'red',
    showCloseButton: true,
    closeButtonText: 'OK',
  }
  const paymentOptionSuccess = {
    title: <p>Payment Success</p>,
    html: <span className="text-success">{paymentInfo.paymentSuccess}</span>,
    icon: 'success',
    closeButtonColor: 'red',
    showCloseButton: true,
    closeButtonText: 'OK',
  }

  const { IsSubmitting, amount, method, prove } = paymentData

  const handleProve = (e) => {
    e.preventDefault()
    setPaymentData({ ...paymentData, IsSubmitting: true })
    if ((prove, amount, method)) {
      return paymentAction(
        paymentData,
        setPaymentData,
        profileInfo,
        firebase,
        dispatch,
      )
    } else {
      setPaymentData({ ...paymentData, IsSubmitting: false })
      return MySwal.fire({
        title: 'Error',
        text: 'All fields are required',
        color: 'danger',
        timer: 6000,
        showCloseButton: true,
      })
    }
  }
  if (paymentInfo.paymentSuccess) {
    return MySwal.fire(paymentOptionSuccess).then(() => {
      dispatch({ type: 'PAYMENT_SUCCESS', message: '' })
    })
  }
  if (paymentInfo.paymentError) {
    return MySwal.fire(paymentOptionsError).then(() => {
      dispatch({ type: 'PAYMENT_ERROR', message: '' })
    })
  }
  return (
    <div className="min-h-screen footer-bg  homepage-3 lg:ml-8 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-20 c-bg shadow sm:rounded-lg flex justify-center flex-1  flex-wrap">
        <div className="lg:w-1/2 xl:w-5/12 sm:w-full p-6 sm:p-12">
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-2xl font-black uppercase text-center gradient-text">
              Payment Methods
            </h1>
            <h4 className="text-sm mt-4 uppercase text-center text-white">
              Invest in our platform today and never regret <br />
              choose your investment method
            </h4>

            <form className="w-full flex-1 mt-4 " onSubmit={handleProve}>
              <div className="form-group col-md-12 ">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-transparent border border-[white] placeholder-white text-sm focus:outline-none focus:bg-opacity-10 text-white mt-4"
                  type="number"
                  placeholder="Enter Amount"
                  value={paymentData.amount}
                  onChange={(e) => {
                    setPaymentData({
                      ...paymentData,
                      amount: e.target.value,
                    })
                  }}
                />
              </div>

              <div className="form-group col-md-12 animation">
                <h5 className="text-white uppercase mt-4 ">Upload prove</h5>
                <input
                  type="file"
                  className="w-full px-8 py-4 rounded-lg font-medium bg-transparent border border-[white] placeholder-white text-sm focus:outline-none focus:bg-opacity-10 text-white mt-4"
                  required
                  label="Upload Prove"
                  onChange={(e) => {
                    const newFile = e.target.files[0]
                    compressPhoto(newFile)
                  }}
                />
              </div>
              <div className="form-group col-md-12 text-center ">
                <button
                  type="submit"
                  disabled={IsSubmitting}
                  className="more-btn w-full mt-4"
                >
                  <i className="fas fa-user-plus fa 1x w-6  -ml-2" />
                  <span className="ml-3">
                    {IsSubmitting ? 'Submitting...' : 'Submit'}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex-1 bg-indigo-300 text-center ">
          <div className="lg:m-12 xl:m-16 w-80 mx-auto  ">
            <div>
              <div>
                <h4 className="text-center">
                  Make payment with the below bitcoin wallet and upload prove.
                </h4>
              </div>
              <img src={img1} alt="code" />
              <h4 className="mt-8 text-red-600 text-xl text-center break-words">
                3BMgPMr5Qxiqkbe638DBE1LM7R4PkXrCx9
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payments
