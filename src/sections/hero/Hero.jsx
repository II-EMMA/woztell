import BlueButton from "@/components/blueBtn";
import TypingTextAnimation from "@/components/textAnimation";
import { getLocale, getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function Hero() {
  const currentLocale = await getLocale();
  const isRTL = currentLocale === "ar";
  const t = await getTranslations();
  const title = t.raw("hero").title;
  const phrases = t.raw("hero").phrases;
  const metaText = t.raw("hero").metaText;
  const normalText = t.raw("hero").subTitle.normalText;
  const boldText = t.raw("hero").subTitle.boldText;
  const btn1 = t.raw("hero").btn1;
  const btn2 = t.raw("hero").btn2;

  return (
    <section className="flex lg:justify-between lg:flex-row flex-col-reverse lg:mx-auto mx-4 items-center  max-w-[1500px] py-16 px-4">
      <div className="mt-5 flex flex-col gap-y-4">
        <h1 className="text-5xl font-mont font-bold font-primary-gray">
          {title}
        </h1>
        <TypingTextAnimation phrases={phrases} />
        <p className="text-3xl font-normal font-primary-gray font-mont leading-[1.5em] tracking-tight max-w-[550px]">
          {normalText[0]} <span className="font-bold">{boldText[0]}</span>,{" "}
          {normalText[1]} <span className="font-bold">{boldText[1]}</span>{" "}
          {normalText[2]}
        </p>
        <div
          className={`
    lg:self-start self-center flex items-center mt-8
    ${isRTL ? "justify-start gap-x-5" : "justify-start gap-x-5"}
    ${!isRTL ? "lg:w-[calc(100%-144px)]" : ""}`}
        >
          <BlueButton className="py-1 px-3.5 font-semibold font-mont purple-hovering bg-primary-blue text-white">
            {btn1}
          </BlueButton>
          <BlueButton className="py-1 px-3.5 font-semibold font-mont bg-white border-color-primary-blue font-primary-blue">
            {btn2}
          </BlueButton>
        </div>
        <div className="mt-7 self-center flex flex-col gap-y-0.5">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={
              "https://woztell.com/wp-content/uploads/2025/04/meta-whatsapp.png"
            }
          >
            <img
              src="https://woztell.com/wp-content/uploads/2025/04/meta-whatsapp.png"
              alt="hero section image"
            />
          </Link>
          <p className="font-inter text-[12px] font-light font-primary-gray text-center">
            {metaText}
          </p>
        </div>
      </div>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href={
          "https://woztell.com/wp-content/uploads/2025/06/Woztell-Conversational-Solutions-english.png"
        }
      >
        <img
          src="https://woztell.com/wp-content/uploads/2025/06/Woztell-Conversational-Solutions-english.png"
          alt="hero section image"
        />
      </Link>
    </section>
  );
}
