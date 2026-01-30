const SectionDivider = () => {
  return (
    <div className="relative w-full py-8 flex items-center justify-center overflow-hidden">
      {/* Main horizontal line */}
      <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      
      {/* Sunburst pattern with two semi-circles */}
      <div className="relative w-32 h-16">
        {/* Left semi-circle with radial lines */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2">
          <svg width="64" height="64" viewBox="0 0 64 64" className="text-gold">
            {/* Semi-circle arc - left side */}
            <path
              d="M 32 8 A 24 24 0 0 0 32 56"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              opacity="0.4"
            />
            {/* Radial lines - left semi-circle */}
            {[...Array(9)].map((_, i) => {
              const angle = (i * 20 - 80) * (Math.PI / 180);
              const x1 = 32 + Math.cos(angle) * 8;
              const y1 = 32 + Math.sin(angle) * 8;
              const x2 = 32 + Math.cos(angle) * 24;
              const y2 = 32 + Math.sin(angle) * 24;
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="currentColor"
                  strokeWidth="0.5"
                  opacity="0.35"
                />
              );
            })}
          </svg>
        </div>
        
        {/* Right semi-circle with radial lines */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2">
          <svg width="64" height="64" viewBox="0 0 64 64" className="text-gold">
            {/* Semi-circle arc - right side */}
            <path
              d="M 32 8 A 24 24 0 0 1 32 56"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              opacity="0.4"
            />
            {/* Radial lines - right semi-circle */}
            {[...Array(9)].map((_, i) => {
              const angle = (i * 20 - 80) * (Math.PI / 180);
              const x1 = 32 - Math.cos(angle) * 8;
              const y1 = 32 + Math.sin(angle) * 8;
              const x2 = 32 - Math.cos(angle) * 24;
              const y2 = 32 + Math.sin(angle) * 24;
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="currentColor"
                  strokeWidth="0.5"
                  opacity="0.35"
                />
              );
            })}
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SectionDivider;
