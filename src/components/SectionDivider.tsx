const SectionDivider = () => {
  return (
    <div className="relative w-full py-10 flex items-center justify-center">
      {/* Horizontal line across full width */}
      <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      
      {/* Small star/diamond on the line - positioned to the left */}
      <div className="absolute left-1/4 md:left-1/3">
        <svg width="12" height="12" viewBox="0 0 12 12" className="text-gold opacity-70">
          <path
            d="M6 0L6.5 5.5L12 6L6.5 6.5L6 12L5.5 6.5L0 6L5.5 5.5Z"
            fill="currentColor"
          />
        </svg>
      </div>
      
      {/* Circle with radial lines - positioned to the right */}
      <div className="absolute right-8 md:right-16 lg:right-24">
        <svg width="100" height="100" viewBox="0 0 100 100" className="text-gold opacity-60">
          {/* Outer circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            opacity="0.5"
          />
          
          {/* Radial lines emanating from center */}
          {[...Array(36)].map((_, i) => {
            const angle = (i * 10) * (Math.PI / 180);
            const x1 = 50 + Math.cos(angle) * 8;
            const y1 = 50 + Math.sin(angle) * 8;
            const x2 = 50 + Math.cos(angle) * 45;
            const y2 = 50 + Math.sin(angle) * 45;
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="currentColor"
                strokeWidth="0.5"
                opacity="0.4"
              />
            );
          })}
          
          {/* Center glow point */}
          <circle
            cx="50"
            cy="50"
            r="3"
            fill="currentColor"
            opacity="0.6"
          />
        </svg>
      </div>
    </div>
  );
};

export default SectionDivider;
