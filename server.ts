import exp from "constants";
import express from "express";
import apiRouter from "./router/apiRoute";
require("./config/database").connect();
const app = express();

app.use(express.json());
app.use("/todo",apiRouter);

app.listen(3000,()=>{
    console.log("Server succesfully started");
});