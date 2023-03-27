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

const DAYS_OF_WEEK = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
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
];

export const WeekCalendar: React.FC = () => {
  const schedule: ScheduleItem[] = [
    { subject: "Embedded Systems", startTime: "9:00", endTime: "11:00", dayOfWeek: 2 },
    {
      subject: "Trends in Software Development Process",
      startTime: "12:00",
      endTime: "2:00",
      dayOfWeek: 2,
    },
    {
      subject: "Trends in Software Development Process",
      startTime: "3:00",
      endTime: "6:00",
      dayOfWeek: 2,
    },
    { subject: "CPE Practice and Design 2", startTime: "6:00", endTime: "8:00", dayOfWeek: 2 },

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
