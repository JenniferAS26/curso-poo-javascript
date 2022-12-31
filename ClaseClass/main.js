// Prototipos con la sintaxis de clases

class Student {
    constructor({ // para no aprenderlos los parametros literales podemos enviar un solo parametro de tipo objeto
        name, 
        age, 
        cursosAprobados = [],
        email,
        
    }) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.cursosAprobados = cursosAprobados;
    }

    //metodos
    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    }
}

// const miguelito = new Student("Miguel", 28, ["Curso de Analisis de Negocios para Ciencia de Datos", "Curso de Principios de Visualizacion de Datos para BI"]);

// para instanciar un objeto con constructor tipo objeto

const miguelito =  new Student({
    email: "miguelito@platzi.com",
    age: 28,
    name: "Miguel"
    
}

)