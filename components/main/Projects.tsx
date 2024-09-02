import { ProjectCard } from "../sub/ProjectCard";

export const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h1 className="text-[40px] font-semibold text-stone-50 bg-clip-text py-20">P R O D U C T S</h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <a href="https://www.niddampro.site/">
        <ProjectCard src="/nidai.png" title="Your ultimate private assistant!" description="With over 30 LLMs in store, you can chat, generate, summerize and automate in any way you want whilst being in total control of your data. At all times. 
" /> 
    </a>
        <ProjectCard src="/Nidlabs.png" title="Your private, open-source, AI assistant platform." description="Tune to empower your team with AI." />
        <ProjectCard src="/nisearch.png" title="Decentralized AI Search Engine." description="For a healthier internet." />
      </div>
    </div>
  );
};
