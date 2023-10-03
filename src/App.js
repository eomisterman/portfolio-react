import { Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Sidebar from "./components/Sidebar";
import CV from "./components/CV";

const App = () => {
  return (
    <section className="flex flex-row font-mono">
        <Routes>
          <Route index element={<Home />} />
          <Route element={<Sidebar />}>
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cv" element={<CV />} />
          </Route>
        </Routes>
    </section>
  );
}

export default App;

const Home = () => {
  const style = "text-normal font-thin m-2 sm:m-8"
  return (
    <article className="h-screen table w-full">
      <div className="table-cell align-middle text-center">
        <h1 className="text-2xl sm:text-5xl font-bold mb-12">Emilio Ovalles-Misterman</h1>
        <Link to="/about" className={style}>About</Link>
        <Link to="/projects" className={style}>Projects</Link>
        <Link to="/contact" className={style}>Contact</Link>
        <Link to="/cv" className={style}>CV</Link>
      </div>
    </article>
  );
}
