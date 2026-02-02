const SectionDivider = () => {
  return (
    <div className="relative w-full py-8 md:py-12 flex items-center justify-center overflow-hidden">
      {/* Main container */}
      <div className="relative w-full max-w-4xl mx-auto h-24 flex items-center justify-center">
        
        {/* Horizontal gold line across full width */}
        <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
        
        {/* Small star/diamond on the left side */}
        <div className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2">
          <svg width="10" height="10" viewBox="0 0 10 10" className="text-primary opacity-80">
            <path
              d="M5 0L5.5 4.5L10 5L5.5 5.5L5 10L4.5 5.5L0 5L4.5 4.5Z"
              fill="currentColor"
            />
          </svg>
        </div>
        
        {/* Half-wheel with radial rays - centered */}
        <div className="relative">
          <svg width="120" height="70" viewBox="0 0 120 70" className="text-primary">
            {/* Outer arc (half circle) */}
            <path
              d="M 10 60 A 50 50 0 0 1 110 60"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              opacity="0.5"
            />
            
            {/* Inner arc */}
            <path
              d="M 25 60 A 35 35 0 0 1 95 60"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.3"
              opacity="0.3"
            />
            
            {/* Radial lines emanating upward from center bottom */}
            {[...Array(19)].map((_, i) => {
              const angle = (180 - i * 10) * (Math.PI / 180);
              const x1 = 60 + Math.cos(angle) * 8;
              const y1 = 60 - Math.sin(angle) * 8;
              const x2 = 60 + Math.cos(angle) * 48;
              const y2 = 60 - Math.sin(angle) * 48;
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
              cx="60"
              cy="60"
              r="4"
              fill="currentColor"
              opacity="0.8"
            />
            <circle
              cx="60"
              cy="60"
              r="2"
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
              cx="60"
              cy="60"
              r="12"
              fill="url(#glowGradient)"
            />
          </svg>
        </div>
        
        {/* Text "WHAT I DO" on the right */}
        <div className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2">
          <span className="font-display text-xs md:text-sm tracking-[0.3em] text-primary/70 uppercase">
            WHAT I DO
          </span>
        </div>
      </div>
    </div>
  );
};

export default SectionDivider;
