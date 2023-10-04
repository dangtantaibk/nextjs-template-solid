import { Metadata } from "next";

import Introduce from "@/components/Introduce";
import InformationServices from "@/components/InformationServices";
import SaleProduct from "@/components/SaleProduct";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Hộp quà tặng tết 24h",
  description: "Hộp quà Tết cao cấp, ấn tượng.",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Introduce />
      <InformationServices />
      <SaleProduct />
      <Contact />
      <Blog />
    </main>
  );
}
