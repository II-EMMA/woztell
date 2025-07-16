import BlueButton from "@/components/blueBtn";
import HeadingText from "@/components/heading-text";
import ImageText from "@/components/ImageText";
import SubHeadingText from "@/components/subHeadingText";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

const cardsInfo = [
  {
    src: "https://woztell.com/wp-content/uploads/2025/04/icons-WhatsApp-Marketing.png",
    alt: "Whats App Marketing",
  },

  {
    src: "https://woztell.com/wp-content/uploads/2025/04/icons-chatbot.png",
    alt: "Desicion tree chatbots",
  },
  {
    src: "https://woztell.com/wp-content/uploads/2025/04/icons-WhatsApp-Shop-1.png",
    alt: "Whats App Shop",
  },
  {
    src: "https://woztell.com/wp-content/uploads/2025/04/icons-equipo.png",
    alt: "your team can respond",
  },
];

export default async function ChatGPTAndWhatsApp() {
  const t = await getTranslations();
  const headingText = t.raw("chatGPTAndWhatsApp").headingText;
  const subHeadingText = t.raw("chatGPTAndWhatsApp").subHeadingText;
  const btnText = t.raw("chatGPTAndWhatsApp").btnText;
  const textPhrases = t.raw("chatGPTAndWhatsApp").subText;
  const baseCardsInfo = t.raw("chatGPTAndWhatsApp").cards;
  const { cardTexts: translatedCardTexts } = baseCardsInfo;

  const updatedCardsInfo = cardsInfo.map((card, index) => ({
    ...card,
    text: translatedCardTexts[index] || "Translation missing",
  }));

  return (
    <section className="flex flex-col max-w-[1500px] mx-auto lg:mt-40 mt-32 lg:gap-y-10 gap-y-20">
      <div className="flex lg:flex-row-reverse flex-col-reverse justify-between items-center mx-24 lg:gap-y-0 gap-y-20">
        <div className="flex flex-col gap-y-5">
          <HeadingText className="max-w-[515px] mb-2 leading-11 text-center lg:text-start">
            {headingText}
          </HeadingText>
          <h3 className="font-mont leading-7 font-bold font-primary-gray">
            {subHeadingText}
          </h3>
          <SubHeadingText textArray={textPhrases} className="max-w-[500px]" />
          <BlueButton className="lg:self-start self-center py-1 px-3.5 font-semibold font-mont purple-hovering bg-primary-blue text-white">
            {btnText}
          </BlueButton>
        </div>

        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={
            "https://woztell.com/wp-content/uploads/2025/04/Assistent-GPT-hero.jpg"
          }
        >
          <img
            className="lg:max-w-[610px] lg:max-h-[600px] lg:ml-4 max-w-[270px] max-h-[315px]"
            src="https://woztell.com/wp-content/uploads/2025/04/Assistent-GPT-hero.jpg"
            alt="chatbot image"
          />
        </Link>
      </div>

      <div className="flex lg:flex-row lg:justify-between lg:items-center flex-col gap-y-14 lg:gap-y-0 md:mx-20 lg:mx-48 mx-14 gap-x-2.5">
        <ImageText infoArray={updatedCardsInfo} className="max-w-[270px]" />
      </div>
    </section>
  );
}
