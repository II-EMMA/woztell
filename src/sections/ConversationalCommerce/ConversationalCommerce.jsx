import BlueText from "@/components/blueText";
import HeadingText from "@/components/heading-text";
import ImageText from "@/components/ImageText";
import SubHeadingText from "@/components/subHeadingText";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

const cardsInfo = [
  {
    src: "https://woztell.com/wp-content/uploads/2025/04/icons-WhatsApp-Shop-1.png",
    alt: "Whats App Shop",
  },

  {
    src: "https://woztell.com/wp-content/uploads/2025/04/icons-WhatsApp-Pay.png",
    alt: "Whats App Pay",
  },
  {
    src: "https://woztell.com/wp-content/uploads/2025/04/icons-WhatsApp-Automatizacion.png",
    alt: "Whats App Automatizacion",
  },
  {
    src: "https://woztell.com/wp-content/uploads/2025/04/icons-WhatsApp-Marketing.png",
    alt: "Whats App Marketing",
  },
];

export default async function ConversationalCommerce() {
  const t = await getTranslations();
  const headingText = t.raw("conversationalCommerce").headingText;
  const blueText = t.raw("conversationalCommerce").blueText;
  const textPhrases = t.raw("conversationalCommerce").subText;
  const baseCardsInfo = t.raw("conversationalCommerce").cards;
  const { cardTexts: translatedCardTexts } = baseCardsInfo;

  const updatedCardsInfo = cardsInfo.map((card, index) => ({
    ...card,
    text: translatedCardTexts[index] || "Translation missing",
  }));

  return (
    <section className="flex flex-col max-w-[1500px] mx-auto lg:mt-40 mt-32 lg:gap-y-10 gap-y-20">
      <div className="flex lg:flex-row-reverse flex-col-reverse justify-between items-center mx-24 lg:gap-y-0 gap-y-20">
        <div className="flex flex-col gap-y-5">
          <HeadingText className="mb-2 text-center lg:text-start">
            {headingText}
          </HeadingText>
          <SubHeadingText textArray={textPhrases} className="max-w-[500px]" />
          <BlueText>{blueText}</BlueText>
        </div>

        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={
            "https://woztell.com/wp-content/uploads/2025/04/whatsapp-ecommerce-en.png"
          }
        >
          <img
            className="lg:max-w-[610px] lg:max-h-[600px] lg:ml-4 max-w-[270px] max-h-[270px]"
            src="https://woztell.com/wp-content/uploads/2025/04/whatsapp-ecommerce-en.png"
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
