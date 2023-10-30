import React from "react";

interface IconMenuProps {
  navigationOpen: Boolean;
}

const IconMenu = (props: IconMenuProps) => {
  const { navigationOpen } = props;

  return (
    <span className="block relative cursor-pointer w-5.5 h-5.5">
      <span className="block absolute w-full h-full">
        <span
          className={`block relative top-0 left-0 bg-black dark:bg-white rounded-sm w-0 h-0.5 my-1 ease-in-out duration-200 delay-[0] ${!navigationOpen ? "!w-full delay-300" : ""
            }`}
        />
        <span
          className={`block relative top-0 left-0 bg-black dark:bg-white rounded-sm w-0 h-0.5 my-1 ease-in-out duration-200 delay-150 ${!navigationOpen ? "!w-full delay-400" : ""
            }`}
        />
        <span
          className={`block relative top-0 left-0 bg-black dark:bg-white rounded-sm w-0 h-0.5 my-1 ease-in-out duration-200 delay-200 ${!navigationOpen ? "!w-full delay-500" : ""
            }`}
        />
      </span>
      <span className="block absolute w-full h-full rotate-45">
        <span
          className={`block bg-black dark:bg-white rounded-sm ease-in-out duration-200 delay-300 absolute left-2.5 top-0 w-0.5 h-0 ${navigationOpen ? "h-full delay-[0]" : ""
            }`}
        />
        <span
          className={`block bg-black dark:bg-white rounded-sm ease-in-out duration-200 delay-400 absolute left-0 top-[.03rem] w-full h-0 ${navigationOpen ? "h-0.5 dealy-200" : ""
            }`}
        />
      </span>
    </span>
  );
};

// w-full delay-300

export default IconMenu;
