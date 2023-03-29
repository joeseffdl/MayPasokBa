"use client";

import { useState, useMemo } from "react";

import { scheduleProps } from "@/utils/types";
import { scheduleDataObject } from "@/utils/scheduleDataObject";
import { TimeDifference } from "./TimeDifference";
import { EventModal } from "./EventModal";

const DAYS_OF_WEEK = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const WeekCalendarView = () => {
  const [selectedSchedule, setSelectedSchedule] = useState<scheduleProps>({
    id: 0,
    status: "No Information",
    subject: "",
    startTime: "",
    endTime: "",
  })
  const [modifiedEvents, setModifiedEvents] = useState<scheduleProps[]>([])
  const [modalState, setModalState] = useState(false)
  const scheduleData = useMemo(() => scheduleDataObject, []);

  function openModalInformation({id,status, subject, startTime, endTime}: scheduleProps) {
    setSelectedSchedule((prevSelectedSchedule) => ({
      ...prevSelectedSchedule,
      id,
      status,
      subject,
      startTime,
      endTime,
    }))
    setModalState(true)
  }
  
  return (
    <div className="hidden lg:block overflow-hidden">
      <table className="table-fixed bg-gray-100 p-5 border-gray-200 shadow-md rounded-lg w-full">
        <thead>
          <tr>
            <th className="w-1/12"></th>
            {DAYS_OF_WEEK.map((day) => (
              <th
                className={`w-1/6 sm:w-auto py-2 text-gray-600 uppercase font-bold ${
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
          {Array(34)
            .fill(null)
            .map((_, i) => {
              const hour = Math.floor(i / 2) + 7
              const minute = i % 2 === 0 ? "00" : "30"
              const time = `${hour.toString().padStart(2, "0")}:${minute}`
              return (
                <tr className="relative select-none h-5 " key={time}>
                  <td className="absolute -top-5 p-2 text-gray-600 font-bold">
                    {time}
                  </td>
                  {DAYS_OF_WEEK.map((day) => {
                    const events: scheduleProps[] = scheduleData[day] || []
                    const event = events.find(
                      (e: scheduleProps) => e.startTime === time
                    )
                    if (!event) {
                      return (
                        <td
                          key={`${day}-${time}`}
                          className="h-[2.5rem] border-y-2 border-gray-200"
                        />
                      )
                    }
                    const { startTime, endTime, subject, status,id } = event
                    const duration = TimeDifference(startTime, endTime)
                    const style: React.CSSProperties = {
                      height: `${(duration as number) * 5}rem`,
                    }
                    return (
                      <td
                        key={`${day}-${time}-${subject}`}
                        className="relative flex justify-center"
                      >
                        <div
                          className={`${
                            modalState ? "-z-0" : "z-10"
                          } hover:opacity-75 border border-slate-500 text-xs absolute rounded-xl top-0 w-full bg-blue-300 text-center p-2 flex items-center justify-center`}
                          style={style}
                          onClick={() =>
                            openModalInformation({
                              id,
                              status,
                              subject,
                              startTime,
                              endTime,
                            })
                          }
                        >
                          {subject}
                          <br />
                          {startTime} - {endTime}
                          <br />
                          {duration} hours
                          <br />
                          {modifiedEvents.find((e) => e.id === id)?.status ??
                            "No Information"}
                        </div>
                      </td>
                    )
                  })}
                </tr>
              )
            })}
        </tbody>
      </table>
      {modalState && (
        <EventModal
          {...selectedSchedule}
          setSelectedSchedule={setSelectedSchedule}
          setModalState={setModalState}
          setModifiedEvents={setModifiedEvents}
        />
      )}
    </div>
  )
};
