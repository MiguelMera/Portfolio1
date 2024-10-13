/* eslint-disable @next/next/no-img-element */
import { Inter } from "next/font/google";

const InterFont = Inter({
    subsets: ['latin'],
    weight: '800',
});

const AboutMe = () => {
    return (  
    <>
    <div className="min-h-screen min-w-fit mt-4 p-3 customGray shadow" id="aboutMe">
        <div className={`${InterFont.className} text-6xl flex justify-center mt-10 green-animate text-shadow`}>
            <h1>About me</h1>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start mt-10">
            <div className="w-full md:w-1/2 flex justify-center md:justify-end overflow-hidden">
                <img src="/yomismo.png" 
                alt="image" 
                className="max-w-full rounded-xl w-3/4 h-auto animate-fade-in-up" />
            </div>

            <div className="w-full md:w-1/2 mt-4 md:mt-0 md:ml-6">
                <ul className="flex flex-col items-start ml-10 space-y-2 text-left list-disc list-inside md:text-center">
                    <li className="green-animate">
                        <span className={`${InterFont.className} `}>Age:</span> <span className="no-animate">20 years</span>
                    </li>
                    <li className="green-animate">
                        <span className={`${InterFont.className} `}>Languages:</span> <span className="no-animate">English & Spanish</span>
                    </li>
                    <li className="green-animate">
                        <span className={`${InterFont.className} `}>Status:</span> <span className="no-animate">Available</span>
                    </li>
                    <li className="green-animate">
                        <span className={`${InterFont.className} `}>Experience:</span> <span className="no-animate">2 years</span>
                    </li>
                    <li className="green-animate">
                        <span className={`${InterFont.className} `}>Speciality:</span> <span className="no-animate">Frontend developer</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </> 
    );
}
 
export default AboutMe;
