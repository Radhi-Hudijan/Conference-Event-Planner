import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { quantityDecrement, quantityIncrement } from "../redux/venue/venueSlice"

function ConferenceEvent() {
  const venueItems = useSelector((state) => state.venue)
  const dispatch = useDispatch()

  return (
    <>
      <nav className="flex flex-col sm:flex-row justify-between items-center h-auto  bg-[#123B6A] p-5 gap-5">
        <div className="font-bold text-yellow-500 text-xl sm:text-2xl text-nowrap">
          Conference Expense Planner
        </div>
        <div className="flex gap-2  justify-around items-center ">
          <div className="flex gap-2 px-3">
            <a
              href="/"
              className="text-white hover:text-yellow-500 px-2 py-2 rounded text-sm sm:text-base "
            >
              Venue
            </a>
            <a
              href="/"
              className="text-white hover:text-yellow-500 px-2 py-2 rounded text-sm sm:text-base text-nowrap"
            >
              Add-ons
            </a>
            <a
              href="/"
              className="text-white hover:text-yellow-500 px-2 py-2 rounded text-sm sm:text-base"
            >
              Meals
            </a>
          </div>
          <button className="text-xs sm:text-base text-nowrap bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-3 px-5 rounded uppercase">
            Show Details
          </button>
        </div>
      </nav>

      {/* {Main container} */}
      <div className="flex flex-col justify-center items-center p-10">
        {/*Room Selection section */}
        <div className="flex flex-col gap-5 justify-center items-center">
          <div className="flex justify-center items-center bg-[#123B6A] p-5 text-white font-bold w-90 sm:w-[900px]  text-2xl sm:text-4xl text-center">
            <h1>Venue Room Selection </h1>
          </div>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center flex-wrap">
            {venueItems.map((item, index) => (
              <div
                key={index}
                className="flex  flex-col gap-5 justify-center items-center p-5"
              >
                <img
                  src={item.img}
                  alt="venue"
                  className="w-86 h-50 object-cover"
                />
                <div className="flex flex-col gap-5 justify-center items-center text-center">
                  <div className=" text-xl sm:text-2xl font-bold">
                    {item.name}
                  </div>
                  <div className="text-xl font-bold">Cost : {item.cost}</div>
                  <div className="flex gap-5 justify-center items-center">
                    <button
                      onClick={() => dispatch(quantityIncrement(index))}
                      className="bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-3 px-6 rounded uppercase"
                    >
                      +
                    </button>
                    <div className="text-2xl font-bold">{item.quantity}</div>
                    <button
                      onClick={() => dispatch(quantityDecrement(index))}
                      className="bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-3 px-6 rounded uppercase"
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>Total cost : </div>
        </div>
      </div>
    </>
  )
}

export default ConferenceEvent
