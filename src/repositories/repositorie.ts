import { DB } from "./../database/postgres"

async function Register(nome, sobrenome, endereco, email, telefone, cpf, senha)
{
	const user = await DB.query("INSERT INTO usuarios (nome, sobrenome, endereco, email, telefone, cpf, senha) VALUES ($1,$2,$3,$4,$5,$6,$7)",[nome, sobrenome, endereco, email, telefone, cpf, senha]);
	return user
}
async function FindbyEmailOrCPF(email,cpf)
{
	const user = await DB.query("SELECT * FROM usuarios WHERE email = $1 OR cpf = $2",[email,cpf]);
	return user
}
const repositoryFunctions = 
{
	Register,
	FindbyEmailOrCPF
}
export default repositoryFunctions