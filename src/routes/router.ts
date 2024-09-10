import { controllerFunction } from './../controllers/controller';
import { Router } from "express";
const names = Router();

names.post('/names',controllerFunction.create)
names.get('/names',controllerFunction.read)
names.delete('/names/:name',controllerFunction.deleteController);
names.put('/names',controllerFunction.update)

export default names