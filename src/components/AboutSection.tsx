import { motion } from "framer-motion";
import adiProfile from "@/assets/adi-profile.jpeg";
const AboutSection = () => {
  return <section id="about" className="relative py-24 px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 border border-gold/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] border border-gold/5 rounded-full translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="relative flex justify-center">
            <div className="profile-frame w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <img src={adiProfile} alt="עדי ברומקיש" className="w-full h-full object-cover rounded-full" />
            </div>
            
            {/* Decorative arc */}
            <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-40 h-80 border-l border-gold/20 rounded-full" />
          </motion.div>

          {/* Text side */}
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="text-right">
            <span className="text-gold/60 text-sm tracking-[0.2em] uppercase mb-4 block">
              מי אני
            </span>
            
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-gold mb-8">
              אני עדי
            </h2>
            
            <div className="space-y-6 text-foreground/80 leading-relaxed">
              <p>מלווה נשים וגברים בתהליכי היזכרות וחיבור לכוחותיהם הפנימיים. 
הדרך שלי נולדה מתוך משבר אישי עמוק וצמיחה בעזרת 'גלגל דרך השלום', שלימד אותי לפגוש כל אתגר באהבה ולמצוא שפה של לב.</p>
              
              <p className="text-gold-light/70 font-display text-xl italic">
                "מתוך החושך, נולד האור הגדול ביותר"
              </p>
            </div>

            <div className="mt-10">
              <a href="#services" className="btn-mystical inline-block">
                עוד עליי
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default AboutSection;