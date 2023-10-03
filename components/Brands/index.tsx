"use client";
import React from "react";
import brandData from "./brandData";
import MultipleItemsCarousel from "../MultipleItemsCarousel";

const Brands = () => {
  return (
    <section className="bg-alabaster dark:bg-black border border-x-0 border-y-stroke dark:border-y-strokedark py-11">
      <div className="mx-auto max-w-c-1390 px-8 md:px-8 2xl:px-0">
        <MultipleItemsCarousel sources={brandData} />
      </div>
    </section>
  );
};

export default Brands;
