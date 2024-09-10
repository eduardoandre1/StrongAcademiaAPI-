import { DB } from "./../database/postgres"
import { databaseOutput } from "./../protocol/types"
async function create(name: string): Promise<void>
{
	await DB.query(`INSERT INTO pessoa (nome) VALUES ($1)`,[name])
}
async function read()
{
	const pessoasList = await DB.query(`SELECT * FROM pessoa`)
	return pessoasList
}
async function readFilterName(name: string)
{
	const pessoasList = await DB.query(`SELECT * FROM pessoa WHERE nome = $1`,[name])
	return pessoasList
}
async function update(oldName: string,newName: string): Promise<void>
{
	await DB.query(`UPDATE pessoa SET nome = $1 WHERE nome = $2`,[oldName,newName])
}
async function deleteDatabase(name :string): Promise<void>
{
	await DB.query(`DELETE FROM pessoa WHERE nome = $1`,[name])
}
const repositoryFunctions = 
{
	create,
	read,
	readFilterName,
	update,
	deleteDatabase
}
export default repositoryFunctions