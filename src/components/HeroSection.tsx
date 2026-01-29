import { motion } from "framer-motion";
import forestBg from "@/assets/forest-bg.jpg";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${forestBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-forest-deep/70" />

      {/* Decorative elements */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative"
        >
          {/* Sun/Moon symbol */}
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="text-gold">
            <circle cx="30" cy="30" r="8" stroke="currentColor" strokeWidth="1" />
            <circle cx="30" cy="30" r="15" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
            <circle cx="30" cy="30" r="22" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
            {/* Rays */}
            {[...Array(8)].map((_, i) => (
              <line
                key={i}
                x1="30"
                y1="5"
                x2="30"
                y2="12"
                stroke="currentColor"
                strokeWidth="0.5"
                transform={`rotate(${i * 45} 30 30)`}
                opacity="0.6"
              />
            ))}
          </svg>
        </motion.div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-gold mb-6 leading-tight">
            גלי את הכוח הטמון בך
          </h1>

          <div className="space-y-2 mb-10">
            <p className="text-gold-light/80 text-sm md:text-base tracking-[0.3em] uppercase font-light">
              התעוררות אנרגטית
            </p>
            <p className="text-gold-light/60 text-sm md:text-base tracking-[0.3em] uppercase font-light">ריפוי רוחני</p>
            <p className="text-gold-light/40 text-sm md:text-base tracking-[0.3em] uppercase font-light">
              הנחיה אינטואיטיבית
            </p>
          </div>

          <motion.a
            href="#about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="btn-mystical inline-block"
          >
            התחילי את המסע
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-20 left-0 right-0">
        <div className="divider-gold max-w-md mx-auto" />
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gold/50">
          <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="1" />
        </svg>
      </motion.div>
    </section>
  );
};

export default HeroSection;
