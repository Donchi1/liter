import React from 'react'
import team from '../assets/img/bigteam.jpg'
import team1 from '../assets/img/bigteam1.jpg'
import team2 from '../assets/img/bigteam2.jpg'
import team3 from '../assets/img/bigteam3.jpg'

import adviser1 from '../assets/img/bigteam4.jpg'
import adviser2 from '../assets/img/teamw1.jpg'
import adviser3 from '../assets/img/tm2.jpeg'
import adviser4 from '../assets/img/tm3.jpeg'
import { Link } from 'react-router-dom'

export default function Teams() {
  return (
    <>
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
                  <h5 className="w-text">Frederick Anderson</h5>
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
    </>
  )
}
