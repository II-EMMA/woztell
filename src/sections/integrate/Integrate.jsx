"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { use } from "react";

const images = [
  {
    src: "https://woztell.com/wp-content/uploads/2025/04/logos-integraciones-ChatGPT.png",
    alt: "ChatGPT",
  },

  {
    src: "https://woztell.com/wp-content/uploads/2025/04/logos-integraciones-stripe.png",
    alt: "Strip",
  },

  {
    src: "https://woztell.com/wp-content/uploads/2025/04/logos-integraciones-PayPal.png",
    alt: "PayPal",
  },

  {
    src: "https://woztell.com/wp-content/uploads/2025/04/logos-integraciones-zapier.png",
    alt: "Zapier",
  },

  {
    src: "https://woztell.com/wp-content/uploads/2025/04/logos-integraciones-zoho.png",
    alt: "Zoho",
  },

  {
    src: "https://woztell.com/wp-content/uploads/2025/04/logos-integraciones-dialogflow.png",
    alt: "Dialogflow",
  },

  {
    src: "https://woztell.com/wp-content/uploads/2025/04/logos-integraciones-ChatGPT.png",
    alt: "ChatGPT",
  },

  {
    src: "https://woztell.com/wp-content/uploads/2025/04/logos-integraciones-stripe.png",
    alt: "Strip",
  },

  {
    src: "https://woztell.com/wp-content/uploads/2025/04/logos-integraciones-PayPal.png",
    alt: "PayPal",
  },
  {
    src: "https://woztell.com/wp-content/uploads/2025/04/logos-integraciones-ChatGPT.png",
    alt: "ChatGPT",
  },

  {
    src: "https://woztell.com/wp-content/uploads/2025/04/logos-integraciones-stripe.png",
    alt: "Strip",
  },

  {
    src: "https://woztell.com/wp-content/uploads/2025/04/logos-integraciones-PayPal.png",
    alt: "PayPal",
  },

  {
    src: "https://woztell.com/wp-content/uploads/2025/04/logos-integraciones-zapier.png",
    alt: "Zapier",
  },

  {
    src: "https://woztell.com/wp-content/uploads/2025/04/logos-integraciones-zoho.png",
    alt: "Zoho",
  },
];

export default function Integrate() {
  const t = useTranslations();
  const title = t.raw("integrate").title;
  return (
    <section className="py-14 border-t-primary-gray flex items-center justify-between mx-auto px-5 max-w-[1500px] flex-col gap-y-12 overflow-x-hidden">
      <h5 className="font-primary-gray font-mont text-2xl font-extrabold">
        {title}
      </h5>

      <div className="bg-purple-200/10 opacity-80">
        <div className="container mx-auto">
          <div className="overflow-hidden [mask-image:linear-gradient(to_right,_transparent,_black_25%,_black_75%,_transparent)]">
            <motion.div
              className="flex gap-14 flex-none pr-14"
              animate={{
                translateX: "-50%",
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
            >
              {images.map((image, index) => (
                <Image
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  width={200}
                  height={200}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
