import Image from 'next/image';

const GridLayout = () => {
  return (
    <div className="w-full max-w-[1920px] mx-auto">
      <div className="mx-auto w-[1320px] h-[648px] flex items-center">
        <div className="relative flex items-center">
        <p
            className="text-[34px] leading-[39.84px] uppercase tracking-normal whitespace-nowrap font-roboto"
            style={{
              writingMode: 'vertical-rl',
              transform: 'rotate(180deg)',
              height: '648px',
            }}
          >
            Explore new and popular styles
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 w-full h-[648px]">
          <div className="h-full">
            <Image
              src="/item-category 1.png"
              alt="Large Image"
              width={648}
              height={648}
              className="w-[648px] h-[648px] object-cover"
            />
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-6">
            <Image
              src="/01.png"
              alt="Small Image 1"
              width={312}
              height={312}
              className="w-[312px] h-[312px] object-cover"
            />
            <Image
              src="/20.png"
              alt="Small Image 2"
              width={312}
              height={312}
              className="w-[312px] h-[312px] object-cover"
            />
            <Image
              src="/02.png"
              alt="Small Image 3"
              width={312}
              height={312}
              className="w-[312px] h-[312px] object-cover"
            />
            <Image
              src="/20.png"
              alt="Small Image 4"
              width={312}
              height={312}
              className="w-[312px] h-[312px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridLayout;
