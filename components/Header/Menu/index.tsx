"use client";
import React from "react";
import menuData from "../menuData";
import SubMenu from './components/SubMenu';
import Language from './components/Language';
import Link from "next/link";
import ThemeToggler from "./components/ThemeToggler";

import { usePathname } from "next/navigation";

interface MenuProps {
  navigationOpen: Boolean;
}

const language = [
  {
    titleLanguage: "VN",
    keyLanguage: 'vn'
  },
  {
    titleLanguage: "Eng",
    keyLanguage: 'en'
  }
]

const Menu = (props: MenuProps) => {
  const { navigationOpen } = props;
  const pathUrl = usePathname();

  return (
    <div
      className={`w-full lg:w-full h-0 lg:h-auto invisible lg:visible lg:flex items-center justify-between ${navigationOpen &&
        "!visible bg-white dark:bg-blacksection shadow-solid-5 h-auto max-h-[400px] overflow-y-scroll rounded-md mt-4 p-7.5"
        }`}
    >
      <nav>
        <ul className="flex lg:items-center flex-col lg:flex-row gap-5 lg:gap-10">
          {menuData.map((menuItem, key) => (
            <li key={key} className={menuItem.submenu && "group relative"}>
              {!!menuItem.submenu ? (
                <SubMenu title={menuItem.title} menu={menuItem.submenu || []} />
              ) : (
                <Link
                  href={`${menuItem.path}`}
                  className={
                    pathUrl === menuItem.path
                      ? "hover:text-primary text-primary"
                      : "hover:text-primary"
                  }
                >
                  {menuItem.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center gap-6 mt-7 lg:mt-0">
        <li className="group relative list-none">
          <Language menuLanguage={language} />
        </li>
        <ThemeToggler />
      </div>
    </div>
  );
};

// w-full delay-300

export default Menu;
