import Link from "next/link";

export default function ImageText({ className, infoArray }) {
  return infoArray.map((card, index) => (
    <div className="flex flex-col gap-y-4" key={index}>
      <Link target="_blank" rel="noopener noreferrer" href={card.src}>
        <img
          className="max-w-[610px] max-h-[600px]"
          src={card.src}
          alt={card.alt}
        />
      </Link>
      <p
        className={`self-center lg:self-auto font-mont text-center text-sm leading-6 font-primary-gray font-bold ${className}`}
      >
        {card.text}
      </p>
    </div>
  ));
}
