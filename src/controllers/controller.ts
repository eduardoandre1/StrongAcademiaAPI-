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
	const {email , senha} = req.body	
	const login  = await serviçeFunctions.login(email,senha)
	res.status(httpStatus.OK).send(login)
}

async function Register(req: Request, res: Response) 
{
	const { nome, sobrenome, endereco, email, telefone, cpf, senha ,type} = req.body;
	const serviçe = await serviçeFunctions.register(nome, sobrenome, endereco, email, telefone, cpf, senha ,type)
	return res.status(httpStatus.CREATED).send(serviçe)
}
async function getExercices(req: Request, res: Response)
{
	const serviçe = await serviçeFunctions
}
async function findEstudantes(req: Request, res: Response)
{
	const serviçe = await serviçeFunctions.findEstudantes()
	return res.status(httpStatus.OK).send(serviçe)
} 
async function findProfessores(req: Request, res: Response)
{
	const serviçe = await serviçeFunctions.findProfessores()
	return res.status(httpStatus.OK).send(serviçe)
}
async function deleteProfessores(req: Request, res: Response)
{
	const {cpf} = req.body
	const del = await serviçeFunctions.deleteProfessor(cpf)
	return res.status(httpStatus.OK).send('deletado')
}
async function deleteStudent(req: Request, res: Response)
{
	const {cpf} = req.body
	const del = await serviçeFunctions.deleteStudent(cpf)
	return res.status(httpStatus.OK).send('deletado')
}
export  const controllerFunction = 
{
	Login,
	Register,
	findEstudantes,
	findProfessores,
	deleteProfessores,
	deleteStudent,
}