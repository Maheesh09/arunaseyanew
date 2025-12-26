import { useState } from "react";
import heroStudio from "@/assets/hero-studio.jpg";
import heroPrinting from "@/assets/hero-printing.jpg";
import heroPortrait from "@/assets/arunaseya.png";
import image1 from "@/assets/frames1.png";
import image2 from "@/assets/printer.png";
import image3 from "@/assets/printing2.png";

const categories = ["All", "Portrait", "Printing", "Framing", "Studio"];

const galleryImages = [
  { src: heroPrinting, category: "Printing", alt: "Photo Printing" },
  { src: heroStudio, category: "Studio", alt: "Studio Setup" },
  { src: heroPortrait, category: "Studio", alt: "Portrait Photography" },
  { src: image1, category: "Framing", alt: "Photo Framing" },
  { src: image2, category: "Printing", alt: "Photo Printing Service" },
  { src: image3, category: "Printing", alt: "Photo Printing Service" },
];

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-primary font-body font-medium mb-2">Our Work</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sample Gallery
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Browse through our collection of professional photography work.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full font-body text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden aspect-[4/3] cursor-pointer border border-border"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-center justify-center">
                <p className="font-body text-studio-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                  {image.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
