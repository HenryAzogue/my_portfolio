import { v4 as uuidv4 } from "uuid";
import { createContext } from "react";

const ddbb = {
  header: {
    menu: [
      { id: uuidv4(), title: "Inicio",    href: "#" },
      { id: uuidv4(), title: "Proyectos", href: "#" },
      { id: uuidv4(), title: "About",     href: "#" },
    ],
    rrss: [
      { id: uuidv4(), title: "linkedin",         href:'#', icono: 'linkedin' },
      { id: uuidv4(), title: "github",           href:'#', icono: 'github'   },
      { id: uuidv4(), title: "curriculum vitae", href:'#', icono: 'cv'       }
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
