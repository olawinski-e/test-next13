export interface TaskType {
  id: string
  updatedAt: string
  details: {
    jobType: string
    objective: string
    privateNote?: string
    additionalInformation: string
    applicants: number
    postalCode: string
    city: string
    address: string
    locationId: string
    team: string
    documents?: any
  }
  company: {
    id: string
    name: string
    pictureURL: string
  }
  shifts: ShiftType[]
  selection: SelectionType
}

export interface SelectionType {
  status: string
  target: string
  comment?: string
  visible: boolean
  privateUntil: string
  isPreSelection: boolean
}

export interface ShiftType {
  id: string
  start: string
  end: string
  slots: number
  filledSlots: number
}
