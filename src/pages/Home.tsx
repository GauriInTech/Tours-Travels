import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Destinations from "@/components/Destinations";
import TourPackages from "@/components/TourPackages";
import AboutUs from "@/components/AboutUs";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main>
        <Hero />
        
        <div className="flex justify-center py-12 bg-background">
          <svg width="60" height="60" viewBox="0 0 100 100" className="text-primary/30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 0C50 0 65 35 90 50C65 65 50 100 50 100C50 100 35 65 10 50C35 35 50 0 50 0Z" />
          </svg>
        </div>
        
        <Destinations />
        
        <div className="flex justify-center py-12 bg-card">
          <svg width="60" height="60" viewBox="0 0 100 100" className="text-primary/30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 0C50 0 65 35 90 50C65 65 50 100 50 100C50 100 35 65 10 50C35 35 50 0 50 0Z" />
          </svg>
        </div>
        
        <TourPackages />
        
        <AboutUs />
        
        <Testimonials />
        
        <Gallery />
        
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
