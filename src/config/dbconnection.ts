import mongoose from 'mongoose';

async function conectarBaseDatos() {
  try {
    // Establecer conexión con MongoDB
    await mongoose.connect('mongodb://127.0.0.1:27017/lista_tareas');
    console.log("🛢️  Conexión con MongoDB establecida correctamente");
  } catch(error) {
    console.error("Error al conectar con MongoDB", error);
  }
}

export default conectarBaseDatos;