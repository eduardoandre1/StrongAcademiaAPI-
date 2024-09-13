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
async function Register(nome, sobrenome, endereco, email, telefone, cpf, senha)
{
	await DB.query("INSERT INTO user_page (nome, sobrenome, endereco, email, telefone, cpf, senha) VALUES ($1,$2,$3,$4,$5,$6,$7)",[nome, sobrenome, endereco, email, telefone, cpf, senha]);
}
async function FindbyEmailOrCPF(email,cpf)
{
	const user = await DB.query("SELECT * FROM user_page WHERE email = $1 OR cpf = $2",[email,cpf]);
	return user
}
const repositoryFunctions = 
{
	create,
	read,
	readFilterName,
	update,
	deleteDatabase,
	Register,
	FindbyEmailOrCPF
}
export default repositoryFunctions