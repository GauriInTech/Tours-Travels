import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section id="about" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Guiding Souls Since 2005
            </h2>
            <div className="w-16 h-1 bg-primary mb-8"></div>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                At Shreya Tours & Travels, we believe travel should be transformative. For nearly two decades, we have been crafting journeys that go beyond mere sightseeing, guiding travelers toward inner peace and cultural connection.
              </p>
              <p>
                Rooted in Buddhist philosophy, our approach is unhurried and mindful. We partner with local communities, monasteries, and expert guides to ensure every pilgrimage is authentic, respectful, and deeply enriching.
              </p>
              <p>
                Whether you are seeking the profound silence of a Himalayan peak or the vibrant spiritual energy of Bodh Gaya, we are honored to be your trusted companions on the path.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-border">
              <div className="text-center">
                <div className="text-4xl font-serif font-bold text-primary mb-2">500+</div>
                <div className="text-sm font-medium text-foreground uppercase tracking-wider">Tours Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-serif font-bold text-primary mb-2">10k+</div>
                <div className="text-sm font-medium text-foreground uppercase tracking-wider">Happy Travelers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-serif font-bold text-primary mb-2">9+</div>
                <div className="text-sm font-medium text-foreground uppercase tracking-wider">Years Experience</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:ml-auto lg:mr-0 z-10">
              <img 
                src="/images/about.png" 
                alt="Couple meditating at a Buddhist temple during golden hour" 
                loading="lazy"
                className="w-full h-full object-cover rounded-sm shadow-xl"
              />
            </div>
            {/* Decorative background element */}
            <div className="absolute top-10 -bottom-10 right-10 left-10 lg:-left-10 bg-card z-0 border border-border"></div>
            
            {/* SVG Lotus Decorative Element */}
            <div className="absolute -top-12 -right-12 text-primary/10 z-0">
              <svg width="200" height="200" viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 0C50 0 65 35 90 50C65 65 50 100 50 100C50 100 35 65 10 50C35 35 50 0 50 0Z" />
                <path d="M50 20C50 20 58 41 73 50C58 59 50 80 50 80C50 80 42 59 27 50C42 41 50 20 50 20Z" opacity="0.5"/>
              </svg>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
