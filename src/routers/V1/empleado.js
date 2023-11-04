import { Router } from "express";
import routesVersioning from "express-routes-versioning";
import Paquete from '../../services/paquete.js';
import { validate } from '../../validation/validaciones.js'
import passportHelper from '../../config/passporthelpert.js';

const router = Router();
const version = routesVersioning();

router.use(passportHelper.authenticate('bearer', {session: false}));

router.get('/', version({'1.0.0': validate(Paquete.getPaquetes)},{'1.0.1': validate(Paquete.getPaquetePorCodigoFactura)}))

router.post('/', version({'1.0.0': validate(Paquete.postPaquete)}))

router.put('/', version({'1.0.0': validate(Paquete.putPaquete)}))

router.delete('/', version({'1.0.0': validate(Paquete.deletePaquete)}))

export {
    router
}