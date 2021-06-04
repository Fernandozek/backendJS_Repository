import UsuarioRepository from '../repository';

export default class UsuarioRepository {
    constructor() {
        this.usuario = new UsuarioRepository();
    }

    async cadastrar(data){
        try{
            this.usuario.create(data);
        }catch(e){
            console.log("entrou aqui");
            throw new Error(e);
        }
    }
}