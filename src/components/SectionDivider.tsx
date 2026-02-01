import sectionDividerImg from "@/assets/section-divider.png";

const SectionDivider = () => {
  return (
    <div className="relative w-full py-6 md:py-8 flex items-center justify-center overflow-hidden">
      <img 
        src={sectionDividerImg} 
        alt="" 
        className="h-12 md:h-16 w-auto opacity-70 max-w-full"
      />
    </div>
  );
};

export default SectionDivider;
