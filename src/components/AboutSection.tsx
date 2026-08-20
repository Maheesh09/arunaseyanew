import { Award, Camera, Heart, Clock, MapPin } from "lucide-react";
import heroStudio from "@/assets/arunaseya.png";
import newBranch from "@/assets/arunaseya_new_branch.jpeg";

const AboutSection = () => {
  const highlights = [
    { icon: Award, text: "15+ Years of Excellence" },
    { icon: Camera, text: "Professional Equipment" },
    { icon: Heart, text: "Customer Satisfaction" },
    { icon: Clock, text: "Fast Turnaround" },
  ];

  return (
    <section id="about" className="section-padding bg-studio-light">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="relative rounded-2xl overflow-hidden shadow-hover border border-border">
                <img
                  src={heroStudio}
                  alt="Studio Arunaseya Workspace"
                  className="w-full h-[360px] md:h-[400px] object-cover"
                />
                <span className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-background/90 px-3 py-1 font-body text-xs font-semibold text-foreground shadow-card">
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                  Kelaniya
                </span>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-hover border border-border">
                <img
                  src={newBranch}
                  alt="Studio Arunaseya new branch storefront"
                  className="w-full h-[360px] md:h-[400px] object-cover"
                />
                <span className="absolute top-3 left-3 rounded-full bg-background/90 px-3 py-1 font-body text-xs font-semibold text-foreground shadow-card">
                  New Branch
                </span>
                <span className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-background/90 px-3 py-1 font-body text-xs font-semibold text-foreground shadow-card">
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                  Himbutana
                </span>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 md:right-6 bg-primary text-primary-foreground px-6 py-4 rounded-xl shadow-hover whitespace-nowrap">
              <p className="font-display text-3xl font-bold">15+</p>
              <p className="font-body text-sm">Years of Excellence</p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <p className="text-primary font-body font-medium mb-2 animate-fade-up opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>About Us</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                About Studio Arunaseya
              </h2>
            </div>
            
            <p className="font-body text-muted-foreground leading-relaxed">
              Studio Arunaseya is a trusted photography studio with over a decade of experience 
              serving the Kelaniya community. We combine traditional craftsmanship with modern 
              technology to deliver exceptional results for every customer.
            </p>
            
            <p className="font-body text-muted-foreground leading-relaxed">
              From urgent passport photos to precious memory restoration, our services range 
              across all your photography needs. We take pride in our quality, reasonable pricing, 
              and commitment to customer satisfaction.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg bg-background border border-border shadow-card"
                >
                  <div className="p-2 rounded-lg bg-primary/10">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-body text-sm font-medium text-foreground">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
