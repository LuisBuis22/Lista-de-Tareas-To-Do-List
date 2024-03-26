import { TaskManager } from "../domain/models/taskManager";


export interface DeleteTaskUseCase {
  execute(taskId: number): void;
}

export class DeleteTaskService implements DeleteTaskUseCase {
  constructor(private readonly taskManager: TaskManager) {}

  async execute(taskId: number): Promise<void> {
    this.taskManager.removeTask(taskId);
  }
}