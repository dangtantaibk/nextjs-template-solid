"use client";
import Image from "next/image";
import Link from "next/link";

import { Blog } from "@/types/blog";
import { motion } from "framer-motion";
import { money } from 'public/config'

interface TitleProps {
  title: string;
}

interface SubTitleProps {
  subTitle: string | undefined;
}

const Title = (props: TitleProps) => {
  const { title } = props;
  return (
    <h4 className="font-medium text-md xl:text-itemtitle2 text-black hover:text-primary dark:hover:text-primary dark:text-white mt-7.5 mb-3.5 uppercase">
      <Link href={`/blog/blog-details`}>
        {`${title.slice(0, 40)}...`}
      </Link>
    </h4>
  )
}

const SubTitle = (props: SubTitleProps) => {
  const { subTitle } = props;
  return (
    <p>{subTitle ? `${subTitle.slice(0, 100)}...` : ""}</p>
  )
}

const ProductItem = (props: any) => {
  const { product } = props;

  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: -20,
        },

        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1, delay: 0.5 }}
      viewport={{ once: true }}
      className="animate_top bg-white dark:bg-blacksection rounded-lg shadow-solid-8 p-4 pb-9"
    >
      <Link href={`/blog${product?.url}` || '/blog'}>
        <div className="block relative aspect-[368/239]">
          <img src={product.backgroundUrl || '/images/blog/blog-01.png'} alt={product.nameProduct} style={{ borderRadius: 10 }} className="aspect-[368/239] object-cover"/>
        </div>
        <div className="px-4">
          <Title title={product?.title} />
          {product.price && <p className="mt-1 text-lg font-medium text-gray-900">Giá: {money(product.price)} đ</p>}
          <SubTitle subTitle={product.shortDesc} />
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductItem;
