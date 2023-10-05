import React from 'react';
import SidebarLink from "./SidebarLink";

interface DocumentPageProps {
  children: React.ReactNode
}

const DocumentPage = (props: DocumentPageProps) => {
  const { children } = props;
  return (
    <React.Fragment>
      <title>Docs - Startup</title>
      <section className="pb-16 md:pb-20 lg:pb-24 pt-24 md:pt-28 lg:pt-32">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 lg:w-1/4">
              <div className="sticky top-[74px] p-4 border border-white shadow-solid-4 rounded-lg  transition-all  dark:border-strokedark dark:bg-blacksection">
                <ul className="space-y-2">
                  <SidebarLink />
                </ul>
              </div>
            </div>
            <div className="w-full px-4 lg:w-3/4">
              <div className="blog-details blog-details-docs rounded-sm bg-white py-11 px-8 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                {children}
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default DocumentPage
