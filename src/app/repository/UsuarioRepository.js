import UsuarioModel from '../models/UsuarioModel.js';

export default class UsuarioRepository {
    constructor(){
        this._usuario = new UsuarioModel();
    }

    async create(data){
        try {
            await this._usuario.create(data);
        } catch (e) {
            throw new Error(e);
        }
    }
}