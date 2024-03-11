"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const figlet_1 = __importDefault(require("figlet"));
const commander_1 = require("commander");
const tareaManager_1 = require("../../models/tareaManager.cjs");
const taskManager = new tareaManager_1.TaskManager();
console.log(figlet_1.default.textSync("Lista de Tareas"));
const program = new commander_1.Command();
program
    .version('1.0.0')
    .description("Crea una tarea por linea de comandos")
    .option('-a, --add <titulo> <descripcion> [vencimiento]', 'Agrega una nueva tarea a la lista')
    .parse(process.argv);
const options = program.opts();
if (options.add) {
    const [titulo, descripcion, vencimiento] = options.add;
    const nuevaTarea = {
        title: titulo,
        description: descripcion,
        dueDate: vencimiento ? new Date(vencimiento) : undefined,
        completed: false,
        creationDate: new Date()
    };
    taskManager.addTask(nuevaTarea);
}
