import { Task } from "./modeloTarea";

export class TaskManager {
  // Guardar las tareas en una lista
  private tasks: Task[] = [];

  // Métodos relativos a las tareas

  // Añade a la lista tasks el objeto task obtenido de modeloTarea
  addTask(task: Task): void {
    this.tasks.push(task);
  }

  // Filtra la tarea por medio del id y la elimina
  removeTask(taskId: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  // Encuentra y devuelve una tarea por medio del id para ayudar a los siguientes métodos. 
  // Se le pasa por parámetro un numero (taskId) y busca el objeto task que haga match con su propiedad id que también es un numero
  getTaskById(taskId: number): Task | undefined {
    return this.tasks.find((task) => task.id === taskId);
  }

  // Busca una tarea por medio del método getTaskById() y lo almacena en task, entonces le cambia la propiedad booleana completed a true
  markAsCompleted(taskId: number): void {
    const task = this.getTaskById(taskId);
    if (task) {
      task.completed = true;
    }
  }

  // Busca una tarea por medio del método getTaskById() y lo almacena en task, entonces le cambia la propiedad booleana completed a false
  unMarkAsCompleted(taskId: number): void {
    const task = this.getTaskById(taskId);
    if (task) {
      task.completed = false;
    }
  }

  // Se le pasa el id por parámetro y lo busca en el array tasks basandose en su indice(index)
  // También se le pasa por parámetro la actualización de la tarea
  // Si la encuentra, es decir, index no es igual a -1, la actualiza con el contenido del parámetro updatedTask
  editTask(taskId: number, updatedTask: Task): void {
    const index = this.tasks.findIndex((task) => task.id === taskId);
    if (index !== -1) {
      this.tasks[index] = updatedTask;
    }
  }

  // Devuelve la lista de tareas almacenada en tasks
  getAllTasks(): Task[] {
    return this.tasks;
  }  
}
