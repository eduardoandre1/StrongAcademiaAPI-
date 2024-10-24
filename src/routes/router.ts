import input_validate from './../middlewares/input.validation';
import { controllerFunction } from './../controllers/controller';
import { Router } from "express";
import { Request , Response } from 'express';
import { loginSchema, registerSchema } from './../schemas/register.schema';
const Login = Router();
Login.post('/login',input_validate(loginSchema),controllerFunction.Login)
Login.post('/register',input_validate(registerSchema),controllerFunction.Register)
Login.put('/confirm/:id')//serve feita no email de confirmação
Login.get('/professores',controllerFunction.findProfessores)
Login.get('/estudantes',controllerFunction.findEstudantes)
Login.post('/delete/professores',controllerFunction.deleteProfessores)
Login.post('/delete/estudantes',controllerFunction.deleteStudent)
Login.get('/health',(req:Request,res:Response) => {return res.status(200).send("i'm fine ");})



export default Login