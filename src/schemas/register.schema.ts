import Joi from "joi";

export const registerSchema = Joi.object(
	{
		nome:Joi.string().min(3).required(),
		sobrenome:Joi.string().min(3).required(),
		endereco:Joi.string().min(3).required(), 
		email:Joi.string().email().required(), 
		telefone:Joi.string().required(), 
		cpf:Joi.string().required, 
		senha:Joi.string().required()
	})

export const loginSchema = Joi.object(
	{
		email: Joi.string().email().required(),
		senha:Joi.string().required()
	})