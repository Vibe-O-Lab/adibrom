import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-8 px-6 text-center border-t border-gold/10">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} עדי ברומקיש • כל הזכויות שמורות
        </p>
      </footer>
    </main>
  );
};

export default Index;
