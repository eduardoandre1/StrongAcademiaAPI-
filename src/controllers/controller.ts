import httpStatus from 'http-status';
import { Request , Response } from 'express';
import serviçeFunctions from './../serviçes/serviçe';
function controller(req: Request, res: Response)
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
async function create(req: Request, res: Response)
{
	const { name } = req.body
	serviçeFunctions.create(name)
	res.sendStatus(httpStatus.CREATED)
}
async function read(req: Request, res: Response)
{
	const namesList = await serviçeFunctions.read()
	res.status(httpStatus.OK).send(namesList)
}
async function update(req: Request, res: Response)
{
	const {newName , oldName} = req.body
	await serviçeFunctions.update(newName, oldName)
	res.sendStatus(httpStatus.ACCEPTED)

}
async function deleteController(req: Request,res: Response)
{
	const {name} = req.params
	await serviçeFunctions.deleteService(name)
	res.sendStatus(httpStatus.OK)
}
export  const controllerFunction = 
{
	create,
	read,
	update,
	deleteController
}