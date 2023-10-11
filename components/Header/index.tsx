"use client";
import React, { useState, useEffect } from "react";
import IconMenu from './IconMenu';
import Menu from './Menu'
import Image from "next/image";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);

  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
  });

  return (
    <header
      className={`fixed left-0 top-0 w-full z-99999 py-7 ${stickyMenu
        ? "bg-white dark:bg-black shadow !py-4 transition duration-100"
        : ""
        }`}
    >
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 lg:flex items-center justify-between relative">
        <div className="w-full lg:w-1/4 flex items-center justify-between">
          <a href="/">
            <Image
              src="/images/logo/logo.jpeg"
              alt="logo"
              width={50}
              height={50}
              style={{ borderRadius: 10 }}
              className="w-full hidden dark:block"
            />
            <Image
              src="/images/logo/logo.jpeg"
              alt="logo"
              width={50}
              height={50}
              style={{ borderRadius: 10 }}
              className="w-full dark:hidden"
            />
          </a>
          <button
            aria-label="hamburger Toggler"
            className="lg:hidden block"
            onClick={() => setNavigationOpen(!navigationOpen)}
          >
            <IconMenu navigationOpen={navigationOpen} />
          </button>
        </div>
        <Menu navigationOpen={navigationOpen} />
      </div>
    </header>
  );
};

export default Header;
