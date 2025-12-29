import { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const webhookUrl = "http://localhost:5678/webhook-test/22b568fc-b894-4b32-b75e-583f87d4aa72";
      
      // Prepare headers with authentication if needed
      const headers: HeadersInit = {
        "Content-Type": "application/json",
        // Add authentication headers here if required by your webhook
        // Examples:
        // "Authorization": "Bearer YOUR_TOKEN_HERE",
        // "X-API-Key": "YOUR_API_KEY_HERE",
        // "Authorization": "Basic " + btoa("username:password"),
      };
      
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers,
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Webhook error:", response.status, errorText);
        
        if (response.status === 401) {
          throw new Error("Authentication failed. Please check if the webhook requires authentication credentials.");
        }
        if (response.status === 404) {
          throw new Error("Webhook endpoint not found. Please check if the server is running.");
        }
        throw new Error(`Server returned ${response.status}: ${errorText || "Unknown error"}`);
      }

      const responseData = await response.json().catch(() => ({}));
      console.log("Webhook response:", responseData);

      toast({
        title: "Message Sent!",
        description: "We'll get back to you soon. Thank you for contacting us!",
      });
      setFormData({ name: "", phone: "", message: "" });
    } catch (error) {
      console.error("Form submission error:", error);
      
      const errorMessage = error instanceof Error 
        ? error.message 
        : "Failed to send message. Please check your connection and try again.";
      
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "17, Eksath Mawatha, Sinharamulla, Kelaniya, 11600",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+94 70 228 4833",
      href: "tel:+94702284833",
    },
    {
      icon: Mail,
      title: "Email",
      content: "arunaseya48@gmail.com",
      href: "mailto:arunaseya48@gmail.com",
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "Monday – Sunday: 8:00 AM – 8:00 PM",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-primary font-body font-medium mb-2">Get In Touch</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Visit Our Studio
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            We'd love to hear from you. Drop by our studio or send us a message.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="p-3 rounded-xl bg-primary/10 flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="font-body text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="font-body text-muted-foreground">{item.content}</p>
                  )}
                </div>
              </div>
            ))}

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/94702284833"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-studio-white px-6 py-3 rounded-xl font-body font-medium hover:bg-[#20BD5C] transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>

            {/* Map */}
            <div className="rounded-xl overflow-hidden shadow-card border border-border h-[250px] mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.4848389927997!2d79.91412607568142!3d6.951992818034251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2582620d31761%3A0xc696b81a1da9d95e!2sStudio%20Arunaseya!5e0!3m2!1sen!2slk!4v1766765739310!5m2!1sen!2slk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Studio Arunaseya Location"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-studio-light rounded-2xl p-8 border border-border">
            <h3 className="font-display text-xl font-semibold text-foreground mb-6">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="font-body text-sm font-medium text-foreground mb-2 block">
                  Full Name
                </label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background"
                />
              </div>
              <div>
                <label htmlFor="phone" className="font-body text-sm font-medium text-foreground mb-2 block">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="bg-background"
                />
              </div>
              <div>
                <label htmlFor="message" className="font-body text-sm font-medium text-foreground mb-2 block">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="bg-background resize-none"
                />
              </div>
              <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
