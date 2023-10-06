import { Metadata } from "next";

import Introduce from "@/components/Introduce";
import InformationServices from "@/components/InformationServices";
import SaleProduct from "@/components/SaleProduct";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
import FeaturesTab from "@/components/FeaturesTab";

import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "Gift Kido",
  description: "High-quality, impressive Tet gift box.",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Introduce />
      <InformationServices />
      <SaleProduct />
      <FeaturesTab/>
      <Testimonial/>
      <Contact />
      <Blog />

      <Integration/>
      <FunFact/>
      <CTA/>
      <FAQ/>
      <Pricing/>
      <About/>
    </main>
  );
}
