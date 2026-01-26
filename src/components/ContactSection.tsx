import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, Download } from "lucide-react";

const ContactSection = () => {
  const handleDownloadVCard = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:עדי ברומקיש
N:ברומקיש;עדי;;;
TEL;TYPE=CELL:+972501234567
EMAIL:adi@example.com
NOTE:מלווה נשים וגברים בתהליכי היזכרות וחיבור לכוחות הפנימיים
END:VCARD`;

    const blob = new Blob([vCardData], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "adi-bromkish.vcf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const contactMethods = [
    {
      icon: Phone,
      label: "התקשרי",
      value: "050-123-4567",
      href: "tel:+972501234567",
    },
    {
      icon: MessageCircle,
      label: "וואטסאפ",
      value: "שלחי הודעה",
      href: "https://wa.me/972501234567",
    },
    {
      icon: Mail,
      label: "מייל",
      value: "adi@example.com",
      href: "mailto:adi@example.com",
    },
  ];

  return (
    <section id="contact" className="relative py-24 px-6">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-gold/5 rounded-full" />
      
      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-gold/60 text-sm tracking-[0.3em] uppercase mb-4 block">
            בואי נדבר
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-gold">
            יצירת קשר
          </h2>
        </motion.div>

        {/* Add Contact Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <button
            onClick={handleDownloadVCard}
            className="w-full py-5 px-8 bg-gradient-gold text-primary-foreground font-medium rounded-lg 
                       flex items-center justify-center gap-3 transition-all duration-300
                       hover:shadow-lg hover:shadow-gold/20 hover:scale-[1.02]"
          >
            <Download className="w-5 h-5" />
            <span>הוסיפי לאנשי קשר</span>
          </button>
        </motion.div>

        {/* Contact methods */}
        <div className="space-y-4">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.label}
              href={method.href}
              target={method.href.startsWith("http") ? "_blank" : undefined}
              rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="service-card flex items-center gap-4 rounded-lg group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center
                            group-hover:border-gold/60 group-hover:bg-gold/10 transition-all">
                <method.icon className="w-5 h-5 text-gold" />
              </div>
              <div className="flex-1 text-right">
                <span className="text-foreground/60 text-sm block">{method.label}</span>
                <span className="text-gold-light">{method.value}</span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Decorative divider */}
        <div className="divider-gold my-16" />

        {/* Footer quote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-gold-light/50 font-display text-lg italic"
        >
          "המסע מתחיל בצעד אחד של אמירה - אני מוכנה"
        </motion.p>
      </div>
    </section>
  );
};

export default ContactSection;
