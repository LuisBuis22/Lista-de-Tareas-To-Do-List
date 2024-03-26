import { TaskManager } from '../domain/models/taskManager';

export interface IncompleteTaskUseCase {
  execute(taskId: number): void;
}

export class IncompleteTaskService implements IncompleteTaskUseCase {
  constructor(private taskManager: TaskManager) {}

  execute(taskId: number): void {
    const task = this.taskManager.getTaskById(taskId);
    if (task) {
      task.completed = false;
      console.log("Tarea marcada como incompleta");
    }
  }
}
