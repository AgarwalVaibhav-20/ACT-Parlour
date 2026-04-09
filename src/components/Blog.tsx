import { motion } from "motion/react";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const blogs = [
  {
    title: "Daily Skincare Routine for Glowing Skin",
    excerpt: "Discover the essential steps to maintain a healthy and radiant complexion every day.",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop",
    date: "May 15, 2024",
    author: "Alveera Team",
  },
  {
    title: "Bridal Makeup Tips for Indian Weather",
    excerpt: "How to ensure your bridal makeup stays perfect despite heat and humidity.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop",
    date: "June 02, 2024",
    author: "Beauty Expert",
  },
  {
    title: "Hair Care Secrets for Long & Strong Hair",
    excerpt: "Traditional and modern tips to keep your hair healthy in the Indian climate.",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop",
    date: "June 10, 2024",
    author: "Hair Stylist",
  },
];

export function Blog() {
  return (
    <section id="blog" className="py-24 bg-beige/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-rose-gold font-bold tracking-widest uppercase text-sm"
          >
            Beauty Tips
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-heading font-bold mt-4 mb-6"
          >
            Our Latest Articles
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-none shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden bg-white group rounded-3xl">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-rose-gold">
                    Beauty Tips
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-4 text-xs text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {blog.date}
                    </div>
                    <div className="flex items-center">
                      <User size={14} className="mr-1" />
                      {blog.author}
                    </div>
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-4 group-hover:text-rose-gold transition-colors leading-tight">
                    {blog.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
                    {blog.excerpt}
                  </p>
                  <Button variant="link" className="p-0 h-auto text-rose-gold font-bold group/btn">
                    Read More
                    <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
