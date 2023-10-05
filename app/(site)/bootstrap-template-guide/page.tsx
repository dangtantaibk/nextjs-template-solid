"use client";
import React, { memo } from "react";
import SidebarLink from "@/components/Docs/SidebarLink";
import matter from 'gray-matter';
import path from 'path';
import example from './example.mdx'

import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

interface DocsPageProps {
  // frontMatter: any;
  source: any;
}

const DocsPage = (props: DocsPageProps) => {
  const { source } = props;
  console.log("source", source)
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
                <div>
                  {/* <h1>{frontMatter?.title}</h1> */}
                  <MDXRemote {...source} />
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

DocsPage.getInitialProps = async ({ }) => {
  const fs = await import("fs-extra");
  const mdxFilePath = path.join(process.cwd(), `${example}`);
  const mdxFileContent = fs.readFileSync(mdxFilePath, 'utf-8');
  const { content } = matter(mdxFileContent);
  const mdxSource = await serialize(content);

  return {
    props: {
      source: mdxSource,
      // frontMatter: data,
    },
  };
};

export default memo(DocsPage);