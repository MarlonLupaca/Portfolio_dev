const dataSistemaDeInventarios = {
    Nombre: {
        primero: "Sistema de",
        segundo: "inventarios"
    },
    Tecnologias: ["HTML", "CSS", "JavaScript", "GitHub"],
    Descripcion: "Este proyecto es una aplicación web de escritorio, desarrollada con JavaScript, HTML y CSS vanilla, diseñada para gestionar inventarios de manera eficiente. La página permite a los usuarios registrar, editar y eliminar productos, así como visualizar el stock disponible. El diseño limpio y la lógica implementada aseguran un buen rendimiento en la gestión de datos de inventario.",
    Vistas: {
        github: true,
        preview: true
    },
    url: {
        github: "https://github.com/MarlonLupaca/Sistemas-de-inventarios",
        preview: "https://marlonlupaca.github.io/Sistemas-de-inventarios/",
        imagen: "img/home.png"
    }
}

const dataJavaEstructura = {
    Nombre: {
        primero: "Java, Estructura",
        segundo: "de datos"
    },
    Tecnologias: ["Java", "CSV", "Estructura de datos"],
    Descripcion: "El proyecto Acreedores del Estado, es un programa en Java diseñado para gestionar y administrar los datos financieros de acreedores, con un enfoque en totales en efectivo. Utiliza archivos CSV para almacenar la información y está implementado con diversas estructuras de datos avanzadas como árboles binarios, listas enlazadas, pilas, tablas hash y métodos de ordenamiento, optimizando así el manejo de grandes volúmenes de información.",
    Vistas: {
        github: true,
        preview: false
    },
    url: {
        github: "https://github.com/MarlonLupaca/Java_Acreedores_Estructura_de_datos",
        preview: null,
        imagen: "img/Estructura_de_datos.png"
    }
}

const dataJavaFarmacia = {
    Nombre: {
        primero: "Java, Crud",
        segundo: "Farmacia"
    },
    Tecnologias: ["Java", "MySQL", "Crud"],
    Descripcion: "Este programa de administración de farmacia, desarrollado en Java con base de datos, permite gestionar todas las operaciones del negocio, aplicando funciones CRUD completas. Incluye control de inventario con alertas de vencimiento de productos, manejo de kardex, totales y diferenciación de roles entre administrador y trabajadores, garantizando una administración eficiente.",
    Vistas: {
        github: true,
        preview: false
    },
    url: {
        github: "https://github.com/MarlonLupaca/farmacia",
        preview: null,
        imagen: "img/Java_farmacia.png"
    }
}

const dataJavaPasteleria = {
    Nombre: {
        primero: "Java, Crud",
        segundo: "Pasteleria"
    },
    Tecnologias: ["Java", "SQLite", "Crud"],
    Descripcion: "Este programa en Java utiliza SQLite para gestionar una pastelería a través de un CRUD básico que permite registrar, editar, eliminar y consultar datos. Fue el primer trabajo completo desarrollado de manera independiente, demostrando la capacidad de realizar todas las funciones esenciales para la administración de productos.",
    Vistas: {
        github: true,
        preview: false
    },
    url: {
        github: "https://github.com/MarlonLupaca/CrudJava",
        preview: null,
        imagen: "img/java_crud_basico.png"
    }
}

const dataPorfolio = {
    Nombre: {
        primero: "Mi",
        segundo: "portafolio"
    },
    Tecnologias: ["ReactJS", "Tailwindcss"],
    Descripcion: "Este portafolio fue desarrollado utilizando React y Tailwind CSS, combinando una arquitectura moderna y un diseño minimalista y responsivo. Permite mostrar proyectos, habilidades y experiencia de manera interactiva y dinámica, con una interfaz fluida optimizada para diferentes dispositivos. Tailwind se utilizó para el estilo, ofreciendo una personalización rápida y eficiente del diseño.",
    Vistas: {
        github: true,
        preview: false
    },
    url: {
        github: "https://github.com/MarlonLupaca/Portfolio_dev",
        preview: null,
        imagen: "img/portafolio.png"
    }
}

// Exportar los datos
export {
    dataSistemaDeInventarios,
    dataJavaEstructura,
    dataJavaFarmacia,
    dataJavaPasteleria,
    dataPorfolio
};
