import { Task } from '../domain/models/taskModel';
import { TaskManager } from '../domain/models/taskManager';

export interface ModifyTaskUseCase {
  execute(taskId: number, updatedTask: Task): void;
}

export class ModifyTaskService implements ModifyTaskUseCase {
  constructor(private taskManager: TaskManager) {}

  execute(taskId: number, updatedTask: Task): void {
    this.taskManager.editTask(taskId, updatedTask);
    console.log("Tarea editada con éxito");
  }
}
