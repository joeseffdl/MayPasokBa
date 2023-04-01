"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import { scheduleProps } from "@/utils/types";
import {
  CompareArraysOfObjects,
  DAYS_OF_WEEK,
  TimeDifference,
  SCHEDULE_DATA_OBJECT,
} from "@/utils/";
import { EventModal } from "./EventModal";
import {
  addDoc,
  collection,
  doc,
  query,
  limit,
  orderBy,
  onSnapshot,
  getDoc,
  serverTimestamp,
} from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "@/utils/firebase";
import { toast } from "react-hot-toast";
import { SCHEDULE_ARRAY } from "@/utils/SCHEDULE_ARRAY";

export const WeekCalendarView = () => {
  const router = useRouter();
  const [user, loading] = useAuthState(auth);

  const [firebaseData, setFirebaseData] = useState<any>([]);
  const [selectedSchedule, setSelectedSchedule] = useState<scheduleProps>({
    id: 0,
    status: "",
    subject: "",
    startTime: "",
    endTime: "",
  });
  const [modifiedSchedules, setModifiedSchedules] =
    useState<scheduleProps[]>(SCHEDULE_ARRAY);
  const [scheduleFromDB, setScheduleFromDB] = useState<scheduleProps[]>([]);
  const [modalState, setModalState] = useState(false);
  const scheduleData = useMemo(() => SCHEDULE_DATA_OBJECT, []);

  // Avoid calling openModalInformation on every render by using useCallback to memoize the function.
  const openModalInformation = useCallback(
    ({ id, status, subject, startTime, endTime }: scheduleProps) => {
      setSelectedSchedule({
        id,
        status,
        subject,
        startTime,
        endTime,
      });
      setModalState(true);
    },
    []
  );

  async function saveEvents() {
    if (!user) return router.push("/Login");
    else {
      const scheduleRef = collection(db, "schedules");
      await addDoc(scheduleRef, {
        createdOn: serverTimestamp(),
        user: user.uid,
        username: user.displayName,
        avatar: user.photoURL,
        modifiedEvents: modifiedSchedules,
      });
    }
    toast.success("Schedule saved successfully 🚀");
  }

  function clearEvents() {
    setModifiedSchedules(SCHEDULE_ARRAY);
    toast.success("Schedule cleared 📆");
  }

  function countNoInformation(): number {
    return modifiedSchedules
      .map((obj) => obj.status)
      .reduce((acc, curr) => {
        if (curr === "No Information") {
          return acc + 1;
        } else {
          return acc;
        }
      }, 0);
  }

  const getScheduleData = async () => {
    try {
      const docRef = collection(db, "schedules");
      const q = query(docRef, orderBy("createdOn", "desc"), limit(1));
      const unsubscribe = await onSnapshot(q, (querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => {
          setFirebaseData(doc.data());
          setModifiedSchedules(doc.data().modifiedEvents);
          setScheduleFromDB(doc.data().modifiedEvents);
        });
      });
      return unsubscribe;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getScheduleData();
  }, []);

  return (
    <>
      {!loading ? (
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
                    disabled={modifiedSchedules?.every(
                      (event) => event.status === "No Information"
                    )}
                    className={`disabled:cursor-not-allowed disabled:opacity-50 bg-indigo-700 h-10 text-center text-white text-xs rounded-lg font-semibold px-4 py-2`}
                    onClick={clearEvents}
                  >
                    {(modifiedSchedules?.length >= 1 && "Clear Events") ||
                      "Clear Event"}
                  </button>
                </th>
                <th className="p-2">
                  <button
                    disabled={CompareArraysOfObjects(
                      scheduleFromDB,
                      modifiedSchedules
                    )}
                    className={`disabled:cursor-not-allowed disabled:opacity-50 bg-indigo-700 h-10 text-center text-white text-xs rounded-lg font-semibold px-4 py-2`}
                    onClick={saveEvents}
                  >
                    {countNoInformation() == 10
                      ? "Save"
                      : countNoInformation() == 9
                      ? "Save Event"
                      : "Save Events"}
                  </button>
                </th>
              </tr>
              <tr>
                <th className="w-16"></th>
                {DAYS_OF_WEEK.map((day) => (
                  <th
                    className={`w-1/6 sm:w-auto py-2 text-slate-600 border border-b-2 border-b-slate-300 `}
                    key={day}
                  >
                    <span className="font-semibold text-sm">
                      {day.slice(0, 3)}
                    </span>
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
                        const { startTime, endTime, subject, status, id } =
                          event;
                        const duration = TimeDifference(startTime, endTime);
                        const style: React.CSSProperties = {
                          height: `${(duration as number) * 5}rem`,
                        };
                        const checkStatus = modifiedSchedules?.find(
                          (e) => e.id === id
                        )?.status;

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
                          checkStatus === "No Information"
                            ? "hover:bg-blue-200 bg-blue-100"
                            : checkStatus === "Online"
                            ? "hover:bg-green-200 bg-green-100"
                            : checkStatus === "Face to Face"
                            ? "hover:bg-orange-200 bg-orange-100"
                            : checkStatus === "Asynchronous"
                            ? "hover:bg-yellow-200 bg-yellow-100"
                            : checkStatus === "No Classes"
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
                                      checkStatus === "No Information"
                                        ? "text-blue-800"
                                        : checkStatus === "Online"
                                        ? "text-green-800"
                                        : checkStatus === "Face to Face"
                                        ? "text-orange-800"
                                        : checkStatus === "Asynchronous"
                                        ? "text-yellow-800"
                                        : checkStatus === "No Classes"
                                        ? "text-red-800"
                                        : "text-blue-800"
                                    } font-bold`}
                                  >
                                    {subject}
                                  </div>
                                  <div
                                    className={`${
                                      checkStatus === "No Information"
                                        ? "text-blue-400"
                                        : checkStatus === "Online"
                                        ? "text-green-400"
                                        : checkStatus === "Face to Face"
                                        ? "text-orange-400"
                                        : checkStatus === "Asynchronous"
                                        ? "text-yellow-400"
                                        : checkStatus === "No Classes"
                                        ? "text-red-400"
                                        : "text-blue-400"
                                    }`}
                                  >
                                    {startTime} - {endTime}
                                  </div>
                                  <div className="flex items-center font-semibold justify-center h-full uppercase text-slate-700 text-[10px] xl:text-xs">
                                    {checkStatus ?? "No Information"}
                                  </div>
                                  <div
                                    className={`${
                                      checkStatus === "No Information"
                                        ? "text-blue-600"
                                        : checkStatus === "Online"
                                        ? "text-green-600"
                                        : checkStatus === "Face to Face"
                                        ? "text-orange-600"
                                        : checkStatus === "Asynchronous"
                                        ? "text-yellow-600"
                                        : checkStatus === "No Classes"
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
                  );
                })}
            </tbody>
          </table>
          {modalState && (
            <EventModal
              {...selectedSchedule}
              scheduleFromDB={scheduleFromDB}
              modifiedSchedules={modifiedSchedules}
              setSelectedSchedule={setSelectedSchedule}
              setModalState={setModalState}
              setModifiedSchedules={setModifiedSchedules}
            />
          )}
        </div>
      ) : (
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
                {DAYS_OF_WEEK.map((day) => (
                  <th
                    className="w-1/6 sm:w-auto py-2 text-slate-600 border border-b-2 border-b-slate-300 "
                    key={day}
                  >
                    <span className="font-semibold text-sm">
                      {day.slice(0, 3)}
                    </span>
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
                  );
                })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};
