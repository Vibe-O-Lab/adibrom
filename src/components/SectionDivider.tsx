const SectionDivider = () => {
  return (
    <div className="relative w-full py-8 flex items-center justify-center overflow-hidden">
      {/* Main horizontal line */}
      <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      
      {/* Sunburst/radial pattern */}
      <div className="relative w-24 h-24">
        {/* Center dot */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-gold/60" />
        
        {/* Radial lines */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute left-1/2 top-1/2 origin-center"
            style={{
              width: '1px',
              height: '40px',
              background: `linear-gradient(to top, hsl(var(--gold) / 0.4), transparent)`,
              transform: `translate(-50%, -100%) rotate(${i * 15}deg)`,
            }}
          />
        ))}
        
        {/* Partial arc */}
        <div 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border border-gold/20"
          style={{
            clipPath: 'polygon(50% 0%, 100% 0%, 100% 50%, 50% 50%)',
          }}
        />
      </div>
    </div>
  );
};

export default SectionDivider;
