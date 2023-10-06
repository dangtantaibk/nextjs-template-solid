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
        title="NEWS & BLOGS"
        subtitle="News & Blogs"
        description="Update news and information"
        products={products}
      />
    </section>
  );
};

export default BlogPage;
