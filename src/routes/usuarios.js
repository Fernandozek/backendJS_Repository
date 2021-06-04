import express from 'express';
import UsuarioController from '../app/controllers/UsuarioController.js';

const usuario = new UsuarioController();

const UsuarioRouter = express.Router();

UsuarioRouter.get("/usuarios", (req, res) => usuario.listar(req, res));
UsuarioRouter.get("/usuarios/:id", (req, res) => usuario.listarUm(req, res));
usuarioRouter.post("/usuarios", (req, res) => usuario.cadastrar(req, res));
usuarioRouter.put("/usuarios/:id", (req, res) => usuario.atualizar(req, res));
usuarioRouter.delete("/usuarios/:id", (req, res) => usuario.deletar(req, res));

export default usuarioRouter;