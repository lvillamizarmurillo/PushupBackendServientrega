------

# Servientrega

## Necesario para probar el backend

1.Se instalan las dependencias del package.json con el siguiente comando:

```
npm i
```



1. Se debe poner en la variable .env.example, luego renombrarlo unicamente como .env, y en mongo uri sin los parentesis mencionando lo que debe haber en el campo.

```
MY_SERVER = {"hostname": "127.10.11.12", "port": 4012}
MONGO_URI = 'mongodb+srv://(nombredeusuario):(contraseña)@cluster0.1wthqi6.mongodb.net/'
JWT = 'ertfdsdfsdfsdfaf'
```



1. Para correr el servidor se usa el comando:

```
npm run dev
```

# MongoDb

Antes de iniciar, debe por el documento que hay en scrips ejecutar lo siguiente(La carpeta en la que se encuentra ubicado: ./script/query.mongodb.js):

```
use('servientrega');
db.usuarios.insertMany([
    {
      nombre: "maria",
      apellido: "limpieza",
      correo: "hot@gmail.com",
      password: "963",
      rol: 'empleado',
      permisos: {
          "/empleado": ["1.0.0","1.0.1","1.0.2","1.0.3,1.0.4","1.0.5","1.0.6","1.0.7"]
        }
    },
    {
      nombre: "damara",
      apellido: "cocina",
      correo: "cocina@gmail.com",
      password: "963",
      rol: 'empleado',
      permisos: {
          "/empleado": ["1.0.0","1.0.1","1.0.2","1.0.3,1.0.4","1.0.5","1.0.6","1.0.7"]
        }
    },
    {
      nombre: "pedro",
      apellido: "ramirez",
      correo: "pedro@gmail.com",
      password: "963",
      rol: 'empleado',
      permisos: {
          "/empleado": ["1.0.0","1.0.1","1.0.2","1.0.3,1.0.4","1.0.5","1.0.6","1.0.7"]
        }
    },
    {
        nombre: "Valentina",
        apellido: "Mentirosa",
        correo: "facil@gmail.com",
        password: "123",
        rol: 'admin',
        permisos: {
            "/admin": ["1.0.0","1.0.1","1.0.2","1.0.3,1.0.4","1.0.5","1.0.6","1.0.7"]
        }
    }
])

use('servientrega');
db.paquete.insertMany([
  {
    remitente: {
      nombre: "fabian",
      apellido: "asfdsf",
      correo: "fabian@gmail.com",
      cedula: '515181632'
    },
    destinatario: {
      nombre: "Carlos",
      apellido: "Chinguiro",
      correo: "chinguiro@gmail.com",
      numero: '358422541',
      cedula: '1025412874'
    },
    codigoFactura: '9876543210',
    tipo: 'mercancia',
    pesoKg: 5,
    contenido: 'sombreros', 
    ubiActual: {
      pais: 'Colombia',
      departamento: 'bolivar',
      ciudad: 'cartagena',
      direccion: 'calle 33 #24-25, punto de servientrega numero 60'
    },
    ubiDestino: {
      pais: 'Colombia',
      departamento: 'santander',
      ciudad: 'bucaramanga',
      direccion: 'cra 33 #56-25 cabecera-quinta, la invasion piso 2'
    },
    siguienteUbi: {
      pais: 'Colombia',
      departamento: 'santander',
      ciudad: 'asdasdasd',
      direccion: 'cra 32 #soad punto de servientrega numero 12'
    },
    estado: 'estatico'
  },
  {
    remitente: {
      nombre: "platon",
      apellido: "seronoser",
      correo: "platon@gmail.com",
      cedula: '8776654'
    },
    destinatario: {
      nombre: "Carlos",
      apellido: "Chinguiro",
      correo: "chinguiro@gmail.com",
      numero: '358422541',
      cedula: '1025412874'
    },
    codigoFactura: '1587556626',
    tipo: 'mercancia',
    pesoKg: 25,
    contenido: 'papel',
    ubiActual: {
      pais: 'Colombia',
      departamento: 'boyaca',
      ciudad: 'asdsadasdsda',
      direccion: 'calle 32 #25-34, punto de servientrega numero 85'
    },
    ubiDestino: {
      pais: 'Colombia',
      departamento: 'santander',
      ciudad: 'bucaramanga',
      direccion: 'cra 33 #56-25 cabecera-quinta, la invasion piso 2'
    },
    siguienteUbi: {
      pais: 'Colombia',
      departamento: 'santander',
      ciudad: 'asdasdasd',
      direccion: 'cra 32 #soad punto de servientrega numero 12'
    },
    estado: 'en camino'
  }
])

use('servientrega');
db.factura.insertMany([
  {
    codigoPaquete: '9876543210',
    tipoPago: 'efectivo',
    entregado: 'en proceso'
  },
  {
    codigoPaquete: '1587556626',
    tipoPago: 'efectivo',
    entregado: 'en proceso'
  },
  {
    codigoPaquete: '213142341',
    tipoPago: 'tarjeta de credito',
    entregado: 'entregado'
  }
])
```

## Uso

Para cualquier consulta se debe loguear con el siguiente usuario:

Post

version: 1.0.0

```
http://127.10.11.12:4012/clay/login
```

```
{
  "email": "facil@gmail.com",
  "password": "123"
}
```

Para registrar un usuariose usa el siguiente link(opcional):

version: 1.0.0

Post

```
http://127.10.11.12:4012/clay/registro
```

```
{
  "correo": "ejemplo@gmail.com",
  "password": "123"
}
```



Luego el token generado se debera colocar en Auth/BearerToken

Ej:

```
sauhdusaihdiuahsiudyhsaoiudjaisdsanlkjdnaskjhdijsahdkjhsakjdhsakjhdkjashd
```



O en headers colocar Authorization seguido de Bearer (token)

Ej:

```
Authorization:   Bearer sjahdiuashdiuahsodijsaoijdsioajdoijdoiasjdoijasoijdoiasoidjsa
```

# Consultas

**1. dsfsdfsdfsdfsdfsdfsdfsd**

```sql
# Consulta realizada ....
```
Get

1.0.0

http://127.10.11.12:4012/servientrega/admin

Get

1.0.1

http://127.10.11.12:4012/servientrega/admin

Get

1.0.2

http://127.10.11.12:4012/servientrega/admin

Get

1.0.3

http://127.10.11.12:4012/servientrega/admin

Post

1.0.0

http://127.10.11.12:4012/servientrega/admin

Post

1.0.1

http://127.10.11.12:4012/servientrega/admin

Put

1.0.0

http://127.10.11.12:4012/servientrega/admin

Put

1.0.1

http://127.10.11.12:4012/servientrega/admin

Delete

1.0.0

http://127.10.11.12:4012/servientrega/admin

Delete

1.0.1

http://127.10.11.12:4012/servientrega/admin