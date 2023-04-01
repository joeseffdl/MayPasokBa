"use client";

import { DataContext } from "@/utils/context";
import { scheduleProps } from "@/utils/types";
import Image from "next/image";
import { useContext } from "react";

export const Event = () => {
  const { firebaseData, setFirebaseData } = useContext<any>(DataContext);

  function countStatusTypes(
    modifiedSchedules: scheduleProps[]
  ): Record<string, number> {
    const counts: Record<string, number> = {
      "No Information": 0,
      Online: 0,
      "Face to Face": 0,
      Asynchronous: 0,
      "No Classes": 0,
    };

    modifiedSchedules?.forEach((obj) => {
      const status: string | undefined = obj.status;
      if (status && status in counts) {
        counts[status]++;
      }
    });

    return counts;
  }

  return (
    <div className="flex items-center justify-center ">
      <div className="max-w-xl w-full drop-shadow-xl">
        <div className="h-full p-10 bg-slate-100  rounded-lg flex flex-col">
          <div className="w-full font-bold text-2xl text-gray-900">
            This week's schedule
          </div>
          <div className="flex w-full px-1 text-gray-800">
            <div className="w-full">
              <div className="w-full font-semibold text-sm ">
                Scheduled by {firebaseData?.username}
              </div>
              <div className="w-full font-semibold text-xs">
                {new Date(firebaseData?.createdOn?.toMillis())
                  .toDateString()
                  .split(" ")
                  .slice(1)
                  .join(" ")}
              </div>
            </div>
            <div className="w-fit">
              <Image
                className="rounded-full border border-slate-500"
                src={firebaseData?.avatar}
                alt="Avatar"
                width={40}
                height={40}
              />
            </div>
          </div>

          <div className="flex flex-col divide-y-2 divide-gray-500">
            <div className="w-full py-5 gap-2 flex flex-col">
              <div className="font-bold text-lg text-gray-700">Tuesday</div>
              {firebaseData?.modifiedEvents
                ?.slice(0, 4)
                .map((data: scheduleProps) => {
                  return (
                    <div
                      className={`${
                        data.status === "No Information"
                          ? "hover:bg-blue-200 bg-blue-100"
                          : data.status === "Online"
                          ? "hover:bg-green-200 bg-green-100"
                          : data.status === "Face to Face"
                          ? "hover:bg-orange-200 bg-orange-100"
                          : data.status === "Asynchronous"
                          ? "hover:bg-yellow-200 bg-yellow-100"
                          : data.status === "No Classes"
                          ? "hover:bg-red-200 bg-red-100"
                          : "hover:bg-blue-200 bg-blue-100"
                      } w-full rounded-lg shadow-md px-4 py-2`}
                    >
                      <div className="flex flex-col w-full ">
                        <span
                          className={`${
                            data.status === "No Information"
                              ? "text-blue-800"
                              : data.status === "Online"
                              ? "text-green-800"
                              : data.status === "Face to Face"
                              ? "text-orange-800"
                              : data.status === "Asynchronous"
                              ? "text-yellow-800"
                              : data.status === "No Classes"
                              ? "text-red-800"
                              : "text-blue-800"
                          } font-semibold w-1/2`}
                        >
                          {data.subject}
                        </span>
                        <div
                          className={`${
                            data.status === "No Information"
                              ? "text-blue-500"
                              : data.status === "Online"
                              ? "text-green-500"
                              : data.status === "Face to Face"
                              ? "text-orange-500"
                              : data.status === "Asynchronous"
                              ? "text-yellow-500"
                              : data.status === "No Classes"
                              ? "text-red-500"
                              : "text-blue-500"
                          }`}
                        >
                          {data.startTime} - {data.endTime}
                        </div>
                      </div>

                      <div className="text-lg w-full flex justify-end font-semibold">
                        {data.status}
                      </div>
                    </div>
                  );
                })}
              {/* <div>
                {Object.entries(
                  countStatusTypes(firebaseData?.modifiedEvents.slice(4, 5))
                ).map(([key, value]) => (
                  <div key={key}>
                    {key}: {value}
                  </div>
                ))}
              </div> */}
            </div>
            <div className="w-full py-5 gap-2 flex flex-col">
              <div className="font-bold text-lg text-gray-700">Wednesday</div>
              {firebaseData?.modifiedEvents
                ?.slice(4, 5)
                .map((data: scheduleProps) => {
                  return (
                    <div
                      className={`${
                        data.status === "No Information"
                          ? "hover:bg-blue-200 bg-blue-100"
                          : data.status === "Online"
                          ? "hover:bg-green-200 bg-green-100"
                          : data.status === "Face to Face"
                          ? "hover:bg-orange-200 bg-orange-100"
                          : data.status === "Asynchronous"
                          ? "hover:bg-yellow-200 bg-yellow-100"
                          : data.status === "No Classes"
                          ? "hover:bg-red-200 bg-red-100"
                          : "hover:bg-blue-200 bg-blue-100"
                      } w-full rounded-lg shadow-md px-4 py-2`}
                    >
                      <div className="flex flex-col w-full ">
                        <span
                          className={`${
                            data.status === "No Information"
                              ? "text-blue-800"
                              : data.status === "Online"
                              ? "text-green-800"
                              : data.status === "Face to Face"
                              ? "text-orange-800"
                              : data.status === "Asynchronous"
                              ? "text-yellow-800"
                              : data.status === "No Classes"
                              ? "text-red-800"
                              : "text-blue-800"
                          } font-semibold w-1/2`}
                        >
                          {data.subject}
                        </span>
                        <div
                          className={`${
                            data.status === "No Information"
                              ? "text-blue-500"
                              : data.status === "Online"
                              ? "text-green-500"
                              : data.status === "Face to Face"
                              ? "text-orange-500"
                              : data.status === "Asynchronous"
                              ? "text-yellow-500"
                              : data.status === "No Classes"
                              ? "text-red-500"
                              : "text-blue-500"
                          }`}
                        >
                          {data.startTime} - {data.endTime}
                        </div>
                      </div>

                      <div className="text-lg w-full flex justify-end font-semibold">
                        {data.status}
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="w-full py-5 gap-2 flex flex-col">
              <div className="font-bold text-lg text-gray-700">Thursday</div>
              {firebaseData?.modifiedEvents
                ?.slice(5, 6)
                .map((data: scheduleProps) => {
                  return (
                    <div
                      className={`${
                        data.status === "No Information"
                          ? "hover:bg-blue-200 bg-blue-100"
                          : data.status === "Online"
                          ? "hover:bg-green-200 bg-green-100"
                          : data.status === "Face to Face"
                          ? "hover:bg-orange-200 bg-orange-100"
                          : data.status === "Asynchronous"
                          ? "hover:bg-yellow-200 bg-yellow-100"
                          : data.status === "No Classes"
                          ? "hover:bg-red-200 bg-red-100"
                          : "hover:bg-blue-200 bg-blue-100"
                      } w-full rounded-lg shadow-md px-4 py-2`}
                    >
                      <div className="flex flex-col w-full ">
                        <span
                          className={`${
                            data.status === "No Information"
                              ? "text-blue-800"
                              : data.status === "Online"
                              ? "text-green-800"
                              : data.status === "Face to Face"
                              ? "text-orange-800"
                              : data.status === "Asynchronous"
                              ? "text-yellow-800"
                              : data.status === "No Classes"
                              ? "text-red-800"
                              : "text-blue-800"
                          } font-semibold w-1/2`}
                        >
                          {data.subject}
                        </span>
                        <div
                          className={`${
                            data.status === "No Information"
                              ? "text-blue-500"
                              : data.status === "Online"
                              ? "text-green-500"
                              : data.status === "Face to Face"
                              ? "text-orange-500"
                              : data.status === "Asynchronous"
                              ? "text-yellow-500"
                              : data.status === "No Classes"
                              ? "text-red-500"
                              : "text-blue-500"
                          }`}
                        >
                          {data.startTime} - {data.endTime}
                        </div>
                      </div>

                      <div className="text-lg w-full flex justify-end font-semibold">
                        {data.status}
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="w-full py-5 gap-2 flex flex-col">
              <div className="font-bold text-lg text-gray-700">Saturday</div>
              {firebaseData?.modifiedEvents
                ?.slice(6, 10)
                .map((data: scheduleProps) => {
                  return (
                    <div
                      className={`${
                        data.status === "No Information"
                          ? "hover:bg-blue-200 bg-blue-100"
                          : data.status === "Online"
                          ? "hover:bg-green-200 bg-green-100"
                          : data.status === "Face to Face"
                          ? "hover:bg-orange-200 bg-orange-100"
                          : data.status === "Asynchronous"
                          ? "hover:bg-yellow-200 bg-yellow-100"
                          : data.status === "No Classes"
                          ? "hover:bg-red-200 bg-red-100"
                          : "hover:bg-blue-200 bg-blue-100"
                      } w-full rounded-lg shadow-md px-4 py-2`}
                    >
                      <div className="flex flex-col w-full ">
                        <span
                          className={`${
                            data.status === "No Information"
                              ? "text-blue-800"
                              : data.status === "Online"
                              ? "text-green-800"
                              : data.status === "Face to Face"
                              ? "text-orange-800"
                              : data.status === "Asynchronous"
                              ? "text-yellow-800"
                              : data.status === "No Classes"
                              ? "text-red-800"
                              : "text-blue-800"
                          } font-semibold w-1/2`}
                        >
                          {data.subject}
                        </span>
                        <div
                          className={`${
                            data.status === "No Information"
                              ? "text-blue-500"
                              : data.status === "Online"
                              ? "text-green-500"
                              : data.status === "Face to Face"
                              ? "text-orange-500"
                              : data.status === "Asynchronous"
                              ? "text-yellow-500"
                              : data.status === "No Classes"
                              ? "text-red-500"
                              : "text-blue-500"
                          }`}
                        >
                          {data.startTime} - {data.endTime}
                        </div>
                      </div>

                      <div className="text-lg w-full flex justify-end font-semibold">
                        {data.status}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
