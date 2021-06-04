import express from 'express';
import cors from 'cors';

import usuarioRouter from './routes/usuarios.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use(usuarioRouter);

app.listen(3000, () => console.log("servidor rodando bem"));