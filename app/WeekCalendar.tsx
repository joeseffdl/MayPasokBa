import React from "react"

type ScheduleItem = {
  subject: string
  startTime: string
  endTime: string
  dayOfWeek: number
}

interface CustomDivProps extends React.HTMLAttributes<HTMLDivElement> {
  colSpan?: number
  rowSpan?: number
}

const DAYS_OF_WEEK = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]
const TIME_SLOTS = [
  "7:00",
  "7:30",
  "8:00",
  "8:30",
  "9:00",
  "9:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
]

export const WeekCalendar: React.FC = () => {
  const schedule: ScheduleItem[] = [
    {
      subject: "Embedded Systems",
      startTime: "9:00",
      endTime: "11:00",
      dayOfWeek: 2,
    },
    {
      subject: "Trends in Software Development Process",
      startTime: "12:00",
      endTime: "14:00",
      dayOfWeek: 2,
    },
    {
      subject: "Trends in Software Development Process",
      startTime: "15:00",
      endTime: "18:00",
      dayOfWeek: 2,
    },
    {
      subject: "CPE Practice and Design 2",
      startTime: "18:00",
      endTime: "20:00",
      dayOfWeek: 2,
    },

    {
      subject: "CPE Practice and Design 2",
      startTime: "19:30",
      endTime: "21:00",
      dayOfWeek: 3,
    },
    {
      subject: "Visual Arts",
      startTime: "16:30",
      endTime: "19:30",
      dayOfWeek: 4,
    },
    // { subject: "CPE Practice and Design 2", startTime: "7:30", endTime: "9:00", dayOfWeek: 6 },
    // { subject: "Field Study and Seminars", startTime: "10:30", endTime: "13:00", dayOfWeek: 6 },
    // { subject: "Emerging Technologies", startTime: "14:00", endTime: "17:00", dayOfWeek: 6 },
    // { subject: "Embedded Systems", startTime: "17:00", endTime: "21:00", dayOfWeek: 6 },
  ]

  const getRowSpan = (startTime: string, endTime: string) => {
    const start = TIME_SLOTS.indexOf(startTime)
    const end = TIME_SLOTS.indexOf(endTime)
    return end - start + 1
  }

  return (
    <div className="overflow-x-auto">
      <table className="table-auto bg-white border-black shadow-md rounded-lg">
        <thead>
          <tr>
            <th className="w-auto" />
            {DAYS_OF_WEEK.map((day) => (
              <th
                className={`lg:w-80 p-2 text-center bg-gray-200 text-gray-600 uppercase ${
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
        <tbody className="text-gray-600 divide-y divide-gray-100 ">
          {TIME_SLOTS.map((time, index) => (
            <tr key={time}>
              <td
                className={`${
                  index % 2 == 0 ? "bg-sky-300" : ""
                } text-center px-4 py-3 font-semibold`}
              >
                {time}
              </td>
              {DAYS_OF_WEEK.map((day, dayIndex) => {
                const item = schedule.find(
                  (item) =>
                    item.startTime === time && item.dayOfWeek === dayIndex
                )
                return (
                  <td
                    className={`rounded-lg ${
                      item ? "bg-gray-200" : "bg-white"
                    }`}
                    key={dayIndex}
                    colSpan={1}
                    rowSpan={
                      item ? getRowSpan(item.startTime, item.endTime) : 1
                    }
                  >
                    {item && (
                      <>
                        <p className="font-semibold text-center">
                          {item.subject}
                        </p>
                        <p className="text-sm text-center">
                          {item.startTime} - {item.endTime}
                        </p>
                      </>
                    )}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
