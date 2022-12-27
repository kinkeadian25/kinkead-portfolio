import React from "react";

function NavBar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="flex container w-full mx-auto justify-between items-center font-bold text-2xl px-5 py-6">
      <a href="#AboutMe" className="ml-5 mr-20 text-xl hover:text-white">
        IK
      </a>
      <nav className="hidden md:flex space-x-10 items-center">
        <a
          href="#CodingJourney"
          className="mr-5 hover:text-slate-500 hover:underline"
        >
          Coding Journey
        </a>
        <a
          href="#Projects"
          className="mr-5 hover:text-slate-500 hover:underline"
        >
          Projects
        </a>
        <a
          href="#Contact"
          className="mr-0 hover:text-slate-500 hover:underline"
        >
          Contact
        </a>
      </nav>
      <div className="md:hidden">
        {isOpen ? (
          <div className="bg-slate-600 border-1px border-red-100/20 fixed w-24rem right-0 top-0 h-100vh transition translate-x-1px rounded-lg text-white">
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
                    href="#CodingJourney"
                    className="mr-5 hover:text-sky-600 hover:underline text-sm"
                  >
                    Coding Journey
                  </a>
                  <a
                    href="#Projects"
                    className="mr-5 hover:text-sky-600 hover:underline text-sm"
                  >
                    Projects
                  </a>
                  <a
                    href="#Contact"
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
