"use client";
import React from "react";
import products from "./products";
import CardProduct from '../CardProduct';

const SaleProduct = () => {
  return (
    <section id="saleProduct" className="py-20 lg:py-25 xl:py-30">
      <CardProduct 
        title="KHUYẾN MÃI KIDO"
        subtitle="FLASH SALE"
        description="High-end gifts"
        products={products}
      />
    </section>
  );
};

export default SaleProduct;
