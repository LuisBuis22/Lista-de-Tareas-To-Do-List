"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskManager = void 0;
class TaskManager {
    constructor() {
        this.tasks = [];
        this.tasks = [];
        this.contadorId = 1;
    }
    generateTaskId() {
        return this.contadorId++;
    }
    addTask(task) {
        const id = this.generateTaskId();
        const newTask = Object.assign(Object.assign({}, task), { id });
        this.tasks.push(newTask);
        return newTask;
    }
    removeTask(taskId) {
        this.tasks = this.tasks.filter((task) => task.id !== taskId);
        console.log("Tarea eliminada correctamente");
    }
    getTaskById(taskId) {
        console.log("Tarea encontrada");
        return this.tasks.find((task) => task.id === taskId);
    }
    markAsCompleted(taskId) {
        const task = this.getTaskById(taskId);
        if (task) {
            task.completed = true;
        }
        console.log("Tarea marcada como completada");
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
        console.log("Tarea editada con éxito");
    }
    getAllTasks() {
        return this.tasks;
    }
}
exports.TaskManager = TaskManager;
