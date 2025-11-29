import { Card, CardContent } from "@/components/ui/card";
import { Utensils, Package, Droplets, Heart } from "lucide-react";

const events = [
  {
    icon: Utensils,
    title: "Food Donation Drive",
    description: "Meals for 250+ people near Gandhi Hospital",
    color: "primary"
  },
  {
    icon: Package,
    title: "Blanket Donation",
    description: "200 blankets distributed to homeless individuals",
    color: "secondary"
  },
  {
    icon: Droplets,
    title: "Summer Water Kiosk",
    description: "45 days of free drinking water",
    color: "primary"
  },
  {
    icon: Heart,
    title: "Support for 5000+ People",
    description: "Donations to homeless people and orphanages",
    color: "secondary"
  }
];

const MajorEvents = () => {
  return (
    <section id="events" className="py-20 px-4 bg-background">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Our Major Events
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-border"></div>
          
          <div className="space-y-12">
            {events.map((event, index) => (
              <div 
                key={index}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="w-full md:w-5/12">
                  <Card className="border-2 hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-full ${
                          event.color === 'primary' 
                            ? 'bg-primary/10' 
                            : 'bg-secondary/10'
                        }`}>
                          <event.icon className={`h-6 w-6 ${
                            event.color === 'primary' 
                              ? 'text-primary' 
                              : 'text-secondary'
                          }`} />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-xl font-semibold text-foreground">
                            {event.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {event.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Timeline dot */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <div className={`w-4 h-4 rounded-full border-4 ${
                    event.color === 'primary' 
                      ? 'bg-primary border-background' 
                      : 'bg-secondary border-background'
                  }`}></div>
                </div>
                
                <div className="w-full md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MajorEvents;
