import repositoryFunctions from "./../repositories/repositorie";
import bcrypt from 'bcrypt';

async function register(nome, sobrenome, endereco, email, telefone, cpf, senha, type) {
	const findbyEmailOrCPF = await repositoryFunctions.FindbyEmailOrCPF(email,cpf)
	if (findbyEmailOrCPF.rowCount > 0) throw {type: 'conflict' ,message:'email ou cpf já estão coadastrados no nosso banco de dados'}
	const senhaCriptografada = bcrypt.hashSync(senha, 10)
	const user = await repositoryFunctions.Register(nome, sobrenome,endereco,email,telefone,cpf,senhaCriptografada,type) 
	console.log(user.rows[0])
	// create user 
	 // send email
	return user.rows[0]   
}
async function login(email,password)
{
	console.log(password)
	const  findEmail = await  repositoryFunctions.findbyEmail(email)
	if (findEmail.rowCount == 0) throw {type:"notFound" ,message:"don't find this email in my database, please check if your email is correct."}
	const serverPasswordEncripted = findEmail.rows[0].senha
	console.log(findEmail.rows[0])
	bcrypt.compareSync(password, serverPasswordEncripted)
	if(bcrypt.compareSync(password, serverPasswordEncripted) === false) throw {type:"conflict",message:"password is incorrect"}
	return { type:findEmail.rows[0].type } 
	
}
async function findEstudantes()
{
	const estudantes = await repositoryFunctions.findEstudantes()
	return estudantes.rows
}
async function findProfessores()
{
	const professores = await repositoryFunctions.findProfessores()
	return professores.rows
}
async function deleteProfessor(cpf: string)
{
	const prof = await repositoryFunctions.FindbyEmailOrCPF('NOT',cpf)
	if(prof.rowCount === 0) throw {type:"conflict",message:`este cpf: ${cpf} not found`}
	const del = await repositoryFunctions.deleteProfessor(cpf)
	return del
}
async function deleteStudent(cpf: string)
{
	const student = await repositoryFunctions.FindbyEmailOrCPF('NOTEmail',cpf)
	if(student.rowCount === 0) throw {type:"conflict",message:'este aluno já não se encontra no banco de dados'}
	const del = await repositoryFunctions.deleteEstudante(cpf)
	return del
}
const serviçeFunctions = 
{
	login,
	register,
	findEstudantes,
	findProfessores,
	deleteProfessor,
	deleteStudent
}
export default serviçeFunctions