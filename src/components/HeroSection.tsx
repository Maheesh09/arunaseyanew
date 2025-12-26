import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroStudio from "@/assets/hero-studio.jpg";
import heroPortrait from "@/assets/hero-portrait.jpg";
import heroPrinting from "@/assets/hero-printing.jpg";

const slides = [
  { image: heroStudio, alt: "Professional Photography Studio" },
  { image: heroPortrait, alt: "Portrait Photography Session" },
  { image: heroPrinting, alt: "Premium Photo Printing" },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-foreground/40" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-studio-white mb-6 animate-fade-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
          Capture Every Moment.
          <br />
          <span className="text-primary">Cherish It Forever.</span>
        </h1>
        <p className="font-body text-lg md:text-xl text-studio-white/90 mb-8 max-w-2xl mx-auto animate-fade-up opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
          Premium photography services for all your personal and professional needs. 
          Trusted by thousands in Kelaniya for over 15 years.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up opacity-0" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
          <Button size="lg" className="text-base px-8 bg-primary hover:bg-primary/90">
            <a href="#services">Our Services</a>
          </Button>
          <Button size="lg" variant="secondary" className="text-base px-8 bg-studio-white/90 text-foreground hover:bg-studio-white border-0">
            <a href="#contact">Contact Us</a>
          </Button>
        </div>
      </div>

      {/* Slide Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-studio-white/20 hover:bg-studio-white/40 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-studio-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-studio-white/20 hover:bg-studio-white/40 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-studio-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? "bg-primary w-8" : "bg-studio-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
