import React from 'react'
import { ITripData } from './types';

type ListTripsProps = {
    data: ITripData;
  };

function TripBody({ data }: ListTripsProps) {
    const {
        date: { day, date },
        origin,
        destination,
        totalBusAssigned,
        timeScheduled: { departure, arrival },
        tripType,
      } = data;
  return (
    <>
          <div className="w-full h-40 min-w-[66rem] mx-3 md:mx-0 relative rounded-xl mb-7 shadow border border-slate-200">
        <div className="flex justify-around">
          <div
            style={{ flex: "1" }}
            className="flex flex-col justify-center items-start px-10"
          >
            <h3 className="text-red-500 text-xl pl-1 font-manrope">{day}</h3>
            <h1 className="text-red-400 font-medium text-5xl font-manrope">
              {date}
            </h1>
          </div>
          <div
            style={{ flex: "4" }}
            className="flex gap-x-10 -ml-28 items-center py-7"
          >
            <div className="h-24 w-[0.7px] bg-gray-500" />
            <div className="flex flex-col gap-y-5 justify-center">
              <h4 className="text-gray-500 font-medium">{origin}</h4>
              <h4 className="text-gray-500 font-medium">{destination}</h4>
            </div>
            <div className="h-24 w-[0.7px] bg-gray-500" />

            <div className="flex flex-col gap-y-4 justify-center">
              <h4 className="text-gray-500 font-medium">Total Bus assigned</h4>
              <h4 className="text-gray-500 font-medium">{totalBusAssigned}</h4>
            </div>
            <div className="h-24 w-[0.7px] bg-gray-500" />

            <div className="flex flex-col gap-y-1 justify-center">
              <h4 className="text-gray-500 font-medium">Time Scheduled</h4>
              <h4 className="text-red-500">
                {departure} - {arrival}
              </h4>
              <h4 className="text-primary">{tripType}</h4>
            </div>
          </div>
          <div style={{ flex: "1" }} className="flex flex-col justify-center">
            <button className="hover:text-white text-primary hover:bg-primary px-4 py-2 rounded-lg">
              Edit
            </button>
            <button className="hover:text-white text-primary hover:bg-primary px-4 py-2 rounded-lg">
              Cancel
            </button>
            <button className="hover:text-white text-primary hover:bg-primary px-4 py-2 rounded-lg">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default TripBody