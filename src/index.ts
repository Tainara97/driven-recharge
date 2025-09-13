import express, { json, Request, Response } from "express";
import errorHandler from "./middlewares/error-handler";
import router from "./routers/index-router";


const app = express();
app.use(json());

app.get("/health", (req: Request, res: Response) => {
    res.sendStatus(200);
})

app.use(router);
app.use(errorHandler);

app.listen(5000, () => console.log("Server is up!"));