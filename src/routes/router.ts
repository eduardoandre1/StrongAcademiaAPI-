import input_validate from './../middlewares/input.validation';
import { controllerFunction } from './../controllers/controller';
import { Router } from "express";
import { Request , Response } from 'express';
import { registerSchema } from '@/schemas/register.schema';
const Login = Router();
Login.post('/login',input_validate(registerSchema),controllerFunction.Login)
Login.post('/register',input_validate(registerSchema),controllerFunction.Register)
Login.put('/confirm/:id')//serve feita no email de confirmação
Login.get('/health',(req:Request,res:Response) => {return res.status(200).send("i'm fine ");})



export default Login