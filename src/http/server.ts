import fastify from "fastify";  
import { createList } from "../routes/create-list";
import { getAllList } from "../routes/list-all-list";


const app = fastify({
    logger: true
})

app.get('/', async (req,res) => {

    const data = "mundo"

    return data

})

app.register(createList)
app.register(getAllList)


app.listen({
    port: 3001,
    host: '0.0.0.0'
})