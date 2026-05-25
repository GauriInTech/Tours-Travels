import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  destination: z.string().min(1, "Please select a destination"),
  travelDates: z.string().min(1, "Travel dates are required"),
  travelers: z.string().min(1, "Number of travelers is required"),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      destination: "",
      travelDates: "",
      travelers: "",
      message: "",
    },
  });

  function onSubmit(data: FormValues) {
    console.log(data);
    toast({
      title: "Inquiry Sent Successfully",
      description: "Our spiritual travel guides will contact you shortly.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Begin Your Journey
            </h2>
            <div className="w-16 h-1 bg-primary mb-8"></div>
            <p className="text-muted-foreground text-lg mb-12">
              Reach out to our experienced guides to start planning your spiritual pilgrimage. We customize each journey to meet your personal needs and aspirations.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-background p-3 rounded-full shrink-0 border border-border">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Call Us</h4>
                  <p className="text-muted-foreground">+91 9975494379 / +91 9975547432 / +91 8421403094</p>
                  <p className="text-muted-foreground">Mon-Sat, 9:00 AM - 6:00 PM (IST)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-background p-3 rounded-full shrink-0 border border-border">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Email Us</h4>
                  <p className="text-muted-foreground">rahuljagtap519@gmail.com</p>
                  <p className="text-muted-foreground">We reply within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-background p-3 rounded-full shrink-0 border border-border">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Our Office</h4>
                  <p className="text-muted-foreground">Shreya Tours & Travels</p>
                  <p className="text-muted-foreground">Shop No. 4, Sanidhya Apartment, Subhash Tekdi, Ulhasnagar-421004</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-background p-8 md:p-10 border border-border shadow-sm"
          >
            <h3 className="text-2xl font-serif font-bold text-foreground mb-6">Send an Inquiry</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} className="bg-transparent rounded-none" data-testid="input-contact-name" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" type="email" {...field} className="bg-transparent rounded-none" data-testid="input-contact-email" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="+1 234 567 890" {...field} className="bg-transparent rounded-none" data-testid="input-contact-phone" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="destination"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Destination of Interest</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-transparent rounded-none" data-testid="select-contact-destination">
                              <SelectValue placeholder="Select a package or place" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="sacred-circuit">Sacred Circuit</SelectItem>
                            <SelectItem value="himalayan-serenity">Himalayan Serenity</SelectItem>
                            <SelectItem value="buddhist-pilgrimage">Buddhist Pilgrimage</SelectItem>
                            <SelectItem value="custom">Custom Itinerary</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="travelDates"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Expected Travel Dates</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Oct 2024" {...field} className="bg-transparent rounded-none" data-testid="input-contact-dates" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="travelers"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Number of Travelers</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-transparent rounded-none" data-testid="select-contact-travelers">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="1">1 (Solo)</SelectItem>
                            <SelectItem value="2">2 (Couple)</SelectItem>
                            <SelectItem value="3-5">3-5 (Small Group)</SelectItem>
                            <SelectItem value="6+">6+ (Large Group)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Requirements / Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your spiritual goals or specific needs..."
                          className="min-h-[120px] bg-transparent rounded-none"
                          {...field}
                          data-testid="textarea-contact-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-none py-6 text-lg tracking-wide" data-testid="button-contact-submit">
                  Submit Inquiry
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
