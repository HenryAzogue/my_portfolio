import { useContext } from "react";
import { GlobalContext } from "../provider/Provider";

const Home = () => {
  return (
    <section className="Home">
      <Header />
      <Rrss />
    </section>
  );
};
export default Home;

const Header =()=>{
  const { sectionHome } = useContext(GlobalContext);
  const { header} = sectionHome;

  return(
    <header className="Home-header">
      <h1 className="Home-title">{header[0].title}</h1>
      <h2 className="Home-subtitle">{header[0].subtitle}</h2>
    </header>
  )
}

const Rrss =() => {
  const { sectionHome } = useContext(GlobalContext);
  const { rrss } = sectionHome;
  return (
    <ul className="Header-ulR">
      {rrss.map(({ id, title, href }) => (
        <li key={id} className="Header-liR">
          <a
            hrefLang="no-referrer"
            target="_blank"
            className="Header-linkR"
            href={href}
            title={title}
          >
            <span>{title}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};
