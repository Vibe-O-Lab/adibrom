import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import forestBg from "@/assets/forest-bg.jpg";

const Index = () => {
  return (
    <main 
      className="min-h-screen relative"
      style={{
        backgroundImage: `url(${forestBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Dark overlay for entire page */}
      <div className="absolute inset-0 bg-forest-deep/85 pointer-events-none" />
      
      <div className="relative z-10">
        <HeroSection />
        
        {/* Section divider */}
        <div className="divider-gold max-w-xs mx-auto" />
        
        <AboutSection />
        
        {/* Section divider */}
        <div className="divider-gold max-w-xs mx-auto" />
        
        <ServicesSection />
        
        {/* Section divider */}
        <div className="divider-gold max-w-xs mx-auto" />
        
        <ContactSection />
        
        {/* Footer */}
        <footer className="py-8 px-6 text-center border-t border-gold/10">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} עדי ברומקיש • כל הזכויות שמורות
          </p>
        </footer>
      </div>
    </main>
  );
};

export default Index;
