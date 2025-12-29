import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Camera, Facebook, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const OutdoorSessions = () => {
  useEffect(() => {
    // Load Facebook SDK
    if (window.FB) {
      window.FB.XFBML.parse();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0";
    script.async = true;
    script.defer = true;
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);

    script.onload = () => {
      if (window.FB) {
        window.FB.init({
          xfbml: true,
          version: "v18.0",
        });
      }
    };

    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <div className="min-h-screen">
      <SEOHead />
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container-narrow px-4 md:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <Camera className="w-8 h-8 text-primary" />
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                Outdoor Photography Sessions
              </h1>
              <p className="font-body text-lg text-muted-foreground mb-8">
                Explore our stunning outdoor photography sessions. From scenic landscapes to 
                beautiful portraits, discover the moments we've captured in nature's embrace.
              </p>
              <a
                href="https://www.facebook.com/arunaseya.01"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Button size="lg" className="gap-2">
                  <Facebook className="w-5 h-5" />
                  Visit Our Facebook Page
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Facebook Feed Section */}
        <section className="section-padding bg-background">
          <div className="container-narrow">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Latest Sessions
              </h2>
              <p className="font-body text-muted-foreground max-w-2xl mx-auto">
                Follow us on Facebook to see our latest outdoor photography sessions and updates.
              </p>
            </div>

            {/* Facebook Page Plugin */}
            <div className="max-w-4xl mx-auto">
              <div
                className="fb-page"
                data-href="https://www.facebook.com/arunaseya.01"
                data-tabs="timeline,events"
                data-width=""
                data-height="600"
                data-small-header="false"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="true"
              ></div>
            </div>

            {/* Alternative: Direct Link Section */}
            <div className="mt-12 text-center">
              <p className="font-body text-muted-foreground mb-4">
                Can't see the feed? Visit our Facebook page directly:
              </p>
              <a
                href="https://www.facebook.com/arunaseya.01"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
              >
                <Facebook className="w-5 h-5" />
                Studio Arunaseya on Facebook
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

// Extend Window interface for Facebook SDK
declare global {
  interface Window {
    FB?: {
      init: (config: { xfbml: boolean; version: string }) => void;
      XFBML: {
        parse: () => void;
      };
    };
  }
}

export default OutdoorSessions;

