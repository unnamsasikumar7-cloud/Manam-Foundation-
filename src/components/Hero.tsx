import { Button } from "@/components/ui/button";
import { MessageCircle, Heart } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import blanketImage from "@/assets/hero section/blanket.JPEG";
import gandhiImage from "@/assets/hero section/gandhi.JPEG";
import orphanageImage from "@/assets/hero section/orphange.JPEG";
import waterImage from "@/assets/hero section/water.JPEG";

const heroImages = [
  { src: blanketImage, alt: "Blanket distribution" },
  { src: gandhiImage, alt: "Food donation near Gandhi Hospital" },
  { src: orphanageImage, alt: "Orphanage support" },
  { src: waterImage, alt: "Water kiosk service" },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden pt-16 md:pt-20">
      {/* Full Screen Carousel Background */}
      <div className="absolute inset-0 w-full h-full">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnInteraction: false,
            }),
          ]}
          className="w-full h-full"
        >
          <CarouselContent className="-ml-0 h-full">
            {heroImages.map((image, index) => (
              <CarouselItem key={index} className="pl-0 basis-full h-full">
                <div className="relative w-full h-screen">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover opacity-30"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/5 via-background/40 to-background/90" />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20">
        <div className="container max-w-5xl mx-auto text-center space-y-8">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="fade-up text-3xl md:text-5xl lg:text-6xl font-bold tracking-[0.08em] text-foreground leading-tight drop-shadow-lg">
                Together, we can turn compassion into action.
              </p>
              <p className="fade-up text-xl md:text-2xl lg:text-3xl text-foreground/90 leading-relaxed font-medium drop-shadow-lg delay-[120ms]">
                Help us support the homeless, the hungry, and the forgotten.
              </p>
            </div>
            
            <p className="fade-up text-base md:text-lg text-muted-foreground pt-2 drop-shadow-md delay-[220ms]">
              Started on January 1st, 2024 • 100+ donations completed
            </p>
            
            {/* Action Buttons */}
            <div className="fade-up flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 delay-[320ms]">
              <Button 
                size="lg" 
                className="gap-2 text-lg px-8 py-6 shadow-lg hover:shadow-xl"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Heart className="h-5 w-5" />
                Donate Now
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="gap-2 text-lg px-8 py-6 border-2 bg-background/90 backdrop-blur-sm hover:bg-background shadow-lg hover:shadow-xl transition-all"
                asChild
              >
                <a href="https://chat.whatsapp.com/KqUMpVMe9MqDojRy7qPKXm" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  Join Our WhatsApp Community
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
