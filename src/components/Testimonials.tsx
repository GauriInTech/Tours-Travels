import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: 1,
    name: "Eleanor Vance",
    location: "London, UK",
    quote: "The Sacred Circuit tour changed my life. Everything was arranged with such care and mindfulness. Our guide wasn't just a tour guide; he was a spiritual mentor. I returned home with a profound sense of peace.",
    rating: 5,
    initials: "EV",
  },
  {
    id: 2,
    name: "Marcus Chen",
    location: "Singapore",
    quote: "Trekking in the Himalayas with Shreya Tours was breathtaking. The balance between physical challenge and spiritual reflection was perfect. Staying in the monasteries and joining the morning prayers is an experience I will never forget.",
    rating: 5,
    initials: "MC",
  },
  {
    id: 3,
    name: "Sarah Miller",
    location: "Sydney, Australia",
    quote: "From the moment we arrived in Bodh Gaya, we felt completely looked after. The accommodations were beautiful and serene, the food was excellent, and the itinerary allowed for true contemplation without feeling rushed.",
    rating: 5,
    initials: "SM",
  },
  {
    id: 4,
    name: "David & Emma Wright",
    location: "Toronto, Australia",
    quote: "We celebrated our 20th anniversary with the Ladakh spiritual tour. It was deeply moving. The attention to detail and the deep knowledge of Buddhist history provided by the team was unparalleled.",
    rating: 5,
    initials: "DW",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-card border-y border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Words of the Pilgrims
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg">
            Hear from those who have walked the path before you.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/2 pl-6">
                  <div className="bg-background p-8 border border-border h-full flex flex-col justify-between">
                    <div>
                      <div className="flex text-primary mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-current" />
                        ))}
                      </div>
                      <p className="text-foreground/80 italic mb-8 leading-relaxed">
                        "{testimonial.quote}"
                      </p>
                    </div>
                    <div className="flex items-center gap-4 border-t border-border pt-6 mt-auto">
                      <Avatar>
                        <AvatarFallback className="bg-secondary text-secondary-foreground">
                          {testimonial.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-serif font-bold text-foreground">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-4 hidden md:flex">
              <CarouselPrevious className="static transform-none bg-background border-border hover:bg-card text-foreground" data-testid="button-testimonial-prev" />
              <CarouselNext className="static transform-none bg-background border-border hover:bg-card text-foreground" data-testid="button-testimonial-next" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
