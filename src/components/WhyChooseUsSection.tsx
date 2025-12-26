import { DollarSign, Zap, CheckCircle, Users } from "lucide-react";

const features = [
  {
    icon: DollarSign,
    title: "Reasonable Pricing",
    description: "Quality services at fair prices for everyone.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description: "Quick delivery without compromising quality.",
  },
  {
    icon: CheckCircle,
    title: "100% Quality Assurance",
    description: "Every photo meets our high standards.",
  },
  {
    icon: Users,
    title: "Friendly & Reliable Service",
    description: "Warm hospitality with professional expertise.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="section-padding bg-studio-light">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-primary font-body font-medium mb-2">Why Us</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Studio Arunaseya
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Trusted by thousands of families and businesses in Kelaniya for over 15 years.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-background border border-border shadow-card card-hover"
            >
              <div className="mb-4 p-4 rounded-full bg-primary/10 w-fit mx-auto">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
