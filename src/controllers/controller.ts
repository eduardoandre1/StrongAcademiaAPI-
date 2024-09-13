import httpStatus from 'http-status';
import { Request , Response } from 'express';
import serviçeFunctions from './../serviçes/serviçe';
async function controller(req: Request, res: Response)
{
	//get the data by req 
		//const {data} = req.body; // dados de entrada da função de vem em forma de um objeto
		//const {data} =req.params; // fundametão para rotas get e delete que não recebem requisiões pelo body
		//const {data} = req.headers; // muito usado para validações de tokens 
	
	// usar pasta de serviçe para usar as regras de negocio
	
	// send response by res 
		//res.status(httpStatus.OK).send('success')
		//res.sendStatus(httpStatus.OK)
	
}

async function Login(req:Request, res:Response)
{
	const {email , password} = req.body
	
	const service = await serviçeFunctions.Login(email, password)
	
	res.status(httpStatus.OK).send(service)
}

async function Register(req: Request, res: Response) 
{
	const { nome, sobrenome, endereco, email, telefone, cpf, senha, status } = req.body;
	return res.status(httpStatus.CREATED).send('resgister')
} 
export  const controllerFunction = 
{
	Login,
	Register
}