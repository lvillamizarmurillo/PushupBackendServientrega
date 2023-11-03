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
      puntoTrabajo: {
        pais: 'Colombia',
        departamento: 'santander',
        ciudad: 'asdasdasd',
        direccion: 'cra 32 #soad punto de servientrega numero 12'
      },
      password: "963",
      rol: 'cliente',
      permisos: {
          "/empleado": ["1.0.0","1.0.1","1.0.2","1.0.3,1.0.4","1.0.5","1.0.6","1.0.7"]
        }
    },
    {
      nombre: "damara",
      apellido: "cocina",
      correo: "cocina@gmail.com",
      puntoTrabajo: {
        pais: 'Colombia',
        departamento: 'bolivar',
        ciudad: 'cartagena',
        direccion: 'calle 33 #24-25, punto de servientrega numero 60'
      },
      password: "963",
      rol: 'cliente',
      permisos: {
          "/empleado": ["1.0.0","1.0.1","1.0.2","1.0.3,1.0.4","1.0.5","1.0.6","1.0.7"]
        }
    },
    {
      nombre: "pedro",
      apellido: "ramirez",
      correo: "pedro@gmail.com",
      puntoTrabajo: {
        pais: 'Colombia',
        departamento: 'boyaca',
        ciudad: 'asffhfghdf',
        direccion: 'calle 32 #25-34, punto de servientrega numero 85'
      },
      password: "963",
      rol: 'cliente',
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
    distanciaActualKm: 56,
    tiempoEstimadoEnHoras: 10, 
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
    estado: 'estatico',
    ultimoDestino: false
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
    distanciaActualKm: 91,
    tiempoEstimadoEnHoras: 16, 
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
    estado: 'en camino',
    ultimoDestino: false
  }
])

use('servientrega');
db.factura.insertMany([
  {
    codigoPaquete: '9876543210',
    tipoPago: 'efectivo',
    entregado: 'en proceso',
    tiempoTotalEsperaEnHoras: 72,
    totalEnvio: '367.000'
  },
  {
    codigoPaquete: '1587556626',
    tipoPago: 'efectivo',
    entregado: 'en proceso',
    tiempoTotalEsperaEnHoras: 65,
    totalEnvio: '250.000'
  },
  {
    codigoPaquete: '213142341',
    tipoPago: 'tarjeta de credito',
    entregado: 'entregado',
    tiempoTotalEsperaEnHoras: 65,
    totalEnvio: '250.000'
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










Para calcular el costo de envío de un paquete, generalmente se toman en cuenta varios factores, como la distancia, el peso y la tarifa por kilómetro. En este caso, tienes la distancia de 602 km y el peso del paquete de 10 kg, y quieres que el costo sea de 367.000 pesos colombianos. Para calcular la tarifa por kilómetro necesaria para alcanzar ese costo, puedes usar la siguiente fórmula:

Costo total = Tarifa por kilómetro * Distancia

Dado que tienes el costo total y la distancia, puedes despejar la tarifa por kilómetro de la siguiente manera:

Tarifa por kilómetro = Costo total / Distancia

Sustituyendo los valores que proporcionaste:

Tarifa por kilómetro = 367,000 / 602 = 609.302 pesos colombianos por kilómetro

Por lo tanto, necesitas establecer una tarifa de aproximadamente 609.302 pesos colombianos por kilómetro para que el costo de envío del paquete de 10 kg a una distancia de 602 km sea de 367.000 pesos colombianos. Ten en cuenta que este cálculo es simplista y no tiene en cuenta otros factores que podrían afectar el costo real del envío, como los costos operativos, los impuestos, etc.




User
ahora supongamos que la distancia a recorrer es de 503 km y un paquete pesa 12kg, cuanto me va a cotizar en pesos colombianos por esa distancia y peso

Para calcular el costo de envío para una distancia de 503 km y un paquete que pesa 12 kg, puedes utilizar la misma fórmula:

Costo total = Tarifa por kilómetro * Distancia

Dado que ya sabes que la tarifa por kilómetro es de 609.302 pesos colombianos por kilómetro (según el cálculo anterior), puedes calcular el costo total de la siguiente manera:

Costo total = 609.302 pesos/km * 503 km = 307,150.006 pesos colombianos

Entonces, el costo de envío para un paquete que pesa 12 kg y debe recorrer una distancia de 503 km sería de aproximadamente 307,150.006 pesos colombianos. Ten en cuenta que este cálculo se basa en la tarifa por kilómetro que calculaste previamente y no incluye otros posibles costos adicionales.

Para calcular el costo de envío basado en el tiempo estimado de entrega, necesitarás conocer la tarifa por hora de entrega. Supongamos que la tarifa por hora es de "X" pesos colombianos por hora.

Dado que estimas que el paquete demora 72 horas en entregarse, puedes calcular el costo total de envío de la siguiente manera:

Costo total = Tarifa por hora * Tiempo estimado de entrega

En este caso:

Costo total = X pesos/hora * 72 horas = 72X pesos colombianos

Ahora, tienes que igualar este costo total al costo del paquete, que es de 307,150.006 pesos colombianos:

72X = 307,150.006

Para despejar "X" (la tarifa por hora), puedes dividir ambos lados de la ecuación por 72:

X = 307,150.006 / 72 ≈ 4,265.972 pesos colombianos por hora

Entonces, con una tarifa de aproximadamente 4,265.972 pesos colombianos por hora, el costo total del envío del paquete de 307,150.006 pesos colombianos se calcularía en función del tiempo estimado de entrega de 72 horas. Ten en cuenta que este cálculo se basa en suposiciones y no incluye otros factores que podrían influir en la tarifa real del envío, como los costos operativos, los impuestos, etc.