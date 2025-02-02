import Image from "next/image";
import React from "react";

const Cart = () => {
  return (
    <>

      <div>
        <div className="w-full max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 my-20">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 h-auto lg:h-[632.89px]">
            <div className="flex-1 h-auto lg:h-[547.89px] lg:w-3/4 w-full">
              <div className="max-w-[733px] mx-auto">
                <div className="mb-8">
                  <h2 className="font-inter text-[32px] sm:text-2xl font-bold">
                    Bag
                  </h2>
                </div>

                <div className="w-full flex flex-wrap md:flex-nowrap gap-6 lg:gap-[24px] mb-6 border-b pb-6">
                  <div className="flex-shrink-0">
                    <Image
                      src="/5.png"
                      alt="orangechair"
                      height={150}
                      width={150}
                      className="rounded-none"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-inter font-normal text-sm sm:text-base text-[#272343]">
                        Library Stool Chair
                      </h3>
                      <div className="font-inter font-normal text-base sm:text-lg text-[#111111]">
                        MRP: $99
                      </div>
                    </div>
                    <p className="text-[#757575]   text-[15px] leading-[28px]">
                      Ashen Slate/Cobalt Bliss
                    </p>

                    <p className="text-[#757575] text-[15px] leading-[28px]">
                      Quantity{" "}
                      <span className="text-[#757575] text-[14px] leading-[16.94px]">
                        1
                      </span>
                    </p>

                    <div className="flex gap-4 mt-6">
                      <button>
                        <Image
                          src="/heart.png"
                          alt="heart"
                          height={19}
                          width={19}
                        />
                      </button>
                      <button>
                        <Image
                          src="/bin.png"
                          alt="dustbin"
                          height={19}
                          width={19}
                        />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="w-full flex flex-wrap md:flex-nowrap gap-6 lg:gap-[24px] mb-6 border-b pb-6">
                  <div className="flex-shrink-0">
                    <Image
                      src="/Frame.png"
                      alt="wingchair"
                      height={150}
                      width={150}
                      className="rounded-none"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-inter font-normal text-sm sm:text-base text-[#272343]">
                        Library Stool Chair
                      </h3>
                      <div className="font-inter font-normal text-base sm:text-lg text-[#111111]">
                        MRP: $99
                      </div>
                    </div>
                    <p className="text-[#757575]   text-[15px] leading-[28px]">
                      Ashen Slate/Cobalt Bliss
                    </p>

                    <p className="text-[#757575] text-[15px] leading-[28px]">
                      Quantity{" "}
                      <span className="text-[#757575] text-[14px] leading-[16.94px]">
                        1
                      </span>
                    </p>

                    <div className="flex gap-4 mt-6">
                      <button>
                        <Image
                          src="/heart.png"
                          alt="heart"
                          height={19}
                          width={19}
                        />
                      </button>
                      <button>
                        <Image
                          src="/bin.png"
                          alt="dustbin"
                          height={19}
                          width={19}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 lg:w-[350px] w-full">
              <h1 className="font-inter font-bold text-center lg:text-left lg:font-medium text-lg sm:text-xl">
                Summary
              </h1>
              <div className="flex justify-between mt-8">
                <h2 className="text-sm sm:text-base">Subtotal</h2>
                <div className="text-sm sm:text-base">$198.00</div>
              </div>
              <div className="flex justify-between mt-5">
                <h2 className="text-sm sm:text-base">
                  Estimated Delivery And Handling
                </h2>
                <div className="text-sm sm:text-base">Free</div>
              </div>
              <div className="flex justify-between mt-5 py-4 border-y-2">
                <div className="text-sm sm:text-base font-medium">Total</div>
                <div className="text-sm sm:text-base font-medium">$198.00</div>
              </div>
              <button className="rounded-full font-inter font-medium text-white bg-[#029FAE] w-[270.67px] h-12 mt-5 ">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
