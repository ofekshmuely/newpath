import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn, FaTwitter, BsCode } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import ContactImg from "../public/assets/contact.jpg";
import Mushroom from "../public/assets/mushroom.png";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid gap-8 lg:grid-cols-5">
          {/* left */}
          <div className="w-full h-full col-span-3 p-4 shadow-xl lg:col-span-2 shadow-gray-400 rounded-xl">
            <div className="h-full lg:p-4 ">
              <div>
                <Image className="" src={ContactImg} alt="/" />
              </div>
              <div>
                <h2 className="py-3">Ofek Shmuely</h2>
                <p>Front-End Web Developer</p>
                <p>E-commerce Operator</p>
                <p>Content Creator</p>

                <p className="py-6">
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>
              {/* here */}

              {/* up to here */}
              <div>
                <div className="flex items-center justify-between py-4">
                  <a
                    href="https://www.linkedin.com/in/ofeks/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href="https://github.com/ofekshmuely"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110">
                      <FaGithub />
                    </div>
                  </a>

                  <a
                    href="https://www.x.com/ofekshmuely/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110">
                      <FaTwitter />
                    </div>
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center ">
                <Image className="h-full  fade-in" src={Mushroom} alt="/" />
              </div>
            </div>
          </div>

          {/* right */}
          <div className="w-full h-auto col-span-3 shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form
                action="https://getform.io/f/81b8359d-415f-4e8a-b9d1-f3813a08898d"
                method="POST"
                encType="multipart/form-data"
              >
                <div className="grid w-full gap-4 py-2 md:grid-cols-2">
                  <div className="flex flex-col">
                    <label className="py-2 text-sm uppercase">Name</label>
                    <input
                      className="flex p-3 border-2 border-gray-300 rounded-lg"
                      type="text"
                      name="name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="py-2 text-sm uppercase">
                      Phone Number
                    </label>
                    <input
                      className="flex p-3 border-2 border-gray-300 rounded-lg"
                      type="text"
                      name="phone"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="py-2 text-sm uppercase">Email</label>
                  <input
                    className="flex p-3 border-2 border-gray-300 rounded-lg"
                    type="email"
                    name="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="py-2 text-sm uppercase">Subject</label>
                  <input
                    className="flex p-3 border-2 border-gray-300 rounded-lg"
                    type="text"
                    name="subject"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="py-2 text-sm uppercase">Message</label>
                  <textarea
                    className="p-3 border-2 border-gray-300 rounded-lg"
                    rows="10"
                    name="message"
                  ></textarea>
                </div>
                <button className="w-full p-4 mt-4 text-gray-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <a>
              <div className="p-4 duration-300 ease-in rounded-full shadow-lg cursor-pointer animate-bounce shadow-gray-400 hover:scale-110">
                <HiOutlineChevronDoubleUp
                  className="text-[#3a3e80]"
                  size={30}
                />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
