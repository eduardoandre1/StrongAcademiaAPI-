import { DB } from "./../database/postgres"

async function Register(nome, sobrenome, endereco, email, telefone, cpf, senha , type)
{
	const user = await DB.query("INSERT INTO usuarios (nome, sobrenome, endereco, email, telefone, cpf, senha , type) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)",[nome, sobrenome, endereco, email, telefone, cpf, senha,type]);
	return user
}
async function FindbyEmailOrCPF(email,cpf)
{
	const user = await DB.query("SELECT * FROM usuarios WHERE email = $1 OR cpf = $2",[email,cpf]);
	return user
}
async function findbyEmail(email)
{
	const user = await DB.query("SELECT * FROM usuarios WHERE email = $1 ",[email]);
	return user
}
async function findEstudantes()
{
	const user = await DB.query("SELECT * FROM usuarios WHERE type = 'estudante'")
	return user
}
async function findProfessores()
{
	const user = await DB.query("SELECT * FROM usuarios WHERE type = 'professor'")
	return user
}
async function deleteProfessor(cpf)
{
	await DB.query("DELETE FROM usuarios WHERE cpf = $1",[cpf])
}
async function deleteEstudante(cpf)
{
	await DB.query("DELETE FROM usuarios WHERE cpf = $1",[cpf])
}
const repositoryFunctions = 
{
	Register,
	FindbyEmailOrCPF,
	findbyEmail,
	findEstudantes,
	findProfessores,
	deleteProfessor,
	deleteEstudante
}
export default repositoryFunctions