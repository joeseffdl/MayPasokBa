import { scheduleProps } from "@/utils/types";
import { CompareArraysOfObjects } from "@/utils";
import { toast } from "react-hot-toast";

const statusOptions = [
  { value: "No Information", label: "No Information" },
  { value: "Online", label: "Online" },
  { value: "Face to Face", label: "Face to Face" },
  { value: "Asynchronous", label: "Asynchronous" },
  { value: "No Classes", label: "No Classes" },
];

type SetModifiedSchedulesProps = React.Dispatch<
  React.SetStateAction<scheduleProps[]>
>;
interface ModalProps extends scheduleProps {
  setSelectedSchedule: {
    (selectedSchedule: scheduleProps): void;
  };
  setModalState: (state: boolean) => void;
  setModifiedSchedules: SetModifiedSchedulesProps;
  modifiedSchedules: scheduleProps[];
  scheduleFromDB: scheduleProps[];
}

export const EventModal = ({
  id,
  status,
  subject,
  startTime,
  endTime,
  setSelectedSchedule,
  setModalState,
  setModifiedSchedules,
  modifiedSchedules,
  scheduleFromDB,
}: ModalProps) => {
  const compareSchedule = CompareArraysOfObjects(
    scheduleFromDB,
    modifiedSchedules
  );

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const { value } = e.target;
    setSelectedSchedule({
      id,
      status: value,
      subject,
      startTime,
      endTime,
    });

    setModifiedSchedules((prev: scheduleProps[]) => {
      const index = prev.findIndex((item) => item.id === id);
      if (index !== -1) {
        const updatedEvent = {
          ...prev[index],
          status: value,
        };
        const updatedModifiedEvent = [...prev];
        updatedModifiedEvent[index] = updatedEvent;
        return updatedModifiedEvent;
      } else {
        const newEvent = { id, status: value, subject, startTime, endTime };
        return [...prev, newEvent];
      }
    });
  }

  function closeModal() {
    const resetSelectedEvent = scheduleFromDB.find((e) => e.id === id);
    setModifiedSchedules((prev: scheduleProps[]) => {
      const updatedEvents = prev.map((event) => {
        if (event.id === resetSelectedEvent?.id) {
          // if the event id matches with the resetSelectedEvent id,
          // update the event and return the updated event
          return resetSelectedEvent;
        } else {
          // if the event id doesn't match, return the original event
          return event;
        }
      });
      return updatedEvents;
    });
    setModalState(false);
  }

  async function applyChanges(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();
    if (
      modifiedSchedules.find((e) => e.id === id)?.status !==
      scheduleFromDB.find((e) => e.id === id)?.status
    ) {
      toast.success("Schedule updated 📆");
    }
    setModalState(false);
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-500/50">
      <div className="h-screen flex justify-center items-center">
        <form
          className="bg-white w-[320px] lg:w-[480px] lg:h-[220px] rounded-2xl"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="w-full h-full flex flex-col justify-between rounded-xl">
            <div className="flex flex-col gap-2 p-5 lg:p-6">
              <div className="relative flex justify-between">
                <h2 className="text-lg font-bold lg:text-3xl">Edit Schedule</h2>
                {!compareSchedule && (
                  <span
                    className="absolute transform -translate-y-1/2 right-0"
                    onClick={() => closeModal()}
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
                )}
              </div>
              <div className="flex flex-col text-sm lg:text-xl justify-between gap-1">
                <label className="font-semibold">{subject}</label>
                <span>
                  {startTime} - {endTime}
                </span>
              </div>
              <div className="flex justify-between text-sm lg:text-lg">
                <label>Status</label>
                <select
                  value={modifiedSchedules.find((e) => e.id === id)?.status}
                  onChange={handleChange}
                >
                  {statusOptions.map((optStat) => (
                    <option key={optStat.label} value={optStat.value}>
                      {optStat.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex justify-end p-2 lg:px-4 bg-indigo-300 rounded-b-xl">
              <button
                className=" w-fit px-4 py-2 lg:py-3 lg:px-5 bg-blue-500 rounded-lg text-sm lg:text-base text-white font-semibold"
                type="submit"
                onClick={
                  compareSchedule ? (e) => closeModal() : (e) => applyChanges(e)
                }
              >
                {modifiedSchedules.find((e) => e.id === id)?.status ===
                scheduleFromDB.find((e) => e.id === id)?.status
                  ? "Close"
                  : "Apply"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
