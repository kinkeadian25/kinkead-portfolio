import React from "react";
import { projects } from "../data";

function Projects() {
    return (
      <section id="projects" className="text-slate-400 body-font">
        <div className="container px-5 py-10 mx-auto text-center lg:px-40">
          <div className="flex flex-col w-full mb-20">
            <div className="mx-auto inline-block w-10 mb-4" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
              Projects and Work
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              All of the gifs below are examples of my projects and work that I am mosted excited about! Mouse over them for more details and click to use them or see their github repo if they are not published!
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            {projects.map((project) => (
              <a
                href={project.link}
                key={project.image}
                className="md:w-1/2 sm:w-3/4 h-100 p-5 border-2 border-slate-800 rounded-xl shadow-xl mb-5"
              >
                <div className="flex relative">
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center -z-1"
                    src={project.image}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-sky-400 mb-1">
                      {project.subtitle}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                      {project.title}
                    </h1>
                    <p className="leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    );
}

export default Projects;