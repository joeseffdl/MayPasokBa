"use client";

import { useState, useMemo } from "react";

import { scheduleProps } from "@/utils/types";
import { DAYS_OF_WEEK, TimeDifference, scheduleDataObject } from "@/utils/";
import { EventModal } from "./EventModal";

export const WeekCalendarView = () => {
  const [selectedSchedule, setSelectedSchedule] = useState<scheduleProps>({
    id: 0,
    status: "No Information",
    subject: "",
    startTime: "",
    endTime: "",
  });
  const [modifiedEvents, setModifiedEvents] = useState<scheduleProps[]>([]);
  const [modalState, setModalState] = useState(false);
  const scheduleData = useMemo(() => scheduleDataObject, []);

  function openModalInformation({
    id,
    status,
    subject,
    startTime,
    endTime,
  }: scheduleProps) {
    setSelectedSchedule({
      id,
      status,
      subject,
      startTime,
      endTime,
    });
    setModalState(true);
  }

  return (
    <div className="hidden lg:block overflow-hidden rounded-lg shadow-lg">
      <table className="table-fixed bg-slate-100 p-5 border border-slate-300 shadow-md rounded-lg w-full">
        <thead>
          <tr>
            <th className="w-16"></th>
            {DAYS_OF_WEEK.map((day) => (
              <th
                className={`w-1/6 sm:w-auto py-2 text-slate-600 border border-b-2 border-b-slate-300 `}
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
              const hour = Math.floor(i / 2) + 7;
              const minute = i % 2 === 0 ? "00" : "30";
              const time = `${hour.toString().padStart(2, "0")}:${minute}`;

              return (
                <>
                  <tr className="relative select-none h-5 " key={time}>
                    <td className="absolute transform -translate-y-1/2 flex justify-end px-2 items-center text-sm w-16">
                      {time}
                    </td>
                    {DAYS_OF_WEEK.map((day) => {
                      const events: scheduleProps[] = scheduleData[day] || [];
                      const event = events.find(
                        (e: scheduleProps) => e.startTime === time
                      );
                      if (!event) {
                        return (
                          <td
                            key={`${day}-${time}`}
                            className="h-[2.5rem] border border-gray-200"
                          />
                        );
                      }
                      const { startTime, endTime, subject, status, id } = event;
                      const duration = TimeDifference(startTime, endTime);
                      const style: React.CSSProperties = {
                        height: `${(duration as number) * 5}rem`,
                      };
                      return (
                        <td
                          key={`${day}-${time}-${subject}`}
                          className="relative flex justify-center items-start cursor-pointer"
                        >
                          <div
                            className="absolute w-full transparent p-1"
                            style={style}
                          >
                            <div
                              className={`text-xs rounded-lg w-full h-full 
                    ${
                      modifiedEvents.find((e) => e.id === id)?.status ===
                      "No Information"
                        ? "hover:bg-blue-200 bg-blue-100"
                        : modifiedEvents.find((e) => e.id === id)?.status ===
                          "Online"
                        ? "hover:bg-green-200 bg-green-100"
                        : modifiedEvents.find((e) => e.id === id)?.status ===
                          "Face to Face"
                        ? "hover:bg-orange-200 bg-orange-100"
                        : modifiedEvents.find((e) => e.id === id)?.status ===
                          "Asynchronous"
                        ? "hover:bg-yellow-200 bg-yellow-100"
                        : modifiedEvents.find((e) => e.id === id)?.status ===
                          "No Classes"
                        ? "hover:bg-red-200 bg-red-100"
                        : "hover:bg-blue-200 bg-blue-100"
                    } 
                    p-2 flex items-center justify-center`}
                            >
                              <div
                                className={`${
                                  modalState ? "-z-0" : "z-10"
                                } w-full h-full flex flex-col gap-1 `}
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
                                <div
                                  className={`${
                                    modifiedEvents.find((e) => e.id === id)
                                      ?.status === "No Information"
                                      ? "text-blue-800"
                                      : modifiedEvents.find((e) => e.id === id)
                                          ?.status === "Online"
                                      ? "text-green-800"
                                      : modifiedEvents.find((e) => e.id === id)
                                          ?.status === "Face to Face"
                                      ? "text-orange-800"
                                      : modifiedEvents.find((e) => e.id === id)
                                          ?.status === "Asynchronous"
                                      ? "text-yellow-800"
                                      : modifiedEvents.find((e) => e.id === id)
                                          ?.status === "No Classes"
                                      ? "text-red-800"
                                      : "text-blue-800"
                                  } font-bold`}
                                >
                                  {subject}
                                </div>
                                <div
                                  className={`${
                                    modifiedEvents.find((e) => e.id === id)
                                      ?.status === "No Information"
                                      ? "text-blue-400"
                                      : modifiedEvents.find((e) => e.id === id)
                                          ?.status === "Online"
                                      ? "text-green-400"
                                      : modifiedEvents.find((e) => e.id === id)
                                          ?.status === "Face to Face"
                                      ? "text-orange-400"
                                      : modifiedEvents.find((e) => e.id === id)
                                          ?.status === "Asynchronous"
                                      ? "text-yellow-400"
                                      : modifiedEvents.find((e) => e.id === id)
                                          ?.status === "No Classes"
                                      ? "text-red-400"
                                      : "text-blue-400"
                                  }`}
                                >
                                  {startTime} - {endTime}
                                </div>
                                <div className="flex items-center font-semibold justify-center h-full uppercase text-slate-700">
                                  {modifiedEvents.find((e) => e.id === id)
                                    ?.status ?? "No Information"}
                                </div>
                                <div
                                  className={`${
                                    modifiedEvents.find((e) => e.id === id)
                                      ?.status === "No Information"
                                      ? "text-blue-600"
                                      : modifiedEvents.find((e) => e.id === id)
                                          ?.status === "Online"
                                      ? "text-green-600"
                                      : modifiedEvents.find((e) => e.id === id)
                                          ?.status === "Face to Face"
                                      ? "text-orange-600"
                                      : modifiedEvents.find((e) => e.id === id)
                                          ?.status === "Asynchronous"
                                      ? "text-yellow-600"
                                      : modifiedEvents.find((e) => e.id === id)
                                          ?.status === "No Classes"
                                      ? "text-red-600"
                                      : "text-blue-600"
                                  } flex justify-end`}
                                >
                                  {duration} hours
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                </>
              );
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
  );
};
