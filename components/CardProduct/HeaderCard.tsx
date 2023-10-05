"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type HeaderInfo = {
  title: string;
  subtitle: string;
  description: string;
};

const HeaderCard = (props: HeaderInfo) => {
  const { title, subtitle, description } = props;

  return (
    <div className="mx-auto max-w-c-1315">
      <div className="animate_top text-center mx-auto">
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: -20,
            },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative animate_top text-center mx-auto"
        >
          <Image
            src="/images/shape/hoa-dao.png"
            alt="shape"
            width={160}
            height={160}
            style={{ marginTop: -100 }}
            className="absolute left-0 top-0 sm:w-3/12 md:w-1/6"
          />
          <div className="bg-zumthor dark:bg-blacksection dark:border dark:border-strokedark inline-block rounded-full py-1.5 px-4.5 mb-4">
            <h4 className="font-medium text-sectiontitle text-black dark:text-white">
              {title}
            </h4>
          </div>
          <h2 className="font-bold text-3xl xl:text-sectiontitle3 text-black dark:text-white md:w-4/5 xl:w-1/2 mx-auto mb-4">
            {subtitle}
          </h2>
          <p className="mx-auto md:w-4/5 lg:w-3/5 xl:w-[46%]">{description}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default HeaderCard;
