import TestimonialsImages from "@/components/TestimonialsImages";
import { getTranslations } from "next-intl/server";

const cardsInfo = [
  {
    src: "https://woztell.com/wp-content/uploads/2025/05/whatsapp-object-btn.png",
    alt: "Testimonial 1",
  },

  {
    src: "https://woztell.com/wp-content/uploads/2025/05/objet-whatsapp-list.png",
    alt: "Testimonial 2",
  },

  {
    src: "https://woztell.com/wp-content/uploads/2025/05/whatsapp-object-product.png",
    alt: "Testimonial 3",
  },

  {
    src: "https://woztell.com/wp-content/uploads/2025/05/objets-whatsapp-flows-form.png",
    alt: "Testimonial 4",
  },

  {
    src: "https://woztell.com/wp-content/uploads/2025/05/whatsapp-object-carousel.png",
    alt: "Testimonial 5",
  },
];

export default async function CloudApi() {
  const t = await getTranslations();
  const baseCardsInfo = t.raw("cloudApi").cards;
  const title = t.raw("cloudApi").title;
  const { boldText: titleBoldText, normalText: titleNormalText } = title;
  const { cardTexts: translatedCardTexts } = baseCardsInfo;

  const updatedCardsInfo = cardsInfo.map((card, index) => ({
    ...card,
    text: translatedCardTexts[index] || "Translation missing",
  }));

  return (
    <section className="flex flex-col max-w-[1500px] mx-auto mt-40 gap-y-10 sm:px-14 2xl:px-0">
      <div className="w-full h-px bg-secondary-gray" />
      <h2 className="text-[38px] font-mont leading-14 font-primary-gray max-w-[1300px] text-center mx-auto mt-4">
        {titleNormalText}{" "}
        <span className="font-extrabold">{titleBoldText}</span>
      </h2>
      <div className="flex flex-row 2xl:justify-between justify-center items-center sm:gap-2.5 py-10 flex-wrap 2xl:mx-0 mx-auto">
        <TestimonialsImages infoArray={updatedCardsInfo} />
      </div>

      <div className="w-full h-px bg-secondary-gray" />
    </section>
  );
}
