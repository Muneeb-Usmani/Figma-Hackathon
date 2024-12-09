import Image from "next/image";
import {
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-[#272343] w-[1920px] h-[418px] ml-[-12px]">
      <div className="container mx-auto px-[120px] flex justify-between items-start h-[343px] py-20 gap-6 border-y">
        <div className="flex flex-col gap-6 w-[350px]">
          <div className="flex gap-2 items-center">
            <Image src="/LogoIcon.png" alt="logoicon" width={40} height={40} />
            <h3 className="text-[26px] font-bold text-[#272343] leading-[31.2px]">
              Comforty
            </h3>
          </div>
          <p className="text-[#272343] opacity-60 text-[16px] leading-6 w-[350px]">
            <span className="block">
              Vivamus tristique odio sit amet velit semper,
            </span>
            eu posuere turpis interdum.
            <span className="block">Cras sagittis purus.</span>
          </p>
          <div className="flex gap-5">
            <a href="#" className="text-[#272343] hover:text-[#007580] ">
              <FaFacebook />
            </a>
            <a href="#" className="text-[#272343] hover:text-[#007580] ">
              <FaTwitter />
            </a>
            <a href="#" className="text-[#272343] hover:text-[#007580] ">
              <FaInstagram />
            </a>
            <a href="#" className="text-[#272343] hover:text-[#007580] ">
              <FaPinterest />
            </a>
            <a href="#" className="text-[#272343] hover:text-[#007580] ">
              <FaYoutube />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-[285px]">
          <h3 className="text-[14px] text-[#9A9CAA] leading-[15.4px] font-medium">
            CATEGORY
          </h3>
          <ul className="flex flex-col gap-2">
            <li>
              <a
                href="#"
                className="text-[#272343] hover:text-[#007580] hover:underline"
              >
                Sofa
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#272343] hover:text-[#007580] hover:underline"
              >
                Arm Chair
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#272343] hover:text-[#007580] hover:underline"
              >
                Wing Chair
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#272343] hover:text-[#007580] hover:underline"
              >
                Desk Chair
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#272343] hover:text-[#007580] hover:underline"
              >
                Wooden Chair
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#272343] hover:text-[#007580] hover:underline"
              >
                Park Bench
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 w-[285px]">
          <h3 className="text-[14px] text-[#9A9CAA] leading-[15.4px] font-medium">
            SUPPORT
          </h3>
          <ul className="flex flex-col gap-2">
            <li>
              <a
                href="#"
                className="text-[#272343] hover:text-[#007580] hover:underline"
              >
                Help & Support
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#272343] hover:text-[#007580] hover:underline"
              >
                Terms & Conditions
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#272343] hover:text-[#007580] hover:underline"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#272343] hover:text-[#007580] hover:underline"
              >
                Help
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 w-[424px]">
          <h3 className="text-[14px] text-[#9A9CAA] leading-[15.4px] font-medium">
            NEWSLETTER
          </h3>
          <form className="flex gap-2 w-[424px]">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 bg-white border border-[#E1E3E5] px-4 py-2 rounded-lg w-[285px] h-[48px]"
            />
            <button
              type="submit"
              className="bg-[#029FAE] text-white px-6 py-[14px] rounded-[8px]"
            >
              Subscribe
            </button>
          </form>
          <div className="text-[#272343] opacity-[60%] text-[15px] leading-[22.5px]">
            <span className="block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
            <span className="block">Nullam tincidunt erat enim.</span>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-[120px] mt-8 flex justify-between items-center">
        <p className="text-[#9A9CAA] font-poppins text-[14px]">
          @ 2021 - Blogy - Designed & Develop by <span className="text-[#272343]">Zakirsoft</span>
        </p>
        <div className="flex gap-4">
<Image 
src="/Logos.png"
width={227}
height={27}
alt="payment methods"
/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
