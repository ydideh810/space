"use client";
import Image from "next/image";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

export const HeroContent = () => {
  return (
    <motion.div initial="hidden" animate="visible" className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]">
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div className="Welcome-box py-[8px] px-[7px] border border-[#633232] opacity-[0.9]" variants={slideInFromTop}>
          <SparklesIcon className="text-[#633232] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Ultimate Private AI Enterprise</h1>
        </motion.div>

        <motion.div variants={slideInFromLeft(0.5)} className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto">
          <span>
            Experience
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-900 to-gray-500"> the power of AI </span>
             without compromising your privacy.
          </span>
        </motion.div>

        <motion.p variants={slideInFromLeft(0.8)} className="text-lg text-gray-400 my-5 max-w-[600px]">
          Niddam is an AI company dedicated to providing you with LLM products & tools that enhance your workflow & respects your privacy!
        </motion.p>
        <motion.a variants={slideInFromLeft(1)} className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]">
          EXPLORE
        </motion.a>
      </div>

      <motion.div variants={slideInFromRight(0.8)} className="w-full h-full flex justify-center items-center ">
        <Image src="/lllm.svg" alt="Work icons" height={650} width={650} />
      </motion.div>
    </motion.div>
  );
};
