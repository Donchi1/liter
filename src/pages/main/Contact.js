import React, { useState } from 'react'
import MapExample from '../../components/MapExample'
import Hero from './Hero'
import { useSelector, useDispatch } from 'react-redux'
import { useFirebase } from 'react-redux-firebase'
import { contactAction, newsLetterAction } from '../../State/Actions'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.png'

const MySwal = withReactContent(Swal)

export default function Contact() {
  const [userData, setuserData] = useState({
    name: '',
    email: '',
    message: '',
    subject: '',
  })
  const [subscribe, setSubscribe] = useState('')
  const contactSuccess = useSelector(
    (state) => state.projectReducer.contactMessageSuccess,
  )
  const contactError = useSelector(
    (state) => state.projectReducer.contactMessageError,
  )

  const [openSnack, setopenSnack] = useState({
    contactSuccess: false,
    contactError: false,
    subscribeSuccess: false,
    subscribeError: false,
  })

  const dispatch = useDispatch()
  const firebase = useFirebase()

  const handleSubmit = (e) => {
    e.preventDefault()

    contactAction(userData, firebase, dispatch, setuserData, setopenSnack)
  }
  const handleSsubmit = (e) => {
    e.preventDefault()

    newsLetterAction(subscribe, firebase, dispatch, setSubscribe, setopenSnack)
  }

  const letterSuccess = useSelector(
    (state) => state.projectReducer.subcriptionSuccess,
  )
  const letterError = useSelector(
    (state) => state.projectReducer.subcriptionError,
  )

  if (openSnack.contactSuccess) {
    return MySwal.fire({
      title: 'Success',
      html: <span className="text-green-500">{contactSuccess}</span>,
      showCloseButton: true,
      icon: 'success',
      timer: 6000,
    }).then(() => {
      return setopenSnack({ ...openSnack, contactSuccess: false })
    })
  }
  if (openSnack.contactError) {
    return MySwal.fire({
      title: 'error',
      text: contactError,
      icon: 'error',
      color: 'orange',
      showCloseButton: true,
      timer: 6000,
    }).then(() => {
      return setopenSnack({ ...openSnack, contactSuccess: false })
    })
  }
  if (openSnack.subscribeSuccess) {
    return MySwal.fire({
      title: 'Success',
      html: <span className="text-green-500">{letterSuccess}</span>,
      showCloseButton: true,
      icon: 'success',
      timer: 6000,
    }).then(() => {
      return setopenSnack({ ...openSnack, subscribeSuccess: false })
    })
  }
  if (openSnack.subscribeError) {
    return MySwal.fire({
      title: 'Error',
      text: letterError,
      showCloseButton: true,
      icon: 'error',
      timer: 6000,
    }).then(() => {
      return setopenSnack({ ...openSnack, subscribeError: false })
    })
  }
  return (
    <div className="h-screen ">
      <Hero pageName="Contact" />
      <section>
        <div className="px-3 md:px-8 h-auto -mt-28 mb-16">
          <div className="container mx-auto max-w-full">
            <div className="flex justify-center items-center  px-4 h-[600px]">
              <div className="map mt-8">
                <iframe
                  src="https://maps.google.com/maps?width=700&amp;amp;height=440&amp;amp;hl=en&amp;amp;q=345%20high%20street%20Bristol%20england%20UK+(Cryptoguarantee)&amp;amp;ie=UTF8&amp;amp;t=&amp;amp;z=10&amp;amp;iwloc=B&amp;amp;output=embed"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  aria-hidden="false"
                  tabIndex="0"
                  title="Cryptoguarantee Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <footer
          className="footer-area bg-img"
          style={{
            backgroundImage:
              'url(https://ico-tailwindcss.netlify.app/assets/img/core-img/pattern.png)',
          }}
        >
          {/* ##### Contact Area Start ##### */}
          <div className="contact_us_area section-padding-0-0" id="contact">
            <div className="container mx-auto sm:px-4">
              <div className="flex flex-wrap ">
                <div className="w-full">
                  <div className="section-heading text-center">
                    {/* Dream Dots */}
                    <div
                      className="dream-dots justify-center fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      <span className="gradient-text">Contact us</span>
                    </div>
                    <h2 className="fadeInUp" data-wow-delay="0.3s">
                      Contact With Us
                    </h2>
                    <p className="fadeInUp" data-wow-delay="0.4s">
                      Contact us for any information, confusions or issues. Our
                      client satisfaction is our most priority.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="flex flex-wrap  justify-center">
                <div className="w-full md:w-4/5 pr-4 pl-4 lg:w-2/3 ">
                  <div className="contact_form">
                    <form id="main_contact_form" onSubmit={handleSubmit}>
                      <div className="flex flex-wrap ">
                        <div className="w-full">
                          <div id="success_fail_info"></div>
                        </div>

                        <div className="w-full md:w-1/2 pr-4 pl-4">
                          <div className="group fadeInUp" data-wow-delay="0.2s">
                            <input
                              type="text"
                              name="name"
                              id="name"
                              value={userData.name}
                              onChange={(e) =>
                                setuserData({
                                  ...userData,
                                  name: e.target.value,
                                })
                              }
                            />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Name</label>
                          </div>
                        </div>
                        <div className="w-full md:w-1/2 pr-4 pl-4">
                          <div className="group fadeInUp" data-wow-delay="0.3s">
                            <input
                              type="email"
                              name="email"
                              id="email"
                              value={userData.email}
                              onChange={(e) =>
                                setuserData({
                                  ...userData,
                                  email: e.target.value,
                                })
                              }
                            />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Email</label>
                          </div>
                        </div>
                        <div className="w-full">
                          <div className="group fadeInUp" data-wow-delay="0.4s">
                            <input
                              type="text"
                              name="subject"
                              id="subject"
                              value={userData.subject}
                              onChange={(e) =>
                                setuserData({
                                  ...userData,
                                  subject: e.target.value,
                                })
                              }
                            />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Subject</label>
                          </div>
                        </div>
                        <div className="w-full">
                          <div className="group fadeInUp" data-wow-delay="0.5s">
                            <textarea
                              name="message"
                              id="message"
                              value={userData.message}
                              onChange={(e) =>
                                setuserData({
                                  ...userData,
                                  message: e.target.value,
                                })
                              }
                            ></textarea>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Message</label>
                          </div>
                        </div>
                        <div
                          className="w-full text-center fadeInUp"
                          data-wow-delay="0.6s"
                        >
                          <button
                            type="submit"
                            className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline more-btn"
                          >
                            Send Message
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ##### Contact Area End ##### */}
          <section className="container mx-auto sm:px-4 mt-12">
            <div className="subscribe section-padding-0-100">
              <div className="flex flex-wrap ">
                <div className="sm:w-full pr-4 pl-4">
                  <div className="subscribe-wrapper">
                    <div className="section-heading text-center">
                      <h2 className="wow fadeInUp" data-wow-delay="0.3s">
                        Don’t Miss our News And Updates!
                      </h2>
                      <p className="wow fadeInUp" data-wow-delay="0.4s">
                        Subscribe for updates, news and information on our
                        platform.
                      </p>
                    </div>
                    <div className="service-text text-center">
                      <div className="subscribe-section has-shadow">
                        <div className="input-wrapper">
                          <i className="fa fa-home"></i>
                          <input
                            type="email"
                            placeholder="Enter your Email"
                            value={subscribe}
                            onChange={(e) => setSubscribe(e.target.value)}
                          />
                        </div>
                        <button
                          onClick={handleSsubmit}
                          className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline more-btn mt-x-15"
                        >
                          Subscribe
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="footer-content-area ">
            <div className="container mx-auto sm:px-4">
              <div className="flex flex-wrap  ">
                <div className="w-full lg:w-1/3 pr-4 pl-4 md:w-1/2 ">
                  <div className="footer-copywrite-info">
                    {/* Copywrite */}
                    <div
                      className="copywrite_text fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      <div className="footer-logo">
                        <Link to="#">
                          <img draggable="false" src={logo} alt="logo" />{' '}
                          cryptoguarantee{' '}
                        </Link>
                      </div>
                      <p>
                        We are out to give you the best of our services in
                        crypto trading and investment.Our clients satisfaction
                        is our priority .
                      </p>
                    </div>
                    {/* Social Icon */}
                    <div
                      className="footer-social-info fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      <Link to="#">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </Link>
                      <Link to="#">
                        {' '}
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </Link>
                      <Link to="#">
                        <i className="fa fa-google-plus" aria-hidden="true"></i>
                      </Link>
                      <Link to="#">
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                      </Link>
                      <Link to="#">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-1/5 pr-4 pl-4 md:w-1/2  ">
                  {/* Content Info */}
                  <div className="contact_info_area sm:flex justify-between">
                    <div
                      className="contact_info mt-s text-center fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      <h5>NAVIGATE</h5>
                      <Link to="/">
                        <p>Home</p>
                      </Link>
                      <Link to="/about">
                        <p>About</p>
                      </Link>
                      <Link to="/team">
                        <p>Team</p>
                      </Link>
                      <Link to="/contact">
                        <p>Contact</p>
                      </Link>
                      <Link to="/pricing">
                        <p>Pricing</p>
                      </Link>
                      <Link to="/login">
                        <p>login</p>
                      </Link>
                      <Link to="/register">
                        <p>Register</p>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-1/4 pr-4 pl-4 md:w-1/2  ">
                  <div className="contact_info_area sm:flex justify-between">
                    {/* Content Info */}
                    <div
                      className="contact_info mt-s text-center fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      <h5>CONTACT US</h5>
                      <p>Address:No 345 Street</p>
                      <p>Bristol England United Kingdom</p>
                      <p>
                        Whatsapp:{' '}
                        <a href="https://wa.me/+443567647896">+443567647896</a>
                      </p>
                      <p>
                        Whatsapp:{' '}
                        <a href="https://wa.me/+12046022485">+12046022485</a>{' '}
                      </p>
                      <p>support@cryptoguarantee.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </div>
  )
}
