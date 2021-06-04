import database from '../../db/database.js';

export default class UsuarioModel {
    async create(data){
        try {
            const id = await database.insert(data).into("usuarios");
            return id;
        } catch (e) {
            console.log("entrou aqui");
            throw new Error(e);
        }
    }
}