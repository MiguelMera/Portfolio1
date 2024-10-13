/* eslint-disable @next/next/no-img-element */
import { Inter } from "next/font/google";

const InterFont = Inter({
    subsets: ['latin'],
    weight: '800',
});


const Skills = () => {
    return (
      <div className="min-h-screen min-w-fit mt-4 p-3 customGray shadow" id="skills">
        
        <div className="text-center mb-8">
          <h1 className={`${InterFont.className} text-6xl flex justify-center mt-10 green-animate text-shadow`}>
            My Skills
          </h1>
        </div>
  
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 mx-auto w-full max-w-5xl justify-items-center animate-fade-in-up">
          <div className="card">
            <div className="icon-container">
              <span className="icon"><img src="/html.png" alt="img" 
              className="w-16 h-16"/></span>
            </div>
            <h1 className="card-title">HTML</h1>
                <div className="w-full bg-gray-300 rounded-full h-4 mt-2">
                    <div className="bg-green-500 h-full rounded-full w-1/3" style={{width: '100%'}}></div>
                </div>
                <h1 className="card-title">100%</h1>
          </div>
  
          <div className="card">
            <div className="icon-container">
              <span className="icon"><img src="/css.png" alt="image" 
              className="w-16 h-16"/></span>
            </div>
            <h1 className="card-title">CSS</h1>
            <div className="w-full bg-gray-300 rounded-full h-4 mt-2">
                    <div className="bg-green-500 h-full rounded-full w-1/3" style={{width: '70%'}}></div>
                </div>
                <h1 className="card-title">70%</h1>
          </div>
  
          <div className="card">
            <div className="icon-container">
              <span className="icon"><img src="/javascript.png" alt="image" 
              className="w-16 h-16"/></span>
            </div>
            <h1 className="card-title">JavaScript</h1>
            <div className="w-full bg-gray-300 rounded-full h-4 mt-2">
                    <div className="bg-green-500 h-full rounded-full w-1/3" style={{width: '75%'}}></div>
                </div>
                <h1 className="card-title">75%</h1>
          </div>
  
          <div className="card">
            <div className="icon-container">
              <span className="icon"><img src="/react-logo.png" alt="image" 
              className="w-16 h-16"/></span>
            </div>
            <h1 className="card-title">React</h1>
            <div className="w-full bg-gray-300 rounded-full h-4 mt-2">
                    <div className="bg-green-500 h-full rounded-full w-1/3" style={{width: '90%'}}></div>
                </div>
                <h1 className="card-title">90%</h1>
          </div>
  
          <div className="card">
            <div className="icon-container">
              <span className="icon"><img src="/NextJs.png" alt="image" 
              className="w-16 h-16"/></span>
            </div>
            <h1 className="card-title">NextJs</h1>
            <div className="w-full bg-gray-300 rounded-full h-4 mt-2">
                    <div className="bg-green-500 h-full rounded-full w-1/3" style={{width: '100%'}}></div>
                </div>
                <h1 className="card-title">100%</h1>
          </div>

          <div className="card">
            <div className="icon-container">
              <span className="icon"><img src="/tailwind.png" alt="image" 
              className="w-16 h-16"/></span>
            </div>
            <h1 className="card-title">Tailwind</h1>
            <div className="w-full bg-gray-300 rounded-full h-4 mt-2">
                    <div className="bg-green-500 h-full rounded-full w-1/3" style={{width: '60%'}}></div>
                </div>
                <h1 className="card-title">60%</h1>
          </div>
        </div>
      </div>
    );
  };
  
  export default Skills;
  