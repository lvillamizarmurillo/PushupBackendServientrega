import { Router } from "express";
import routesVersioning from "express-routes-versioning";
import Usuarios from '../../services/usuario.js';
import Paquete from '../../services/paquete.js';
import { validate } from '../../validation/validaciones.js'
import passportHelper from '../../config/passporthelpert.js';

const router = Router();
const version = routesVersioning();

router.use(passportHelper.authenticate('bearer', {session: false}));

router.get('/', version({'1.0.0': validate(Usuarios.getUsers)},{'1.0.1': validate(Usuarios.getUsersCorreo)},{'1.0.2': validate(Paquete.getPaquetes)},{'1.0.3': validate(Paquete.getPaquetePorCodigoFactura)}))

router.post('/', version({'1.0.0': validate(Usuarios.postUsuarios)},{'1.0.1': validate(Paquete.postPaquete)}))

router.put('/', version({'1.0.0': validate(Usuarios.putUsuarios)},{'1.0.1': validate(Paquete.putPaquete)}))

router.delete('/', version({'1.0.0': validate(Usuarios.deleteUser)},{'1.0.1': validate(Paquete.deletePaquete)}))

export {
    router
}