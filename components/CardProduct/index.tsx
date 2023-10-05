import React from "react";
import HeaderCard from "./HeaderCard";
import ProductItem from "./ProductItem";
import BlogData from "./blogData";

interface CardProductProps {
  title: string;
  subtitle: string;
  description: string;
  products: any;
}

const CardProduct = (props: CardProductProps) => {
  const { title, subtitle, description, products } = props;
  return (
    <div>
      <HeaderCard
        title={title}
        subtitle={subtitle}
        description={description}
      />
      <div className="mx-auto max-w-c-1280 px-4 md:px-8 xl:px-0 mt-15 xl:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 xl:gap-10">
          {products.map((product, key) => (
            <ProductItem product={product} key={key} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
