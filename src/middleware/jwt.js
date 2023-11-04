import dotenv from 'dotenv/config'
import { jwtVerify, SignJWT } from 'jose';
import db from '../config/dbconnect.js';
import { ObjectId } from 'mongodb';

const env = process.env.JWT;

const usuario = await db.getconnection().nombreTabla('usuarios').conectar();

const crearToken = async(req,res,next)=>{
    if(!req.rateLimit) return;
    const encoder = new TextEncoder();
    const result = await usuario.findOne({correo: req.body.email, password: req.body.password})
    if(!result) return res.status(401).send({status:401,message:'Usuario no encontrado'})
    const id = result._id.toString();
    const jwtEncriptado = await new SignJWT({id: id})
        .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
        .setIssuedAt()
        .setExpirationTime('3h')
        .sign(encoder.encode(env));
    req.data = {status:200,message:jwtEncriptado};
    next()
}
const verificarToken = async(req,token)=>{
    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
            token,
            encoder.encode(env)
        )
        const baseQuitada = req.baseUrl.slice(13)
        console.log(baseQuitada);
        let result = await usuario.findOne({
            _id: new ObjectId(jwtData.payload.id),
            [`permisos.${baseQuitada}`]: `${req.headers['accept-version']}`
        })
        return result
    } catch (error) {
        return false;
    }
}

export {
    crearToken,
    verificarToken
}