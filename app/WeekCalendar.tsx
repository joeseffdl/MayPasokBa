import React from "react";

type ScheduleItem = {
  subject: string;
  startTime: string;
  endTime: string;
  dayOfWeek: number;
};

interface CustomDivProps extends React.HTMLAttributes<HTMLDivElement> {
  colSpan?: number;
  rowSpan?: number;
}

const DAYS_OF_WEEK = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const TIME_SLOTS = ["8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"];

export const WeekCalendar: React.FC = () => {
  const schedule: ScheduleItem[] = [
    { subject: "Math", startTime: "8:00", endTime: "9:00", dayOfWeek: 0 },
    { subject: "English", startTime: "10:00", endTime: "11:00", dayOfWeek: 1 },
    { subject: "Science", startTime: "13:00", endTime: "14:00", dayOfWeek: 2 },
    { subject: "History", startTime: "9:00", endTime: "10:00", dayOfWeek: 3 },
    { subject: "PE", startTime: "14:00", endTime: "15:00", dayOfWeek: 4 },
  ];

  const getRowSpan = (startTime: string, endTime: string) => {
    const start = TIME_SLOTS.indexOf(startTime);
    const end = TIME_SLOTS.indexOf(endTime);
    return end - start + 1;
  };

  return (
    <div className="container mx-auto">
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th></th>
            {DAYS_OF_WEEK.map((day) => (
              <th className="text-center font-bold" key={day}>
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TIME_SLOTS.map((time, index) => (
            <tr key={time}>
              <td className="py-2">{time}</td>
              {DAYS_OF_WEEK.map((day, dayIndex) => {
                const item = schedule.find(
                  (item) => item.startTime === time && item.dayOfWeek === dayIndex
                );
                return (
                  <td
                    className={`p-2 rounded-lg ${item ? "bg-blue-200" : ""}`}
                    key={dayIndex}
                    colSpan={1}
                    rowSpan={item ? getRowSpan(item.startTime, item.endTime) : 1}
                  >
                    {item && (
                      <>
                        <p className="font-bold">{item.subject}</p>
                        <p>
                          {item.startTime} - {item.endTime}
                        </p>
                      </>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
