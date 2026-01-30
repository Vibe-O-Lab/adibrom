import { motion } from "framer-motion";
import compassImg from "@/assets/compass.jpg";
import candleImg from "@/assets/healing-candle.jpg";
import moonCircleImg from "@/assets/moon-circle.jpg";

const services = [
  {
    title: "סדנאות עומק",
    subtitle: "וריטריטים",
    description: "שילוב של תנועה, נשימה ורוח עם כלים פרקטיים ליישום ביומיום.",
    image: candleImg,
    position: "top-left",
  },
  {
    title: "ליווי אישי",
    subtitle: "(1:1)",
    description: "עבודה עם דיאלוג מכוון, דמיון מודרך וקלפים למציאת בהירות ודיוק הדרך בצמתי חיים (גירושין, קריירה, משברים).",
    image: compassImg,
    position: "center",
  },
  {
    title: "מעגלי נשים",
    subtitle: "וירח מלא",
    description: "מרחבים של שייכות, הקשבה וריפוי עדין בתוך קהילה תומכת.",
    image: moonCircleImg,
    position: "bottom-right",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-24 px-6">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-gold/60 text-sm tracking-[0.3em] uppercase mb-4 block">
          מה אני מציעה
        </span>
      </motion.div>

      <div className="max-w-6xl mx-auto">
        {/* Decorative container with circles */}
        <div className="relative">
          {/* Large decorative circles */}
          <div className="hidden lg:block absolute -right-20 top-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gold/20 rounded-full" />
          <div className="hidden lg:block absolute -right-20 top-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-gold/10 rounded-full" />
          
          {/* Services grid */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-10 relative z-10">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col items-center ${
                  index === 1 ? "md:mt-12" : ""
                }`}
              >
                {/* Capsule card - tall pill shape */}
                <div 
                  className="relative w-44 md:w-52 border border-gold/40 overflow-hidden"
                  style={{ 
                    borderRadius: '100px 100px 100px 100px',
                    aspectRatio: '3/4'
                  }}
                >
                  {/* Full image as background */}
                  <div className="absolute inset-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Bottom text area - semicircle overlay */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center text-center px-4 py-4"
                    style={{
                      height: '45%',
                      background: 'linear-gradient(to top, hsl(170 35% 8% / 0.98) 60%, hsl(170 35% 8% / 0.85) 80%, transparent 100%)',
                      borderRadius: '0 0 100px 100px'
                    }}
                  >
                    <h3 className="font-display text-xl md:text-2xl text-gold leading-tight">
                      {service.title}
                    </h3>
                    {service.subtitle && (
                      <span className="text-gold-light/60 text-xs font-display italic">
                        {service.subtitle}
                      </span>
                    )}
                    <p className="text-foreground/60 text-[10px] md:text-xs leading-relaxed mt-1 line-clamp-2 px-2">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <a href="#contact" className="btn-mystical inline-block">
            גלי עוד
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
