import bebidasRepository from "../repository/bebidasRepository.js";

export default{
    async cadastrarBebida(data){
        return await bebidasRepository.create(data)
    },
    async buscarBebida(data){
        return await bebidasRepository.find(data)
    },

    async deletarPorId(data){
        return await bebidasRepository.delete(data)
    },
}