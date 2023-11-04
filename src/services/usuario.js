import db from '../config/dbconnect.js'
import { validationResult } from 'express-validator';
import { DTO } from '../middleware/controllers/registro.js';

const usuario = await db.getconnection().nombreTabla('usuarios').conectar();

export default class Usuario{
    static async postUsuarios(req,res){
        if(!req.rateLimit) return;
        await Promise.all(DTO[`${req.headers["accept-version"]}`].map(res => res.run(req)));
        const {errors} = validationResult(req);
        if (errors.length) return res.status(400).json({ errors });
        req.body.rol = "empleado"
        req.body.permisos = {
            "/empleado": [
              "1.0.0",
              "1.0.1",
              "1.0.2",
              "1.0.3,1.0.4",
              "1.0.5",
              "1.0.6",
              "1.0.7"
            ]
          }
        await usuario.insertOne(req.body);
        res.status(200).send({status: 200, message: "Usuario registrado con exito"});
    }
    static async getUsers(req,res){
        if(!req.rateLimit) return;
        const data = await usuario.aggregate([
            {
                $match: {}
            }
        ]).toArray();
        res.status(200).send({status: 200, message: data});
    }
    static async getUsersCorreo(req,res){
        console.log("hola");
        if (!req.body.correo) return status(400).send({status: 400, message: "No se puede buscar, verifica el correo del usuario."})
        const data = await usuario.agreggate([
            {
                $match: {correo: req.body.correo}
            }
        ]).toArray();
        res.status(200).send({status: 200, message: data});
    }
    static async putUsuarios(req,res){
        if(!req.rateLimit) return;
        if (!req.body.correo) return status(400).send({status: 400, message: "No se puede actualizar, verifica el correo del usuario."})
        await usuario.updateOne({correo: req.body.correo}, {$set: req.body});
        res.status(200).send({status: 200, message: "Usuario registrado con exito"});
    }
    static async deleteUser(req,res){
        if(!req.rateLimit) return;
        if (!req.body.correo) return status(400).send({status: 400, message: "No se puede actualizar, verifica el correo del usuario."})
        await usuario.deleteOne({correo: req.body.correo});
        res.status(200).send({status: 200, message: "Usuario eliminado con exito"});
    }
}