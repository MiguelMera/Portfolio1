import Image from 'next/image';

const Presentation = () => {
  return (
    <div className="min-h-screen relative w-full flex justify-center items-center flex-col shadow-lg max-w-full overflow-x-hidden fade-in" id="presentation">
      <div className="relative flex justify-center items-center">
        <Image
          src="/Rectangle3.png"
          alt="image"
          width={600}
          height={600}
          priority={true}
          className="w-full md:w-full shado animate-fade-in-up"
        />

        <div className="absolute transform flex top-3 animate-fade-in-up">
          <Image
            src="/yo.png"
            alt="image"
            width={150}
            height={150}
            className="rounded-full"
          />
        </div>
      </div>

      <div className="relative text-center -mt-72 z-20 w-full md:px-4 px-20 max-w-md md:max-w-lg mx-auto animate-fade-in-up">
        <h1 className="text-sm md:text-2xl font-bold green-animate pb-4">Hello! I am Miguel</h1>
        <p className="text-lg md:text-base leading-relaxed text-white">
         {` I'm a Junior Frontend Developer with 2 years of hands-on experience in web development, specializing in React and Next.js. Throughout my journey, I have built a solid foundation in creating responsive, user-friendly interfaces and modern web applications. My passion for coding, along with my continuous drive to learn, allows me to deliver clean, efficient, and scalable code.`}
        </p>

        <button className="border-2 border-green-500 text-green-500 font-bold py-2 px-4 rounded-full mt-4 mb-4 mx-6 transition-colors duration-300 hover:bg-green-500 hover:text-white active:bg-green-500 active:text-white">
          <a href="#getInTouch">Contact me</a>
        </button>
      </div>
    </div>
  );
};

export default Presentation;

