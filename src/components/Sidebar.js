import { Link, Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <section class="shrink-0 mx-7 my-10 h-full sm:basis-48">
        <section>
          <h1 class="text-xl sm:text-3xl font-bold">
            Emilio <br /> Ovalles- <br /> Misterman
          </h1>
        </section>

        <section class="text-xs sm:text-sm font-normal mt-16">
          <Link to="/about" className="block w-full mb-4">
            About
          </Link>
          <Link to="/projects" className="block w-full mb-4">
            Projects
          </Link>
          <Link to="/contact" className="block w-full mb-4">
            Contact
          </Link>
        </section>
      </section>
      <Outlet />
    </>
  );
};

export default Sidebar;
