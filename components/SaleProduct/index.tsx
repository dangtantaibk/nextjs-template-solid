"use client";
import React from "react";
import products from "./products";
import CardProduct from '../CardProduct';

const SaleProduct = () => {
  return (
    <section id="saleProduct" className="py-20 lg:py-25 xl:py-30">
      <CardProduct 
        title="KHUYẾN MÃI TỪ QUÀ TẾT 24H"
        subtitle="FLASH SALE"
        description="Hộp quà tết cao cấp"
        products={products}
      />
    </section>
  );
};

export default SaleProduct;
