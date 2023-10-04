"use client";
import React from "react";
import products from "./featuresData";
import SectionHeader from "../Common/SectionHeader";
import ProductList from "../ProductList";

const Feature = () => {
  console.log("products", products)
  return (
    <section id="features" className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <SectionHeader
          headerInfo={{
            title: "KHUYẾN MÃI TỪ QUÀ TẾT 24h",
            subtitle: "FLASH SALE",
            description: `Hộp quà tết cao cấp`,
          }}
        />
        <ProductList products={products} />
      </div>
    </section>
  );
};

export default Feature;
