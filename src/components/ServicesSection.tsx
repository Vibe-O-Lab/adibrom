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

      <div className="max-w-6xl mx-auto">
        {/* Decorative container with circles */}
        <div className="relative">
          {/* Large decorative circles */}
          <div className="hidden lg:block absolute -right-20 top-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gold/20 rounded-full" />
          <div className="hidden lg:block absolute -right-20 top-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-gold/10 rounded-full" />
          
          {/* Services grid */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-4 relative z-10">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col items-center ${
                  index === 1 ? "md:mt-16" : ""
                }`}
              >
                {/* Circle image container */}
                <div className="golden-circle w-48 h-48 md:w-56 md:h-56 overflow-hidden mb-6">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                {/* Service info */}
                <div className="text-center">
                  <h3 className="font-display text-2xl md:text-3xl text-gold mb-1">
                    {service.title}
                  </h3>
                  {service.subtitle && (
                    <span className="text-gold-light/60 text-sm font-display italic block mb-4">
                      {service.subtitle}
                    </span>
                  )}
                  <p className="text-foreground/70 text-sm leading-relaxed max-w-xs mx-auto">
                    {service.description}
                  </p>
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
