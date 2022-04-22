import React from 'react'
import Hero from './Hero'
import Footer from './Footer'
import Testimonial from './Testimonial'
import manager from '../../assets/img/manager.jpg'
import Teams from '../../components/Teams'
import { Link } from 'react-router-dom'
import computer from '../../assets/img/computer.png'
import feature3 from '../../assets/svg/feature-3.svg'
import feature4 from '../../assets/svg/feature-4.svg'
import feature5 from '../../assets/svg/feature-5.svg'
import feature6 from '../../assets/svg/feature-6.svg'
import feature7 from '../../assets/svg/feature-7.svg'
import platform from '../../assets/img/platform.png'
import feature8 from '../../assets/svg/feature-8.svg'

export default function About() {
  return (
    <div>
      <Hero pageName="About-Us" />

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
                    Decentralized Trading Platform
                  </span>
                </div>
                <h4 className="fadeInUp" data-wow-delay="0.3s">
                  Connect blockchain to the real world and start crypto tading.
                </h4>
                <p className="fadeInUp" data-wow-delay="0.4s">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  at dictum risus, non suscipit arcu. Quisque aliquam posuere
                  tortor, sit amet convallis nunc scelerisque in.
                </p>
                <p className="fadeInUp" data-wow-delay="0.5s">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Suscipit ipsa ut quasi adipisci voluptates, voluptatibus
                  aliquid alias beatae reprehenderit incidunt iusto laboriosam.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
              accumsan nisi Ut ut felis congue nisl hendrerit commodo.
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
                <h6>Instant settlement</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  neque quam, maxi ut accumsan ut, posuere sit Lorem ipsu.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  neque quam, maxi ut accumsan ut, posuere sit Lorem ipsu.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  neque quam, maxi ut accumsan ut, posuere sit Lorem ipsu.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  neque quam, maxi ut accumsan ut, posuere sit Lorem ipsu.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  neque quam, maxi ut accumsan ut, posuere sit Lorem ipsu.
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
                <h6>AI matching</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  neque quam, maxi ut accumsan ut, posuere sit Lorem ipsu.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  neque quam, maxi ut accumsan ut, posuere sit Lorem ipsu.
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
                <h6>Digital personas</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  neque quam, maxi ut accumsan ut, posuere sit Lorem ipsu.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
              accumsan nisi Ut ut felis congue nisl hendrerit commodo.
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
                    <i className="fa fa-check"></i>Creative Layout
                  </li>
                </ul>
                <Link
                  className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline more-btn mt-30 fadeInUp"
                  data-wow-delay="0.6s"
                  href="/features"
                >
                  Read More
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

      <Teams />
      <Testimonial />
      <Footer />
    </div>
  )
}
