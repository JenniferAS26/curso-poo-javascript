// Objetos Literales
const juan1 = {
    name: "Juan",
    username: "juan123",
    points: 100,
    socialMedia: {
        twitter: "fjuan",
        instagram: "fjuan",
        facebook: undefined
    },
    approvedCourses: [
        "Curso Definitivo de HTML y CSS",
        "Curso Practico de HTML y CSS", 
    ],
    learningPaths: [
        {
            name: "Escuela de Desarrollo Web",
            courses: [
                "Curso Definitivo de HTML y CSS",
                "Curso Practico de HTML y CSS", 
                "Curso de Responsive Design",
                "Curso de Sistemas de Diseno"
            ]
        },
        {
            name: "Escuela de VideoJuegos",
            courses: [
                "Curso Introduccion a la Produccion de VideoJuegos",
                "Curso de Unreal Engine", 
                "Curso de Unity 3D"
            ]
        }
    ] 
}

const miguelito1 = {
    name: "Miguel",
    username: "miguelitofelizz",
    points: 1000,
    socialMedia: {
        twitter: "miguelitofelizz",
        instagram: "miguelito_felizz",
        facebook: undefined
    },
    approvedCourses: [
        "Curso DataBusiness",
        "Curso DataViz", 
    ],
    learningPaths: [
        {
            name: "Escuela de Desarrollo Web",
            courses: [
                "Curso Definitivo de HTML y CSS",
                "Curso Practico de HTML y CSS", 
                "Curso de Responsive Design",
                "Curso de Sistemas de Diseno"

            ]
        },
        {
            name: "Escuela de Data Science",
            courses: [
                "Curso DataBusiness",
                "Curso DataViz", 
                "Curso Tableu"
            ]
        }
    ] 
}

// Conclusion: Este tabajo no es escalable, si tengo 100 estudiantes tendria que modificarlos uno a uno y eso no me hace un bien programador