import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MessageCircle, Calendar, User, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  service: z.string().min(2, { message: "Please select a service." }),
  date: z.string().min(1, { message: "Please select a date." }),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function BookingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      service: "",
      date: "",
      message: "",
    },
  });

  function onSubmit(values: FormValues) {
    console.log(values);
    // In a real app, you would send this to a server
    alert("Booking request sent! We will contact you shortly.");
  }

  return (
    <section id="booking" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-beige/30 rounded-[3rem] overflow-hidden shadow-xl border border-rose-gold/10">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-2/5 bg-rose-gold p-12 text-white">
              <h2 className="text-4xl font-heading font-bold mb-6">Book Your Appointment</h2>
              <p className="mb-10 opacity-90 leading-relaxed">
                Ready for a transformation? Fill out the form or reach out to us directly via WhatsApp for instant booking.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest opacity-70">Call Us</p>
                    <p className="font-bold">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest opacity-70">WhatsApp</p>
                    <p className="font-bold">+91 98765 43210</p>
                  </div>
                </div>
              </div>

              <div className="mt-16">
                <Button className="w-full bg-white text-rose-gold hover:bg-white/90 rounded-full py-7 text-lg font-bold">
                  <MessageCircle className="mr-2" />
                  Chat on WhatsApp
                </Button>
              </div>
            </div>

            <div className="lg:w-3/5 p-12 bg-white">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                      <Input 
                        id="name"
                        placeholder="Your Name" 
                        className="pl-10 rounded-xl border-rose-gold/20 focus:border-rose-gold" 
                        {...register("name")}
                      />
                    </div>
                    {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                      <Input 
                        id="phone"
                        placeholder="+91 XXXXX XXXXX" 
                        className="pl-10 rounded-xl border-rose-gold/20 focus:border-rose-gold" 
                        {...register("phone")}
                      />
                    </div>
                    {errors.phone && <p className="text-xs text-destructive">{errors.phone.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="service">Service</Label>
                    <div className="relative">
                      <Sparkles className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                      <Input 
                        id="service"
                        placeholder="e.g. Bridal Makeup" 
                        className="pl-10 rounded-xl border-rose-gold/20 focus:border-rose-gold" 
                        {...register("service")}
                      />
                    </div>
                    {errors.service && <p className="text-xs text-destructive">{errors.service.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="date">Preferred Date</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                      <Input 
                        id="date"
                        type="date" 
                        className="pl-10 rounded-xl border-rose-gold/20 focus:border-rose-gold" 
                        {...register("date")}
                      />
                    </div>
                    {errors.date && <p className="text-xs text-destructive">{errors.date.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Notes</Label>
                  <Textarea 
                    id="message"
                    placeholder="Any special requirements?" 
                    className="rounded-xl border-rose-gold/20 focus:border-rose-gold min-h-[120px]" 
                    {...register("message")}
                  />
                </div>

                <Button type="submit" className="w-full bg-rose-gold hover:bg-rose-gold/90 text-white rounded-full py-7 text-lg font-bold shadow-lg shadow-rose-gold/20">
                  Confirm Appointment
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
