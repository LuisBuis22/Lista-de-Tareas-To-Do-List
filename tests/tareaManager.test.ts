// npx jest tests/tareaManager.test.ts

import { Task, TaskManager } from "../src/models/tareaManager";

describe("Crear una tarea y añadirla a la lista", () => {
  it("Debe crear una tarea añadirla a la lista de tareas", () => {
    // Instancia de TaskManager
    const taskManager = new TaskManager();

    // Dar los datos a partir del moselo Task para crear nueva tarea
    const task: Task = {
      id: 1,
      title: "Ir al super",
      description: "Comprar agua y cerveza",
      completed: false,
      dueDate: new Date(2024 - 3 - 24),
      creationDate: new Date(),
    };

    // LLamar al método addTask dentro de la clase TaskManager instanciada en taskManager
    taskManager.addTask(task);

    // Verificar que la tarea de ha agregado correctamente
    const tareaCreada = taskManager.getTaskById(1);

    // Verificar que la tarea existe comparando la almacenada en tareaCreada y en nuevaTarea
    expect(tareaCreada).toEqual(task);
  });
});

describe("Eliminar una tarea de la lista", () => {
  it("Identificar una tarea por su id y eliminarla de la lista", () => {
    // Crear instancia de TaskManager
    const taskManager = new TaskManager();

    // Llamar al método basado en id
    taskManager.removeTask(1);

    // Verificar que la tarea se eliminó
    const tareaDespuesEliminar = taskManager.getTaskById(1);

    expect(tareaDespuesEliminar).toBeUndefined;
  });
});

describe("Encontrar una tarea mediante el id", () => {
  it("Al llamar a la funcion con el id como parametro devuelve la tarea existente con ese id", () => {
    // Crear instancia de TaskManager
    const taskManager = new TaskManager();

    // Crear una tarea para prueba
    const task: Task = {
      id: 1,
      title: "Encontrar tarea",
      description: "Buscar tarea por su id",
      completed: false,
      creationDate: new Date(),
    };

    // Hacer que la tarea exista si no me devolverá undefined
    taskManager.addTask(task);

    // Buscar su tarea por id y esperar que devuelva la correspondiente
    const tareaEncontrada = taskManager.getTaskById(1);

    expect(tareaEncontrada).toEqual(task);
  });
});

describe("Marcar tarea como completada", () => {
  it("Encontrar una tarea por su id y cambiar su valor completed de false a true", () => {
    // Crear instancia de TaskManager
    const taskManager = new TaskManager();

    // Crear una tarea para prueba
    const task: Task = {
      id: 1,
      title: "Marcar tarea",
      description: "Buscar tarea por su id y marcarla como completed",
      completed: false,
      creationDate: new Date(),
    };

    taskManager.addTask(task);

    taskManager.markAsCompleted(1);

    expect(task.completed).toBe(true);
  });
});

describe("Desmarcar una tarea marcada como completada", () => {
  it("Encontrar una tarea mediante su id cambiar su valor completed de true a false", () => {
    // Crear instancia de TaskManager
    const taskManager = new TaskManager();

    // Crear tarea de prueba con completed en true
    const task: Task = {
      id: 1,
      title: "Desmarcar tarea",
      description: "Buscar tarea por su id y desmarcarla como completed",
      completed: true,
      creationDate: new Date(),
    };

    taskManager.addTask(task);

    // Buscar la tarea y pasarle el valor completed de true a false
    taskManager.unMarkAsCompleted(1);

    expect(task.completed).toBe(false);
  });
});

describe("Editar una tarea", () => {
  it("Encontrar una tarea por medio de su id y editar el contenido de las propiedades de un objeto de la clase Task", () => {
    // Crear instancia de TaskManager
    const taskManager = new TaskManager();

    // Crear tarea de prueba
    const task: Task = {
      id: 1,
      title: "Tarea original",
      description: "Esta es la tarea original que será editada",
      completed: false,
      creationDate: new Date(),
    };

    taskManager.addTask(task);

    // Buscar la tarea por medio del id y pasarle las propiedades editadas
    const updatedTask = {
      id: 1,
      title: "Tarea editada",
      description: "Esta es la tarea id 1 ya editada",
      completed: true,
      creationDate: new Date(),
    };

    taskManager.editTask(1, updatedTask);
  });
});

describe("Obtener listado de las tareas", () => {
  it("Al llamar a la función getAllTasks(), tiene que devolver una lista con todas las tareas creadas", () => {
    const taskManager = new TaskManager();

    // Craer tarea de prueba
    const task = {
      id: 1,
      title: "Tarea original",
      description: "Esta es la tarea original que será editada",
      completed: false,
      creationDate: new Date(),
    };

    // Ponerla en la lista para tener algo que devolver
    taskManager.addTask(task);

    // Llamar a la función y esperar que nos devuelva la lista de tarea llamada tasks
    expect(taskManager.getAllTasks()).toBe(taskManager.tasks);
  });
});
