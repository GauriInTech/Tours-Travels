import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.png"
          alt="Misty Himalayan mountains at dawn with an ancient Buddhist monastery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl mx-auto space-y-6"
        >
          <span className="text-white/80 font-medium tracking-[0.2em] uppercase text-sm md:text-base block mb-4">
            Since 2018
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white drop-shadow-xl leading-tight">
            Travel with Faith,
             Return with Peace
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Discover inner peace through mindful travel. Curated Buddhist pilgrimage circuits and serene Himalayan journeys designed to transform your soul.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-6 rounded-none tracking-wide uppercase transition-all duration-300 w-full sm:w-auto">
              <a href="#packages" data-testid="button-hero-packages">Explore Packages</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white/50 hover:bg-white/10 hover:border-white text-base px-8 py-6 rounded-none tracking-wide uppercase transition-all duration-300 w-full sm:w-auto backdrop-blur-sm">
              <a href="#contact" data-testid="button-hero-contact">Contact Us</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
