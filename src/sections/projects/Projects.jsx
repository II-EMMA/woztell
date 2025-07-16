import BlueButton from "@/components/blueBtn";
import Cards from "@/components/projects/Cards";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

const cardsInfo = [
  {
    title: "Finance",
    src: "https://woztell.com/wp-content/uploads/2025/04/woztell-use-case-akulaku.png",
    alt: "akulaku",
    purpleText: "30% cost savings",
    grayText: "using WhatsApp to send OTPs",
  },

  {
    title: "Government",
    src: "https://woztell.com/wp-content/uploads/2025/04/woztell-use-case-visit-valencia.png",
    alt: "valencia",
    purpleText: "82% recurrence rate in inquiries",
    grayText: " thanks to a WhatsApp chatbot",
  },

  {
    title: "Education",
    src: "https://woztell.com/wp-content/uploads/2025/04/imf-logo.png",
    alt: "imf logo",
    purpleText: "70% automated",
    grayText: "support requests",
  },

  {
    title: "E-commerce",
    src: "https://woztell.com/wp-content/uploads/2025/04/woztell-use-case-ChicMe.png",
    alt: "ChicMe",
    purpleText: "13x more revenue",
    grayText: "using Messenger compared to email",
  },

  {
    title: "Real estate",
    src: "https://woztell.com/wp-content/uploads/2025/04/client-testimonial-centaline.png",
    alt: "client testimonialcentaline",
    purpleText: "27% increase in sales",
    grayText: "through WhatsApp",
  },

  {
    title: "Insurance",
    src: "https://woztell.com/wp-content/uploads/2025/04/logo-segurline.png",
    alt: "segurline logo",
    purpleText: "276% more users",
    grayText: "thanks to WhatsApp",
  },
];

export default async function Projects() {
  const t = await getTranslations();
  const baseCardsInfo = t.raw("projects").cards;
  const HeadTitle = t.raw("projects").title;
  const subTitle = t.raw("projects").subText;
  const btnText = t.raw("projects").btnText;
  const { boldText: titleBoldText, normalText: titleNormalText } = HeadTitle;
  const { title, cardPurpleTexts, cardGrayTexts } = baseCardsInfo;

  const updatedCardsInfo = cardsInfo.map((card, index) => ({
    ...card,
    title: title[index] || "Translation missing",
    purpleText: cardPurpleTexts[index] || "Translation missing",
    grayText: cardGrayTexts[index] || "Translation missing",
  }));

  return (
    <section className="flex flex-col items-center justify-center max-w-[1500px] mx-auto pt-24 px-20 md:-mb-48 py-40 gap-y-16">
      <div className="self-center flex flex-col gap-y-1">
        <h2 className="text-center font-primary-gray text-3xl font-mont leading-8 ">
          {titleNormalText}{" "}
          <span className="font-extrabold">{titleBoldText}</span>
        </h2>
        <p className="text-center text-base font-inter leading-6 font-secondary-gray">
          {subTitle}
        </p>

        <Image
          src="https://woztell.com/wp-content/uploads/2025/04/meta.png"
          alt="hero section image"
          className="self-center"
          width={156}
          height={38}
        />
      </div>

      <div className="flex flex-row lg:items-start items-center justify-center lg:justify-between gap-x-9 flex-wrap gap-y-12 mx-auto">
        <Cards className="max-w-[326px]" cardsInfo={updatedCardsInfo} />
      </div>

      <BlueButton className="py-1 px-3.5 font-semibold font-mont purple-hovering bg-primary-blue text-white">
        {btnText}
      </BlueButton>
    </section>
  );
}
