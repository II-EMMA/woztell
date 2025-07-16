// components/DropdownSelector.js
"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";

export default function DropdownSelector() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const [selected, setSelected] = useState(
    currentLocale === "en" ? "En" : "Ar"
  );

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleSelect = (option) => {
    setSelected(option);
    setOpen(false);

    const targetLocale = option === "En" ? "en" : "ar";

    if (targetLocale !== currentLocale) {
      const pathWithoutLocale = pathname.replace(`/${currentLocale}`, "");
      const newPath = `/${targetLocale}${
        pathWithoutLocale === "" ? "/" : pathWithoutLocale
      }`;
      router.push(newPath);
    }
  };

  const options = ["En", "Ar"];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className={`min-w-[40px] px-2 py-1 border border-gray-300 rounded flex items-center justify-between
          ${currentLocale === "ar" ? "flex-row-reverse" : "flex-row"}
          ${selected !== "" ? "text-black" : "text-gray-600"}
        `}
      >
        <span className="flex-grow text-center ">
          {selected === "" ? "Lang" : selected}
        </span>
        <svg
          className={`w-4 h-4 ${currentLocale === "ar" ? "mr-2" : "ml-2"}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute mt-2 bg-white border rounded w-full z-10">
          <ul className="max-h-[100px] overflow-auto [&>li]:text-gray-500 [&>li]:px-4 [&>li]:py-2 hover:[&>li]:bg-gray-100 [&>li]:cursor-pointer">
            {options.map((option, index) => (
              <li key={index} onClick={() => handleSelect(option)}>
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
