"use client"

import { useState, useEffect } from "react"
{/* <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
            <div className="top h-5 w-full">
              <span className="text-gray-500">1</span>
            </div>
            <div className=" bottom flex-grow h-30 py-1 w-full cursor-pointer">
              <div className="event bg-purple-400 text-white rounded p-1 text-sm mb-1">
                <span className="event-name">Meeting</span>
                <span className="time">12:00~14:00</span>
              </div>
              <div className="event bg-purple-400 text-white rounded p-1 text-sm mb-1">
                <span className="event-name">Meeting</span>
                <span className="time">18:00~20:00</span>
              </div>
            </div>
          </div> */}
export const WeekCalendar = () => {

  const tableCols = () => {
    const cols = []
    for (let i = 0; i < 7; i++) {
      cols.push(
        <th
          key={i}
          className="border p-1 h-full xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300"
        >
          
        </th>
      )
    }
    return cols
  }

  const renderTable = () => {
    const tableRows = []
    for (let i = 0; i < 30; i++) {
      tableRows.push(
        <tr key={i} className="text-center h-10 relative">
        
          
          {tableCols()}
        </tr>
      )
    }
    return tableRows
  }

  return (
      <div className="bg-gray-200">
        <div className="container mx-auto">
          <div className="wrapper bg-white rounded shadow w-full ">
            <div className="header flex justify-between border-b p-2">
              <span className="text-lg font-bold ">2023 Jann Jaspher</span>
              <div className="buttons">
                <button className="p-1">
                  <svg
                    width="1em"
                    fill="gray"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-arrow-left-circle"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M8.354 11.354a.5.5 0 0 0 0-.708L5.707 8l2.647-2.646a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M11.5 8a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5z"
                    />
                  </svg>
                </button>
                <button className="p-1">
                  <svg
                    width="1em"
                    fill="gray"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-arrow-right-circle"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M7.646 11.354a.5.5 0 0 1 0-.708L10.293 8 7.646 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M4.5 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                    <span className="xl:block lg:block md:block sm:block hidden">
                      Sunday
                    </span>
                    <span className="xl:hidden lg:hidden md:hidden sm:hidden block">
                      Sun
                    </span>
                  </th>
                  <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                    <span className="xl:block lg:block md:block sm:block hidden">
                      Monday
                    </span>
                    <span className="xl:hidden lg:hidden md:hidden sm:hidden block">
                      Mon
                    </span>
                  </th>
                  <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                    <span className="xl:block lg:block md:block sm:block hidden">
                      Tuesday
                    </span>
                    <span className="xl:hidden lg:hidden md:hidden sm:hidden block">
                      Tue
                    </span>
                  </th>
                  <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                    <span className="xl:block lg:block md:block sm:block hidden">
                      Wednesday
                    </span>
                    <span className="xl:hidden lg:hidden md:hidden sm:hidden block">
                      Wed
                    </span>
                  </th>
                  <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                    <span className="xl:block lg:block md:block sm:block hidden">
                      Thursday
                    </span>
                    <span className="xl:hidden lg:hidden md:hidden sm:hidden block">
                      Thu
                    </span>
                  </th>
                  <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                    <span className="xl:block lg:block md:block sm:block hidden">
                      Friday
                    </span>
                    <span className="xl:hidden lg:hidden md:hidden sm:hidden block">
                      Fri
                    </span>
                  </th>
                  <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                    <span className="xl:block lg:block md:block sm:block hidden">
                      Saturday
                    </span>
                    <span className="xl:hidden lg:hidden md:hidden sm:hidden block">
                      Sat
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                
                {renderTable()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }