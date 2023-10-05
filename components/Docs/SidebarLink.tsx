"use client";
import Link from "next/link";
import { usePathname } from 'next/navigation';

const menus = [
  {
    url: '/docs/bootstrap',
    title: 'Introduction'
  },
  {
    url: '/docs/bootstrap-template-guide',
    title: 'Bootstrap Template Guide'
  },
  {
    url: '/docs/style-guide',
    title: 'Style Guide'
  },
  {
    url: '/docs/tailwind',
    title: 'Using Tailwind Components'
  }
]

const SidebarLink = () => {
  const path = usePathname();

  return (
    <li className="block">
      {menus?.map((menu, index) => (
        <Link
          key={index}
          href={menu.url}
          className={`text-base py-2 px-3 rounded-sm flex w-full text-black dark:text-white ${path === menu.url && 'bg-stroke dark:bg-blackho'}`}
        >
          {menu.title}
        </Link>
      ))}
    </li>
  );
};

export default SidebarLink;
