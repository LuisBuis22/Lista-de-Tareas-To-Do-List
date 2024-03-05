"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskManager = void 0;
class TaskManager {
    constructor() {
        this.tasks = [];
    }
    addTask(task) {
        this.tasks.push(task);
    }
    removeTask(taskId) {
        this.tasks = this.tasks.filter((task) => task.id !== taskId);
    }
    markAsCompleted(taskId) {
        const task = this.getTaskById(taskId);
        if (task) {
            task.completed = true;
        }
    }
    unMarkAsCompleted(taskId) {
        const task = this.getTaskById(taskId);
        if (task) {
            task.completed = false;
        }
    }
    editTask(taskId, updatedTask) {
        const index = this.tasks.findIndex((task) => task.id === taskId);
        if (index !== -1) {
            this.tasks[index] = updatedTask;
        }
    }
    getAllTasks() {
        return this.tasks;
    }
    getTaskById(taskId) {
        return this.tasks.find((task) => task.id === taskId);
    }
}
exports.TaskManager = TaskManager;
