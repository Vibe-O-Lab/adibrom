const SectionDivider = () => {
  return (
    <div className="relative w-full py-12 flex items-center justify-center overflow-hidden">
      {/* Main horizontal line */}
      <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      
      {/* Full circle with radial lines - sunburst pattern */}
      <div className="relative">
        <svg width="80" height="80" viewBox="0 0 80 80" className="text-gold">
          {/* Outer circle arc */}
          <circle
            cx="40"
            cy="40"
            r="36"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            opacity="0.4"
          />
          
          {/* Radial lines - left half (pointing left) */}
          {[...Array(9)].map((_, i) => {
            const angle = (i * 20 + 100) * (Math.PI / 180); // 100° to 260° (left half)
            const x1 = 40 + Math.cos(angle) * 6;
            const y1 = 40 + Math.sin(angle) * 6;
            const x2 = 40 + Math.cos(angle) * 36;
            const y2 = 40 + Math.sin(angle) * 36;
            return (
              <line
                key={`left-${i}`}
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
          
          {/* Radial lines - right half (pointing right) */}
          {[...Array(9)].map((_, i) => {
            const angle = (i * 20 - 80) * (Math.PI / 180); // -80° to 80° (right half)
            const x1 = 40 + Math.cos(angle) * 6;
            const y1 = 40 + Math.sin(angle) * 6;
            const x2 = 40 + Math.cos(angle) * 36;
            const y2 = 40 + Math.sin(angle) * 36;
            return (
              <line
                key={`right-${i}`}
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
  );
};

export default SectionDivider;
