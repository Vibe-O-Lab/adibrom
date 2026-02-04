interface SectionDividerProps {
  title?: string;
}

const SectionDivider = ({ title }: SectionDividerProps) => {
  return (
    <div className="relative w-full py-12 md:py-16 flex items-center justify-center overflow-hidden">
      {/* Main container */}
      <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center justify-center">
        
        {/* Half-wheel with radial rays - positioned above the line */}
        <div className="relative mb-[-12px]">
          <svg width="180" height="90" viewBox="0 0 180 90" className="text-primary">
            {/* Outer arc (half circle) */}
            <path
              d="M 15 85 A 75 75 0 0 1 165 85"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.75"
              opacity="0.5"
            />
            
            {/* Inner arc */}
            <path
              d="M 35 85 A 55 55 0 0 1 145 85"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              opacity="0.3"
            />
            
            {/* Radial lines emanating upward from center bottom */}
            {[...Array(19)].map((_, i) => {
              const angle = (180 - i * 10) * (Math.PI / 180);
              const x1 = 90 + Math.cos(angle) * 12;
              const y1 = 85 - Math.sin(angle) * 12;
              const x2 = 90 + Math.cos(angle) * 72;
              const y2 = 85 - Math.sin(angle) * 72;
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="currentColor"
                  strokeWidth="0.75"
                  opacity="0.4"
                />
              );
            })}
            
            {/* Center glow point */}
            <circle
              cx="90"
              cy="85"
              r="6"
              fill="currentColor"
              opacity="0.8"
            />
            <circle
              cx="90"
              cy="85"
              r="3"
              fill="currentColor"
              opacity="1"
            />
            
            {/* Glow effect */}
            <defs>
              <radialGradient id="glowGradient" cx="50%" cy="100%" r="50%">
                <stop offset="0%" stopColor="currentColor" stopOpacity="0.6" />
                <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle
              cx="90"
              cy="85"
              r="18"
              fill="url(#glowGradient)"
            />
          </svg>
        </div>
        
        {/* Horizontal line with star and text */}
        <div className="relative w-full h-10 flex items-center">
          {/* Horizontal gold line across full width */}
          <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
          
          {/* Small star/diamond on the left side */}
          <div className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2">
            <svg width="16" height="16" viewBox="0 0 16 16" className="text-primary opacity-80">
              <path
                d="M8 0L9 7L16 8L9 9L8 16L7 9L0 8L7 7Z"
                fill="currentColor"
              />
            </svg>
          </div>
          
          {/* Section title on the right */}
          {title && (
            <div className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2">
              <span className="font-display text-base md:text-lg tracking-[0.2em] text-primary/70">
                {title}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionDivider;
