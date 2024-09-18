import repositoryFunctions from "./../repositories/repositorie";
import bcrypt from 'bcrypt';

async function register(nome, sobrenome, endereco, email, telefone, cpf, senha) {
	const findbyEmailOrCPF = await repositoryFunctions.FindbyEmailOrCPF(email,cpf)
	if (findbyEmailOrCPF.rowCount > 0) throw {type: 'conflict' ,message:'email ou cpf já estão coadastrados no nosso banco de dados'}
	const senhaCriptografada = bcrypt.hashSync(senha, 10)
	const user = await repositoryFunctions.Register(nome, sobrenome,endereco,email,telefone,cpf,senhaCriptografada) 
	console.log(user.rows[0])
	// create user 
	 // send email
	return user.rows[0]   
}
async function login(email,password)
{
	const  findEmail = await  repositoryFunctions.FindbyEmailOrCPF(email,'gato')
	if (findEmail.rowCount == 0) throw {type:"notFound" ,message:"don't find this email in my database, please check if your email is correct."}
	const serverPasswordEncripted = findEmail.rows[0].password
	
	if(bcrypt.compareSync(password, serverPasswordEncripted) === false) throw {type:"conflict",message:"password is incorrect"}
	return findEmail.rows[0] 
	
}
const serviçeFunctions = 
{
	login,
	register
}
export default serviçeFunctions