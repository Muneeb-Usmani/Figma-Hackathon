import React from "react";
import Image from "next/image";
import Link from "next/link";
import OurProduct from "@/components/FeaturedProducts";

const chairs = () => {
  return (

    <div className="container mx-auto px-4">
  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 mt-10 font-inter">
    <div className="max-w-[675px] w-full">
      <Image
        src="/sImage.png"
        alt="Pink chair"
        className="w-5/6 h-5/6 lg:w-[660px] lg:h-[500px] xl:w-[675px] xl:h-[607px] object-cover rounded-lg"
        height={607}
        width={675}
      />
    </div>

    <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left gap-3">
      <h1 className="text-[#272343] font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-7">
        Library Stool <span className="lg:block"> Chair
            </span> 
      </h1>

        <button className="w-[144px] h-[44px] mb-7 px-6 py-2 bg-[#029FAE] text-white rounded-full hover:bg-[#307075] transition-all">
          $20.00 USD
        </button>

      <hr className="w-[543px] border-gray-300 mb-7" />

      <p className="w-[543px] text-[#272343] opacity-[60%] font-normal text-base md:text-lg lg:text-xl leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing.
      </p>

      <Link href="/cart">
        <div className="h-[63px] w-[212px] flex items-center justify-center lg:justify-start mt-6 py-[14px] px-6 gap-3 text-lg font-semibold bg-[#029FAE] rounded-lg hover:scale-105 transition-transform">
          <Image src="/cart.svg" alt="cart" width={24} height={24} />
          <span className="text-white">Add to Cart</span>
        </div>
      </Link>
    </div>
  </div>
  <OurProduct />
</div>

  );
};

export default chairs;
