import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Bride",
    content: "Alveera made my wedding day absolutely magical. The makeup was flawless and lasted all night. I received so many compliments!",
    rating: 5,
  },
  {
    name: "Anjali Gupta",
    role: "Regular Client",
    content: "The best facial I've ever had. The staff is so professional and the atmosphere is incredibly relaxing. Highly recommend their skincare treatments.",
    rating: 5,
  },
  {
    name: "Sneha Reddy",
    role: "Party Makeup",
    content: "I went for party makeup and hair styling. They understood exactly what I wanted and the result was stunning. Will definitely visit again!",
    rating: 5,
  },
  {
    name: "Meera Iyer",
    role: "Hair Styling",
    content: "Professional hair coloring and styling. They use great products and the results are always consistent. My go-to place for hair care.",
    rating: 4,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-rose-gold/5 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-rose-gold font-bold tracking-widest uppercase text-sm"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-heading font-bold mt-4 mb-6"
          >
            What Our Clients Say
          </motion.h2>
        </div>

        <div className="relative px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="h-full border-none shadow-sm bg-white rounded-3xl overflow-hidden">
                      <CardContent className="p-10 flex flex-col h-full">
                        <Quote className="text-rose-gold/20 mb-6" size={48} />
                        <div className="flex mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              className={i < testimonial.rating ? "text-gold fill-gold" : "text-muted"}
                            />
                          ))}
                        </div>
                        <p className="text-muted-foreground italic mb-8 flex-grow leading-relaxed">
                          "{testimonial.content}"
                        </p>
                        <div className="flex items-center">
                          <div className="w-12 h-12 rounded-full bg-soft-pink flex items-center justify-center text-rose-gold font-bold mr-4">
                            {testimonial.name[0]}
                          </div>
                          <div>
                            <h4 className="font-bold text-sm">{testimonial.name}</h4>
                            <span className="text-xs text-muted-foreground">{testimonial.role}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-white text-rose-gold border-rose-gold/20 hover:bg-rose-gold hover:text-white" />
            <CarouselNext className="bg-white text-rose-gold border-rose-gold/20 hover:bg-rose-gold hover:text-white" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
