// Creamos nuestro primer objeto literal

const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados: [
        "Curso definitivo de HTML y CSS",
        "Curso práctico de HTML y CSS"
    ],
    //crear un metodo
    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    }
};

// Hacer que Natalia apruebe otro curso sin crear un metodo
// natalia.cursosAprobados.push("Curso de Responsive Design"); 

//Crear nuestro primer PROTOTIPO

function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    // this.aprobarCurso = function (nuevoCursito) {
    //     this.cursosAprobados.push(nuevoCursito);
    // }
}

//Creamos un metodo por fuera del prototipo, utilizando .prototype
Student.prototype.aprobarCurso = function (nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
}

//Creemos una instancia de este prototipo

const juanita = new Student("Juanita Alejandra", 15, ["Curso de Introduccion a la produccion de VideoJuegos", "Curso de Creacion de Personajes"]);
