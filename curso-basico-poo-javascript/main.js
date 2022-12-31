// Herencia
class Comment {
    constructor({
        content,
        studentName,
        studentRole = "estudiante",
    }) {
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0;
    }
    publicar() {
        console.log(`${this.studentName} (${this.studentRole})`);
        console.log(`${this.likes} likes`);
        console.log(this.content);
    }
}

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
    publicarComentario(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
        });
        comment.publicar();
    }
}

class FreeStudent extends Student {
    constructor(props) {
        super(props);
    }
    approvedCourse(newCourse) {
        if (newCourse.isFree) {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn(`Lo sentimos ${this.name} solo puedes tomar cursos abiertos`);
        }
    }
}
class BasicStudent extends Student {
    constructor(props) {
        super(props);
    }
    approvedCourse(newCourse) {
        if (newCourse.lang !== "english") {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn(`Lo sentimos ${this.name} no puedes tomar cursos en ingles`);
        }
    }
}
class ExpertStudent extends Student {
    constructor(props) {
        super(props);
    }
    approvedCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }
}
class TeacherStudent extends Student {
    constructor(props) {
        super(props);
    }
    approvedCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }
    publicarComentario(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRole: "profesor"
        });
        comment.publicar();
    }
}

class Course {
    constructor({
        name,
        classes = [],
        isFree = false,
        lang = "spanish"
    }) {
        this._name = name;
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
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
const cursoProgBasica = new Course({
    name: "Curso Gratis de Programación Básica",
    isFree: true,
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
    lang: "english",
});
const cursoEnglishA1Questions = new Course({
    name: "Curso de Inglés Básico A2: Preguntas y Respuestas",
    lang: "english",
});
const cursoEnglishBasicoNetworking = new Course({
    name: "Curso de Inglés Básico para Networking",
    lang: "english",
});
/**Escuelas */
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


const juan = new FreeStudent({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPath: [
        escuelaWeb,
        escuelaJavaScript
    ],
});

const miguelito = new BasicStudent({
    name: "Miguelito",
    username: "miguelitofeliz",
    email: "miguelitofeliz@mail.com",
    instagram: "miguelito_feliz",
    learningPath: [
        escuelaEnglish,
        escuelaWeb
    ],
});

const fredy = new TeacherStudent({
    name: "Freddy Vega",
    username: "fredier",
    email: "fredier@mail.com",
    instagram: "fredier"
});

