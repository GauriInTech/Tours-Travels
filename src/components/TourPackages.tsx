import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const packages = [
  {
    id: "sacred-circuit",
    name: "Sacred Circuit",
    duration: "12 Days",
    image: "/images/package-1.png",
    description: "A profound journey tracing the pivotal locations of Buddha's life across India and Nepal.",
    price: "1,200",
    inclusions: [
      "Visits to Bodh Gaya, Sarnath, and Lumbini",
      "Guided meditation sessions with monks",
      "Premium heritage accommodations",
      "All domestic travel and transfers",
      "Vegetarian meals inspired by local cuisine",
    ],
  },
  {
    id: "himalayan-serenity",
    name: "Himalayan Serenity",
    duration: "8 Days",
    image: "/images/package-2.png",
    description: "Find inner peace amidst the towering peaks and ancient monasteries of the majestic Himalayas.",
    price: "850",
    inclusions: [
      "Stays in Dharamshala and surrounding valleys",
      "Moderate scenic trekking with expert guides",
      "Private teachings on Buddhist philosophy",
      "Comfortable mountain lodge accommodations",
      "Airport transfers and daily breakfast",
    ],
  },
  {
    id: "buddhist-pilgrimage",
    name: "Buddhist Pilgrimage",
    duration: "15 Days",
    image: "/images/package-3.png",
    description: "The ultimate spiritual odyssey covering the most important monasteries and stupas.",
    price: "1,600",
    inclusions: [
      "Comprehensive tour of Ladakh and Sikkim",
      "Participation in morning prayers at monasteries",
      "Luxury boutique hotels and eco-resorts",
      "English-speaking spiritual guide throughout",
      "All entrance fees and permits included",
    ],
  },
];

export default function TourPackages() {
  return (
    <section id="packages" className="py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Curated Journeys
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg">
            Thoughtfully designed itineraries that balance spiritual exploration, cultural immersion, and unhurried comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-background border border-border shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur px-3 py-1 text-sm font-semibold text-primary">
                  {pkg.duration}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                  {pkg.name}
                </h3>
                <p className="text-muted-foreground mb-6 line-clamp-2">
                  {pkg.description}
                </p>
                
                <div className="space-y-3 mb-8 flex-grow">
                  {pkg.inclusions.map((inclusion, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/80">{inclusion}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-auto pt-6 border-t border-border flex items-center justify-between">
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-muted-foreground mb-1">Starting from</span>
                    <span className="text-xl font-bold text-foreground">${pkg.price}</span>
                  </div>
                  <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-none px-6">
                    <a href={`#contact?package=${pkg.id}`} data-testid={`button-book-${pkg.id}`}>Book Now</a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
