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