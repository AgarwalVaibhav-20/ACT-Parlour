import { useState } from "react";
import { motion } from "motion/react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Search } from "lucide-react";

const galleryItems = [
  {
    category: "Bridal",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=800&auto=format&fit=crop",
  },
  {
    category: "Makeup",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop",
  },
  {
    category: "Hair",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop",
  },
  {
    category: "Bridal",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800&auto=format&fit=crop",
  },
  {
    category: "Makeup",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop",
  },
  {
    category: "Hair",
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=800&auto=format&fit=crop",
  },
];

const categories = ["All", "Bridal", "Makeup", "Hair"];

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-rose-gold font-bold tracking-widest uppercase text-sm"
          >
            Our Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-heading font-bold mt-4 mb-10"
          >
            Beauty Gallery
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-2 rounded-full text-sm font-bold transition-all border ${
                  activeCategory === cat
                    ? "bg-rose-gold text-white border-rose-gold"
                    : "bg-transparent text-muted-foreground border-muted-foreground/20 hover:border-rose-gold hover:text-rose-gold"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div key={index}>
              <Dialog>
                <DialogTrigger asChild>
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-md"
                  >
                    <img
                      src={item.image}
                      alt={item.category}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-rose-gold/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-rose-gold transform translate-y-4 group-hover:translate-y-0 transition-transform">
                        <Search size={20} />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-rose-gold">
                        {item.category}
                      </span>
                    </div>
                  </motion.div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none">
                  <img
                    src={item.image}
                    alt={item.category}
                    className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                    referrerPolicy="no-referrer"
                  />
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
