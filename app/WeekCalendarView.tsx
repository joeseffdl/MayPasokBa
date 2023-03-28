"use client";

import { useState } from "react";

import { scheduleProps } from "@/utils/types";
import { scheduleDataObject } from "@/utils/scheduleDataObject";
import { TimeDifference } from "./TimeDifference";

export const WeekCalendarView = () => {
  const DAYS_OF_WEEK = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]

  return (
    <div className="hidden lg:block overflow-hidden">
      <table className="table-auto bg-white p-5 border-black shadow-md rounded-lg w-full">
        <thead>
          <tr>
            <th className="w-1/12"></th>
            {DAYS_OF_WEEK.map((day) => (
              <th
                className={`w-1/6 sm:w-auto py-2 subject-center bg-gray-200 subject-gray-600 uppercase ${
                  day.toLowerCase() === "saturday" ? "rounded-tr-lg" : ""
                }`}
                key={day}
              >
                <span className="hidden md:block">{day}</span>
                <span className="block md:hidden">{day.slice(0, 3)}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: (24 - 7) * 2 }).map((_, i) => {
            const hour = Math.floor(i / 2) + 7
            const minute = i % 2 === 0 ? "00" : "30"
            const time = `${hour.toString().padStart(2, "0")}:${minute}`
            return (
              <tr className="relative select-none h-5 " key={i}>
                <td className="absolute -top-5 p-2">{time}</td>
                {DAYS_OF_WEEK.map((day) => {
                  const events: scheduleProps[] = scheduleDataObject[day] || []
                  const event: scheduleProps | undefined = events.find(
                    (e: scheduleProps) => e.startTime === time
                  )
                  if (!event)
                    return <td key={day} className="h-[2.5rem] border-y-2" />
                  const duration = TimeDifference(
                    event.startTime,
                    event.endTime
                  )
                  const style: React.CSSProperties = {
                    height: `${(duration as number) * 5}rem`,
                  }
                  return (
                    <td key={day} className="relative">
                      <div
                        className="border border-slate-500 subject-xs absolute rounded-xl top-0 w-full bg-blue-300 subject-white subject-center p-2"
                        style={style}
                      >
                        {event.subject}
                        <br />
                        {event.startTime} - {event.endTime}
                        <br />
                        {duration} hours
                      </div>
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}