"use client";
import products from "components/Blog/products";
import CardProduct from 'components/CardProduct';

import { useTranslation } from 'react-i18next';


const BlogPage = () => {
  const { t } = useTranslation();
  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <CardProduct
        title={t('titleBlog')}
        subtitle="Tin tức & Blog mới nhất "
        description="Cập nhập các tin tức và thông tin"
        products={products}
      />
    </section>
  );
};

export default BlogPage;
