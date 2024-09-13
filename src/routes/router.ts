import { controllerFunction } from './../controllers/controller';
import { Router } from "express";
import { Request , Response } from 'express';
const Login = Router();
Login.post('/login',controllerFunction.Login)
Login.post('/register')
Login.put('/confirm/:id')
Login.get('/health',(req:Request,res:Response) => {return res.status(200).send("i'm fine ");})



export default Login