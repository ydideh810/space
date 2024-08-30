import { Socials } from "@/constants";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#610E0F]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a className="h-auto w-auto flex flex-row items-center" href="#about-me">
          <Image src="/st.png" alt="logo" width={70} height={70} className="cursor-pointer hover:animate-slowspin" />

        
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#610E0F] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a className="cursor-pointer" href="#about-me">
              About Us
            </a>
            <a className="cursor-pointer" href="#skills">
              Products
            </a>
            <a className="cursor-pointer" href="#projects">
              Special
            </a>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default Navbar;
