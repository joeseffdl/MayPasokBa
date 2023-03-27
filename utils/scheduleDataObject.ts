import { scheduleDataProps } from "@/utils/types";

export const scheduleDataObject: scheduleDataProps = {
  Sunday: [],
  Monday: [],
  Tuesday: [
    { startTime: "09:00", endTime: "11:00", subject: "Embedded Systems" },
    {
      startTime: "12:00",
      endTime: "14:00",
      subject: "Trends in Software Development Process",
    },
    {
      startTime: "15:00",
      endTime: "18:00",
      subject: "Trends in Software Development Process",
    },
    {
      startTime: "18:00",
      endTime: "20:00",
      subject: "CPE Practice and Design 2",
    },
  ],
  Wednesday: [
    {
      startTime: "19:30",
      endTime: "21:00",
      subject: "CPE Practice and Design 2",
    },
  ],
  Thursday: [{ startTime: "16:30", endTime: "19:30", subject: "Visual Arts" }],
  Friday: [],
  Saturday: [
    {
      startTime: "07:30",
      endTime: "09:00",
      subject: "CPE Practice and Design 2",
    },
    {
      startTime: "10:30",
      endTime: "13:00",
      subject: "Field Study and Seminars",
    },
    {
      startTime: "14:00",
      endTime: "17:00",
      subject: "Emerging Technologies",
    },
    {
      startTime: "17:00",
      endTime: "21:00",
      subject: "Embedded Systems",
    },
  ],
}