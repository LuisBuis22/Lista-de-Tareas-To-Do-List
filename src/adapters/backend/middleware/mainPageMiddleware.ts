import express from 'express';
import path from 'path';

const app = express();

const mainPage = app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', '..', 'frontend', 'html', 'index.html'));
  console.log("Funciona");
})

export default mainPage;