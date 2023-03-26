"use client"

import { useState, useEffect } from "react"
import { WeekHeader } from "./WeekHeader"
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
    for (let i = 1; i < 8; i++) {
      cols.push(
        <th
          key={i}
          className="border p-1 h-full xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300"
        >
          <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
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
          </div>
        </th>
      )
    }
    return cols
  }

  const renderTable = () => {
    const tableRows = []
    let hour = 7
    let minute = 0
    for (let i = 0; i < 30; i++) {
      const time = `${hour.toString().padStart(2, "0")}:${minute
        .toString()
        .padStart(2, "0")}`
      tableRows.push(
        <tr key={i} className="text-center h-10 relative">
          <td className="border p-1 h-full xl:w-10 w-5">{time}</td>{" "}
          {tableCols()}
        </tr>
      )
      minute += 30
      if (minute === 60) {
        minute = 0
        hour += 1
      }
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
              <WeekHeader />
              <tbody>
                {renderTable()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }