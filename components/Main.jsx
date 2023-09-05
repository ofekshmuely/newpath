import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center mainBG">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="animate-fade-up animate-once animate-ease-in-out">
          <h1 className="py-4 text-gray-700">
            Shalom! I&#39;m{" "}
            <span className="font-bold text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text">
              {" "}
              Ofek
            </span>
          </h1>
          <h2 className="py-1 text-xl font-semibold animate-pulse text-black-300 ">
            Front-End Web Developer <br />
            E-commerce Operator <br />
            Content Creator
          </h2>

          <p className="mt-4 font-bold tracking-widest text-gray-600 uppercase text-md ">
            Code, Learn, Grow, Succeed, Repeat{" "}
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/ofeks/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="p-6 duration-300 ease-in rounded-full shadow-lg shadow-gray-400 hover:scale-110">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/ofekshmuely"
              target="_blank"
              rel="noreferrer"
            >
              <div className="p-6 duration-300 ease-in rounded-full shadow-lg shadow-gray-400 hover:scale-110">
                <FaGithub />
              </div>
            </a>
            <Link href="/#contact">
              <div className="p-6 duration-300 ease-in rounded-full shadow-lg shadow-gray-400 hover:scale-110">
                <AiOutlineMail />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
