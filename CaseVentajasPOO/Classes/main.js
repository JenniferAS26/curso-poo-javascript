// Utilizando Clases
// Prototipo


class Comment {
    constructor({
        content,
        studentName,
        studentRoll = "estudiante",
    }){
      this.content = content;  
      this.studentName = studentName;  
      this.studentRoll = studentRoll;  
      this.likes = 0;
    }

    publicar() {
        console.log(this.studentName + " (" + this.studentRoll + ") ");
        console.log(this.likes + " likes");
        console.log(this.content);
    }
    

}


// muy importante que estas funcions esten por fuera de la clase videoPlay y videoStop

function videoPlay(id){ // recibe el id de nuestros videos
    const urlSecreta = "http://platziultrascreto.com/" + id;
    console.log("Se esta reproduciendo desde la url" + urlSecreta);
}

function videoStop(id){
    const urlSecreta = "http://platziultrascreto.com/" + id;
    console.log("Pausamos la url" + urlSecreta);
}

class PlatziClass {
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
        isFree = false,
        lang = "spanish"
    }) {
        this._name = name; // esconder este atributo, para que no se llame desde afuera
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
    }

    get name() { //
        return this._name;
    }

    set name(nuevoNombre) {
        if (nuevoNombre === "Curso Malito de Programacion Basica") {
            console.error("No actualices el nombre");
        }else {
           this._name = nuevoNombre; 
        }
        
    }
}

const cursoProgBasica = new Course({
    name: "Curso Gratis de Programacion Basica",
    isFree: true,
});

const cursoDefHTMLCSS = new Course({
    name: "Curso Definitivo HTML y CSS",
});

const cursoPracHTMLCSS = new Course({
    name: "Curso Practico HTML y CSS",
    lang: "english",
});

class LearningPaths {
    constructor({
        name,
        courses = []
    }) {
        this.name = name;
        this.courses = courses;
    }
}

const escuelaWeb = new LearningPaths({
    name: "Escuela de Desarrollo Web",
    courses: [
        cursoProgBasica,
        "Curso Basico de Algoritmos y Pensamiento Logico",
        cursoDefHTMLCSS,
        cursoPracHTMLCSS
    ]
}   
)

const escuelaData = new LearningPaths({
    name: "Escuela de Data Science",
    courses: [
        cursoProgBasica,
        "Curso DataBusiness ",
        "Curso DataViz"
    ]
}   
)

const escuelaVgs = new LearningPaths({
    name: "Escuela de VideoJuegos",
    courses: [
        cursoProgBasica,
        "Curso de Unity",
        "Curso de Unreal"
    ]
}   
)




class Student {
    constructor({
        name,
        email,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPhaths = [],
    }){
        this.name = name;
        this.email = email;
        this.socialMedia = {
            twitter: twitter,
            instagram: instagram,
            facebook: facebook,
        };
        this.approvedCourses = approvedCourses;
        this.learningPhaths = learningPhaths;
    }
    publicarComentario(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this.name
        })
        comment.publicar();
    }
}

class freeStudent extends Student {
    constructor (props) {
        super(props);
    }
    approveCourse(newCourse) {
        if (newCourse.isFree) {
            this.approvedCourses.push(newCourse);
        } else {
            console.log("Lo sentimos, " + this.name + ", solo puedes tomar cursos abiertos");
        }
    }
}

class basicStudent extends Student {
    constructor (props) {
        super(props);
    }
    approveCourse(newCourse) {
        if (newCourse.lang !== "english") {
            this.approvedCourses.push(newCourse);
        } else {
            console.log("Lo sentimos, " + this.name + ", no puedes tomar cursos en ingles");
        }
    }

}

class expertStudent extends Student {
    constructor (props) {
        super(props);
    }
    approveCourse(newCourse) {
        this.approvedCourses.push(newCourse);
       
    }
}

class TeacherStudent extends Student {
    constructor(props) {
        super(props);
    }

    approveCourse(newCourse) {
        this.approveCourse.push(newCourse);
    }

    publicarComentario(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRoll: "profesor",
        })
        comment.publicar();
    }

}







const juan = new freeStudent({
    name: "Juan",
    username: "juandc",
    email: "juanito@mail.com",
    twitter: "fjuandc",
    learningPhaths: [
        escuelaWeb,
        escuelaVgs
    ]
});

const miguelito = new basicStudent({
    name: "Miguel",
    username: "miguelitofeliz",
    email: "miguelito@mail.com",
    instagram: "miguelito_feliz",
    learningPhaths: [
        escuelaWeb,
        escuelaData
    ]
})

const freddy = new TeacherStudent({
    name: "Freddy Vega",
    username: "freddier",
    email: "f@gep.com",
    instagram: "freddiervega",
    
})