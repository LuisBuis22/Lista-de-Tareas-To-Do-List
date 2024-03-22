import mongoose, { Schema, Document } from "mongoose";
import { Task } from "../../domain/models/taskModel";

// Definir el esquema para el modelo de tarea
const taskSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: false },
  completed: { type: Boolean, required: true, default: false },
  dueDate: { type: Date, required: false },
  creationDate: { type: Date, required: true, default: Date.now },
});

// Crear el modelo de Task para la base de datos a traves del schema
const taskModelDB = mongoose.model<Document & Task>('Task', taskSchema);

// Exporta el modelo de tarea
export default taskModelDB;
