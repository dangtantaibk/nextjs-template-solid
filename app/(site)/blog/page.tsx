import products from "../../../components/Blog/products";
import CardProduct from '../../../components/CardProduct';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Page - Solid SaaS Boilerplate",
  description: "This is Blog page for Solid Pro",
  // other metadata
};

const BlogPage = async () => {
  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <CardProduct
        title="TIN TỨC & BLOGS"
        subtitle="Tin tức & Blog mới nhất "
        description="Cập nhập các tin tức và thông tin"
        products={products}
      />
    </section>
  );
};

export default BlogPage;
