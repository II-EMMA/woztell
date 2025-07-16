import BlueButton from "@/components/blueBtn";
import BlueText from "@/components/blueText";
import WhiteBtn from "@/components/whiteBtn";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function SupportPage() {
  const t = await getTranslations();
  const containerOne = t.raw("supportPage").containerOne;
  const containerTwo = t.raw("supportPage").containerTwo;
  const {
    title: titleContainerOne,
    placeHolderFields: { email, password },
    btnText,
    grayText,
    blueText: [blueTextOne, blueTextTwo],
    helpText,
  } = containerOne;
  const { title: titleContainerTwo, subTitle } = containerTwo;

  return (
    <section className="flex lg:flex-row flex-col lg:gap-x-8 gap-x-0  max-w-[1500px] lg:justify-between mx-auto px-20 py-32">
      <div className="flex flex-col gap-y-5">
        <div className="lg:self-start self-center">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={
              "https://platform.woztell.com/assets/68fb2f2d0cd277d13966.png"
            }
          >
            <img
              className="max-w-[181px] max-h-[181px]"
              src="https://platform.woztell.com/assets/68fb2f2d0cd277d13966.png"
              alt="hero section image"
            />
          </Link>
        </div>
        <p className="lg:self-start self-center text-center font-sub-secondary-gray md:text-3xl text-2xl font-inter font-light">
          {titleContainerOne}
        </p>
        <form action="" className="flex-grow">
          <div className="w-full">
            <input
              type="text"
              id="email"
              name="email"
              placeholder={email}
              className="mb-5 w-full border border-gray-300 focus:border-blue-500 focus:ring-0.5 focus:ring-blue-500 focus:outline-none shadow p-3 rounded"
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder={password}
              className="w-full border border-gray-300 focus:border-blue-500 focus:ring-0.5 focus:ring-blue-500 focus:outline-none shadow p-3 rounded"
            />
          </div>
        </form>
        <div className="self-end">
          <BlueText>{blueTextOne}</BlueText>
        </div>
        <div>
          <BlueButton className="w-full py-3 font-semibold font-mont dark-blue-hovering bg-cyan-blue text-white rounded-sm">
            {btnText}
          </BlueButton>
          <div className="font-sub-primary-white text-sm font-semibold flex items-center my-4">
            <span className="block flex-grow h-px bg-sub-primary-white" />
            <span className="mx-4">{grayText}</span>
            <span className="block flex-grow h-px bg-sub-primary-white" />
          </div>
          <div className="flex md:flex-row flex-col justify-between items-center md:gap-x-4 gap-x-0 gap-y-4 md:gap-y-0">
            <WhiteBtn className="w-full py-3 font-semibold font-mont white-hovering bg-white text-black rounded-sm shadow-lg border-primary-white">
              <img
                src="https://platform.woztell.com/assets/39c52b1bcccb20569aa4.png"
                alt="Google logo"
                className="max-w-12 max-h-7"
              />
              <span className="font-primary-black ml-1.5 text-xl font-medium font-inter">
                Google
              </span>
            </WhiteBtn>
            <WhiteBtn className="w-full py-3 font-semibold font-mont white-hovering bg-white text-black rounded-sm shadow-lg border-primary-white">
              <img
                src="https://platform.woztell.com/assets/790642551cd99bb66a7e.png"
                alt="Facebook logo"
                className="max-w-11 max-h-6"
              />
              <span className="font-primary-black ml-1.5 text-xl font-medium font-inter">
                Facebook
              </span>
            </WhiteBtn>
          </div>
          <div className="flex flex-col gap-y-3 my-5">
            <span className="w-full block flex-grow h-px bg-sub-primary-white" />
            <div className="lg:self-start self-center flex flex-row gap-x-2.5 items-center my-0.5">
              <span className="font-sub-primary-white text-sm font-medium">
                {helpText}
              </span>
              <BlueText className="inline-block">{blueTextTwo}</BlueText>
            </div>
            <span className="w-full block flex-grow h-px bg-sub-primary-white" />
          </div>
        </div>
      </div>
      <div className="lg:flex flex-col gap-y-8 hidden">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={"https://platform.woztell.com/assets/85a87c8c80b9b49d0d0e.png"}
        >
          <img
            src="https://platform.woztell.com/assets/85a87c8c80b9b49d0d0e.png"
            alt="hero section image"
            className="max-w-[330px] max-h-[246px]"
          />
        </Link>
        <h2 className="font-sub-secondary-gray text-3xl font-inter font-medium max-w-[400px] mt-16">
          {titleContainerTwo}
        </h2>
        <p className="font-sub-secondary-gray text-xl font-inter font-light max-w-[400px] leading-6">
          {subTitle}
        </p>
      </div>
    </section>
  );
}
