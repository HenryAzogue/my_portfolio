import { v4 as uuidv4 } from "uuid";
import { createContext } from "react";

const DATA = {
  header: {
    menu: [
      {
        id: uuidv4(),
        title: "Inicio",
        reference: "Enlace para re direccionar a la sección inicio",
        match: "/",
      },
      {
        id: uuidv4(),
        title: "Proyectos",
        reference: "Enlace para re direccionar a la sección proyectos",
        match: "/projects",
      },
      {
        id: uuidv4(),
        title: "Sobre mí",
        reference: "Enlace para re direccionar a la sección sobre mí",
        match: "/about",
      },
    ],
  },
  sectionHome: {
    header: [
      {
        id: uuidv4(),
        title: "Henry Azogue",
        subtitle: "Full-stack Developer",
      },
    ],
    rrss: [
      {
        id: uuidv4(),
        title: "linkedin",
        reference: "https://www.linkedin.com/in/HenryAzogue",
      },
      {
        id: uuidv4(),
        title: "github",
        reference: "https://github.com/HenryAzogue",
      },
      { id: uuidv4(), title: "cv", reference: "#" },
    ],
    work: [
      {
        id: uuidv4(),
        title: "E-commer",
        description:
          "Una aplicación web para simular compras donde encuentra un catálogo con productos digitales, electrodomésticos para el hogar. Agregue o elimine productos del carrito.",
        image: "./public/assets/work/e_commerce.png",
        toolBox: [
          {
            id: uuidv4(),
            icon: "./public/assets/icons/html5.svg",
            references: "Icono de la tecnología html5 utilizada en el proyecto",
          },
          {
            id: uuidv4(),
            icon: "./public/assets/icons/css3.svg",
            references: "Icono de la tecnología css3 utilizada en el proyecto",
          },
          {
            id: uuidv4(),
            icon: "./public/assets/icons/js.svg",
            references: "Icono de la tecnología javascript utilizada en el proyecto",
          },
          {
            id: uuidv4(),
            icon: "./public/assets/icons/react.svg",
            references: "Icono de la tecnología react utilizada en el proyecto",
          },
          {
            id: uuidv4(),
            icon: "./public/assets/icons/bootstrap.svg",
            references: "Icono de la tecnología bootstrap utilizada en el proyecto",
          },
        ],
      },
      {
        id: uuidv4(),
        title: "Rick and Morti",
        description:
          "Comenzaste en la serie Rick and Morty, y quieres saber más detalles de cada personaje que aparece. Ahora lo puedes hacer y divertirte mientras lo buscas, juega colocando id`s que van desde el 1 hasta el 125 que marca el total de personajes, ¡te sorprenderá los resultados!",
        image: "./public/assets/work/rickAndMorty.png",
        toolBox: [
          {
            id: uuidv4(),
            icon: "./public/assets/icons/html5.svg",
            references: "Icono de la tecnología html5 utilizada en el proyecto",
          },
          {
            id: uuidv4(),
            icon: "./public/assets/icons/css3.svg",
            references: "Icono de la tecnología css3 utilizada en el proyecto",
          },
          {
            id: uuidv4(),
            icon: "./public/assets/icons/js.svg",
            references: "Icono de la tecnología javascript utilizada en el proyecto",
          },
          {
            id: uuidv4(),
            icon: "./public/assets/icons/react.svg",
            references: "Icono de la tecnología react utilizada en el proyecto",
          },
        ],
      },
      {
        id: uuidv4(),
        title: "Frases",
        description:
          "Un tema minimalista con frases motivacionales transformar el día con un toque de aleatoriedad en los mensajes",
        image: "./public/assets/work/phrases.png",
        toolBox: [
          {
            id: uuidv4(),
            icon: "./public/assets/icons/html5.svg",
            references: "Icono de la tecnología html5 utilizada en el proyecto",
          },
          {
            id: uuidv4(),
            icon: "./public/assets/icons/css3.svg",
            references: "Icono de la tecnología css3 utilizada en el proyecto",
          },
          {
            id: uuidv4(),
            icon: "./public/assets/icons/js.svg",
            references: "Icono de la tecnología javascript utilizada en el proyecto",
          },
          {
            id: uuidv4(),
            icon: "./public/assets/icons/react.svg",
            references: "Icono de la tecnología react utilizada en el proyecto",
          },
        ],
      },
    ],
  },
};

export const GlobalContext = createContext();

export const Provider = ({ children }) => {
  return (
    <GlobalContext.Provider value={DATA}>{children}</GlobalContext.Provider>
  );
};
