import prisma from "../models/bebidas.js";

export default{
    async create(data){
        return prisma.create({data})
    },
    async find(texto){
        return prisma.findFirst({
            where: {
                nome: {
                    contains: texto,
                },
            }
        })
    },
    async delete(id){
        return prisma.delete({
            where: {
                id: id,
            },
            select: {
                nome: true,
            },
        });
    }
}
