import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-0 py-20 md:flex-row flex-col items-left">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-30 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h3 className="mb-2 leading-relaxed text-teal-500">Hi, my name is</h3>
          <h1 className="text-6xl font-semibold text-slate-300">Ian Kinkead.</h1>
          <h2 className="text-4xl font-medium text-slate-500 pb-20">I build software.</h2>
            <p className="mb-8 leading-relaxed text-slate-300">I am a full-stack developer, with a passions for IDEs, compilers, web apps, and really just all things software.</p>
        </div>
      </div>
    </section>
  );
}
