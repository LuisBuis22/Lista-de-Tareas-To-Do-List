import { Task } from '../domain/models/taskModel';
import { TaskManager } from '../domain/models/taskManager';

export interface CreateTaskUseCase {
  execute(taskData: Task): Task;
}

export class CreateTaskService implements CreateTaskUseCase {
  constructor(private taskManager: TaskManager) {}

  execute(taskData: Task): Task {
    return this.taskManager.addTask(taskData);
  }
}
