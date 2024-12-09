import Categories from "@/components/Categories";
import CompanyLogo from "@/components/CompanyLogo";
import FeaturedProducts from "@/components/FeaturedProducts";
import Hero from "@/components/Hero";
import HotProduct from "@/components/HotProduct";
import OurProduct from "@/components/OurProduct";

export default function Home() {
  return (
    <>
      <Hero />
      <CompanyLogo />
      <FeaturedProducts/>
      <Categories />
      <HotProduct />
      <OurProduct />  
    </>
  );
}
