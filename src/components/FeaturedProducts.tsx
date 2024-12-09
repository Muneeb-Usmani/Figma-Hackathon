import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  isNew?: boolean;
  isSale?: boolean;
}

export default function OurProduct() {
  const products: Product[] = [
    {
      id: 1,
      title: "Library Stool Chair",
      price: 20,
      image: "/20.png",
      isNew: true,
    },
    {
      id: 2,
      title: "Library Stool Chair",
      price: 20,
      originalPrice: 30,
      image: "/02.jpg",
      isSale: true,
    },
    {
      id: 3,
      title: "Library Stool Chair",
      price: 20,
      image: "/5.png",
    },
    {
      id: 4,
      title: "Library Stool Chair",
      price: 20,
      image: "/01.png",
    },
  ];

  return (
    <div className="mx-auto px-4 py-20 max-w-[1321px]">
      <h1 className="text-3xl text-start font-semibold text-[#1C1B1F] tracking-tight mb-8">
      Featured Products
      </h1>

      <div className="flex flex-wrap gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative rounded-lg bg-white w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
          >
            <div className="relative aspect-square overflow-hidden rounded-lg">
              {product.isNew && (
                <Badge className="absolute left-3 top-3 bg-emerald-500 hover:bg-emerald-600">
                  New
                </Badge>
              )}
              {product.isSale && (
                <Badge className="absolute left-3 top-3 bg-orange-500 hover:bg-orange-600">
                  Sales
                </Badge>
              )}
              <Link href={"components/productDectription/discription"}>
                <Image
                  src={product.image}
                  alt={product.title}
                  height={400}
                  width={400}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <h3 className="text-sm text-[#1C1B1F]">{product.title}</h3>
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-lg font-medium text-[#1C1B1F]">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
              </div>
              <button className="rounded bg-[#F0F2F3] p-2  hover:text-white transition-colors hover:bg-[#00A294]">
                 <Image
                src="/cart.svg"
                height={16.54}
                width={16.96}
                alt="cart icon"/>
                <span className="sr-only">Add to cart</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
