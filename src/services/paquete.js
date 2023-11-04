import db from '../config/dbconnect.js'

const paquete = await db.getconnection().nombreTabla('paquete').conectar();
const factura = await db.getconnection().nombreTabla('factura').conectar();

export default class Paquete{
    static async postPaquete(req,res){
        if(!req.rateLimit) return;
        await paquete.insertOne(req.body);
        req.body.tipoPago = "efectivo"
        await factura.insertOne({codigoPaquete: req.body.codigoFactura,tipoPago: req.body.tipoPago,entregado: req.body.estado})
        res.status(200).send({status: 200, message: "Paquete registrado con exito"});
    }
    static async getPaquetes(req,res){
        if(!req.rateLimit) return;
        const data = await paquete.agrregate([
            {
                $match: {}
            },
            {
                $lookup: {
                    from: 'factura',
                    localField: 'codigoFactura',
                    foreignField: 'codigoPaquete',
                    as: 'factura'
                }
            }
        ]).toArray();
        res.status(200).send({status: 200, message: data});
    }
    static async getPaquetePorCodigoFactura(req,res){
        if(!req.rateLimit) return;
        if (!req.body.codigo) return status(400).send({status: 400, message: "No se puede buscar, verifica el codigo del paquete."})
        const data = await paquete.agrregate([
            {
                $match: {codigoFactura: req.body.codigo}
            },
            {
                $lookup: {
                    from: 'factura',
                    localField: 'codigoFactura',
                    foreignField: 'codigoPaquete',
                    as: 'factura'
                }
            }
        ]).toArray();
        if(!data) return status(400).send({status: 400, message: "No se puede buscar, verifica el codigo del paquete."})
        res.status(200).send({status: 200, message: data});
    }
    static async putPaquete(req,res){
        if(!req.rateLimit) return;
        if (!req.body.codigo) return status(400).send({status: 400, message: "No se puede actualizar, verifica el codigo del paquete."})
        await paquete.updateOne({codigoFactura: req.body.codigo},{$set: req.body});
        res.status(200).send({status: 200, message: "Paquete actualizado con exito"});
    }
    static async deletePaquete(req,res){
        if(!req.rateLimit) return;
        if (!req.body.codigo) return status(400).send({status: 400, message: "No se puede eliminar, verifica el codigo del paquete."})
        await paquete.deleteOne({codigoFactura: req.body.codigo});
        await factura.deleteOne({codigoPaquete: req.body.codigo});
        res.status(200).send({status: 200, message: "Paquete eliminado con exito"});
    }
}