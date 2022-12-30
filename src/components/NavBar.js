import React from "react";

function NavBar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="flex container w-full mx-auto justify-between items-center font-bold text-2xl px-5 py-6">
      <ul className="flex items-center space-x-6">
        <a href="#home" className="ml-5 text-xl hover:text-white">
          IK
        </a>
        <a
          href="https://github.com/kinkeadian25"
          className="w-6 hover:text-white"
        >
          <img src="./images/github.png" alt="github" />
        </a>
        <a
          href="https://www.linkedin.com/in/ian-kinkead/"
          className="w-6 hover:text-white"
        >
          <img src="./images/linkedin.png" alt="linkedin" />
        </a>
        <a
          href="https://kinkeadian.myportfolio.com/"
          className="w-6 hover:text-white"
        >
          <img src="./images/camera.png" alt="portfolio creative" />
        </a>
      </ul>
      <nav className="hidden md:flex space-x-10 items-center">
        <a
          href="#about"
          className="font-normal text-xl hover:text-slate-500 hover:underline"
        >
          About Me
        </a>
        <a
          href="#projects"
          className="px-6 font-normal text-xl hover:text-slate-500 hover:underline"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="font-normal text-xl hover:text-slate-500 hover:underline"
        >
          Contact
        </a>
      </nav>
      <div className="md:hidden">
        {isOpen ? (
          <div className="bg-slate-800 border-1px border-red-100/20 fixed w-24rem right-0 top-0 h-100vh transition translate-x-1px rounded-lg text-white z-50">
            <div className="pt-5 pb-6 px-5">
              <button onClick={() => setIsOpen(!isOpen)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="white"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>

              <div className="t-5rem z-10 relative">
                <nav className="grid gap-y-8">
                  <a
                    href="#about"
                    className="mr-5 hover:text-sky-600 hover:underline text-sm"
                  >
                    About Me
                  </a>
                  <a
                    href="#projects"
                    className="mr-5 hover:text-sky-600 hover:underline text-sm"
                  >
                    Projects
                  </a>
                  <a
                    href="#contact"
                    className="mr-0 hover:text-sky-600 hover:underline text-sm"
                  >
                    Contact
                  </a>
                </nav>
              </div>
            </div>
          </div>
        ) : (
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="white"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

export default NavBar;
