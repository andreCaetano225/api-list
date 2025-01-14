import { FastifyInstance } from "fastify";
import { prismaClient } from "../prisma";


export async function getAllList(app:FastifyInstance) {

    app.get('/lists', async (req, res) => {

        const lists = await prismaClient.list.findMany()

        return res.send(lists)

    })
    
}