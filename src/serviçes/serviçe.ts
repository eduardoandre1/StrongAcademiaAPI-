import repositoryFunctions from "./../repositories/repositorie";
import bcrypt from 'bcrypt';

async function register() {
	 // get database user where cpf or email
	 //if cpf or email exist throw {type: 'conflict', message "cpf or email already exists"}
	 // create user 
	 // send email
	 // return true   
}
async function login(email,password)
{
	const  findEmail = await  repositoryFunctions.FindbyEmailOrCPF(email,'gato')
	if (findEmail.rowCount == 0) throw {type:"notFound" ,message:"don't find this email in my database, please check if your email is correct."}
	const serverPasswordEncripted = findEmail.rows[0].password
	
	if(bcrypt.compareSync(password, serverPasswordEncripted) === false) throw {type:"conflict",message:"password is incorrect"}
	const user_id = findEmail.rows[0].id
	return findEmail.rows[0] 
	
}
const serviçeFunctions = 
{
	login,
	register
}
export default serviçeFunctions