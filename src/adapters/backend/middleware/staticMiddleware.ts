import express from 'express';
import path from 'path';

const staticMiddleware = express.static(path.join(__dirname, '..', '..', 'frontend', 'html'));

export default staticMiddleware;
