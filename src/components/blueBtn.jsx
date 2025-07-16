import Link from "next/link";

export default function BlueButton({ children, className }) {
  return (
    <button
      className={`cursor-pointer ${className} whitespace-nowrap flex justify-center rounded-4xl items-center text-base transition-all duration-300 ease-in-out border border-solid outline-none`}
    >
      {children}
    </button>
  );
}
