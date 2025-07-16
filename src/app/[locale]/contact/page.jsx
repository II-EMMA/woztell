import BlueText from "@/components/blueText";
import Questions from "@/sections/questions/Questions";
import Trust from "@/sections/trust/Trust";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function ContactPage() {
  const t = await getTranslations();
  const projects = t.raw("contactPage").projects;
  const title = t.raw("contactPage").title;
  const subText = t.raw("contactPage").subText;
  const blueText = t.raw("contactPage").blueText;
  const imageText = t.raw("contactPage").imageText;
  const helpTitle = t.raw("contactPage").helpTitle;
  const placeHolderFields = t.raw("contactPage").placeHolderFields;
  const { name, email, web, phone, textArea } = placeHolderFields;
  const { boldText: titleBoldText, normalText: titleNormalText } = title;
  const { boldText: helpTitleBoldText, normalText: helpTitleNormalText } =
    helpTitle;

  return (
    <section className="overflow-x-hidden flex flex-col max-w-[1500px] mx-auto">
      <div className="flex md:flex-row md:justify-between flex-col mt-24 mx-14 md:gap-x-32 gap-x-0 md:gap-y-0 gap-y-14">
        <div className="flex flex-col gap-y-6 md:text-start text-center items-center md:items-stretch">
          <p className="text-4xl font-normal font-primary-gray font-inter leading-11 tracking-tight max-w-[480px]">
            {titleNormalText}
            <span className="font-bold"> {titleBoldText}</span>
          </p>
          <p className="text-xl leading-8 font-mont font-primary-gray max-w-[545px]">
            {subText}
          </p>
          <BlueText>{blueText}</BlueText>
          <div className="mt-7 flex flex-col gap-y-0.5 items-center">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={
                "https://woztell.com/wp-content/uploads/2025/04/meta-whatsapp.png"
              }
            >
              <img
                className="max-w-[261px] max-h-[30px]"
                src="https://woztell.com/wp-content/uploads/2025/04/meta-whatsapp.png"
                alt="hero section image"
              />
            </Link>
            <p className="font-inter text-[12px] font-light font-primary-gray text-center">
              {imageText}
            </p>
          </div>
        </div>
        <form action="" className="flex-grow">
          <div className="w-full">
            <input
              type="text"
              id="name"
              name="name"
              placeholder={name}
              className="mb-10 w-full border border-gray-300 focus:border-blue-500 focus:ring-0.5 focus:ring-blue-500 focus:outline-none shadow p-3 rounded"
            />
            <input
              type="text"
              id="name"
              name="name"
              placeholder={email}
              className="mb-10 w-full border border-gray-300 focus:border-blue-500 focus:ring-0.5 focus:ring-blue-500 focus:outline-none shadow p-3 rounded"
            />
            <input
              type="text"
              id="name"
              name="name"
              placeholder={web}
              className="mb-10 w-full border border-gray-300 focus:border-blue-500 focus:ring-0.5 focus:ring-blue-500 focus:outline-none shadow p-3 rounded"
            />
            <input
              type="number"
              id="name"
              name="name"
              placeholder={phone}
              className="mb-10 w-full border border-gray-300 focus:border-blue-500 focus:ring-0.5 focus:ring-blue-500 focus:outline-none shadow p-3 rounded"
            />
            <div className="relative">
              <textarea
                id="id-l03"
                type="text"
                name="id-l03"
                rows="3"
                className="peer relative w-full rounded border border-slate-200 p-4 text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-blue-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              ></textarea>
              <label
                htmlFor="id-l03"
                className="absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-500  peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
                {" "}
                {textArea}{" "}
              </label>
            </div>
          </div>
        </form>
      </div>

      <div className="my-24">
        <Trust />
      </div>

      <Questions
        projects={projects}
        helpTitleNormalText={helpTitleNormalText}
        helpTitleBoldText={helpTitleBoldText}
      />

      <div className="self-center flex lg:flex-row flex-col lg:gap-x-2 gap-y-3 lg:gap-y-0 gap-x-0 items-center py-8 full-bleed-sub-secondary-blue bg-sub-secondary-blue">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={
            "https://woztell.com/wp-content/uploads/2025/04/IVACEUE-valencia.png"
          }
        >
          <img
            className="max-w-[557px] max-h-[64px] px-20 md:px-0"
            src="https://woztell.com/wp-content/uploads/2025/04/IVACEUE-valencia.png"
            alt="Contact section image"
          />
        </Link>
        <p className="text-[10px] font-inter leading-3 font-secondary-gray">
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
    </section>
  );
}
