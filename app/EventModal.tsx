"use client"

import { ReactNode, useState } from "react"
import { scheduleProps } from "@/utils/types"

const statusOptions = [
  { value: "Online", label: "Online" },
  { value: "Face to Face", label: "Face to Face" },
  { value: "Asynchronous", label: "Asynchronous" },
  { value: "No Classes", label: "No Classes" },
]

type SetModifiedEventsProps = React.Dispatch<React.SetStateAction<scheduleProps[]>>
interface ModalProps extends scheduleProps {
    setSelectedSchedule: {
        (selectedSchedule: scheduleProps): void
  }
    setModalState: (state: boolean) => void
    setModifiedEvents: SetModifiedEventsProps
}

export const EventModal = ({id,status,subject,startTime,endTime,setSelectedSchedule,setModalState,setModifiedEvents}: ModalProps) => {
    function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
        const { value } = e.target
        setSelectedSchedule(
            {
                id,
                status: value,
                subject,
                startTime,
                endTime,
            }    
        )
    }
    
    function saveSchedule(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault()
      setModifiedEvents((prev: scheduleProps[]) => [
        ...prev,
        { id, status, subject, startTime, endTime },
      ])
      setModalState(false)
    }

  return (
    <div
      className="absolute top-0 left-0 w-full bg-gray-500/50 h-full "
      onClick={() => setModalState(false)}
    >
      <div className="h-screen flex justify-center items-center">
        <form
          onSubmit={saveSchedule}
          className="bg-white w-1/4 h-1/4 rounded-xl p-5"
          onClick={(event) => event.stopPropagation()}
        >
          <h2>Edit Schedule</h2>
          <div>
            <label>{subject}</label>
            <label>{startTime}</label>
            <label>{endTime}</label>
          </div>
          <div>
            <label>Status</label>
            <select onChange={handleChange}>
              <option value={"noInformation"} defaultValue={status}>
                {status}
              </option>
              {statusOptions.map((optStat) => (
                <option key={optStat.label} value={optStat.value}>{optStat.label}</option>
              ))}
            </select>
          </div>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  )
}
