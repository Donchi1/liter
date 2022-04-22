import React from 'react'
import { useParallax } from 'react-scroll-parallax'
import { Link } from 'react-router-dom'
import bg from '../../assets/img/bg-3.png'

function Hero({ pageName }) {
  return (
    <>
      <section
        className="w-full py-52 bg-fixed bg-cover  bg-no-repeat bg-center bg-special relative"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      ></section>
      <div className="container mx-auto text-center text-white my-24 absolute top-20 xl:right-20">
        <div className="flex justify-center items-center text-center ">
          <div>
            <div className="mb-10">
              <h2 className="font-bold uppercase text-5xl ">
                {pageName === 'About-Us' ? pageName.slice(0, 6) : pageName}
                <span className="text-[#5d41ec]">
                  {pageName === 'About-Us' && pageName.slice(6, 9)}
                </span>
              </h2>
            </div>
            <div>
              <Link to="/">Home</Link>
              <span className="mx-4">/</span> <span>{pageName}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
