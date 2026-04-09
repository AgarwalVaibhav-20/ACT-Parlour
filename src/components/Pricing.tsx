import { motion } from "motion/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const pricingData = {
  makeup: [
    { name: "Bridal Makeup (HD)", price: "₹25,000" },
    { name: "Party Makeup", price: "₹5,000" },
    { name: "Engagement Makeup", price: "₹12,000" },
    { name: "Reception Makeup", price: "₹15,000" },
    { name: "Eye Makeup", price: "₹1,500" },
  ],
  hair: [
    { name: "Hair Cut & Styling", price: "₹800" },
    { name: "Hair Spa", price: "₹1,500" },
    { name: "Hair Coloring (Global)", price: "₹4,500" },
    { name: "Hair Smoothening", price: "₹6,000" },
    { name: "Keratin Treatment", price: "₹7,500" },
  ],
  skincare: [
    { name: "Gold Facial", price: "₹2,500" },
    { name: "Diamond Facial", price: "₹3,500" },
    { name: "Fruit Facial", price: "₹1,200" },
    { name: "Clean Up", price: "₹800" },
    { name: "D-Tan Treatment", price: "₹1,000" },
  ],
};

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-beige/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-rose-gold font-bold tracking-widest uppercase text-sm"
          >
            Price List
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-heading font-bold mt-4 mb-6"
          >
            Affordable Luxury
          </motion.h2>
          <p className="text-muted-foreground">
            Premium beauty services at competitive prices. Choose the package that fits your needs.
          </p>
        </div>

        <Tabs defaultValue="makeup" className="max-w-4xl mx-auto">
          <TabsList className="w-full flex justify-center bg-white/50 p-1 rounded-full mb-12 border border-rose-gold/10">
            <TabsTrigger value="makeup" className="flex-1 rounded-full py-3 data-[state=active]:bg-rose-gold data-[state=active]:text-white transition-all">Makeup</TabsTrigger>
            <TabsTrigger value="hair" className="flex-1 rounded-full py-3 data-[state=active]:bg-rose-gold data-[state=active]:text-white transition-all">Hair Care</TabsTrigger>
            <TabsTrigger value="skincare" className="flex-1 rounded-full py-3 data-[state=active]:bg-rose-gold data-[state=active]:text-white transition-all">Skincare</TabsTrigger>
          </TabsList>

          {Object.entries(pricingData).map(([category, items]) => (
            <TabsContent key={category} value={category}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-rose-gold/5"
              >
                <div className="space-y-6">
                  {items.map((item, index) => (
                    <div key={index} className="flex justify-between items-center group">
                      <div className="flex-grow">
                        <h4 className="font-bold text-lg group-hover:text-rose-gold transition-colors">{item.name}</h4>
                        <div className="border-b border-dotted border-muted-foreground/20 flex-grow mx-4 hidden md:block" />
                      </div>
                      <span className="text-xl font-bold text-rose-gold shrink-0">{item.price}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-12 text-center">
                  <p className="text-xs text-muted-foreground italic">
                    * Prices may vary depending on hair length and specific requirements.
                  </p>
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
