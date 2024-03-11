import figlet from 'figlet';
import { Command } from 'commander';
import { Task, TaskManager } from "../../models/tareaManager";
// import { Task } from "../../models/modeloTarea";

// Crear instancia de TaskMAnager
const taskManager = new TaskManager();

console.log(figlet.textSync("Lista de Tareas"));

const program = new Command();

// Crear tarea addTask(task: Task)
program
  .version('1.0.0')
  .description("Crea una tarea por linea de comandos")
  .option('-a, --add <titulo> <descripcion> [vencimiento]', 'Agrega una nueva tarea a la lista')
  .parse(process.argv)

  // Verificar si la opción add fue introducida por el usuario
  const options = program.opts(); // esto es porque si pongo add directamente, Commander no lo reconoce y da error
  if(options.add) {
    const [titulo, descripcion, vencimiento] = options.add;
    const nuevaTarea: Omit<Task, "id"> = {
      title: titulo,
      description: descripcion,
      dueDate: vencimiento ? new Date(vencimiento) : undefined, // Si proporciona fecha de vencimiento es esa, si no, es undefined
      completed: false,
      creationDate: new Date()
    }
    taskManager.addTask(nuevaTarea);
  }


// Eliminar Tarea removeTask(taskId: number)


// Ver una tarea concreta getTaskById(taskId: number)


// Marcar tarea como completada markAsCompleted(taskId: number)


// Desmarcar una tarea marcada como completada unMarkAsCompleted(taskId: number)


// Editar tarea editTask(taskId: number, updatedTask: Task)


// Obtener lista de las tareas getAllTasks()