"use client"

import { Inter } from "next/font/google";
import { useState } from "react";
import emailjs from "@emailjs/browser";


const InterFont = Inter({
  subsets: ['latin'],
  weight: '800',
});

const GetInTouch = () => {
  
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState("");
  const [success, setSucces] = useState("")
  const [name, setName] = useState("")

  const sendEmail = (e) => {
    e.preventDefault();
    setSucces("");
    if (!email) {
      setError("please enter your email");
      return;
    }
    if(!message) {
      setError("please enter your message")
      return;
    }
    const templateParams = {
      from_name: email,
      to_name: "Miguel Mera",
      message,

    };

    setError("");
    setIsLoading(true);
    emailjs 
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID?? "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID?? "",
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID

      )
      .then(
        function (response) {
          setEmail("")
          setName("")
          setMessage("")
          setIsLoading(false);
          setSucces("your message has been sent successfully!")
        },
        function (error) {
          setError("some error ocurred, please send me a direct email using the button below");
          console.error(error)
          setIsLoading(false)
        }
      )
  }

  return (
    <>
      <div className="min-h-screen min-w-fit mt-4 p-3 customGray shadow" id="getInTouch">
        <div className="text-center mb-8">
          <h1 className={`${InterFont.className} text-6xl flex justify-center mt-10 green-animate text-shadow`}>
            Get In Touch
          </h1>
        </div>

        
        <div className="min-h-screen flex items-center justify-center animate-fade-in-up">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 max-w-lg w-full shadow-lg">
            <h2 className="text-2xl font-bold green-animate text-center mb-6">Mail me!</h2>
            <form className="space-y-6 ">
              
              <div>
                <label className="text-white block mb-1 text-sm" htmlFor="name">Name</label>
                <input
                  placeholder="Enter your name..."
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 text-white bg-white/10 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              
              <div>
                <label className="text-white block mb-1 text-sm" htmlFor="email">Email</label>
                <input
                  placeholder="Enter your email..."
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 text-white bg-white/10 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              

              
              <div>
                <label className="text-white block mb-1 text-sm">Message</label>
                <textarea
                  placeholder="Enter your message..."
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2 text-white bg-white/10 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>
              </div>
              {error && <div className="p-2 w-full text-center text-red-600 dark:text-red-500 text-sm">{error}</div>}
              {success && <div className="p-2 w-full text-center text-green-600 dark:text-green-500 text-sm">{success}</div>}

              <button
                onClick={sendEmail}
                disabled={isLoading}
                className="w-full py-3 bg-green-500 text-gray-900 font-semibold rounded-md hover:bg-green-600 transition-colors"
              >
                {isLoading ? (
                  <div className="bg-red-600"></div>
                ): success ? (
                  "sent!"
                ) : (
                  "Send"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetInTouch;
