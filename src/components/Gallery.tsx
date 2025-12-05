import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import gallery1 from "@/assets/gallery-1.jpeg";
import gallery3 from "@/assets/gallery-3.jpeg";
import gallery4 from "@/assets/gallery-4.jpeg";
import gallery5 from "@/assets/gallery-5.jpeg";
import gallery6 from "@/assets/gallery-6.jpeg";
import gallery7 from "@/assets/gallery-7.jpeg";
import gallery8 from "@/assets/gallery-8.jpeg";
import gallery9 from "@/assets/gallery-9.jpeg";
import gallery10 from "@/assets/gallery-10.jpeg";
import gallery11 from "@/assets/gallery-11.jpeg";
import gallery12 from "@/assets/gallery-12.jpeg";
import gallery13 from "@/assets/gallery-13.jpeg";
import gallery14 from "@/assets/gallery-14.jpeg";

const galleryImages = [
  { src: gallery1, alt: "Food donation near Gandhi Hospital" },
  { src: gallery3, alt: "Orphanage visit and meal service" },
  { src: gallery4, alt: "Children at Dwarakamayee Seva Samithi" },
  { src: gallery5, alt: "Birthday celebration at orphanage" },
  { src: gallery6, alt: "Birthday celebration with children" },
  { src: gallery7, alt: "Serving meals to orphanage children" },
  { src: gallery8, alt: "Food distribution to children" },
  { src: gallery9, alt: "Meal service at orphanage" },
  { src: gallery10, alt: "Night time donation drive" },
  { src: gallery11, alt: "Blanket distribution at night" },
  { src: gallery12, alt: "Distributing essentials from vehicle" },
  { src: gallery13, alt: "Supporting homeless individuals" },
  { src: gallery14, alt: "Blanket distribution to homeless children" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 px-4 bg-background">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Moments of Kindness
        </h2>
        
        {/* Gallery Carousel */}
        <div className="px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden card-surface p-0">
                    <CardContent className="p-0">
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="w-full h-[300px] object-cover"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
