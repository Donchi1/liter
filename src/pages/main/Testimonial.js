import React from 'react'
import OwlCarousel from 'react-owl-carousel'

import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import testi from '../../assets/img/testi.jpg'
import testi1 from '../../assets/img/testi1.jpg'
import testi2 from '../../assets/img/testi2.jpg'

function Testimonial() {
  return (
    <div className="container mx-auto text-center">
      <OwlCarousel
        responsive={{
          460: {
            items: 1,
          },
          760: {
            items: 1,
          },
          1000: {
            items: 3,
          },
        }}
        loop
        dots
        autoplay
        className="owl-theme"
        margin={10}
        nav={false}
      >
        <div className="w-full sm:w-1/2 pr-4 pl-4 lg:w-1/4 ">
          <div className="single-team-member fadeInUp" data-wow-delay="0.4s">
            <div className="team-member-thumb">
              <img
                draggable="false"
                src={testi2}
                className="center-block"
                alt=""
              />
            </div>
            <div className="team-info">
              <h3 className="w-text">Ella James</h3>
              <p className="g-text">
                {' '}
                I was able to withdraw my fund within 5 days of their trading.
                Am so happy to be in this platform. Thanks to their account
                manager and team members.
              </p>
            </div>
          </div>

          <div className="single-team-member fadeInUp" data-wow-delay="0.4s">
            <div className="team-member-thumb">
              <img
                draggable="false"
                src={testi}
                className="center-block"
                alt=""
              />
            </div>
            <div className="team-info">
              <h3 className="w-text">Jude Kenneth</h3>

              <p className="g-text">
                {' '}
                Am so glad that i joined this wonderful life changing
                platform.They have truely changed my life with the little
                investment of $200 everything changed.
              </p>
            </div>
          </div>

          <div className="single-team-member fadeInUp" data-wow-delay="0.4s">
            <div className="team-member-thumb">
              <img
                draggable="false"
                src={testi1}
                className="center-block"
                alt=""
              />
            </div>
            <div className="team-info">
              <h3 className="w-text">James Elvis</h3>

              <p className="g-text">
                {' '}
                I was insulted by my boss, who sacked me from work today am
                rich. All thanks to Crytonomize management who has made this a
                success.
              </p>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </div>
  )
}

export default Testimonial
