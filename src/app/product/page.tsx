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

const Products = () => {
    const products: Product[] = [
        {
          id: 1,
          title: "Library Stool Chair",
          price: 20,
          image: "/01.jpg",
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
          image: "/03.jpg",
        },
        {
          id: 4,
          title: "Library Stool Chair",
          price: 20,
          image: "/04.jpg",
        },
        {
            id: 5,
            title: "Library Stool Chair",
            price: 20,
            image: "/Image (1).png",
            isNew: true,
          },
          {
            id: 6,
            title: "Library Stool Chair",
            price: 20,
            originalPrice: 30,
            image: "/02.png",
            isSale: true,
          },
          {
            id: 7,
            title: "Library Stool Chair",
            price: 20,
            image: "/Image (4).png",
          },
          {
            id: 8,
            title: "Library Stool Chair",
            price: 20,
            image: "/01.jpg",
          },
          {
            id: 9,
            title: "Library Stool Chair",
            price: 20,
            image: "/Image (3).png",
            isNew: true,
          },
          {
            id: 10,
            title: "Library Stool Chair",
            price: 20,
            originalPrice: 30,
            image: "/02.jpg",
            isSale: true,
        },
          {
              id: 11,
              title: "Library Stool Chair",
              price: 20,
              image: "/03.jpg",
            },
          {
              id: 12,
              title: "Library Stool Chair",
              price: 20,
              image: "/Image (2).png",
            },
      ];
  return (
    <>
      <div className="mx-auto px-4 py-20 max-w-[1321px]">
      <h1 className="text-3xl text-start font-semibold text-[#1C1B1F] tracking-tight mb-8">
      All Products
      </h1>

      <div className="flex flex-wrap gap-6 gap-y-10">
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

    <section
      className="bg-[#1E28320D] py-[100px] px-[300px] flex flex-col items-center"
    >
      <h2
        className="text-[50px] font-roboto font-medium text-center text-black mb-8 leading-[59px]"
        
      >
        Or Subscribe To The Newsletter
      </h2>
      <div className="flex items-center justify-center w-full max-w-[760px] gap-2 mb-16 text-[#1E283280] ">
        <input
          type="email"
          placeholder="Email Address..."
          className=" w-[643px] bg-transparent text-[16px] px-4 py-2 outline-none border-b-2 font-roboto border-black"
        />
        <button
          type="submit"
          className="text-lg font-sans text-[16px]  w-[90px] font-bold tracking-wide uppercase border-b-2  border-black"
        >
          Submit
        </button>
      </div>

      <h2 className="text-[50px]  font-medium leading-[58.59px] font-roboto text-center mb-8">
        Follow Products And Discounts On Instagram
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-[1324px] mx-auto">
        <img
          src="/Image (1).png"
          alt="Product 1"
          className="w-full h-auto rounded-lg"
        />
        <img
          src="/Image (3).png"
          alt="Product 2"
          className="w-full h-auto rounded-lg"
        />
        <img
          src="/02.jpg"
          alt="Product 3"
          className="w-full h-auto rounded-lg"
        />
        <img
          src="/20.png"
          alt="Product 4"
          className="w-full h-auto rounded-lg"
        />
        <img
          src="/5.png"
          alt="Product 5"
          className="w-full h-auto rounded-lg"
        />
        <img
          src="/Image (2).png"
          alt="Product 6"
          className="w-full h-auto rounded-lg"
        />
      </div>
    </section>
 </>
)
}

export default Products