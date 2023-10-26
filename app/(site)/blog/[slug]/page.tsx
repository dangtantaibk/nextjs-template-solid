import SharePost from "@/components/Blog/SharePost";
import '@notion-render/client/sass/theme.scss';
import moment from "moment";
import FormBlog from '@/components/FormBlog';

import { useTranslationServer } from 'app/i18n';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Đây là trang Blog của cửa hàng",
};

interface BlogDetail {
  id: number;
  title: string;
  shortDesc: string;
  content: string;
  contentAdmin: string;
  url: string;
  author: number;
  publishedDate: number;
  status: number;
  createdAt: number;
  updatedAt: number;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const blogDetail: BlogDetail = await fetch(`https://banhtrungthu24h.com/api/v1/blogs/url/${params.slug}`).then((res) => res.json());
  const { title, author, content, publishedDate } = blogDetail;
  const { t } = await useTranslationServer('en');

  return (
    <FormBlog>
      <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-7.5 md:p-10">
        <h2 className="font-semibold text-3xl 2xl:text-sectiontitle2 text-black dark:text-white mb-5 uppercase">
          {title}
        </h2>
        <ul className="flex flex-wrap gap-5 2xl:gap-7.5 mb-9">
          <li>
            <span className="text-black dark:text-white">{t('author')}: </span>{" "}
            Author_{author}
          </li>
          <li>
            <span className="text-black dark:text-white">
              Published On: {publishedDate ? moment(publishedDate).format('DD/MM/YYYY') : "-"}
            </span>{" "}
          </li>
          <li>
            <span className="text-black dark:text-white">
              Category:
            </span>
            Events
          </li>
        </ul>
        <div className="text-black dark:text-white border-b border-stroke mb-5">Nội dung: </div>
        <div dangerouslySetInnerHTML={{ __html: content }} />
        <SharePost />
      </div>
    </FormBlog>
  );
}