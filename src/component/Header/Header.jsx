import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { GlobalContext } from "../../provider/Provider";

export const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className="Header">
      <Logo />
      <Menu toggleMenu={toggleMenu} />
      <Nav menuActive={menuActive} />
    </header>
  );
};

const Logo = () => {
  return (
    <Link className="Header-logo" referrerPolicy="no-referrer" to={"/"}>
      <span className="Header-span">henrydev</span>
    </Link>
  );
};

const Nav = ({ menuActive }) => {
  const { header } = useContext(GlobalContext);
  const { menu } = header;

  return (
    <nav className={`Header-nav ${menuActive ? "isActive" : ""}`}>
      <ul className="Header-ul">
        {menu.map(({ id, title, reference, match }) => (
          <li key={id} className="Header-li">
            <Link
              className="Header-link"
              referrerPolicy="no-referrer"
              to={match}
              href={reference}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const Menu = ({ toggleMenu }) => {
  return (
    <button onClick={toggleMenu} className="Header-menu">
      <div className="Header-menuChild Header-menuChild--One"></div>
      <div className="Header-menuChild Header-menuChild--Two"></div>
      <div className="Header-menuChild Header-menuChild--Three"></div>
    </button>
  );
};
