import express from 'express';
import conectarBaseDatos from './config/dbconnection';
import staticMiddleware from './adapters/backend/middleware/staticMiddleware';
import helmet from 'helmet';
import mainPage from './adapters/backend/middleware/mainPageMiddleware'

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración de la política de seguridad de contenido (CSP)
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"], // Permitir solo recursos del mismo origen
    scriptSrc: ["'self'", "'unsafe-inline'"], // Permitir scripts inline
    styleSrc: ["'self'", "'unsafe-inline'"], // Permitir estilos inline
    imgSrc: ["'self'", "data:"], // Permitir imágenes del mismo origen y data URIs
  },
}));
app.use(staticMiddleware);


app.get('/', mainPage);

async function iniciarServidor() {
  try {
    await conectarBaseDatos();

    app.listen(PORT, () => {
      console.log(`✅ Server listening at http://localhost:${PORT}`);
      console.log("✋ Press Ctrl + C to Stop");
    });
  } catch (error) {
    console.log("Error al iniciar el servidor", error);
  }
}

export default app;

iniciarServidor();
