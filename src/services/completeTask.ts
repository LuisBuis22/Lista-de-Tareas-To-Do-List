import { TaskManager } from '../domain/models/taskManager';

export interface CompleteTaskUseCase {
  execute(taskId: number): void;
}

export class CompleteTaskService implements CompleteTaskUseCase {
  constructor(private taskManager: TaskManager) {}

  execute(taskId: number): void {
    const task = this.taskManager.getTaskById(taskId);
    if (task) {
      task.completed = true;
      console.log("Tarea marcada como completada");
    }
  }
}

