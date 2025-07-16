import Link from "next/link";

export default function Cards({ className, cardsInfo }) {
  return cardsInfo.map((card, index) => (
    <div
      key={index}
      className="flex flex-col items-center justify-center gap-y-5"
    >
      <h4 className="text-xl uppercase font-mont font-primary-gray leading-6 font-extrabold">
        {card.title}
      </h4>
      <Link target="_blank" rel="noopener noreferrer" href={card.src}>
        <img
          className={`blur-none hue-rotate-0 contrast-200 saturate-0 max-w-[187.5px] h-10`}
          src={card.src}
          alt={card.alt}
        />
      </Link>
      <p className={`${className} text-center text-base font-inter leading-6`}>
        <span className="font-bold font-primary-purple">{card.purpleText}</span>{" "}
        <span className="font-primary-gray">{card.grayText}</span>
      </p>
    </div>
  ));
}
