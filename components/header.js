import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaEnvelopeOpen } from "react-icons/fa";
import { useState, useEffect } from "react";
import { MdRiceBowl } from "react-icons/md";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [top, setTop] = useState(true);

  useEffect(() => {
    const changeBackground = (e) => {
      let scrolled = document.scrollingElement.scrollTop;
      let header = document.getElementById("headerBar");
      if (scrolled > header.clientHeight) {
        if (top) {
          header.classList.remove("bg-transparent");
          header.classList.add(
            "bg-zinc-900/40",
            "backdrop-blur-lg",
            "border-b-2",
            "border-b-zinc-800"
          );
          setTop(false);
        }
      } else {
        if (!top) {
          header.classList.remove(
            "bg-zinc-900/40",
            "backdrop-blur-lg",
            "border-b-2",
            "border-b-zinc-800"
          );
          header.classList.add("bg-transparent");
          setTop(true);
        }
      }
    };
    document.addEventListener("scroll", changeBackground);
    return () => {
      document.removeEventListener("scroll", changeBackground);
    };
  }, [top]);

  const openMenu = () => {
    let mobileMenu = document.getElementById("mobile-menu");
    if (!open) {
      mobileMenu.classList.remove("h-0");
      mobileMenu.classList.add("h-screen");
      setOpen(true);
    } else {
      mobileMenu.classList.add("h-0");
      mobileMenu.classList.remove("h-screen");
      setOpen(false);
    }
  };

  return (
    <div id="header" className="top-0 h-20 z-100 w-full fixed">
      <div
        id="headerBar"
        className="p-5 flex flex-col lg:flex-row items-end lg:align-center lg:justify-between lg:p-6 bg-transparent"
      >
        <MdRiceBowl
          id="desktop-menu-rice"
          size={52}
          className="text-purple-300 sm:hidden md:hidden lg:block"
        ></MdRiceBowl>

        <div
          id="desktop-menu-links"
          className="sm:hidden md:hidden lg:flex lg:flex-row lg:w-fit lg:gap-4 lg:text-white lg:font-semibold"
        >
          <a className="py-3 px-4 w-fit text-center hover:bg-zinc-800 border border-transparent rounded-md hover:border-zinc-700">
            About me
          </a>
          <a className="py-3 px-4 w-fit text-center hover:bg-zinc-800 border border-transparent rounded-md hover:border-zinc-700">
            Featured projects
          </a>
          <a className="py-3 px-4 w-fit text-center hover:bg-zinc-800 border border-transparent rounded-md hover:border-zinc-700">
            All projects
          </a>
          <a className="py-3 px-4 w-fit text-center bg-purple-600 hover:bg-purple-700 rounded-md">
            My resume
          </a>
        </div>

        <HiOutlineMenuAlt3
          size={36}
          className="text-purple-200 lg:hidden"
          onClick={() => openMenu()}
        ></HiOutlineMenuAlt3>
      </div>

      <div
        id="mobile-menu"
        className="top-0 fixed z-101 text-purple-100 text-l font-semibold top-0 h-0 w-full bg-zinc-900 transition-all ease-in-out duration-300 overflow-hidden"
      >
        <div
          id="mobile-menu-links"
          className="h-full flex gap-3 flex-col p-5 items-center"
        >
          <IoMdClose
            size={36}
            className="text-purple-200 self-end mb-5"
            onClick={() => openMenu()}
          ></IoMdClose>
          <div className="flex gap-5 flex-col items-center">
            <a className="p-4 w-full text-center hover:bg-zinc-800 border border-transparent rounded-md hover:border-zinc-700">
              About me
            </a>
            <a className="p-4 w-full text-center hover:bg-zinc-800 border border-transparent rounded-md hover:border-zinc-700">
              Featured projects
            </a>
            <a className="p-4 w-full text-center hover:bg-zinc-800 border border-transparent rounded-md hover:border-zinc-700">
              All projects
            </a>
            <a className="p-4 w-full text-center bg-purple-700 hover:bg-purple-800 rounded-md">
              My resume
            </a>
          </div>
          <div id="about-buttons" className="flex gap-5 mt-auto">
            <a
              href="#"
              className="w-fit h-fit rounded-full bg-zinc-800 p-4 mt-10 border border border-zinc-700"
            >
              <FaGithub className="text-purple-200" size={28}></FaGithub>
            </a>

            <a
              href="#"
              className="w-fit h-fit rounded-full bg-zinc-800 mt-10 p-4 border border border-zinc-700"
            >
              <FaLinkedinIn
                className="text-purple-200"
                size={28}
              ></FaLinkedinIn>
            </a>

            <a
              href="#"
              className="w-fit h-fit rounded-full bg-zinc-800 p-4 mt-10 border border border-zinc-700"
            >
              <FaEnvelopeOpen
                className="text-purple-200"
                size={28}
              ></FaEnvelopeOpen>
            </a>
          </div>

          <div className="mt-3 px-10 text-center font-mono text-md text-zinc-400">
            <p>Developed by Eric Dam 🍚</p>
          </div>
        </div>
      </div>
    </div>
  );
}
