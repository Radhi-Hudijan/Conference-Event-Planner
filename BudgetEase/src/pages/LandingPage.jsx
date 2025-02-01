import React from "react"
import { Link } from "react-router"
import AboutUs from "./AboutUs"

const LandingPage = () => {
  return (
    <div className="relative flex justify-center items-center min-h-screen  bg-cover bg-center bg-[url(https://cdn.pixabay.com/photo/2018/07/05/14/45/conference-3518465_1280.jpg)] ">
      <div className="absolute inset-0  bg-black opacity-50 "></div>
      <div className="absolute inset-0  backdrop-blur-md "></div>

      <div className=" relative z-10 text-white flex flex-col sm:flex-row justify-center items-center gap-5 sm:gap-20 w-full ">
        <div className="flex flex-col justify-center items-center text-center gap-4 w-full sm:w-auto md:w-[500px]  ">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-5 p-1">
            Conference Expense Planner
          </h1>
          <span className="text-base sm:text-lg md:text-xl">
            Plan your conference expenses with ease
          </span>
          <Link to="/conference-event">
            <button className="bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-6 rounded mt-4">
              Get Started
            </button>
          </Link>
        </div>
        <div className="text-lg font-bold w-full sm:w-auto md:w-[800px]">
          <AboutUs />
        </div>
      </div>
    </div>
  )
}

export default LandingPage
