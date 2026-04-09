import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

export function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img
                  src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=600&auto=format&fit=crop"
                  alt="Salon Experience"
                  className="rounded-2xl shadow-lg w-full aspect-[3/4] object-cover"
                  referrerPolicy="no-referrer"
                />
                <img
                  src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=600&auto=format&fit=crop"
                  alt="Beauty Products"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1527799822344-429dfa851bc1?q=80&w=600&auto=format&fit=crop"
                  alt="Styling Session"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                  referrerPolicy="no-referrer"
                />
                <img
                  src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=600&auto=format&fit=crop"
                  alt="Makeup Artistry"
                  className="rounded-2xl shadow-lg w-full aspect-[3/4] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            
            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 bg-rose-gold text-white p-8 rounded-full shadow-xl z-10 hidden md:block"
            >
              <div className="text-center">
                <span className="block text-3xl font-bold">10+</span>
                <span className="text-[10px] uppercase tracking-widest">Years of Excellence</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <span className="text-rose-gold font-bold tracking-widest uppercase text-sm">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mt-4 mb-8">
              Redefining Beauty <br />
              <span className="text-rose-gold italic">With Passion</span>
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Founded in 2015, Alveera Ladies Beauty Parlour has been a sanctuary for women seeking professional beauty and skincare services in the heart of Mumbai.
              </p>
              <p>
                Our mission is simple: to enhance your natural beauty and boost your confidence through personalized care and expert styling. We believe that every woman is unique, and her beauty routine should reflect that.
              </p>
              <p>
                With a team of highly trained professionals and the use of premium international products, we ensure that every visit to Alveera is a luxurious and rejuvenating experience.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 mt-12 mb-10">
              <div>
                <h4 className="text-rose-gold font-bold text-xl font-heading mb-2">Our Vision</h4>
                <p className="text-sm">To be the most trusted beauty destination for women across India.</p>
              </div>
              <div>
                <h4 className="text-rose-gold font-bold text-xl font-heading mb-2">Our Values</h4>
                <p className="text-sm">Excellence, Integrity, and Customer Satisfaction above all.</p>
              </div>
            </div>

            <Button className="bg-rose-gold hover:bg-rose-gold/90 text-white rounded-full px-8 py-6">
              Learn More About Us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
