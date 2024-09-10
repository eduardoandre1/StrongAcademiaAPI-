import cors from "cors";
import  Express, { json }  from "express";
import 'express-async-errors';
import names from "./routes/router";
import errorHandler from "./middlewares/erros.path";


const app = Express();
app.use(json());
app.use(cors())
app.use(names)
app.use(errorHandler)

const port = process.env.PORT || 5000
app.listen(port,()=>console.log(`api running in port:${port}`))