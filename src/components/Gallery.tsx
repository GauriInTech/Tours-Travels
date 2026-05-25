import { motion } from "framer-motion";

const galleryImages = [
  { src: "/images/package-1.png", alt: "Pilgrims at stupa", span: "md:col-span-2 md:row-span-2" },
  { src: "/images/bodh-gaya.png", alt: "Mahabodhi Temple", span: "col-span-1 row-span-1" },
  { src: "/images/lumbini.png", alt: "Lumbini Garden", span: "col-span-1 row-span-1" },
  { src: "/images/package-2.png", alt: "Himalayan trek", span: "col-span-1 row-span-2" },
  { src: "/images/ladakh.png", alt: "Ladakh monastery", span: "col-span-1 row-span-1" },
  { src: "/images/dharamshala.png", alt: "Dharamshala", span: "col-span-1 row-span-1" },
  { src: "/images/sikkim.png", alt: "Sikkim", span: "md:col-span-2 row-span-1" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Visions of Peace
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg">
            Glimpses of the sacred places and profound moments awaiting you.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]"
        >
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className={`relative overflow-hidden group cursor-pointer ${image.span}`}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-multiply" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
