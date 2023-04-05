import { DAYS_OF_WEEK } from "@/utils"
import { memo } from "react"

const TableRow = memo(({ time }:{time:string}) => {
  return (
    <tr className="relative select-none h-5 " key={time}>
      <td className="absolute transform -translate-y-1/2 flex justify-end px-2 items-center text-sm w-16">
        {time}
      </td>
      {DAYS_OF_WEEK.map((day) => (
        <td
          key={`${day}-${time}`}
          className="h-[2.5rem] border border-gray-200"
        />
      ))}
    </tr>
  )
})

export const WeekCalendarSkeleton = () => (
  <div className="overflow-hidden rounded-lg shadow-lg">
    <table className="table-fixed bg-slate-100 p-5 border border-slate-300 shadow-md rounded-lg w-full">
      <thead>
        <tr className="border">
          <th className="w-16 h-10 p-2 border" />
          <th />
          <th />
          <th />
          <th />
          <th />
          <th className="p-2">
            <button
              disabled={true}
              className="disabled:cursor-not-allowed disabled:opacity-50 bg-indigo-700 h-10 text-center text-white text-xs rounded-lg font-semibold px-4 py-2"
              onClick={() => {}}
            >
              Clear Event
            </button>
          </th>
          <th className="p-2">
            <button
              disabled={true}
              className="disabled:cursor-not-allowed disabled:opacity-50 bg-indigo-700 h-10 text-center text-white text-xs rounded-lg font-semibold px-4 py-2"
              onClick={() => {}}
            >
              Save Events
            </button>
          </th>
        </tr>
        <tr>
          <th className="w-16"></th>
          {DAYS_OF_WEEK.map((day, index) => (
            <th
              className="w-1/6 sm:w-auto py-2 text-slate-600 border border-b-2 border-b-slate-300 "
              key={day}
            >
              <span className="font-semibold text-sm">{day.slice(0, 3)}</span>
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

            return <TableRow time={time} />
          })}
      </tbody>
    </table>
  </div>
)
