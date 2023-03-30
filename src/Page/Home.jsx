import { useContext } from "react";
import { GlobalContext } from "../provider/Provider";

const Home = () => {
  return (
    <main className="Home">
      <Header />
      <Rrss />
      <div className="Home-intro">
        <p>Soy Desarrollador web de profesión y corredor por gusto personal</p>
        <p>
        Combino el arte de la programación con la técnica para correr, resultando un balance entre el camino empinado que supero con el conocimiento adquiero en las construcción de proyectos.
        </p>
      </div>
      <Work />
      <About />
    </main>
  );
};
export default Home;

const Header = () => {
  const { sectionHome } = useContext(GlobalContext);
  const { header } = sectionHome;

  return (
    <header className="Home-header">
      <h1 className="Home-title">{header[0].title}</h1>
      <h2 className="Home-subtitle">{header[0].subtitle}</h2>
    </header>
  );
};

const Rrss = () => {
  const { sectionHome } = useContext(GlobalContext);
  const { rrss } = sectionHome;
  return (
    <ul className="Header-ulR">
      {rrss.map(({ id, title, reference }) => (
        <li key={id} className="Header-liR">
          <a
            hrefLang="no-referrer"
            target="_blank"
            className="Header-linkR"
            href={reference}
            title={title}
          >
            <span>{title}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

const Work = () => {
  const { sectionHome } = useContext(GlobalContext);
  const { work } = sectionHome;
  return (
    <section>
      <h2>Proyectos</h2>
      <h3>Una colección de cosas que construí</h3>

      <div>
        {work.map(({ id, title, description, image, toolBox }) => (
          <div key={id}>
            <div>
              <img src={image} alt={title} />
            </div>

            <h4>{title}</h4>
            <p>{description}</p>
            <ul>
              {toolBox?.map(({ id, icon, reference }) => (
                <li key={id}>
                  <img style={{width:120}} src={icon} alt={reference} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section className="About">
      <h2>Sobre mí</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet libero
        autem quo facilis itaque praesentium deleniti omnis, facere obcaecati ab
        sequi unde? Vitae magni ab possimus ullam, harum doloribus molestias.
        Quaerat, tempora! Itaque totam officia quos quidem nostrum aliquid autem
        quis velit! Sit vitae, reprehenderit, accusantium itaque, velit mollitia
        aut perspiciatis quasi aperiam placeat delectus est minima? Quae, autem
        repudiandae. Nisi, ab minima. Placeat minima labore velit iusto, alias
        obcaecati quaerat pariatur ex recusandae dignissimos aliquid a
        perspiciatis voluptates? Quos omnis in, dolor saepe ipsa cupiditate sint
        consectetur qui accusamus. Provident laudantium deserunt itaque
        consequuntur, earum voluptate cupiditate sint ea vitae. Consequatur
        suscipit magni recusandae eius sapiente quam fugit non accusamus
        voluptatibus et perferendis tempore praesentium, sunt esse eaque eos?
        Perspiciatis, rem optio? Accusantium nemo assumenda at optio, maiores
        vitae porro laudantium aliquid dicta vero sunt velit esse error ducimus
        exercitationem saepe! Aperiam est dolor repellat explicabo. Rem, minus
        vel.
      </p>
    </section>
  );
};
