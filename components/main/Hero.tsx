import { HeroContent } from "@/components/sub/HeroContent";
export const Hero = () => {
  return (
    <div className="relative flex bg-red-900 flex-col h-full w-full">
      <video autoPlay muted loop className="rotate-180 absolute top-[-340px] left-0 z-[1] w-full h-full object-cover">
        <source src="/void.mp4" type="video/mp4" />
      </video>
      <HeroContent />
    </div>
  );
};
