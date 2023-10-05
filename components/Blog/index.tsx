import React from "react";
import products from "./products";
import CardProduct from '../CardProduct';

const Blog = () => {
  return (
    <section id="blog" className="py-20 lg:py-25 xl:py-30">
      <CardProduct 
        title="TIN TỨC & BLOGS"
        subtitle="Tin tức & Blog mới nhất "
        description="Cập nhập các tin tức và thông tin"
        products={products}
      />
    </section>
  );
};

export default Blog;
