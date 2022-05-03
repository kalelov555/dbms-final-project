import { useState } from "react";
import { Logo } from "../Logo/Logo";
import { NavItems } from "../NavItems/NavItems";

export const NavigationBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return <header className="header-area header-sticky section absolute top-0 left-0 right-0 z-50 bg-white md:bg-gray-700 max-h-20 ">
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3">
      <div className="container sm:px-1 md:px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between md:w-auto md:static md:block md:justify-start">
          <Logo />

          <button
            className="md:text-white text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i className="fas fa-bars text-black md:text-white"></i>
          </button>
        </div>
        <div
          className={
            "md:flex flex-grow justify-center text-center py-2" +
            (navbarOpen ? " flex bg-white" : " hidden")
          }
          id="example-navbar-danger"
        >
          <NavItems />
        </div>
      </div>
    </nav>
  </header>
}
