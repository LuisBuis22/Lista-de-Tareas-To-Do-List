import { Task } from "../domain/models/taskModel";
import { TaskManager } from "../domain/models/taskManager";

export interface GetTaskUseCase {
  execute(taskId: number): Task | undefined;
}

export class GetTaskService implements GetTaskUseCase {
  constructor(private taskManager: TaskManager) {}

  execute(taskId: number): Task | undefined {
    return this.taskManager.getTaskById(taskId);
  }
}
