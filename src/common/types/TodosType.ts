export type FilterType = 'all' | 'active' | 'completed'

export interface TodosType {
  title: string,
  filter: FilterType
  tasks: TaskType[]
}

export interface TaskType {
  id: string
  title: string,
  isDone: boolean
}