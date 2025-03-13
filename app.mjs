import express from "express"
import router from "./src/routes/index.mjs";

const PORT = 3000;
const app = express();

app.use(router)

app.listen(PORT,() => {
    console.log(`The server is online on ${PORT} port`);
});