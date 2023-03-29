export interface scheduleProps {
    id: number
    startTime: string
    endTime: string
    subject: string
    status?: string
}

export interface scheduleDataProps {
  [day: string]: scheduleProps[]
}
