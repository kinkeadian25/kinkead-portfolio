import React from "react";

function NavBar() {
    return (
      <header className="md:sticky top-0 z-10 mr-0 ml-0">
        <div className="mx-0 flex flex-wrap p-5 flex-col md:flex-row">
            <a href="#AboutMe" className=" ml-5 mr-20 text-xl hover:text-white">
              IK
            </a>
          <nav className="md:mr-0 md:ml-20 md:py-1 md:pl-80 flex flex-wrap items-right text-base justify-right">
            <a href="#CodingJourney" className="mr-5 hover:text-slate-500 hover:underline">
              Coding Journey
            </a>
            <a href="#Projects" className="mr-5 hover:text-slate-500 hover:underline">
              Projects
            </a>
            <a href="#Contact" className="mr-0 hover:text-slate-500 hover:underline">
              Contact
            </a>
          </nav>
        </div>
      </header>
    );
}

export default NavBar;