import { getTranslations } from "next-intl/server";

export default async function Why() {
  const t = await getTranslations();
  const title = t.raw("why").title;
  const { boldText: titleBoldText, normalText: titleNormalText } = title;
  const cardsText = t.raw("why").cards;
  const [titleOne, titleTwo, titleThree] = cardsText;

  return (
    <section className="flex flex-col justify-center items-center py-14 gap-y-8 bg-secondary-purple max-w-[1500px] mx-auto full-bleed-secondary-purple">
      <h2 className="text-3xl font-mont leading-7 font-primary-gray lg:-ml-7">
        {titleNormalText[0]} <span className="font-bold">{titleBoldText}</span>
        {titleNormalText[1]}
      </h2>
      <div className="flex lg:flex-row flex-col mx-4 items-center">
        <div className="flex flex-col items-center justify-center gap-y-5 ">
          <p className="font-primary-blue text-[90px]">+100M</p>
          <p className="text-base leading-6 font-secondary-gray text-center font-bold">
            {titleOne}
          </p>
        </div>

        <span className="lg:w-px w-full block lg:h-[150px] h-px bg-sub-primary-white lg:mx-12 my-10 lg:my-0" />

        <div className="flex flex-col items-center justify-center gap-y-5">
          <p className="font-primary-blue text-[90px]">+10K</p>
          <p className="text-base leading-6 font-secondary-gray text-center font-bold">
            {titleTwo}
          </p>
        </div>

        <span className="lg:w-px w-full block lg:h-[150px] h-px bg-sub-primary-white lg:mx-14 my-10 lg:my-0" />

        <div className="flex flex-col items-center justify-center gap-y-5">
          <p className="font-primary-purple text-[90px]">+75</p>
          <p className="text-base leading-6 font-secondary-gray text-center font-bold">
            {titleThree}
          </p>
        </div>
      </div>
    </section>
  );
}
