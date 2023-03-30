"use client";

import { scheduleProps } from "@/utils/types";

const statusOptions = [
  { value: "Online", label: "Online" },
  { value: "Face to Face", label: "Face to Face" },
  { value: "Asynchronous", label: "Asynchronous" },
  { value: "No Classes", label: "No Classes" },
];

type SetModifiedEventsProps = React.Dispatch<
  React.SetStateAction<scheduleProps[]>
>;
interface ModalProps extends scheduleProps {
  setSelectedSchedule: {
    (selectedSchedule: scheduleProps): void;
  };
  setModalState: (state: boolean) => void;
  setModifiedEvents: SetModifiedEventsProps;
}

export const EventModal = ({
  id,
  status,
  subject,
  startTime,
  endTime,
  setSelectedSchedule,
  setModalState,
  setModifiedEvents,
}: ModalProps) => {
  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const { value } = e.target;
    setSelectedSchedule({
      id,
      status: value,
      subject,
      startTime,
      endTime,
    });
  }

  function saveSchedule(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setModifiedEvents((prev: scheduleProps[]) => {
      const index = prev.findIndex((item) => item.id === id);
      if (index !== -1) {
        const updatedEvent = {
          ...prev[index],
          status,
        };
        const updatedModifiedEvent = [...prev];
        updatedModifiedEvent[index] = updatedEvent;
        return updatedModifiedEvent;
      } else {
        const newEvent = { id, status, subject, startTime, endTime };
        return [...prev, newEvent];
      }
    });
    setModalState(false);
  }

  return (
    <div
      className="absolute top-0 left-0 w-full bg-gray-500/50 h-full "
      onClick={() => setModalState(false)}
    >
      <div className="h-screen flex justify-center items-center">
        <form
          onSubmit={saveSchedule}
          className="bg-white w-1/4 h-1/4 rounded-2xl"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="w-full h-full flex flex-col justify-between rounded-xl">
            <div className="flex flex-col gap-2 p-5">
              <div className="relative flex justify-between">
                <h2 className="text-lg font-semibold">Edit Schedule</h2>
                <span
                  className="absolute transform -translate-y-1/2 right-0"
                  onClick={() => setModalState(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                </span>
              </div>
              <div className="flex justify-between">
                <label>{subject}</label>
                <span>
                  {startTime} - {endTime}
                </span>
              </div>
              <div className=" flex justify-between">
                <label>Status</label>
                <select onChange={handleChange}>
                  <option defaultValue={status}>{status}</option>
                  {statusOptions.map((optStat) => (
                    <option key={optStat.label} value={optStat.value}>
                      {optStat.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex justify-end p-2 bg-indigo-300 rounded-b-xl">
              <button
                className=" w-fit px-4 py-2 bg-blue-500 rounded-lg text-sm text-white font-semibold"
                type="submit"
              >
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
