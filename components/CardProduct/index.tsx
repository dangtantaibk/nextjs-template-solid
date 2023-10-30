"use client";
import React from "react";
import HeaderCard from "./HeaderCard";
import ProductItem from "./ProductItem";
interface CardProductProps {
  title: string;
  subtitle: string;
  description: string;
  products?: any;
  data?: any; 
}

const CardProduct = (props: CardProductProps) => {
  const { title, subtitle, description, products, data } = props;

  return (
    <div>
      <HeaderCard
        title={title}
        subtitle={subtitle}
        description={description}
      />
      <div className="mx-auto max-w-c-1280 px-4 md:px-8 xl:px-0 mt-15 xl:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 xl:gap-10">
          {data?.map((item: any, index)=>(
            <ProductItem product={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
