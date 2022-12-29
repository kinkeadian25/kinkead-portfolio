import React from "react";

export default function Home() {
  return (
    <section id="home">
      <div className="container mx-auto flex flex-col justify-center items-center px-0 pt-20">
        <div className="lg:flex-grow md:w-1/2 flex flex-col justify-center items-center">
          <h3 className="mb-2 leading-relaxed text-sky-600 text-xl font-semibold pb-4">Hi, my name is</h3>
          <h1 className="text-7xl font-semibold text-slate-300 pb-4">
            Ian Kinkead
          </h1>
          <h2 className="text-6xl font-medium text-slate-500 pb-10">
            I build software.
          </h2>
          <p className="leading-relaxed text-slate-500 text-lg text-center rounded-lg shadow-2xl">
            I am a full-stack developer, with passions for IDEs, compilers,
            web apps, game development, and really any tool that empowers others. I am currently focused on 
            contributing to the open-source community, specifically dotnet/roslyn. 
            <br />
          </p>
        </div>
      </div>
    </section>
  );
}
