import sectionDividerImg from "@/assets/section-divider.png";

const SectionDivider = () => {
  return (
    <div className="relative w-full py-8 flex items-center justify-center">
      <img 
        src={sectionDividerImg} 
        alt="" 
        className="h-16 md:h-20 w-auto opacity-80"
      />
    </div>
  );
};

export default SectionDivider;
