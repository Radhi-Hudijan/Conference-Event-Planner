import React from "react"
import { Link } from "react-router"
import AboutUs from "./AboutUs"

const LandingPage = () => {
  return (
    <div className="relative flex justify-center items-center h-screen w-full bg-cover bg-center bg-[url(https://cdn.pixabay.com/photo/2018/07/05/14/45/conference-3518465_1280.jpg)]  ">
      <div className="absolute inset-0  bg-black opacity-50 border-5 border-red"></div>
      <div className="absolute inset-0  backdrop-blur-md "></div>

      <div className="z-10 w-full h-full text-white flex flex-row  justify-center items-center gap-20 px-5">
        <div className="flex flex-col justify-center items-center text-center gap-4 w-full sm:w-auto md:w-[500px] ">
          <h1 className="text-5xl sm:text-5xl font-bold">
            Conference Expense Planner
          </h1>
          <span className="text-lg sm:text-xl">
            Plan your conference expenses with ease
          </span>
          <Link to="/conference-event">
            <button className="bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-3 px-6 rounded">
              Get Started
            </button>
          </Link>
        </div>
        <div className="w-full sm:w-auto md:w-[800px] text-2xl font-bold">
          <AboutUs />
        </div>
      </div>
    </div>
  )
}

export default LandingPage
