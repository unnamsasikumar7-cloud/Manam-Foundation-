import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import blanketPoster from "@/assets/poster/blanket 2.0.png";

// Import poster images from the poster folder
const posterImages: string[] = [
  blanketPoster,
];

const UpcomingEvents = () => {
  return (
    <section id="upcoming-events" className="py-20 px-4 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Calendar className="h-8 w-8 text-[hsl(var(--accent-secondary))]" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Upcoming Events
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us in our upcoming initiatives and make a difference in the community
          </p>
        </div>

        {posterImages.length > 0 ? (
          <div className="flex justify-center items-center">
            <div className="max-w-2xl w-full">
              {posterImages.map((poster, index) => (
                <Card key={index} className="card-surface overflow-hidden">
                  <CardContent className="p-0">
                    <img
                      src={poster}
                      alt={`Upcoming Event ${index + 1}`}
                      className="w-full h-auto object-cover"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <Card className="border-2 border-dashed">
              <CardContent className="pt-6 pb-6">
                <p className="text-muted-foreground">
                  Event posters will be displayed here. Add posters to the <code className="bg-muted px-2 py-1 rounded">src/assets/poster/</code> folder.
                </p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};

export default UpcomingEvents;

