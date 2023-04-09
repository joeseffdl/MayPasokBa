import { scheduleProps } from "@/utils/types";
import Image from "next/image";
import { useMemo } from "react";

type EventProps = {
  children?: React.ReactNode;
  firebaseData: any;
  modifiedSchedules: scheduleProps[];
  openModalInformation: (schedule: scheduleProps) => void;
};

export const Event = ({
  firebaseData,
  children,
  modifiedSchedules,
  openModalInformation,
}: EventProps) => {
  const countStatusTypes = useMemo(() => {
    const counts: Record<string, number> = {
      "No Information": 0,
      Online: 0,
      "Face to Face": 0,
      Asynchronous: 0,
      "No Classes": 0,
    };

    firebaseData?.modifiedSchedules.forEach((obj: scheduleProps) => {
      const status: string | undefined = obj.status;
      if (status && status in counts) {
        counts[status]++;
      }
    });

    return counts;
  }, [firebaseData?.modifiedSchedules]);

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
              {modifiedSchedules?.slice(0, 4).map((data: scheduleProps) => {
                return (
                  <div
                    className={`${
                      data.status === "No Information"
                        ? "hover:bg-sky-200 bg-sky-100"
                        : data.status === "Online"
                        ? "hover:bg-emerald-200 bg-emerald-100"
                        : data.status === "Face to Face"
                        ? "hover:bg-fuchsia-200 bg-fuchsia-100"
                        : data.status === "Asynchronous"
                        ? "hover:bg-amber-200 bg-amber-100"
                        : data.status === "No Classes"
                        ? "hover:bg-rose-200 bg-rose-100"
                        : "hover:bg-sky-200 bg-sky-100"
                    } w-full rounded-lg shadow-md px-4 py-2`}
                    onClick={() => {
                      openModalInformation({ ...data });
                    }}
                  >
                    <div className="flex flex-col w-full ">
                      <span
                        className={`${
                          data.status === "No Information"
                            ? "text-sky-800"
                            : data.status === "Online"
                            ? "text-emerald-800"
                            : data.status === "Face to Face"
                            ? "text-fuchsia-800"
                            : data.status === "Asynchronous"
                            ? "text-amber-800"
                            : data.status === "No Classes"
                            ? "text-rose-800"
                            : "text-sky-800"
                        } font-semibold w-1/2`}
                      >
                        {data.subject}
                      </span>
                      <div
                        className={`${
                          data.status === "No Information"
                            ? "text-sky-500"
                            : data.status === "Online"
                            ? "text-emerald-500"
                            : data.status === "Face to Face"
                            ? "text-fuchsia-500"
                            : data.status === "Asynchronous"
                            ? "text-amber-500"
                            : data.status === "No Classes"
                            ? "text-rose-500"
                            : "text-sky-500"
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
                  countStatusTypes(modifiedSchedules.slice(4, 5))
                ).map(([key, value]) => (
                  <div key={key}>
                    {key}: {value}
                  </div>
                ))}
              </div> */}
            </div>
            <div className="w-full py-5 gap-2 flex flex-col">
              <div className="font-bold text-lg text-gray-700">Wednesday</div>
              {modifiedSchedules?.slice(4, 5).map((data: scheduleProps) => {
                return (
                  <div
                    className={`${
                      data.status === "No Information"
                        ? "hover:bg-sky-200 bg-sky-100"
                        : data.status === "Online"
                        ? "hover:bg-emerald-200 bg-emerald-100"
                        : data.status === "Face to Face"
                        ? "hover:bg-fuchsia-200 bg-fuchsia-100"
                        : data.status === "Asynchronous"
                        ? "hover:bg-amber-200 bg-amber-100"
                        : data.status === "No Classes"
                        ? "hover:bg-rose-200 bg-rose-100"
                        : "hover:bg-sky-200 bg-sky-100"
                    } w-full rounded-lg shadow-md px-4 py-2`}
                  >
                    <div className="flex flex-col w-full ">
                      <span
                        className={`${
                          data.status === "No Information"
                            ? "text-sky-800"
                            : data.status === "Online"
                            ? "text-emerald-800"
                            : data.status === "Face to Face"
                            ? "text-fuchsia-800"
                            : data.status === "Asynchronous"
                            ? "text-amber-800"
                            : data.status === "No Classes"
                            ? "text-rose-800"
                            : "text-sky-800"
                        } font-semibold w-1/2`}
                      >
                        {data.subject}
                      </span>
                      <div
                        className={`${
                          data.status === "No Information"
                            ? "text-sky-500"
                            : data.status === "Online"
                            ? "text-emerald-500"
                            : data.status === "Face to Face"
                            ? "text-fuchsia-500"
                            : data.status === "Asynchronous"
                            ? "text-amber-500"
                            : data.status === "No Classes"
                            ? "text-rose-500"
                            : "text-sky-500"
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
              {modifiedSchedules?.slice(5, 6).map((data: scheduleProps) => {
                return (
                  <div
                    className={`${
                      data.status === "No Information"
                        ? "hover:bg-sky-200 bg-sky-100"
                        : data.status === "Online"
                        ? "hover:bg-emerald-200 bg-emerald-100"
                        : data.status === "Face to Face"
                        ? "hover:bg-fuchsia-200 bg-fuchsia-100"
                        : data.status === "Asynchronous"
                        ? "hover:bg-amber-200 bg-amber-100"
                        : data.status === "No Classes"
                        ? "hover:bg-rose-200 bg-rose-100"
                        : "hover:bg-sky-200 bg-sky-100"
                    } w-full rounded-lg shadow-md px-4 py-2`}
                  >
                    <div className="flex flex-col w-full ">
                      <span
                        className={`${
                          data.status === "No Information"
                            ? "text-sky-800"
                            : data.status === "Online"
                            ? "text-emerald-800"
                            : data.status === "Face to Face"
                            ? "text-fuchsia-800"
                            : data.status === "Asynchronous"
                            ? "text-amber-800"
                            : data.status === "No Classes"
                            ? "text-rose-800"
                            : "text-sky-800"
                        } font-semibold w-1/2`}
                      >
                        {data.subject}
                      </span>
                      <div
                        className={`${
                          data.status === "No Information"
                            ? "text-sky-500"
                            : data.status === "Online"
                            ? "text-emerald-500"
                            : data.status === "Face to Face"
                            ? "text-fuchsia-500"
                            : data.status === "Asynchronous"
                            ? "text-amber-500"
                            : data.status === "No Classes"
                            ? "text-rose-500"
                            : "text-sky-500"
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
              {modifiedSchedules?.slice(6, 10).map((data: scheduleProps) => {
                return (
                  <div
                    className={`${
                      data.status === "No Information"
                        ? "hover:bg-sky-200 bg-sky-100"
                        : data.status === "Online"
                        ? "hover:bg-emerald-200 bg-emerald-100"
                        : data.status === "Face to Face"
                        ? "hover:bg-fuchsia-200 bg-fuchsia-100"
                        : data.status === "Asynchronous"
                        ? "hover:bg-amber-200 bg-amber-100"
                        : data.status === "No Classes"
                        ? "hover:bg-rose-200 bg-rose-100"
                        : "hover:bg-sky-200 bg-sky-100"
                    } w-full rounded-lg shadow-md px-4 py-2`}
                  >
                    <div className="flex flex-col w-full ">
                      <span
                        className={`${
                          data.status === "No Information"
                            ? "text-sky-800"
                            : data.status === "Online"
                            ? "text-emerald-800"
                            : data.status === "Face to Face"
                            ? "text-fuchsia-800"
                            : data.status === "Asynchronous"
                            ? "text-amber-800"
                            : data.status === "No Classes"
                            ? "text-rose-800"
                            : "text-sky-800"
                        } font-semibold w-1/2`}
                      >
                        {data.subject}
                      </span>
                      <div
                        className={`${
                          data.status === "No Information"
                            ? "text-sky-500"
                            : data.status === "Online"
                            ? "text-emerald-500"
                            : data.status === "Face to Face"
                            ? "text-fuchsia-500"
                            : data.status === "Asynchronous"
                            ? "text-amber-500"
                            : data.status === "No Classes"
                            ? "text-rose-500"
                            : "text-sky-500"
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
      {children}
    </div>
  );
};
