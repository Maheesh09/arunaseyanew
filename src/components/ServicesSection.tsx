import { 
  Printer, 
  CreditCard, 
  Globe, 
  Frame, 
  ImageIcon, 
  Shield, 
  FileText 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Printer,
    title: "Photo Printing",
    description: "Any size, any format — premium quality guaranteed.",
  },
  {
    icon: CreditCard,
    title: "Online Passport & ID Photos",
    description: "Instant government-compliant digital photos.",
  },
  {
    icon: Globe,
    title: "Visa Photos for Any Country",
    description: "Country-specific requirements handled precisely.",
  },
  {
    icon: Frame,
    title: "Custom Photo Framing",
    description: "Premium frames tailored to preserve memories.",
  },
  {
    icon: ImageIcon,
    title: "Photo Restoration",
    description: "Repair old, faded, and damaged photographs.",
  },
  {
    icon: Shield,
    title: "Laminating",
    description: "Protect documents and photos professionally.",
  },
  {
    icon: FileText,
    title: "Visiting Card Printing",
    description: "Professional design and high-quality printing.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-primary font-body font-medium mb-2">What We Offer</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Photography Services
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            From quick passport photos to detailed restoration work, we offer comprehensive 
            photography services to meet all your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group bg-card border border-border hover:border-primary/50 card-hover cursor-pointer"
            >
              <CardContent className="p-6">
                <div className="mb-4 p-3 rounded-xl bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
