import BlueButton from "@/components/blueBtn";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function Contact() {
  const t = await getTranslations();
  const containerOne = t.raw("contact").containerOne;
  const containerTwo = t.raw("contact").containerTwo;
  const {
    title: titleContainerOne,
    subTitle: subTitleContainerOne,
    btnText,
  } = containerOne;
  const { title: titleContainerTwo, subTitle: subTitleContainerTwo } =
    containerTwo;

  const { normalText: normalTextContainerOne, boldText: boldTextContainerOne } =
    subTitleContainerOne;

  const { normalText: noramlTextContainerTwo, boldText: boldTextContainerTwo } =
    titleContainerTwo;

  return (
    <div className="flex flex-col items-center justify-center max-w-[1500px] mx-auto pt-14 px-20 mt-20">
      <div className="flex md:flex-row flex-col justify-between gap-x-20 items-center image-background-pseudo-element bg-secondary-purple full-bleed-secondary-purple py-16 -my-60 md:my-0 ">
        <div className="flex flex-col items-center justify-center gap-y-5">
          <h2 className="text-center font-mont font-bold font-primary-gray text-3xl leading-9">
            {titleContainerOne}
          </h2>
          <p className="text-center text-xl font-inter leading-7 font-secondary-gray max-w-[770px]">
            {normalTextContainerOne[0]}{" "}
            <span className="font-bold">{boldTextContainerOne}</span>{" "}
            {normalTextContainerOne[1]}
          </p>
          <BlueButton className="py-1 px-3.5 font-semibold font-mont purple-hovering bg-primary-blue text-white">
            {btnText}
          </BlueButton>
        </div>
        <div className="md:visible invisible">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={
              "https://woztell.com/wp-content/uploads/2025/04/woztell-projects.png"
            }
          >
            <img
              className="max-w-[225px] max-h-[225px]"
              src="https://woztell.com/wp-content/uploads/2025/04/woztell-projects.png"
              alt="Contact section image"
            />
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-y-8 items-center text-center py-9 bg-secondary-purple full-bleed-secondary-purple">
        <h4 className="text-2xl font-inter leading-9 font-primary-gray max-w-[1220px]">
          {noramlTextContainerTwo[0]}{" "}
          <span className="font-bold">{boldTextContainerTwo[0]}</span>
          {noramlTextContainerTwo[1]}{" "}
          <span className="font-bold">{boldTextContainerTwo[1]}</span>
          {noramlTextContainerTwo[2]}
        </h4>
        <h6 className="text-center text-base font-mont leading-6 font-secondary-gray font-bold">
          {subTitleContainerTwo}
        </h6>
        <div className="flex md:flex-row flex-col md:gap-x-3 gap-y-10 md:gap-y-0 items-center -mt-4">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={"https://woztell.com/wp-content/uploads/2025/04/cbcuv.png"}
          >
            <img
              className="max-w-[225px] max-h-[35px]"
              src="https://woztell.com/wp-content/uploads/2025/04/cbcuv.png"
              alt="Contact section image"
            />
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={
              "https://woztell.com/wp-content/uploads/2025/04/wa-against-1.png"
            }
          >
            <img
              className="max-w-[165px] max-h-[85px]"
              src="https://woztell.com/wp-content/uploads/2025/04/wa-against-1.png"
              alt="Contact section image"
            />
          </Link>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col lg:gap-x-2 gap-y-3 lg:gap-y-0 gap-x-0 items-center justify-between py-8 full-bleed-sub-secondary-purple bg-sub-secondary-purple">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={
            "https://woztell.com/wp-content/uploads/2025/04/IVACEUE-valencia.png"
          }
        >
          <img
            className="max-w-[557px] max-h-[64px] px-28 md:px-0"
            src="https://woztell.com/wp-content/uploads/2025/04/IVACEUE-valencia.png"
            alt="Contact section image"
          />
        </Link>
        <p className="md:text-[10px] text-[7.5px] md:text-nowrap text-wrap font-inter leading-3 font-secondary-gray md:ml-0 ml-4 mr-10 md:mr-0">
          ORGANISM: IVACE
          <br />
          FILE NUMBER: IMINOD/2021/53
          <br />
          PROGRAM: SME INNOVATION PROJECTS (INNOVA-CV)
          <br />
          ACTION: SME INNOVATION. INNOVATION IN TEICS (INNOVATeiC-CV) 2021
          <br />
          PROJECT: NEW ADVANCED MULTICHANNEL UNIFIED MESSAGING SOLUTION FOR{" "}
          <br />
          COMMUNICATION BETWEEN COMPANY AND CLIENTS.
        </p>
      </div>
    </div>
  );
}
