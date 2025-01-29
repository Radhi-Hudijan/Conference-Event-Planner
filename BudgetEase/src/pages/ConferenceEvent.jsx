import React from "react"

function ConferenceEvent() {
  return (
    <>
      <navbar className="flex justify-between items-center h-16 bg-blue-900 p-10">
        <div className="font-bold text-yellow-500 text-2xl">
          Conference Expense Planner
        </div>
        <div className="flex gap-10 justify-around items-center">
          <div className="flex gap-5 px-5">
            <a
              href="/"
              className="text-white hover:text-yellow-500 px-3 py-2 rounded"
            >
              Venue
            </a>
            <a
              href="/"
              className="text-white hover:text-yellow-500 px-3 py-2 rounded"
            >
              Add-ons
            </a>
            <a
              href="/"
              className="text-white hover:text-yellow-500 px-3 py-2 rounded"
            >
              Meals
            </a>
          </div>
          <button className="bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-3 px-6 rounded uppercase">
            Show Details
          </button>
        </div>
      </navbar>
    </>
  )
}

export default ConferenceEvent
