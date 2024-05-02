export type ActivityProps = {
  activityId: string
  activityName?: string
  organization?: string
  position?: string
  hours?: number | number[]
  outstanding?: string
}

export type StudentProps = {
  id: number
  studentId: number
  prefix: string
  firstname: string
  lastname: string
  email: string
  faculty: string
  major: string
  activities: ActivityProps[]
}
