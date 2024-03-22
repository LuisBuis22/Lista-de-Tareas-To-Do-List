// Modelo de la tarea

export interface Task {
  id?: number; // El id será generado por MongoDB
  title: string;
  description?: string;
  completed: boolean;
  dueDate?: Date;
  creationDate: Date;
}
