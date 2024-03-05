// Modelo de la tarea

export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  dueDate?: Date;
  creationDate: Date;
}
