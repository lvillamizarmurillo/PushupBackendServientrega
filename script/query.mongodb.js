use('servientrega');
db.usuarios.insertMany([
    {
        nombre: "Carlos",
        apellido: "Chinguiro",
        correo: "chinguiro@gmail.com",
        password: "963",
        rol: 1,
        permisos: {
            "/usuario": ["1.0.0"],
            "/contenido": ["1.0.0","1.0.1","1.0.2","1.1.0"]
        }
    },
    {
        nombre: "Valentina",
        apellido: "Mentirosa",
        correo: "facil@gmail.com",
        password: "123",
        rol: 2,
        permisos: {
            "/usuario": ["1.0.0","1.0.1"],
            "/contenido": ['1.0.0','1.0.1','1.0.2','1.0.3','1.0.4']
        }
    }
])