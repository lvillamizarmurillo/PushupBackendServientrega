import { Router } from "express";
import routesVersioning from "express-routes-versioning";
import Usuarios from '../../services/usuario.js';
import { validate } from '../../validation/validaciones.js'
import passportHelper from '../../config/passporthelpert.js';

const router = Router();
const version = routesVersioning();

router.use(passportHelper.authenticate('bearer', {session: false}));

router.get('/', version({'1.0.0': validate(Usuarios.getUsers)},{'1.0.1': validate(Usuarios.getUsersCorreo)}))

router.post('/', version({'1.0.0': validate(Usuarios.postUsuarios)}))

router.put('/', version({'1.0.0': validate(Usuarios.putUsuarios)}))

router.delete('/', version({'1.0.0': validate(Usuarios.deleteUser)}))

export {
    router
}