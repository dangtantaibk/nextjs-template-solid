"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useTranslation } from 'react-i18next';

const Introduce = () => {
  const [email, setEmail] = useState("");
  const { t } = useTranslation('translation');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="pt-35 md:pt-40 xl:pt-46 pb-20 xl:pb-25 overflow-hidden">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
          <div className=" md:w-1/2">
            <h1 className="text-black dark:text-white text-3xl xl:text-hero font-bold mb-5">
              {/* TRAO GỬI YÊU THƯƠNG */}
              SEND LOVE
              {/* <p>{t('welcome')}</p> */}
            </h1>
            <p className="text-justify">Tet is the traditional culture of Vietnamese people, an opportunity to bond family relationships, Tet is also an opportunity for businesses to care and express their feelings to their partners and employees with delicious dishes. Tet gifts, Tet gift baskets, meaningful Tet gift boxes. Because partners and employees are invaluable assets of the business that need to be built together.</p>
            {/* <p className="text-justify">Tết là văn hoá truyền thống của người Việt, là dịp để gắn kết tình thân gia đình, tết còn là cơ hội để các doanh nghiệp quan tâm, thể hiện tình cảm của mình với đối tác, với nhân viên của mình bằng những món quà tết, giỏ quà tết , hộp quà tết ý nghĩa. Vì đối tác, nhân viên là tài sản vô giá của doanh nghiệp cần gắn kết xây dựng.</p> */}
            <div className="mt-10">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-wrap gap-5">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    // placeholder="Địa chỉ email của bạn"
                    placeholder="Email address"
                    className="dark:bg-black border border-stroke dark:border-strokedark shadow-solid-2 dark:shadow-none rounded-full focus:outline-none focus:border-primary dark:focus:border-primary py-2.5 px-6"
                  />
                  <button
                    aria-label="signup to newsletter"
                    className="flex bg-black hover:bg-blackho dark:bg-btndark text-white rounded-full ease-in-out duration-300 px-7.5 py-2.5"
                  >
                    Send mail
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="animate_right md:w-1/2 hidden md:block">
            <div className="relative 2xl:-mr-7.5">
              <div className="relative aspect-[700/444] w-full">
                <Image
                  src="/images/hero/banner_new_year.png"
                  alt="Hero"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduce;
