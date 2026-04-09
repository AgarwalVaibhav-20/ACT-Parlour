import { motion } from "motion/react";
import { Play, Search } from "lucide-react";

const videos = [
  {
    title: "Bridal Transformation",
    category: "Bridal Looks",
    thumbnail: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Party Makeup Tutorial",
    category: "Tutorials",
    thumbnail: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Hair Styling Masterclass",
    category: "Tutorials",
    thumbnail: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Customer Glow Up",
    category: "Transformations",
    thumbnail: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop",
  },
];

export function VideoSection() {
  return (
    <section id="videos" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-rose-gold font-bold tracking-widest uppercase text-sm"
          >
            Watch & Learn
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-heading font-bold mt-4 mb-6"
          >
            Beauty Tutorials & Transformations
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer shadow-lg"
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transform scale-90 group-hover:scale-100 transition-transform">
                  <Play size={32} fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-rose-gold bg-white/90 backdrop-blur px-2 py-0.5 rounded-full mb-2 inline-block">
                  {video.category}
                </span>
                <h4 className="text-white font-bold text-lg leading-tight">{video.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
