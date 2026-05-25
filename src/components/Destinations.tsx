import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const destinations = [
  {
    id: "bodh-gaya",
    name: "Bodh Gaya",
    description: "The most sacred site where Gautama Buddha attained enlightenment under the Bodhi Tree.",
    image: "/images/bodh-gaya.png",
  },
  {
    id: "lumbini",
    name: "Lumbini",
    description: "The peaceful birthplace of Buddha, a sanctuary of ancient temples and tranquil gardens.",
    image: "/images/lumbini.png",
  },
  {
    id: "varanasi",
    name: "Varanasi",
    description: "The spiritual heart of India, where ancient rituals meet the sacred Ganges river at dawn.",
    image: "/images/varanasi.png",
  },
  {
    id: "dharamshala",
    name: "Dharamshala",
    description: "Home of His Holiness the Dalai Lama, surrounded by cedar forests and Tibetan monasteries.",
    image: "/images/dharamshala.png",
  },
  {
    id: "ladakh",
    name: "Ladakh",
    description: "The land of high passes, ancient cliff-side monasteries, and dramatic, rugged landscapes.",
    image: "/images/ladakh.png",
  },
  {
    id: "sikkim",
    name: "Sikkim",
    description: "A mystical kingdom of pristine mountains, prayer wheels, and deeply rooted Buddhist culture.",
    image: "/images/sikkim.png",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Destinations() {
  return (
    <section id="destinations" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Sacred Destinations
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg">
            Follow the footsteps of the awakened ones. Each destination offers a unique pathway to peace and spiritual discovery.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {destinations.map((dest) => (
            <motion.div key={dest.id} variants={itemVariants} className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-[4/3] rounded-sm bg-card mb-4">
                <img
                  src={dest.image}
                  alt={dest.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-black rounded-none">
                    Discover
                  </Button>
                </div>
              </div>
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {dest.name}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {dest.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
