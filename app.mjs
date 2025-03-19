import express from "express"
import router from "./src/routes/index.mjs";
import {requestLogger} from './src/config/logger.mjs'
import { errors } from 'celebrate'

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(requestLogger)
app.use(router)
app.use(errors())

app.listen(PORT,() => {
    console.log(`The server is online on ${PORT} port`);
});