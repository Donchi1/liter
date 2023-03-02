import { Dialog } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFirebase } from 'react-redux-firebase'
import { withdrawalAction } from './../State/Actions'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Input } from '@material-tailwind/react'

const MySwal = withReactContent(Swal)

function Withdrawals() {
  const firebase = useFirebase()
  const dispatch = useDispatch()

  const withdrawalInfo = useSelector((state) => state.projectReducer)
  const disableWithdraw = useSelector(
    (state) => state.firebase.profile.disbleWithdrawal,
  )

  const profileInfo = useSelector((state) => state.firebase.profile)

  const [openPay, setOpenPay] = useState({
    btc: false,
    etheruim: false,
    litecoin: false,
    bank: false,
  })

  const [newAmount, setNewAmount] = useState(1)
  const [withdrawalAmount, setWithdrawalAmount] = useState({
    amount: 1,
    wallet: '',
    withdrawalMethod: '',
    name: '',
    accountNumber: 'none',
    phone: '',
  })

  useEffect(() => {
    axios
      .get(
        `https://blockchain.info/tobtc?currency=USD&value=${withdrawalAmount.amount}`,
      )
      .then((res) => {
        setNewAmount(res.data)
      })
      .catch((err) => {})
  }, [withdrawalAmount.amount])

  const handleWithdrawal = (e) => {
    e.preventDefault()

    setOpenPay({
      ...openPay,
      btc: false,
      etheruim: false,
      litecoin: false,
      bank: false,
    })

    withdrawalAction(
      profileInfo,
      withdrawalAmount,
      firebase,
      dispatch,
      setWithdrawalAmount,
    )
  }
  if (withdrawalInfo.withdrawalSuccess) {
    MySwal.fire({
      title: 'Success',
      html: (
        <span className="text-green-500">
          {withdrawalInfo.withdrawalSuccess}
        </span>
      ),
      showCloseButton: true,
      icon: 'success',
      timer: 6000,
    }).then(() => {
      return dispatch({ type: 'WITHDRAWAL_SUCCESS', message: '' })
    })
  }
  if (withdrawalInfo.withdrawalError) {
    MySwal.fire({
      title: 'Error',
      text: withdrawalInfo.withdrawalError,
      color: 'red',
      icon: 'error',
      showCloseButton: true,
      timer: 6000,
    }).then(() => {
      return dispatch({ type: 'WITHDRAWAL_ERROR', message: '' })
    })
  }
  return (
    <div className="min-h-screen  flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-20 c-bg shadow sm:rounded-lg flex justify-center flex-1 sm:flex sm:flex-col lg:flex lg:flex-row">
        <div className="lg:w-1/2 xl:w-5/12 sm:w-full p-6 sm:p-12">
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-3xl xl:text-4xl font-black uppercase text-center gradient-text">
              Withdrawal Methods
            </h1>
            <h4 className="text-lg mt-4 uppercase text-center text-white">
              Make your instant withdrawal today with ease <br />
            </h4>
            <p className="text-grey-400">Choose your withdrawal method</p>

            <section className="w-full ">
              <div className="mx-auto max-w-xl  relative mt-4">
                <button
                  className="more-btn w-full"
                  onClick={() => {
                    setOpenPay({
                      ...openPay,
                      btc: !openPay.btc,
                      bank: false,
                      etheruim: false,
                      litecoin: false,
                    })
                    setWithdrawalAmount({
                      ...withdrawalAmount,
                      withdrawalMethod: 'Bitcoin',
                    })
                  }}
                >
                  Bitcoin
                </button>
              </div>

              <Dialog
                open={openPay.btc}
                onClose={() => setOpenPay({ ...openPay, btc: false })}
                fullWidth
              >
                <div className="px-8 pt-4 ">
                  <div className="text-center ">
                    <h6 className="text-bold gradient-text   capitalize  ">
                      You want to withdraw ${withdrawalAmount.amount}
                    </h6>
                    <p className="text-gray-500 ">
                      Bitcoin : {newAmount && newAmount}
                    </p>
                    <p className="text-gray-500 ">
                      with {withdrawalAmount.withdrawalMethod} withdrawal
                      method.
                    </p>
                  </div>
                  <h5 className="text-center text-gray-500 font-bold uppercase ">
                    Input your withdrawal information
                  </h5>
                  <form onSubmit={handleWithdrawal}>
                    <div className="mt-4 col-md-12 animation">
                      <Input
                        type="text"
                        required
                        placeholder="Name"
                        value={withdrawalAmount.name}
                        onChange={(e) =>
                          setWithdrawalAmount({
                            ...withdrawalAmount,
                            name: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="mt-4 col-md-12 animation">
                      <Input
                        type="number"
                        required
                        placeholder="Amount"
                        value={withdrawalAmount.amount}
                        onChange={(e) =>
                          setWithdrawalAmount({
                            ...withdrawalAmount,
                            amount: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="mt-4 col-md-12 animation">
                      <Input
                        type="text"
                        required
                        placeholder="Wallet"
                        value={withdrawalAmount.wallet}
                        onChange={(e) =>
                          setWithdrawalAmount({
                            ...withdrawalAmount,
                            wallet: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="mt-4 col-md-12 animation">
                      <Input
                        type="tel"
                        required
                        placeholder="Number"
                        value={withdrawalAmount.phone}
                        onChange={(e) =>
                          setWithdrawalAmount({
                            ...withdrawalAmount,
                            phone: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="mt-4  text-center animation my-4">
                      <button className="more-btn w-full" type="submit">
                        Submit
                      </button>
                    </div>
                    <div className="divider small_divider"></div>
                  </form>
                </div>
              </Dialog>

              <div className="mx-auto max-w-xl  relative mt-4">
                <button
                  className="more-btn w-full"
                  onClick={() => {
                    setOpenPay({
                      ...openPay,
                      etheruim: !openPay.etheruim,
                      bank: false,
                      litecoin: false,
                      btc: false,
                    })
                    setWithdrawalAmount({
                      ...withdrawalAmount,
                      withdrawalMethod: 'Etheruim',
                    })
                  }}
                >
                  Etherium
                </button>
              </div>
              <Dialog
                open={openPay.etheruim}
                onClose={() => setOpenPay({ ...openPay, etheruim: false })}
                fullWidth
              >
                <div className="px-8 pt-4 ">
                  <div className="text-center">
                    <h6 className="text-bold gradient-text   capitalize ">
                      You want to withdraw ${withdrawalAmount.amount}
                    </h6>
                    <p className="text-gray-500 ">
                      Bitcoin : {newAmount && newAmount}
                    </p>
                    <p className="text-gray-500 text-center">
                      with {withdrawalAmount.withdrawalMethod} withdrawal
                      method.
                    </p>
                  </div>

                  <h5 className="text-bold text-center uppercase text-gray-500 ">
                    Input your withdrawal information
                  </h5>
                  <form onSubmit={handleWithdrawal}>
                    <div className="mt-4 col-md-12 animation">
                      <Input
                        type="text"
                        required
                        placeholder="Name"
                        value={withdrawalAmount.name}
                        onChange={(e) =>
                          setWithdrawalAmount({
                            ...withdrawalAmount,
                            name: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="mt-4 col-md-12 animation">
                      <Input
                        type="number"
                        required
                        placeholder="Amount"
                        value={withdrawalAmount.amount}
                        onChange={(e) =>
                          setWithdrawalAmount({
                            ...withdrawalAmount,
                            amount: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="mt-4 col-md-12 animation">
                      <Input
                        type="text"
                        required
                        placeholder="Wallet"
                        value={withdrawalAmount.wallet}
                        onChange={(e) =>
                          setWithdrawalAmount({
                            ...withdrawalAmount,
                            wallet: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="mt-4 col-md-12 animation">
                      <Input
                        type="tel"
                        required
                        placeholder="Number"
                        value={withdrawalAmount.phone}
                        onChange={(e) =>
                          setWithdrawalAmount({
                            ...withdrawalAmount,
                            phone: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="mt-4 my-4 text-center animation">
                      <button className="more-btn w-full" type="submit">
                        Submit
                      </button>
                    </div>
                    <div className="divider small_divider"></div>
                  </form>
                </div>
              </Dialog>

              <div className="mx-auto max-w-xl  relative mt-4">
                <button
                  className="more-btn w-full"
                  onClick={() => {
                    setOpenPay({
                      ...openPay,
                      litecoin: !openPay.litecoin,
                      bank: false,
                      etheruim: false,
                      btc: false,
                    })
                    setWithdrawalAmount({
                      ...withdrawalAmount,
                      withdrawalMethod: 'Litecoin',
                    })
                  }}
                >
                  Litecoin
                </button>
              </div>
              <Dialog
                open={openPay.litecoin}
                onClose={() => setOpenPay({ ...openPay, litecoin: false })}
                fullWidth
              >
                <div className="px-8 pt-4 ">
                  <div className="text-center text-gray-500">
                    <h6 className="text-bold gradient-text   capitalize ">
                      You want to withdraw ${withdrawalAmount.amount}
                    </h6>
                    <p className="text-gray-500">
                      Bitcoin : {newAmount && newAmount}
                    </p>
                    <p className="text-gray-500">
                      with {withdrawalAmount.withdrawalMethod} withdrawal
                      method.
                    </p>
                  </div>
                  <h5 className="font-bold uppercase text-center text-gray-500">
                    Input your withdrawal information
                  </h5>

                  <form onSubmit={handleWithdrawal}>
                    <div className="mt-4 col-md-12 animation">
                      <Input
                        type="text"
                        required
                        placeholder="Name"
                        value={withdrawalAmount.name}
                        onChange={(e) =>
                          setWithdrawalAmount({
                            ...withdrawalAmount,
                            name: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="mt-4 col-md-12 animation">
                      <Input
                        type="number"
                        required
                        placeholder="Amount"
                        value={withdrawalAmount.amount}
                        onChange={(e) =>
                          setWithdrawalAmount({
                            ...withdrawalAmount,
                            amount: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="mt-4 col-md-12 animation">
                      <Input
                        type="text"
                        required
                        placeholder="Wallet"
                        value={withdrawalAmount.wallet}
                        onChange={(e) =>
                          setWithdrawalAmount({
                            ...withdrawalAmount,
                            wallet: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="mt-4 col-md-12 animation">
                      <Input
                        type="tel"
                        required
                        placeholder="Number"
                        value={withdrawalAmount.phone}
                        onChange={(e) =>
                          setWithdrawalAmount({
                            ...withdrawalAmount,
                            phone: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="mt-4 my-4 text-center animation">
                      <button className="more-btn w-full" type="submit">
                        Submit
                      </button>
                    </div>
                    <div className="divider small_divider"></div>
                  </form>
                </div>
              </Dialog>

              <div className="mx-auto max-w-xl  relative mt-4">
                <button
                  className="more-btn w-full "
                  onClick={() => {
                    setOpenPay({
                      ...openPay,
                      bank: !openPay.bank,
                      litecoin: false,
                      etheruim: false,
                      btc: false,
                    })
                    setWithdrawalAmount({
                      ...withdrawalAmount,
                      withdrawalMethod: 'Bank',
                    })
                  }}
                >
                  Bank
                </button>
              </div>
              <Dialog
                open={openPay.bank}
                onClose={() => setOpenPay({ ...openPay, bank: false })}
                fullWidth
              >
                <div className="px-8 pt-4 ">
                  <div className="text-center">
                    <h6 className="text-bold gradient-text   capitalize ">
                      You want to withdraw ${withdrawalAmount.amount}
                    </h6>
                    <p className="text-gray-500">
                      Bitcoin : {newAmount && newAmount}
                    </p>
                    <p className="text-gray-500">
                      with {withdrawalAmount.withdrawalMethod} withdrawal
                      method.
                    </p>
                  </div>

                  <h5 className="font-bold uppercase text-center text-gray-500">
                    Input your withdrawal information
                  </h5>
                  <form onSubmit={handleWithdrawal}>
                    <div className="mt-4 col-md-12 animation">
                      <Input
                        type="text"
                        required
                        placeholder="Name"
                        value={withdrawalAmount.name}
                        onChange={(e) =>
                          setWithdrawalAmount({
                            ...withdrawalAmount,
                            name: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="mt-4 col-md-12 animation">
                      <Input
                        type="number"
                        required
                        placeholder="Amount"
                        value={withdrawalAmount.amount}
                        onChange={(e) =>
                          setWithdrawalAmount({
                            ...withdrawalAmount,
                            amount: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div
                      className="mt-4 col-md-12 animation"
                      data-animation="fadeInUp"
                      data-animation-delay="0.7s"
                    >
                      <Input
                        type="text"
                        required
                        placeholder="Account number"
                        value={withdrawalAmount.accountNumber}
                        onChange={(e) =>
                          setWithdrawalAmount({
                            ...withdrawalAmount,
                            accountNumber: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="mt-4 col-md-12 animation">
                      <Input
                        type="tel"
                        required
                        placeholder="Number"
                        value={withdrawalAmount.phone}
                        onChange={(e) =>
                          setWithdrawalAmount({
                            ...withdrawalAmount,
                            phone: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className=" my-4 text-center animation">
                      <button className="more-btn w-full" type="submit">
                        Submit
                      </button>
                    </div>
                    <div className="divider small_divider"></div>
                  </form>
                </div>
              </Dialog>

              <div className="divider small_divider"></div>
            </section>
          </div>
        </div>
        <div className="flex-1 bg-indigo-100 text-center hidden">
          <div className="lg:m-12 xl:m-16 w-full  ">
            <div>
              <h4 className="mt-8 text-red-600 text-2xl">
              37GUcvSwbzRaMRQzVX83bdzKQSjoFjCqJS
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Withdrawals
