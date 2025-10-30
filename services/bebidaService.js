import bebidasRepository from "../repository/bebidasRepository.js";

export default{
    async cadastrarBebida(data){
        if (!data.nome || !data.marca || !data.teor_alcoolico) {
            throw new Error('Todos os campos são obrigatório');
        }
        return await bebidasRepository.create(data)
    },
    async buscarBebida(data){
        return await bebidasRepository.find(data)
    },

    async buscarBebidas(){
        return await bebidasRepository.find()
    },

    async deletarPorId(data){
        return await bebidasRepository.delete(data)
    },
}