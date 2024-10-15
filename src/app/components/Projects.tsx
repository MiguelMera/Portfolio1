"use client"

/* eslint-disable @next/next/no-img-element */
import { Inter } from "next/font/google";
import { SetStateAction, useState } from "react";

const InterFont = Inter({
  subsets: ['latin'],
  weight: '800',
});

const Projects = () => {
  const [activeButton, setActiveButton] = useState(''); 

  const setActive = (buttonName: SetStateAction<string>) => {
    setActiveButton(buttonName); 
  };

  return (
    <>
      <div className="min-h-screen min-w-fit mt-4 p-3 customGray shadow" id="projects">
        <div className="text-center mb-8">
          <h1 className={`${InterFont.className} text-6xl flex justify-center mt-10 green-animate text-shadow`}>
            Projects
          </h1>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mt-6 max-w-full font-bold">
          <button
            onClick={() => setActive('react')}
            className={`text-white border border-gray-500 py-2 px-4 rounded-full focus:outline-none transition-colors duration-300 ${
              activeButton === 'react' ? 'bg-gray-500' : 'bg-transparent'
            }`}
          >
            React
          </button>
          <button
            onClick={() => setActive('NextJs')}
            className={`text-white border border-gray-500 py-2 px-4 rounded-full focus:outline-none transition-colors duration-300 ${
              activeButton === 'NextJs' ? 'bg-gray-500' : 'bg-transparent'
            }`}
          >
            NextJs
          </button>
          <button
            onClick={() => setActive('All')}
            className={`text-white border border-gray-500 py-2 px-4 rounded-full focus:outline-none transition-colors duration-300 ${
              activeButton === 'All' ? 'bg-gray-500' : 'bg-transparent'
            }`}
          >
            All
          </button>
          
        </div>
        <div className="flex justify-center w-full animate-fade-in-up">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 w-full max-w-screen-lg">
    <div className="w-full rounded overflow-hidden shadow-lg bg-gray-800 variprojects">
      <img className="w-full h-auto" src="/lifenweeks.png" alt="image" />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2 text-white">Life in weeks app UI</h2>
        <p className="text-gray-400 text-base">a simple UI for a simple app</p>
      </div>
    </div>

    <div className="w-full rounded overflow-hidden shadow-lg bg-gray-800 variprojects">
      <img className="w-full h-auto" src="#" alt="image" />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2 text-white">Placeholder</h2>
        <p className="text-gray-400 text-base">put a project here, bro</p>
      </div>
    </div>

    <div className="w-full rounded overflow-hidden shadow-lg bg-gray-800 variprojects">
      <img className="w-full h-auto" src="#" alt="image" />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2 text-white">Placeholder</h2>
        <p className="text-gray-400 text-base">put a project here, bro</p>
      </div>
    </div>
  </div>
</div>





      </div>
    </>
  );
};

export default Projects;
