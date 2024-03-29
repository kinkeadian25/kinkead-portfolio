import React from "react";

export default function AboutMe() {
    return (
      <header className="AboutMe-header">
        <div className="mx-6 flex flex-col items-center">
          <hr className="my-60 mx-auto w-48 h-1 bg-gray-100 rounded border-0 dark:bg-gray-700"></hr>
          <img
            className="mt-8 w-80 h-80 rounded-full shadow-2xl mb-6"
            src="./images/me.jpg"
            alt="Ian Kinkead"
            id="about"
          />
          <h1 className="text-2e44xl font-semibold text-sky-600 mx-auto">
            <span className="text-slate-600">&#47;&#47; </span>
            Console.WriteLine(<span className="text-slate-200">aboutMe</span>);
          </h1>
          <div className="bg-black border px-3 border-slate-400 m-6 shadow-xl">
            <p className="my-3 text-slate-400 text-lg">
              Hello! My name is Ian Kinkead. I am a Navy Veteran and Microsoft
              Software and Systems Academy graduate! I love building software! I am currently 
              looking for work that is either remote or in the Seattle area. 
              After just over 4 years of self-taught, education, and experience-based programming. 
              I am officially separated from the Navy, and I am
              committed to learning how I can make technology more inclusive,
              high-performing and maintainable everyday.
            </p>
            <p className="my-3 text-slate-400 text-lg">
              In the Navy, I was a Mass Communication Specialist. I mostly released photos, videos, and graphics for internal and external audiences. I was on an aircraft carrier and rode in lots of helicopters! Scroll to the top and click the camera icon to see some of my work from that time!
            </p>
            <p className="my-3 text-slate-400 text-lg">
              In the future, I would love to work for a company whose goal is to
              make and maintain apps that help anyone and everyone be the best
              version of themselves!
            </p>
            <p className="my-3 text-slate-400 text-lg">
              I also love making full-stack web-apps and static websites as a hobby with many different technologies! Feel free to reach out if you need a website for
              your business.
            </p>
          </div>
          <h1 className="text-2e44xl font-semibold text-sky-600 mx-auto">
            <span className="text-slate-600">&#47;&#47; </span>
            Console.WriteLine(<span className="text-slate-200">skills</span>);
          </h1>
          <div className="bg-black border px-4 border-slate-400 mt-6 shadow-xl grid gap-4 grid-cols-2 grid-rows-1">
            <div className="col-span-1 row-span-1">
              <h2 className="text-slate-400 text-lg mt-3">Coding</h2>
              <ul className="list-disc list-inside mb-3">
                <li className="text-slate-400 text-lg">C#</li>
                <li className="text-slate-400 text-lg">JavaScript</li>
                <li className="text-slate-400 text-lg">TypeScript</li>
                <li className="text-slate-400 text-lg">React</li>
                <li className="text-slate-400 text-lg">ASP.NET Core</li>
                <li className="text-slate-400 text-lg">SQL</li>
                <li className="text-slate-400 text-lg">EF Core</li>
                <li className="text-slate-400 text-lg">Azure</li>
                <li className="text-slate-400 text-lg">Python</li>
                <li className="text-slate-400 text-lg">Unity</li>
                <li className="text-slate-400 text-lg">MAUI</li>
              </ul>
            </div>
            <div className="col-span-1 row-span-1">
              <h2 className="text-slate-400 text-lg mt-3">Other</h2>
              <ul className="list-disc list-inside mb-3">
                <li className="text-slate-400 text-lg">Adaptability</li>
                <li className="text-slate-400 text-lg">Stakeholder Man.</li>
                <li className="text-slate-400 text-lg">Customer-Focused</li>
                <li className="text-slate-400 text-lg">Collaboration</li>
                <li className="text-slate-400 text-lg">Fast-Learner</li>
                <li className="text-slate-400 text-lg">Growth Mindset</li>
                <li className="text-slate-400 text-lg">Communication</li>
                <li className="text-slate-400 text-lg">Adobe CC</li>
                <li className="text-slate-400 text-lg">Graphic Design</li>
                <li className="text-slate-400 text-lg">Figma</li>
                <li className="text-slate-400 text-lg">Problem-Solving</li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    );
}