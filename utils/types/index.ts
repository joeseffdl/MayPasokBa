export type scheduleProps = {
  startTime: string
  endTime: string
  subject: string
}

export interface scheduleDataProps {
  [day: string]: scheduleProps[]
}
