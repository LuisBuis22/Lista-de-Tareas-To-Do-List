import { Task } from '../domain/models/taskModel';
import { TaskManager } from '../domain/models/taskManager';

export interface ListTaskUseCase {
  execute(): Task[];
}

export class ListTaskService implements ListTaskUseCase {
  constructor(private taskManager: TaskManager) {}

  execute(): Task[] {
    return this.taskManager.getAllTasks();
  }
}
