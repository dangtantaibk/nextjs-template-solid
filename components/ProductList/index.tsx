"use client";
import React from "react";
import Image from "next/image";
import { Products } from "@/types/feature";
import { money } from 'public/config'

interface ProductListProps {
  products: Products[];
}

const Product = (props: Products) => {
  const { image, nameProduct, price } = props;
  return (
    <a href="#" className="group">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <Image
          src={image}
          alt="shape"
          width={300}
          height={300}
          className="h-full w-full object-cover object-center group-hover:opacity-75" /> </div>
      <h3 className="mt-4 text-lg">{nameProduct}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">Giá: {money(price)} đ</p>
    </a>
  )
}

const ProductList = (props: ProductListProps) => {
  const { products } = props;

  return (
    <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.map((product, index) => (
          <Product
            key={index}
            id={product.id}
            image={product.image}
            nameProduct={product.nameProduct}
            price={product.price} />))}
      </div>
    </section>
  );
};

export default ProductList;
