import { v4 as uuidv4 } from "uuid";
import { createContext } from "react";

const ddbb = {
  header: {
    menu: [
      { id: uuidv4(), title: "Inicio",      href: "home", match: "/" },
      { id: uuidv4(), title: "Proyectos",   href: "projects", match: "/projects" },
      { id: uuidv4(), title: "Habilidades", href: "skills", match: "/skills" },
      { id: uuidv4(), title: "Sobre mí",    href: "about", match: "/about" },
    ],
    rrss: [
      { id: uuidv4(), title: "linkedin",         href:'https://www.linkedin.com/in/HenryAzogue', icono: 'linkedin' },
      { id: uuidv4(), title: "github",           href:'https://github.com/HenryAzogue'         , icono: 'github'   },
      { id: uuidv4(), title: "cv", href:'#'}
    ]
  },
  home: {
    h2 : 'Henry Azogue',
    claim: 'Front-end Developer',
    button: [
      { id: uuidv4(), title: 'Read more', href: '#' }
    ]
  }
};

export const GlobalContext = createContext();

export const Provider = ({ children }) => {
  return (
    <GlobalContext.Provider value={ddbb}>
      {children}
    </GlobalContext.Provider>
  );
};
