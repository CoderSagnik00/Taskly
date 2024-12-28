import express from 'express'
import routes_todo from './routes/todo.routes.js'
import cors from 'cors'
import path from 'path'
import 'dotenv/config'

import { connectDB } from './config/db.js';

const app = express();


if (process.env.ENV === 'dev') {
    app.use(express.json())
} else if (process.env.ENV === 'prod') {
    app.use(express.static(path.resolve(import.meta.dirname, "../frontend-taskly/dist")))

}

app.use(cors())

app.use("/api/todo/", routes_todo);

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}...`);
    connectDB();
})