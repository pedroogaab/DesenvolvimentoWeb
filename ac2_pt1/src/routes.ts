import { Router } from "express";
import UserController from "./UserController";

export const route = Router();
route.get('/users', UserController.read); 
route.post('/createUser', UserController.create)
route.delete('/delethanos', UserController.delete); 
