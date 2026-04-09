import { motion } from "motion/react";
import { Sparkles, Scissors, Flower2, Heart, Star, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Bridal Makeup",
    description:
      "Exquisite bridal looks tailored for your special day, from traditional to contemporary.",
    icon: Sparkles,
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Hair Styling",
    description:
      "Professional cuts, coloring, and styling to give you the perfect look for any occasion.",
    icon: Scissors,
    image:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Facials & Skincare",
    description:
      "Rejuvenating treatments designed to nourish your skin and restore its natural glow.",
    icon: Flower2,
    image:
      "https://colorcafe.co.in/frontend/images/blogs/1729150477_6710be0dced9e.png",
  },
  {
    title: "Party Makeup",
    description:
      "Stunning makeup looks for parties, events, and celebrations that make you stand out.",
    icon: Star,
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Manicure & Pedicure",
    description:
      "Pamper your hands and feet with our relaxing and professional nail care services.",
    icon: Heart,
    image:
      "https://static.wixstatic.com/media/28d39c_39fee459703c4ddcb33b511055322794~mv2.jpg/v1/fill/w_1000,h_750,al_c,q_85,usm_0.66_1.00_0.01/28d39c_39fee459703c4ddcb33b511055322794~mv2.jpg",
  },
  {
    title: "Waxing & Threading",
    description:
      "Gentle and effective hair removal services for smooth and beautiful skin.",
    icon: Zap,
    image:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800&auto=format&fit=crop",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-rose-gold font-bold tracking-widest uppercase text-sm"
          >
            Our Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-heading font-bold mt-4 mb-6"
          >
            Professional Beauty Services
          </motion.h2>
          <p className="text-muted-foreground">
            We offer a wide range of premium services designed to make you look
            and feel your absolute best.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group perspective-1000"
            >
              <motion.div
                whileHover={{ rotateY: 5, rotateX: -5, translateZ: 20 }}
                className="h-full preserve-3d transition-all duration-500"
              >
                <Card className="h-full border-none shadow-lg overflow-hidden bg-beige/30 group-hover:shadow-rose-gold/10 transition-shadow">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                    <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-rose-gold shadow-md">
                      <service.icon size={24} />
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-heading font-bold mb-3 group-hover:text-rose-gold transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <button className="text-rose-gold font-bold text-sm flex items-center group/btn">
                      Learn More
                      <ChevronRight
                        size={16}
                        className="ml-1 group-hover/btn:translate-x-1 transition-transform"
                      />
                    </button>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ChevronRight({
  size,
  className,
}: {
  size: number;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
