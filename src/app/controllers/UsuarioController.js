import UsuarioService from '../services/UsuarioService.js';

export default class UsuarioController {
    constructor(){
        this._usuario = new UsuarioService();
    }

    async cadastrar(req,res) {
        const { body } = req;

        try {
            await this._usuario.cadastrar(body);
            res.status(200).json({ msg: "success" });
        } catch (e) {
            res.status(500).json({ msg: "error", error: e});
        }
    }

    atualizar(req, res) {}

    listar(req, res) {}

    listarUm(req, res) {}

    deletar(req, res) {}
}