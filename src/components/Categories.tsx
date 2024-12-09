import React from "react";
import Image from "next/image";
import Link from "next/link";

const TopCategories = () => {
  const categories = [
    {
      name: "Wing Chair",
      products: "3,584 Products",
      image: "/Image (3).png",
      href: "/categories/wing-chair",
    },
    {
      name: "Wooden Chair",
      products: "157 Products",
      image: "/Image (1).png",
      href: "/categories/wooden-chair",
    },
    {
      name: "Desk Chair",
      products: "154 Products",
      image: "/Image (2).png",
      href: "/categories/desk-chair",
    },
  ];

  return (
    <section className="w-full px-4 pb-32 flex justify-center ">
  <div className="w-[1321px]">
    <h2 className="text-3xl font-bold tracking-tight mb-8 text-start text-[#272343]">
      Top Categories
    </h2>

    <div className="flex gap-6 justify-center">
      {categories.map((category) => (
        <Link
          key={category.name}
          href={category.href}
          className="relative w-[424px] h-[424px] flex-shrink-0 rounded-lg overflow-hidden shadow-md"
        >
          <Image
            src={category.image}
            alt={category.name}
            className="object-cover w-full h-full"
            width={424}
            height={424}
          />

          <div className="absolute bottom-0 left-0 right-0 bg-[#000000B2] p-4 gap-2 h-[85px] flex flex-col items-start justify-center">
            <h3 className="text-[20px] leading-[22px]  text-white">{category.name}</h3>
            <p className="text-gray-300 text-[14px] leading-[15.4px]">{category.products}</p>
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>

  );
};

export default TopCategories;
