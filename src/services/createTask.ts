import taskModelDB from "../adapters/data/taskSchemaDB";
import { Task } from "../domain/models/taskModel";



async function createTask(taskData: Task): Promise<Task> {
  //Crear la tarea en la base de datos
  try {
    const createdTask = taskModelDB.create(taskData);
    return createdTask;
  } catch(error) {
    throw new Error("Error crating task");
  }
}

export default createTask;