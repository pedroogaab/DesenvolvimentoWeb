import { Request, Response } from "express"; 
import User from "./user"

class UserController {
    async read(request: Request, response: Response) {
        try{
            const data = await User.find()
            response.status(200).json(data) 
        } catch (error) {
            response.status(500).json({erro: error}) 
        }        
    }

    async create(request: Request, response: Response) { 
        const {name} = request.body 
        try {
            const user = await User.create({name}) 
            response.status(200).json(user); 
        } catch(error) {
            response.status(500).json({ error: "Erro ao criar usuário", message: error}) 
        }
    }

    async delete(request: Request, response: Response) {
        try {
            const numUsers = await User.countDocuments();
            const randomIndex = Math.floor(Math.random() * numUsers);
            const user = await User.findOneAndDelete().skip(randomIndex);
            response.status(200).json(user) 
        } catch (error) {
            response.status(500).json({ error: "Erro ao apagar usuário", message: error}) 
        }
    }
}

export default new UserController() 
