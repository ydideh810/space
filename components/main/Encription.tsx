"use client";

import { slideInFromTop } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";

const Encription = () => {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full">
      <div className="absolute w-auto h-auto top-0 z-[5]">
       <motion.div className="text-[40px] font-medium text-center text-gray-200" variants={slideInFromTop}>
          Performance
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-stone-500"> & </span>
          Security
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto">
        <div className="flex flex-col group items-center cursor-pointer w-auto h-auto">
          <Image className="translate-y-5 transition-all duration-200 group-hover:translate-y-11" src="/Top.png" alt="Lock Top" width={50} height={50} />
          <Image className="z-10" src="/Lock.png" alt="Lock Main" width={70} height={70} />
        </div>

        <div className="Welcome-box px-[15px] py-[4px] z-[20] border my-[20px] border-[#B20000] opacity-[0.9]">
          <h1 className="Welcome-text text-[12px]">Encryption</h1>
        </div>
      </div>

      <div className="absolute z-[20] bottom-[10px] px-[5px] ">
        <div className="cursive text-[20px] font-medium text-center text-gray-50">YOUR DATA SECURED W/ END2END ENCRYPTION</div>
      </div>

      <div className="w-[80%] flex items-start justify-center absolute">
        <video className="w-full h-auto" loop muted autoPlay playsInline preload="false" src="/dark.mp4" />
      </div>
    </div>
  );
};

export default Encription;
