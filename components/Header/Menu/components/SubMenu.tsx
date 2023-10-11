"use client";
import React, { useState } from "react";
import Link from "next/link";

interface SubmenuType {
  id: number;
  title: string;
  newTab: Boolean;
  path: string;
}

interface SubMenuProps {
  title: string;
  menu: SubmenuType[];
}

const SubMenu = (props: SubMenuProps) => {
  const { title, menu } = props;

  const [dropdownToggler, setDropdownToggler] = useState(false);

  return (
    <React.Fragment>
      <a
        onClick={() => setDropdownToggler(!dropdownToggler)}
        className="hover:text-primary flex items-center justify-between gap-3 cursor-pointer"
      >
        {title}
        <span>
          <svg
            className="fill-waterloo group-hover:fill-primary w-3 h-3 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
          </svg>
        </span>
      </a>

      <ul
        className={`dropdown ${dropdownToggler ? "flex" : ""}`}
      >
        {menu.map((item, key) => (
          <li key={key} className="hover:text-primary">
            <Link href={item.path || "#"}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default SubMenu;
