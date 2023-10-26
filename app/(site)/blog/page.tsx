"use client";
import React, { useEffect, useState } from "react";
import products from "components/Blog/products";
import CardProduct from 'components/CardProduct';
import request from '@/utils/request';

import { useTranslation } from 'react-i18next';

interface BlogsDetailProp {
  author: number;
  content: string | null;
  createdAt: number;
  id: number;
  publishedDate: number;
  shortDesc: string;
  status: number;
  title: string;
  updatedAt: number;
  url?: string;
}

const BlogPage = () => {
  const { t } = useTranslation();
  const [loading, setloading] = useState(false);
  const [blogs, setBlogs] = useState<BlogsDetailProp[]>();

  const getBlog = async () => {
    setloading(true)
    const resp: any = await request(`api/v1/blogs/webs`);
    try {
      if (resp.data) {
        const data = resp.data;
        setBlogs(data.content)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setloading(false);
    }
  }

  useEffect(() => {
    getBlog();
  }, []);

  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <CardProduct
        title={t('titleBlog')}
        subtitle="Tin tức & Blog mới nhất "
        description="Cập nhập các tin tức và thông tin"
        products={products}
        data={blogs}
      />
    </section>
  );
};

export default BlogPage;
