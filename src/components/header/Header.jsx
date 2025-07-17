"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import DropdownSelector from "./DropdownSelector";

export default function Header() {
  const t = useTranslations();
  const headerRef = useRef(null);
  const [toggle, setToggle] = useState(false);
  const aboutUs = t.raw("header").aboutUs;
  const support = t.raw("header").support;
  const contact = t.raw("header").contact;
  const toggleMenu = () => {
    setToggle((prev) => !prev);
  };
  const closeToggle = () => {
    setToggle(false);
  };
  useEffect(() => {
    function handleClickOutside(event) {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        closeToggle();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggle]);

  return (
    <div
      ref={headerRef}
      className="sticky top-0 bg-white z-[400] max-w-[1600px] mx-auto"
    >
      <header className="relative h-[72px] flex flex-row justify-between items-center xl:mx-[80px] lg:mx-[40px] md:mx-[30px] mx-[16px] border-b border-dark-black z-[200]">
        <Link href={"./"}>
          <img
            className="max-w-[206px] max-h-[34px]"
            src="https://woztell.com/wp-content/uploads/2025/04/logo-woztell-menu-b.png"
            alt="Company logo"
          />
        </Link>

        <button
          onClick={toggleMenu}
          className={`menu ${toggle ? "opened" : ""} md:invisible visible`}
        >
          <svg width="40" height="40" viewBox="0 0 100 100">
            <path
              className="line line1"
              d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
            />
            <path className="line line2" d="M 20,50 H 80" />
            <path
              className="line line3"
              d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
            />
          </svg>
        </button>

        <div
          className={`md:static absolute top-[72px] ${
            toggle ? "flex" : "hidden"
          } md:w-auto w-full flex md:flex-row flex-col md:gap-x-[180px] justify-between md:flex h-full md:h-auto z-[200] bg-white`}
        >
          <ul className="flex md:flex-row flex-col md:gap-x-6 gap-y-4 items-center md:py-0 pt-6 pb-14 font-Inter font-normal text-sm z-[200] bg-white">
            <li>
              <Link href={"./"} onClick={closeToggle}>
                {aboutUs}
              </Link>
            </li>

            <li>
              <Link href={"./support"} onClick={closeToggle}>
                {support}
              </Link>
            </li>

            <li>
              <Link href={"./contact"} onClick={closeToggle}>
                {contact}
              </Link>
            </li>
            <DropdownSelector />
          </ul>
        </div>
      </header>
    </div>
  );
}
