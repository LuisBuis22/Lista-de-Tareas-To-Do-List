import { Task } from "./taskModel";

export class TaskManager {
  // Guardar las tareas en una lista
  public tasks: Task[] = [];
  // Contador de id para que al eliminar o modificar no se dupliquen, el autoincremento se maneja en addTask()
  private contadorId: number;

  constructor() {
    this.tasks = [];
    this.contadorId = 1;
    }

    // Función para generar un id único en cada tarea
    public generateTaskId(): number {
      return this.contadorId++;
    }

  // Métodos relativos a las tareas

  // Añade a la lista tasks el objeto task obtenido de modeloTarea
  public addTask(task: Task): Task {
    // Generar el id a partir del contador
    const id = this.generateTaskId();

    // Crear la newTask: Task con el id generado
    const newTask: Task = {...task, id};

    // Agregar la tarea a la lista de tareas
    this.tasks.push(newTask);
    return newTask;
  }

  // Filtra la tarea por medio del id y la elimina
  removeTask(taskId: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    console.log("Tarea eliminada correctamente");
  }

  // Encuentra y devuelve una tarea por medio del id para ayudar a los siguientes métodos.
  // Se le pasa por parámetro un numero (taskId) y busca el objeto task que haga match con su propiedad id que también es un numero
  getTaskById(taskId: number): Task | undefined {
    console.log("Tarea encontrada");
    return this.tasks.find((task) => task.id === taskId);
  }

  // Busca una tarea por medio del método getTaskById() y lo almacena en task, entonces le cambia la propiedad booleana completed a true
  markAsCompleted(taskId: number): void {
    const task = this.getTaskById(taskId);
    if (task) {
      task.completed = true;
    }
    console.log("Tarea marcada como completada");
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
    console.log("Tarea editada con éxito");
  }

  // Devuelve la lista de tareas almacenada en tasks
  getAllTasks(): Task[] {
    return this.tasks;
  }
}

export { Task };
