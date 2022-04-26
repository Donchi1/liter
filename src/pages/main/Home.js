import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'
import Footer from './Footer'
import Plans from '../../components/Plans'

import { isLoaded, isEmpty } from 'react-redux-firebase'

import about3 from '../../assets/img/about-3.png'
import computer from '../../assets/img/computer.png'
import feature3 from '../../assets/svg/feature-3.svg'
import feature4 from '../../assets/svg/feature-4.svg'
import feature5 from '../../assets/svg/feature-5.svg'
import feature6 from '../../assets/svg/feature-6.svg'
import feature7 from '../../assets/svg/feature-7.svg'
import platform from '../../assets/img/platform.png'
import feature8 from '../../assets/svg/feature-8.svg'
import whitepaper from '../../assets/img/whitepaper.png'
import destribution from '../../assets/img/distribution.png'
import graph11 from '../../assets/img/graph-11.png'
import f2 from '../../assets/svg/f2.svg'
import f3 from '../../assets/svg/f3.svg'
import f4 from '../../assets/svg/f4.svg'
import f5 from '../../assets/svg/f5.svg'
import f6 from '../../assets/svg/f6.svg'
import faq from '../../assets/svg/faq.svg'
import team from '../../assets/img/bigteam.jpg'
import team1 from '../../assets/img/bigteam1.jpg'
import team2 from '../../assets/img/bigteam2.jpg'
import team3 from '../../assets/img/bigteam3.jpg'
import cert from '../../assets/img/cert.jpg'
import adviser1 from '../../assets/img/bigteam4.jpg'
import adviser2 from '../../assets/img/teamw1.jpg'
import adviser3 from '../../assets/img/tm2.jpeg'
import adviser4 from '../../assets/img/tm3.jpeg'

export default function Home() {
  const authState = useSelector((state) => state.firebase.auth)
  const [openCv, setOpenCv] = useState(false)
  const [openFaq, setOpenFaq] = useState({
    faq1: true,
    faq2: false,
    faq3: false,
    faq4: false,
    faq5: false,
    faq6: false,
    faq7: false,
  })

  return (
    <>
      <section className="hero-section moving v2 section-padding" id="home">
        {/* Hero Content */}
        <div className="hero-section-content">
          <div className="container mx-auto sm:px-4 ">
            <div className="flex flex-wrap  items-center">
              {/* Welcome Content */}
              <div className="w-full lg:w-1/2 pr-4 pl-4 md:w-full ">
                <div className="welcome-content">
                  <h1 className="fadeInUp" data-wow-delay="0.2s">
                    Welcome to cryptoguarantee investment and Trading Platform{' '}
                  </h1>
                  <p className="w-text fadeInUp" data-wow-delay="0.3s">
                    Trading and investments made easy. Your safe and successful
                    trading and investment is guaranteed.
                  </p>
                  <div
                    className="dream-btn-group fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    {isLoaded(authState) && !isEmpty(authState) ? (
                      <Link to="/user/dashboard" className="more-btn mr-3">
                        Dashboard
                      </Link>
                    ) : (
                      <>
                        <Link to="/login" className="more-btn mr-3">
                          Get Started
                        </Link>

                        <Link to="/register" className="more-btn mt-xx-15">
                          Register
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 pr-4 pl-4">
                <div className="illusto-2 fadeInUp" data-wow-delay="0.5s">
                  <img draggable="false" src={about3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ##### Welcome Area End ##### */}

      <section className="features section-padding-100-70 ">
        <div className="container mx-auto sm:px-4">
          <div className="section-heading text-center">
            {/* Dream Dots */}
            <div
              className="dream-dots justify-center fadeInUp"
              data-wow-delay="0.2s"
            >
              <span>Plans</span>
            </div>
            <h2 className="fadeInUp" data-wow-delay="0.3s">
              Our Investment Plans
            </h2>
            <p className="fadeInUp" data-wow-delay="0.4s">
              Here is an easy startup investment plans for you.
            </p>
          </div>
          <div className="flex flex-wrap  items-center">
            <Plans
              initiald={'$100'}
              initialw={'$2500'}
              head={'Round-1'}
              bonus={'$10'}
            />
            <Plans
              initiald={'$200'}
              initialw={'$3500'}
              head={'Round-2'}
              bonus={'$15'}
            />
            <Plans
              initiald={'$300'}
              initialw={'$4999'}
              head={'Round-3'}
              bonus={'$20'}
            />
            <Plans
              initiald={'$400'}
              initialw={'$5750'}
              head={'Round-4'}
              bonus={'$25'}
            />
          </div>
        </div>
      </section>

      {/* ##### About Us Area Start ##### */}
      <section className="about-us-area section-padding-0-100 clearfix">
        <div className="container mx-auto sm:px-4">
          <div className="flex flex-wrap  items-center">
            <div className="w-full lg:w-1/2 pr-4 pl-4 offset-lg-0">
              <div className="who-we-contant">
                <div
                  className="dream-dots text-left fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <span className="gradient-text ">
                    Guaranteed crypto Trading Platform
                  </span>
                </div>
                <h4 className="fadeInUp" data-wow-delay="0.3s">
                  Connect blockchain to the real world and start crypto trading.
                </h4>
                <p className="fadeInUp" data-wow-delay="0.4s">
                  We are the one guaranteed option for your crypto investment
                  and trading. We stand out, providing you with an easy and
                  guaranteed means of crypto trading and investment round the
                  whole world.
                </p>
                <p className="fadeInUp" data-wow-delay="0.5s">
                  Our aim is to make sure all low and high income earners makes
                  the best of there income.
                </p>
                <Link
                  className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline more-btn mt-30 fadeInUp"
                  data-wow-delay="0.6s"
                  to="/about"
                >
                  Read More
                </Link>
              </div>
            </div>

            <img
              draggable="false"
              className="supportImg"
              src="https://ico-tailwindcss.netlify.app/assets/img/svg/trading-strokes.svg"
              alt="support"
            />
            <div className="w-full lg:w-1/2 pr-4 pl-4 offset-lg-0 md:w-full  mt-30 no-padding-left">
              <div
                className="welcome-meter floating-anim fadeInUp"
                data-wow-delay="0.7s"
              >
                <img draggable="false" src={computer} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ##### About Us Area End ##### */}

      {/* ##### Our Services Area Start ##### */}
      <section
        className="our_services_area section-padding-0-70 clearfix"
        id="services"
      >
        <div className="container mx-auto sm:px-4">
          <div className="section-heading text-center">
            {/* Dream Dots */}
            <div
              className="dream-dots justify-center fadeInUp"
              data-wow-delay="0.2s"
            >
              <span>Why choose us</span>
            </div>
            <h2 className="fadeInUp" data-wow-delay="0.3s">
              Our Main Features
            </h2>
            <p className="fadeInUp" data-wow-delay="0.4s">
              Our features and services made available for you. We are out to
              deliver our best of service.
            </p>
          </div>

          <div className="flex flex-wrap ">
            <div className="w-full md:w-1/2 pr-4 pl-4 lg:w-1/4">
              {/* Content */}
              <div
                className="service_single_content text-left px-4 py-6 mb-30"
                data-wow-delay="0.2s"
              >
                {/* Icon */}
                <div className="service_icon">
                  <img
                    draggable="false"
                    src="https://ico-tailwindcss.netlify.app/assets/img/features/feature-1.svg"
                    alt=""
                  />
                </div>
                <h6>Instant withdrawal</h6>
                <p>
                  Easy and fast withdrawal to your wallet through our reliable
                  withdrawal gateway.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 pr-4 pl-4 lg:w-1/4 ">
              {/* Content */}
              <div
                className="service_single_content text-left px-4 py-6 mb-30"
                data-wow-delay="0.3s"
              >
                {/* Icon */}
                <div className="service_icon">
                  <img
                    draggable="false"
                    src="https://ico-tailwindcss.netlify.app/assets/img/features/feature-2.svg"
                    alt=""
                  />
                </div>
                <h6>Flexibility</h6>
                <p>
                  We provide a fast and flexible means of crypto trading and
                  investments round the whole world.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 pr-4 pl-4 lg:w-1/4 ">
              {/* Content */}
              <div
                className="service_single_content text-left px-4 py-6 mb-30"
                data-wow-delay="0.4s"
              >
                {/* Icon */}
                <div className="service_icon">
                  <img draggable="false" src={feature3} alt="" />
                </div>
                <h6>Blockchain technology</h6>
                <p>
                  A stable and accessible blockchain technology made available
                  for all crypto transactions.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 pr-4 pl-4 lg:w-1/4 ">
              {/* Content */}
              <div
                className="service_single_content text-left px-4 py-6 mb-30"
                data-wow-delay="0.5s"
              >
                {/* Icon */}
                <div className="service_icon">
                  <img draggable="false" src={feature4} alt="" />
                </div>
                <h6>Experienced team</h6>
                <p>
                  Our experienced and reliable team members ever ready o reach
                  out to you .
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 pr-4 pl-4 lg:w-1/4 ">
              {/* Content */}
              <div
                className="service_single_content text-left px-4 py-6 mb-30"
                data-wow-delay="0.6s"
              >
                {/* Icon */}
                <div className="service_icon">
                  <img draggable="false" src={feature5} alt="feature5" />
                </div>
                <h6>Connect free</h6>
                <p>
                  Easy and free way to connect to the cryto for your earnings
                  and feature establishments.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 pr-4 pl-4 lg:w-1/4 ">
              {/* Content */}
              <div
                className="service_single_content text-left px-4 py-6 mb-30"
                data-wow-delay="0.7s"
              >
                {/* Icon */}
                <div className="service_icon">
                  <img draggable="false" src={feature6} alt="feature-6" />
                </div>
                <h6>Fast Profit</h6>
                <p>
                  Fast and easy profit and stable bonus added to your account
                  prior to the chosen investment plan .
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 pr-4 pl-4 lg:w-1/4 ">
              {/* Content */}
              <div
                className="service_single_content text-left px-4 py-6 mb-30"
                data-wow-delay="0.7s"
              >
                {/* Icon */}
                <div className="service_icon">
                  <img draggable="false" src={feature7} alt="" />
                </div>
                <h6>Low cost</h6>
                <p>
                  No hidden or addition fee. You aligible for your withdrawal in
                  just trading days.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 pr-4 pl-4 lg:w-1/4 ">
              {/* Content */}
              <div
                className="service_single_content text-left px-4 py-6 mb-30"
                data-wow-delay="0.7s"
              >
                {/* Icon */}
                <div className="service_icon">
                  <img draggable="false" src={feature8} alt="feature-8" />
                </div>
                <h6>Fast Information</h6>
                <p>
                  Constant information transmition about your account and
                  company activities sent contantly .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features section-padding-0-100 ">
        <div className="container mx-auto sm:px-4">
          <div className="section-heading text-center">
            {/* Dream Dots */}
            <div
              className="dream-dots justify-center fadeInUp"
              data-wow-delay="0.2s"
            >
              <span>Try our Platform</span>
            </div>
            <h2 className="fadeInUp" data-wow-delay="0.3s">
              Our Trading Platform
            </h2>
            <p className="fadeInUp" data-wow-delay="0.4s">
              We provide you a legit, stable and reliable trading platform for
              your future establishments.
            </p>
          </div>
          <div className="flex flex-wrap  items-center">
            <div className="service-img-wrapper lg:w-2/5  md:w-full  sm:w-full pr-4 pl-4 no-padding-right">
              <div className="features-list">
                <div className="who-we-contant">
                  <h4 className="w-text fadeInUp" data-wow-delay="0.3s">
                    Powerful platform.
                  </h4>
                  <p className="w-text fadeInUp" data-wow-delay="0.4s">
                    We are dedicated to providing professional service with the
                    highest degree of honesty and integrity, and strive to add
                    value to our tax and consulting services.
                  </p>
                </div>
                <ul className="list-marked">
                  <li className="text-white">
                    <i className="fa fa-check"></i>Competent Professionals
                  </li>
                  <li className="text-white">
                    <i className="fa fa-check"></i>Affordable Prices
                  </li>
                  <li className="text-white">
                    <i className="fa fa-check"></i>High Successful Recovery
                  </li>
                  <li className="text-white">
                    <i className="fa fa-check"></i>Fast and easy Trading
                  </li>
                </ul>
                <Link
                  className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline more-btn mt-30 fadeInUp"
                  data-wow-delay="0.6s"
                  to="/login"
                >
                  Get Started
                </Link>
              </div>
            </div>

            <div className="service-img-wrapper lg:w-3/5 pr-4 pl-4 md:w-full  sm:w-full mt-s">
              <div className="image-box">
                <img
                  draggable="false"
                  src={platform}
                  className="center-block img-responsive phone-img"
                  alt=""
                />
                <img
                  draggable="false"
                  src="https://ico-tailwindcss.netlify.app/assets/img/core-img/rings.png"
                  className="center-block img-responsive rings "
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ##### Our Trial Area End ##### */}
      <section className="spread-map download">
        <div className="container mx-auto sm:px-4">
          <div className="flex flex-wrap  items-center">
            <div className="lg:w-1/2 pr-4 pl-4 sm:w-full ">
              <div className="welcome-meter fadeInUp" data-wow-delay="0.7s">
                <img
                  draggable="false"
                  src={whitepaper}
                  className="center-block"
                  alt=""
                />
              </div>
            </div>
            <div className="lg:w-1/2 pr-4 pl-4 sm:w-full  mt-s">
              <div className="who-we-contant">
                <div
                  className="dream-dots text-left fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <img
                    draggable="false"
                    src="https://ico-tailwindcss.netlify.app/assets/img/svg/section-icon-11.svg"
                    alt=""
                  />
                </div>
                <h4 className="text-white fadeInUp" data-wow-delay="0.3s">
                  Downoad Our Documents
                </h4>
                <p className="text-white">
                  Having issues and doubts about this, download some of our
                  government issued document for more clearification and
                  satistaction.
                </p>
                <button
                  className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline dream-btn mt-30 fadeInUp"
                  data-wow-delay="0.6s"
                  onClick={() => setOpenCv((prev) => !prev)}
                >
                  Get Document
                </button>
              </div>
            </div>
          </div>
        </div>
        {openCv && (
          <div className="w-screen  h-screen right-0 left-0 overflow-y-auto bottom-0 fixed top-0 bg-black bg-opacity-80 z-50 ">
            <div className="w-screen  absolute h-screen ">
              <div className=" fade mt-16 container mx-auto lg:w-3/5  bg-gradient-to-r from-blue-700 to-yellow-900 relative overflow-x-hidden overflow-y-visible">
                <span
                  className="bg-gray-400 lg:right-16 focus:bg-red-500 mt-4 right-12 hover:bg-red-500 text-white cursor-pointer p-4 absolute "
                  onClick={() => setOpenCv(false)}
                >
                  X
                </span>
                <div className=" text-center text-black pt-14">
                  <img
                    src={cert}
                    alt="my_cv"
                    className="lg:h-[450px] h-full w-full  "
                  />

                  <div className="border-blue-500  border-b-2 w-full h-2"></div>
                  <div className="flex space-x-4 float-right pb-5 pt-5  w-full pl-4">
                    <button
                      onClick={() => setOpenCv(false)}
                      className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline dream-btn mt-30 fadeInUp"
                    >
                      Close
                    </button>
                    <a
                      href="../../assets/img/cert.jpg"
                      download="cert.jpg"
                      className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline dream-btn mt-30 fadeInUp"
                    >
                      Download
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      <section className="token-distribution section-padding-100-85">
        <div className="container mx-auto sm:px-4">
          <div className="section-heading text-center">
            {/* Dream Dots */}
            <div
              className="dream-dots justify-center fadeInUp"
              data-wow-delay="0.2s"
            >
              <span>Trading Chart</span>
            </div>
            <h2 className="fadeInUp" data-wow-delay="0.3s">
              Our Trading Information
            </h2>
            <p className="fadeInUp" data-wow-delay="0.4s">
              View our trading information and statistical figure.
            </p>
          </div>

          <div className="flex flex-wrap  items-center">
            <div className="lg:w-1/2 pr-4 pl-4 sm:w-full ">
              <div className=" ">
                <h2
                  className="text-center text-2xl mb-30 fadeInUp"
                  data-wow-delay="0.3s"
                >
                  Funds Allocation
                </h2>
                <img
                  draggable="false"
                  src={destribution}
                  className="center-block"
                  alt=""
                />
              </div>
            </div>
            <div className="lg:w-1/2 pr-4 pl-4 sm:w-full  mt-s">
              <h2
                className="text-center text-2xl mb-30 fadeInUp"
                data-wow-delay="0.3s"
              >
                Payment Information
              </h2>
              <div className="flex flex-wrap ">
                <div className="w-full sm:w-1/3 pr-4 pl-4">
                  <div className="">
                    <img
                      draggable="false"
                      src={graph11}
                      className="center-block m-auto"
                      alt=""
                    />
                  </div>
                </div>
                <div className="sm:w-2/3 pr-4 pl-4">
                  <div className="token-info mt-x">
                    <div className="info-wrapper one">
                      <div className="token-icon">12</div>
                      <div className="token-descr">
                        Over Payment and Distribution
                      </div>
                    </div>
                  </div>
                  <div className="token-info">
                    <div className="info-wrapper two">
                      <div className="token-icon">23</div>
                      <div className="token-descr">Supporting Blockchain </div>
                    </div>
                  </div>

                  <div className="token-info">
                    <div className="info-wrapper four">
                      <div className="token-icon">08</div>
                      <div className="token-descr">Engineers and Gateways</div>
                    </div>
                  </div>
                  <div className="token-info">
                    <div className="info-wrapper five">
                      <div className="token-icon">07</div>
                      <div className="token-descr"> Operational Services</div>
                    </div>
                  </div>
                  <div className="token-info">
                    <div className="info-wrapper three">
                      <div className="token-icon">05</div>
                      <div className="token-descr">
                        Network Growth Marketing
                      </div>
                    </div>
                  </div>
                  <div className="token-info">
                    <div className="info-wrapper six">
                      <div className="token-icon">08</div>
                      <div className="token-descr">
                        Oracle Network Developers
                      </div>
                    </div>
                  </div>
                  <div className="token-info">
                    <div className="info-wrapper seven">
                      <div className="token-icon">05</div>
                      <div className="token-descr">Gateway Activations</div>
                    </div>
                  </div>
                  <div className="token-info">
                    <div className="info-wrapper eight">
                      <div className="token-icon">27</div>
                      <div className="token-descr">Global Payments</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="roadmap section-padding-0-0" id="roadmap">
        <div className="section-heading text-center">
          {/* Dream Dots */}
          <div
            className="dream-dots justify-center fadeInUp"
            data-wow-delay="0.2s"
          >
            <span>Trading Roadmap</span>
          </div>
          <h2 className="fadeInUp" data-wow-delay="0.3s">
            Our Trading Roadmap
          </h2>
          <p className="fadeInUp" data-wow-delay="0.4s">
            Our trading and investment strategies and achievements made easy and
            visible.
          </p>
        </div>
        <div className="container mx-auto sm:px-4">
          <div className="flex flex-wrap ">
            <div className="md:w-full pr-4 pl-4">
              <div className="main-timeline">
                <div className="timeline">
                  <div className="icon"></div>
                  <div className="date-content">
                    <div className="date-outer">
                      {' '}
                      <span className="date">
                        {' '}
                        <span className="month">22 Sept</span>{' '}
                        <span className="year">2018</span>{' '}
                      </span>
                    </div>
                  </div>
                  <div className="timeline-content">
                    <h5 className="title">Listing to the major exchanges</h5>
                    <p className="description text-light-gray">
                      {' '}
                      Working with so many online exchange platform to make
                      trading and investments fast and easy.
                    </p>
                  </div>
                </div>
                <div className="timeline">
                  <div className="icon"></div>
                  <div className="date-content">
                    <div className="date-outer">
                      {' '}
                      <span className="date">
                        {' '}
                        <span className="month">27 Nov</span>{' '}
                        <span className="year">2018</span>{' '}
                      </span>
                    </div>
                  </div>
                  <div className="timeline-content">
                    <h5 className="title">integration to marketplaces</h5>
                    <p className="description text-light-gray">
                      {' '}
                      Global integration into the crypto marketplace. Working
                      and bringing our platform to the world market established
                      with ease .
                    </p>
                  </div>
                </div>
                <div className="timeline">
                  <div className="icon"></div>
                  <div className="date-content">
                    <div className="date-outer">
                      {' '}
                      <span className="date">
                        {' '}
                        <span className="month">19 Dec</span>{' '}
                        <span className="year">2018</span>{' '}
                      </span>
                    </div>
                  </div>
                  <div className="timeline-content">
                    <h5 className="title">Crypto Wallet version release</h5>
                    <p className="description text-light-gray">
                      {' '}
                      Integration of our crypto wallets for payment and
                      withdrawals from our platform. The best of of wallet is a
                      direct convertion into our client local currency
                    </p>
                  </div>
                </div>
                <div className="timeline">
                  <div className="icon"></div>
                  <div className="date-content">
                    <div className="date-outer">
                      {' '}
                      <span className="date">
                        {' '}
                        <span className="month">25 Jan</span>{' '}
                        <span className="year">2019</span>{' '}
                      </span>
                    </div>
                  </div>
                  <div className="timeline-content">
                    <h5 className="title">Blockchain development</h5>
                    <p className="description text-light-gray">
                      {' '}
                      Our platform blockchain and exchange development. Creating
                      a stable blockchain gateway for your crypto investments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ##### Token Info Start ##### */}
      <div className="features2 section-padding-100-70">
        <div className="container mx-auto sm:px-4">
          <div className="flex flex-wrap  items-center">
            <div className="w-full lg:w-1/3 pr-4 pl-4 offset-lg-0 md:w-2/3  md:mx-1/5 sm:w-4/5  sm:mx-1/6">
              <div className="ico-counter dotted-bg mb-30">
                <div className="counter-down">
                  <div className="content">
                    <div className="conuter-header">
                      <h3 className="w-text text-center">Investment Figures</h3>
                    </div>
                    <div className="counterdown-content">
                      {/* Countdown  */}
                      <div className="count-down titled circled text-center">
                        <div className="simple_timer syotimer timer">
                          <div className="timer-head-block"></div>
                          <div className="timer-body-block">
                            <div className="table-cell day">
                              <div className="tab-val">945</div>
                              <div className="tab-metr tab-unit">days</div>
                            </div>
                            <div className="table-cell hour">
                              <div className="tab-val">80m</div>
                              <div className="tab-metr tab-unit">Payout</div>
                            </div>
                            <div className="table-cell minute">
                              <div className="tab-val">700</div>
                              <div className="tab-metr tab-unit">Trades</div>
                            </div>
                            <div className="table-cell second">
                              <div className="tab-val opacity-100">5m</div>
                              <div className="tab-metr tab-unit">Users</div>
                            </div>
                          </div>
                          <div className="timer-foot-block"></div>
                        </div>
                      </div>
                      <div className="ico-progress">
                        <ul className="list-unstyled list-inline clearfix mb-10">
                          <li className="title">33m</li>
                          <li className="strength">75m</li>
                        </ul>
                        {/* skill strength */}
                        <div className="current-progress">
                          <div className="progress-bar has-gradient w-[75%]"></div>
                        </div>
                        <span className="pull-left">Softcap in 103 days</span>
                        <span className="pull-right">Hardcap</span>
                      </div>
                      <div className="text-center">
                        <Link
                          className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline dream-btn mt-30 fadeInUp"
                          data-wow-delay="0.6s"
                          to="/about"
                        >
                          More Info
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 pr-4 pl-4 sm:w-full  mt-md-30">
              <div className="services-block-four v2">
                <div className="inner-box">
                  <div className="icon-img-box">
                    <img
                      draggable="false"
                      src="https://ico-tailwindcss.netlify.app/assets/img/features/f1.svg"
                      alt=""
                    />
                  </div>
                  <h3>
                    <Link to="#">Delivery Reports</Link>
                  </h3>
                  <div className="text">
                    Daily payments and bonus of about 5m dollars to our clients.
                  </div>
                </div>
              </div>
              <div className="services-block-four v2">
                <div className="inner-box">
                  <div className="icon-img-box">
                    <img draggable="false" src={f2} alt="" />
                  </div>
                  <h3>
                    <Link to="#">Branded Sender</Link>
                  </h3>
                  <div className="text">
                    Sending out about 10000 mail information through our mailing
                    platform.
                  </div>
                </div>
              </div>
              <div className="services-block-four v2">
                <div className="inner-box">
                  <div className="icon-img-box">
                    <img draggable="false" src={f3} alt="" />
                  </div>
                  <h3>
                    <Link to="#">Successful Transaction</Link>
                  </h3>
                  <div className="text">
                    A weekly successful transaction of about 500 through our
                    upgraded blockchain gateway.
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 pr-4 pl-4 sm:w-full  mt-md-30 mt-smy-0">
              <div className="services-block-four v2">
                <div className="inner-box">
                  <div className="icon-img-box">
                    <img draggable="false" src={f4} alt="" />
                  </div>
                  <h3>
                    <Link to="#">Marketing Plans</Link>
                  </h3>
                  <div className="text">
                    Every day marking and advertisment to the world marketplace.
                  </div>
                </div>
              </div>
              <div className="services-block-four v2">
                <div className="inner-box">
                  <div className="icon-img-box">
                    <img draggable="false" src={f5} alt="" />
                  </div>
                  <h3>
                    <Link to="#">Speed Processing</Link>
                  </h3>
                  <div className="text">
                    Fast and easy transaction processing through our crypto
                    transaction gateways.
                  </div>
                </div>
              </div>
              <div className="services-block-four v2">
                <div className="inner-box">
                  <div className="icon-img-box">
                    <img draggable="false" src={f6} alt="" />
                  </div>
                  <h3>
                    <Link to="#">Global Popularity</Link>
                  </h3>
                  <div className="text">
                    We are known and establish trading platform round the world.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ##### FAQ & Timeline Area Start ##### */}
      <div className="faq-timeline-area section-padding-0-85" id="faq">
        <div className="container mx-auto sm:px-4">
          <div className="section-heading text-center">
            {/* Dream Dots */}
            <div
              className="dream-dots justify-center fadeInUp"
              data-wow-delay="0.2s"
            >
              <span>FAQ</span>
            </div>
            <h2 className="fadeInUp" data-wow-delay="0.3s">
              {' '}
              Frequently Questions
            </h2>
            <p className="fadeInUp" data-wow-delay="0.4s">
              Information and guidiance. Questions constantly asked by our
              clients.
            </p>
          </div>
          <div className="flex flex-wrap  items-center">
            <div className="w-full lg:w-1/2 pr-4 pl-4 offset-lg-0 md:w-2/3  md:mx-1/5 sm:w-full ">
              <img draggable="false" src={faq} alt="" className="mx-auto" />
            </div>
            <div className="w-full lg:w-1/2 pr-4 pl-4 md:w-full ">
              <div className="dream-faq-area mt-s ">
                <dl style={{ marginBottom: 0 }}>
                  {/* Single FAQ Area */}
                  <dt
                    onClick={() =>
                      setOpenFaq({
                        ...openFaq,
                        faq1: !openFaq.faq1,

                        faq2: false,
                        faq3: false,
                        faq5: false,
                        faq6: false,
                        faq7: false,
                      })
                    }
                    className="wave fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    What are the best cryptocurrency for buy?
                  </dt>
                  <dd
                    className={`${openFaq.faq1 ? 'block' : 'hidden'} fadeInUp`}
                    data-wow-delay="0.3s"
                  >
                    <p>
                      There are so many cryptocurrencies, getting one depends on
                      your requirement and market value for transaction.
                    </p>
                  </dd>
                  {/* Single FAQ Area */}
                  <dt
                    onClick={() =>
                      setOpenFaq({
                        ...openFaq,
                        faq2: !openFaq.faq2,
                        faq1: false,

                        faq3: false,
                        faq5: false,
                        faq6: false,
                        faq7: false,
                      })
                    }
                    className="wave fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    How to buy cryptocurrency?
                  </dt>
                  <dd
                    className={`${openFaq.faq2 ? 'block' : 'hidden'} fadeInUp`}
                  >
                    <p>
                      There are many legit platforms out there in the market for
                      your crypto purchase. You can purchase from a vendor or
                      make auto card payment for crypto purchase. You can sale
                      your crypto on coinbase, paxful, coinmama, localbitcoins,
                      moonpay etc.
                    </p>
                  </dd>
                  {/* Single FAQ Area */}
                  <dt
                    onClick={() =>
                      setOpenFaq({
                        ...openFaq,
                        faq3: !openFaq.faq3,
                        faq1: false,
                        faq2: false,

                        faq5: false,
                        faq6: false,
                        faq7: false,
                      })
                    }
                    className="wave fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    How long will i get return after cryptoguarantee investment
                    ?
                  </dt>
                  <dd
                    className={`${openFaq.faq3 ? 'block' : 'hidden'} fadeInUp`}
                  >
                    <p>
                      All investments are stable and transparent.You get your
                      earning 24hour after your investment.
                    </p>
                  </dd>
                  {/* Single FAQ Area */}
                  <dt
                    onClick={() =>
                      setOpenFaq({
                        ...openFaq,
                        faq4: !openFaq.faq4,
                        faq1: false,
                        faq2: false,
                        faq3: false,
                        faq5: false,
                        faq6: false,
                        faq7: false,
                      })
                    }
                    className="wave fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    What happens when bitcoins are lost?
                  </dt>
                  <dd
                    className={`${openFaq.faq4 ? 'block' : 'hidden'} fadeInUp`}
                  >
                    <p>
                      When a user loses his wallet, it has the effect of
                      removing money out of circulation. Lost bitcoins still
                      remain in the block chain just like any other bitcoins.
                      However, lost bitcoins remain dormant forever because
                      there is no way for anybody to find the private key(s)
                      that would allow them to be spent again. Because of the
                      law of supply and demand, when fewer bitcoins are
                      available, the ones that are left will be in higher demand
                      and increase in value to compensate.
                    </p>
                  </dd>
                  <dt
                    onClick={() =>
                      setOpenFaq({
                        ...openFaq,
                        faq5: !openFaq.faq5,
                        faq1: false,
                        faq2: false,
                        faq3: false,

                        faq6: false,
                        faq7: false,
                      })
                    }
                    className="wave fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    How does cryptoguarantee work?
                  </dt>
                  <dd
                    className={`${openFaq.faq5 ? 'block' : 'hidden'} fadeInUp`}
                  >
                    <p>
                      Cryptoguarantee work with the blockchain system, providing
                      you a global means of crypto investment and securing your
                      information and fund through our secured encrypted system.
                    </p>
                  </dd>
                  <dt
                    onClick={() =>
                      setOpenFaq({
                        ...openFaq,
                        faq6: !openFaq.faq6,
                        faq1: false,
                        faq2: false,
                        faq3: false,
                        faq5: false,

                        faq7: false,
                      })
                    }
                    className="wave fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    How long can i withdraw my profit?
                  </dt>
                  <dd
                    className={`${openFaq.faq6 ? 'block' : 'hidden'} fadeInUp`}
                  >
                    <p>
                      You will be eligible for withdrawal after in 5 trading
                      days after investment.
                    </p>
                  </dd>
                  <dt
                    onClick={() =>
                      setOpenFaq({
                        ...openFaq,
                        faq7: !openFaq.faq7,
                        faq1: false,
                        faq2: false,
                        faq3: false,
                        faq5: false,
                        faq6: false,
                      })
                    }
                    className="wave fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    Will i get my bonus?
                  </dt>
                  <dd
                    className={`${openFaq.faq7 ? 'block' : 'hidden'} fadeInUp`}
                  >
                    <p>
                      We have a registration bonus of 30 dollars and an
                      additional bonus prior to your choosen investment plan.
                    </p>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ##### FAQ & Timeline Area End ##### */}

      {/* ##### Team Area Start ##### */}
      <section
        className="our_team_area section-padding-100-0 clearfix"
        id="team"
      >
        <div className="container mx-auto sm:px-4">
          <div className="flex flex-wrap ">
            <div className="w-full">
              <div className="section-heading text-center">
                {/* Dream Dots */}
                <div
                  className="dream-dots justify-center fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <span>Our Team</span>
                </div>
                <h2 className="fadeInUp" data-wow-delay="0.3s">
                  Awesome Team
                </h2>
                <p className="fadeInUp" data-wow-delay="0.4s">
                  Meet our genus team, trusted and reliable. We are out to react
                  out to our clients. Our client satisfaction is our most
                  priority{' '}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap ">
            {/* Single Team Member */}
            <div className="w-full sm:w-1/2 pr-4 pl-4 lg:w-1/4 ">
              <div
                className="single-team-member fadeInUp"
                data-wow-delay="0.2s"
              >
                {/* Image */}
                <div className="team-member-thumb">
                  <img
                    draggable="false"
                    src={team1}
                    className="center-block"
                    alt=""
                  />
                </div>
                {/* Team Info */}
                <div className="team-info">
                  <h5 className="w-text">Joman Helal</h5>
                  <p className="g-text">Executive Officer</p>
                </div>
                {/* Social Icon */}
                <div className="team-social-icon">
                  <Link to="#">
                    <i className="fa fa-linkedin"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Single Team Member */}
            <div className="w-full sm:w-1/2 pr-4 pl-4 lg:w-1/4 ">
              <div
                className="single-team-member fadeInUp"
                data-wow-delay="0.3s"
              >
                {/* Image */}
                <div className="team-member-thumb">
                  <img
                    draggable="false"
                    src={team2}
                    className="center-block"
                    alt=""
                  />
                </div>
                {/* Team Info */}
                <div className="team-info">
                  <h5 className="w-text">Slans Alons</h5>
                  <p className="g-text">Business Development</p>
                </div>
                {/* Social Icon */}
                <div className="team-social-icon">
                  <Link to="#">
                    <i className="fa fa-linkedin"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Single Team Member */}
            <div className="w-full sm:w-1/2 pr-4 pl-4 lg:w-1/4 ">
              <div
                className="single-team-member fadeInUp"
                data-wow-delay="0.4s"
              >
                {/* Image */}
                <div className="team-member-thumb">
                  <img
                    draggable="false"
                    src={team3}
                    className="center-block"
                    alt=""
                  />
                </div>
                {/* Team Info */}
                <div className="team-info">
                  <h5 className="w-text">Josha Michal</h5>
                  <p className="g-text">UX/UI Designer</p>
                </div>
                {/* Social Icon */}
                <div className="team-social-icon">
                  <Link to="#">
                    <i className="fa fa-linkedin"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Single Team Member */}
            <div className="w-full sm:w-1/2 pr-4 pl-4 lg:w-1/4 ">
              <div
                className="single-team-member fadeInUp"
                data-wow-delay="0.5s"
              >
                {/* Image */}
                <div className="team-member-thumb">
                  <img
                    draggable="false"
                    src={team}
                    className="center-block"
                    alt=""
                  />
                </div>
                {/* Team Info */}
                <div className="team-info">
                  <h5 className="w-text">Johan Wright</h5>
                  <p className="g-text">Head of Marketing</p>
                </div>
                {/* Icon */}
                <div className="team-social-icon">
                  <Link to="#">
                    <i className="fa fa-linkedin"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="our_team_area section-padding-100-0 clearfix"
        id="team"
      >
        <div className="container mx-auto sm:px-4">
          <div className="flex flex-wrap ">
            <div className="w-full">
              <div className="section-heading text-center">
                {/* Dream Dots */}
                <div
                  className="dream-dots justify-center fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <span>Our Advisers</span>
                </div>
                <h2 className="fadeInUp" data-wow-delay="0.3s">
                  Board Advisor
                </h2>
                <p className="fadeInUp" data-wow-delay="0.4s">
                  Meet our advisers who has contributed so greatly for the
                  growth and establishment of cryptoguarantee.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap ">
            {/* Single Team Member */}
            <div className="w-full sm:w-1/2 pr-4 pl-4 lg:w-1/4 ">
              <div
                className="single-team-member fadeInUp"
                data-wow-delay="0.2s"
              >
                {/* Image */}
                <div className="team-member-thumb">
                  <img
                    draggable="false"
                    src={adviser1}
                    className="center-block"
                    alt=""
                  />
                </div>
                {/* Team Info */}
                <div className="team-info">
                  <h5 className="w-text"> Helal Kenneth</h5>
                  <p className="g-text">CEO Owen Gas Ltd</p>
                </div>
                {/* Social Icon */}
                <div className="team-social-icon">
                  <Link to="#">
                    <i className="fa fa-linkedin"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Single Team Member */}
            <div className="w-full sm:w-1/2 pr-4 pl-4 lg:w-1/4 ">
              <div
                className="single-team-member fadeInUp"
                data-wow-delay="0.3s"
              >
                {/* Image */}
                <div className="team-member-thumb">
                  <img
                    draggable="false"
                    src={adviser2}
                    className="center-block"
                    alt=""
                  />
                </div>
                {/* Team Info */}
                <div className="team-info">
                  <h5 className="w-text">Aron Olivia</h5>
                  <p className="g-text">Business Administrator</p>
                </div>
                {/* Social Icon */}
                <div className="team-social-icon">
                  <Link to="#">
                    <i className="fa fa-linkedin"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Single Team Member */}
            <div className="w-full sm:w-1/2 pr-4 pl-4 lg:w-1/4 ">
              <div
                className="single-team-member fadeInUp"
                data-wow-delay="0.4s"
              >
                {/* Image */}
                <div className="team-member-thumb">
                  <img
                    draggable="false"
                    src={adviser3}
                    className="center-block"
                    alt=""
                  />
                </div>
                {/* Team Info */}
                <div className="team-info">
                  <h5 className="w-text">Joshua Loise</h5>
                  <p className="g-text">Blockchain Developer</p>
                </div>
                {/* Social Icon */}
                <div className="team-social-icon">
                  <Link to="#">
                    <i className="fa fa-linkedin"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Single Team Member */}
            <div className="w-full sm:w-1/2 pr-4 pl-4 lg:w-1/4 ">
              <div
                className="single-team-member fadeInUp"
                data-wow-delay="0.5s"
              >
                {/* Image */}
                <div className="team-member-thumb">
                  <img
                    draggable="false"
                    src={adviser4}
                    className="center-block"
                    alt=""
                  />
                </div>
                {/* Team Info */}
                <div className="team-info">
                  <h5 className="w-text">Luke Kelvin</h5>
                  <p className="g-text">Manager</p>
                </div>
                {/* Icon */}
                <div className="team-social-icon">
                  <Link to="#">
                    <i className="fa fa-linkedin"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
