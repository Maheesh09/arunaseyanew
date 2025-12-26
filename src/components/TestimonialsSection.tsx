import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Samantha Perera",
    rating: 5,
    text: "Excellent service! Got my visa photos done in just 10 minutes. The quality was perfect and the staff was very friendly.",
  },
  {
    name: "Rohan Fernando",
    rating: 5,
    text: "I've been coming here for years. They restored my grandparents' old wedding photo beautifully. Highly recommended!",
  },
  {
    name: "Nirmala De Silva",
    rating: 5,
    text: "Best photo studio in Kelaniya! Reasonable prices and the owner is so helpful. My passport photos were approved on the first try.",
  },
  {
    name: "Kasun Jayawardena",
    rating: 5,
    text: "Professional service with a personal touch. They framed our family portrait perfectly. Will definitely come back!",
  },
  {
    name: "Dilini Wickramasinghe",
    rating: 5,
    text: "Fast, reliable, and affordable. What more could you ask for? Studio Arunaseya is the best in the area.",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const goTo = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const next = () => goTo((currentIndex + 1) % testimonials.length);
  const prev = () => goTo((currentIndex - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-padding bg-studio-light">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-body font-medium mb-2">Testimonials</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-3xl mx-auto">
          <div className="bg-background rounded-2xl p-8 md:p-12 shadow-card">
            <Quote className="w-10 h-10 text-primary/20 mb-6" />
            
            <div className="min-h-[150px] flex flex-col justify-center">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="font-body text-lg md:text-xl text-foreground leading-relaxed mb-6">
                "{testimonials[currentIndex].text}"
              </p>

              {/* Name */}
              <p className="font-display font-semibold text-foreground">
                {testimonials[currentIndex].name}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-muted hover:bg-primary/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goTo(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-primary w-6" : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-2 rounded-full bg-muted hover:bg-primary/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
