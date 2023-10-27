"use client";
import React from "react";
import moment from "moment";
import Image from "next/image";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-blacksection border-t border-stroke dark:border-strokedark">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        {/* <!-- Footer Top --> */}
        <div className="py-20 lg:py-25">
          <div className="flex flex-wrap lg:justify-between gap-8 lg:gap-0">
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
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="animate_top w-1/2 lg:w-1/4"
            >
              <a href="index.html" className="relative flex items-center">
                <Image
                  width={50}
                  height={50}
                  style={{ borderRadius: 10 }}
                  src="/images/logo/logo1.jpeg"
                  alt="Logo"
                // className="dark:hidden"
                />
                {/* <Image
                    width={50}
                    height={50}
                    style={{borderRadius: 10}}
                    src="/images/logo/logo1.jpeg"
                    alt="Logo"
                    className="hidden dark:block"
                  /> */}
                <h1 className="ml-3 font-medium text-black dark:text-white text-itemtitle2">Kido Shop</h1>
              </a>

              <div className="mt-4">
                <p className="text-black dark:text-white mt-2 font-semibold">Kido Shop</p>
                <p className="ml-2">- Bánh trung thu Kido.</p>
                <p className="ml-2">- Bánh bao Thọ Phát</p>
                <p className="ml-2">- Dầu ăn Tường An</p>
              </div>

              <div className="mt-4">
                <p className="text-black dark:text-white mt-2 font-semibold">Contact us</p>
                <p className="ml-2">Email: cskh.kido@gmail.com</p>
              </div>


            </motion.div>

            <div className="w-full lg:w-2/3 xl:w-7/12 flex flex-col md:flex-row md:justify-between gap-8 md:gap-0">
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
                className="animate_top"
              >
                <h4 className="font-medium text-black dark:text-white text-itemtitle2 mb-9">
                  {/* Liên hệ nhanh */}
                  Contact
                </h4>

                <ul>
                  <li>
                    <a
                      href="#"
                      className="inline-block hover:text-primary mb-3"
                    >
                      {/* Trang chủ */}
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="inline-block hover:text-primary mb-3"
                    >
                      {/* Sản phẩm */}
                      Products
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="inline-block hover:text-primary mb-3"
                    >
                      {/* Tin tức & Blog */}
                      News & Blog
                    </a>
                  </li>
                </ul>
              </motion.div>

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
                className="animate_top"
              >
                <h4 className="font-medium text-black dark:text-white text-itemtitle2 mb-9">
                  {/* Trợ giúp */}
                  Support
                </h4>

                <ul>
                  <li>
                    <a
                      href="#"
                      className="inline-block hover:text-primary mb-3"
                    >
                      {/* Công ty */}
                      Company
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="inline-block hover:text-primary mb-3"
                    >
                      Our Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="inline-block hover:text-primary mb-3"
                    >
                      {/* Liên hệ với */}
                      Contact us
                    </a>
                  </li>
                </ul>
              </motion.div>

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
                className="animate_top"
              >
                <h4 className="font-medium text-black dark:text-white text-itemtitle2 mb-9">
                  {/* Bảng tin */}
                  News
                </h4>
                <p className="mb-4 w-[90%]">
                  {/* Đăng ký để nhận thông tin cập nhật mới nhất */}
                  Sign up to receive the latest updates
                </p>

                {/* <form action="#">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Email address"
                        className="w-full dark:bg-black border border-stroke dark:border-strokedark shadow-solid-11 dark:shadow-none rounded-full focus:outline-none focus:border-primary dark:focus:border-primary py-3 px-6"
                      />

                      <button aria-label="signup to newsletter" className="absolute right-0 p-4">
                        <svg
                          className="fill-[#757693] dark:fill-white hover:fill-primary"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_48_1487)">
                            <path
                              d="M3.1175 1.17318L18.5025 9.63484C18.5678 9.67081 18.6223 9.72365 18.6602 9.78786C18.6982 9.85206 18.7182 9.92527 18.7182 9.99984C18.7182 10.0744 18.6982 10.1476 18.6602 10.2118C18.6223 10.276 18.5678 10.3289 18.5025 10.3648L3.1175 18.8265C3.05406 18.8614 2.98262 18.8792 2.91023 18.8781C2.83783 18.8769 2.76698 18.857 2.70465 18.8201C2.64232 18.7833 2.59066 18.7308 2.55478 18.6679C2.51889 18.6051 2.50001 18.5339 2.5 18.4615V1.53818C2.50001 1.46577 2.51889 1.39462 2.55478 1.33174C2.59066 1.26885 2.64232 1.2164 2.70465 1.17956C2.76698 1.14272 2.83783 1.12275 2.91023 1.12163C2.98262 1.12051 3.05406 1.13828 3.1175 1.17318ZM4.16667 10.8332V16.3473L15.7083 9.99984L4.16667 3.65234V9.16651H8.33333V10.8332H4.16667Z"
                              fill=""
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_48_1487">
                              <rect width="20" height="20" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </button>
                    </div>
                  </form> */}
              </motion.div>
            </div>
          </div>
        </div>
        {/* <!-- Footer Top --> */}

        {/* <!-- Footer Bottom --> */}
        <div className="border-t border-stroke dark:border-strokedark flex flex-wrap flex-col lg:flex-row items-center justify-center gap-5 lg:gap-0 py-7">
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
            className="animate_top"
          >
            <p>&copy; {moment().format("YYYY")}
              {/* Store24h */}
              {' '} SHOP_KIDO
            </p>
          </motion.div>
        </div>
        {/* <!-- Footer Bottom --> */}
      </div>
    </footer>
  );
};

export default Footer;
