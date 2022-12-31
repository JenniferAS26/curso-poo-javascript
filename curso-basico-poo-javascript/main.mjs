// Creacion objeto literal
/*const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados: [
        "Curso Definitivo de HTML y CSS",
        "Curso Practico de HTML y CSS"
    ],
    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito)
    }
};
// Hacer que natalia apruebe otro curso
natalia.cursosAprobados.push("Curso de Responsive Design");
natalia.age += 1;
natalia.aprobarCurso("Curso de CSS Grid"); */
/* ---------------------------------------------------------------- */
/*const juan1 = {
    name: "JuanDC",
    username: "juandc",
    points: 100,
    socialMedia: {
        twitter: "fjuandc",
        instagram: "fjuandc",
        facebook: undefined,
    },
    approvedCourses: [
        "Curso Definitivo de HTML y CSS",
        "Curso Practico de HTML y CSS",
    ],
    learningPath: [
        {
            name: "Escuela de Desarrollo Web",
            courses: [
                "Curso Definitivo de HTML y CSS",
                "Curso Practico de HTML y CSS",
                "Curso de Responsive Design",
            ],
        },
        {
            name: "Escuela de Videojuegos",
            courses: [
                "Curso de Introduccion a la produccion de Videojuegos",
                "Curso Unreal Engine",
                "Curso de Unity en 3D",
            ],
        },
    ]
}

const carlitos = {
    name: "Calos",
    username: "carlitosfeliz",
    points: 100,
    socialMedia: {
        twitter: "carlitos_feliz",
        instagram: "carlitos_feliz",
        facebook: undefined,
    },
    approvedCourses: [
        "Curso DataBusiness",
        "Curso DataVis",
    ],
    learningPath: [
        {
            name: "Escuela de Desarrollo Web",
            courses: [
                "Curso Definitivo de HTML y CSS",
                "Curso Practico de HTML y CSS",
                "Curso de Responsive Design",
            ],
        },
        {
            name: "Escuela de Data Science",
            courses: [
                "Curso DataBusiness",
                "Curso DAvaVis",
                "Curso de Tableau",
            ],
        },
    ]
}*/

// Prototipo
/*function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    // this.aprobarCurso = function (nuevoCursito) {
    //     this.cursosAprobados.push(nuevoCursito);
    // }
}
Student.prototype.aprobarCurso = function (nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
}

const juanita = new Student(
    "Juanita Alejandra",
    15,
    [
        "Curso de Introduccion a la produccion de Videojuegos",
        "Curso de creacion de personajes"
    ]
);

juanita.aprobarCurso("Curso Unreal Engine");

// Prototipos con la sintaxis de Clases en JavaScript
class Estudiante {
    constructor(
        {
            name,
            age,
            cursosAprobados,
            email,
            facebook,
            twitter,
            instagram
    }) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }
    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    }
}

// const miguelito = new Estudiante(
//     "Miguel",
//     28,
//     [
//         "Curso de Analisis de Negocios para Visualizacion de Datos",
//         "Curso de Principios de Visualizacion de Datos para BI"
//     ]
// );

// miguelito.aprobarCurso("Curso de Tableau")

const miguelito = new Estudiante({
    name: "Miguel",
    age: 28,
    cursosAprobados: [
        "Curso de Analisis de Negocios para Visualizacion de Datos",
        "Curso de Principios de Visualizacion de Datos para BI"
    ],
    email: "miguelito@platzi.com",
});*/

/** Clases */
class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPath = []

    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.approvedCourses = approvedCourses;
        this.learningPath = learningPath;
    }
}

function videoPlay(id) {
    const urlSecreta = "https://platziultrasecreto.com" + id;
    console.log(`Se esta reproduciendo desde la url ${urlSecreta}`);
}
function videoStop(id) {
    const urlSecreta = "https://platziultrasecreto.com" + id;
    console.log(`Pausamos la url ${urlSecreta}`);
}

export class PlatziClass {
    constructor({
        name,
        videoID,
    }) {
        this.name = name;
        this.videoID = videoID;
    }

    reproducir() {
        videoPlay(this.videoID);
    }
    pausar() {
        videoStop(this.videoID);
    }
}

class Course {
    constructor({
        name,
        classes = [],
    }) {
        this._name = name;
        this.classes = classes;
    }

    get name() {
        return this._name;
    }

    set name(nuevoNombrecito) {
        if (nuevoNombrecito === "Curso Malito de Programacion Basica") {
            console.error("Wey... no")
        } else {
            this._name = nuevoNombrecito;
        }
    }
}

const cursoProgBasica = new Course({
    name: "Curso Gratis de Programación Básica",
});
const cursoDefHTMLCSS = new Course({
    name: "Curso Definitivo de HTML y CSS",
});
const cursoPracticoHTMLCSS = new Course({
    name: "Curso Practico de HTML y CSS",
});
const cursoCSSBasico = new Course({
    name: "Curso de CSS Grid Básico",
});
const cursoInterPOO = new Course({
    name: "Curso Intermedio de Programación Orientada a Objetos en JavaScript",
});
const cursoBasicoJS = new Course({
    name: "Curso Básico de JavaScript",
});
const cursoPreWork = new Course({
    name: "Curso de Prework: Configuración de Entorno de Desarrollo en Windows",
});
const cursoAsyncJS = new Course({
    name: "Curso de Asincronismo con JavaScript",
});
const cursoEnglishA1Dates = new Course({
    name: "Curso de Inglés Básico A1: Fechas, Horas y Expresiones Simples",
});
const cursoEnglishA1Questions = new Course({
    name: "Curso de Inglés Básico A2: Preguntas y Respuestas",
});
const cursoEnglishBasicoNetworking = new Course({
    name: "Curso de Inglés Básico para Networking",
});
class LearningPath {
    constructor({
        name,
        courses = []
    }) {
        this.name = name;
        this.courses = courses;
    }
}

// Instancias
const escuelaEnglish = new LearningPath({
    name: "Escuela de Platzi English Academy",
    courses: [
        cursoEnglishA1Dates,
        cursoEnglishA1Questions,
        cursoEnglishBasicoNetworking,
    ]
});
const escuelaJavaScript = new LearningPath({
    name: "Escuela de JavaScript",
    courses: [
        cursoProgBasica,
        cursoBasicoJS,
        cursoPreWork,
        cursoAsyncJS,
    ]
});
const escuelaWeb = new LearningPath({
    name: "Escuela de Desarrollo Web",
    courses: [
        cursoProgBasica,
        cursoDefHTMLCSS,
        cursoPracticoHTMLCSS,
        cursoCSSBasico,
        cursoInterPOO,
    ]
});

const juan = new Student({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPath: [
        escuelaWeb,
        escuelaJavaScript
    ],
});

const miguelito = new Student({
    name: "Miguelito",
    username: "miguelitofeliz",
    email: "miguelitofeliz@mail.com",
    instagram: "miguelito_feliz",
    learningPath: [
        escuelaEnglish,
        escuelaWeb
    ],
});
