import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Package, Droplets } from "lucide-react";

const stats = [
  {
    icon: Heart,
    number: "100+",
    label: "Donations Completed",
    description: "Making a difference one act of kindness at a time"
  },
  {
    icon: Users,
    number: "250+",
    label: "People Fed",
    description: "Food donated near Gandhi Hospital"
  },
  {
    icon: Package,
    number: "200",
    label: "Blankets Distributed",
    description: "Warmth provided to homeless individuals"
  },
  {
    icon: Droplets,
    number: "45 Days",
    label: "Water Kiosk",
    description: "Free drinking water during summer"
  }
];

const ImpactStats = () => {
  return (
    <section id="impact" className="py-20 px-4 bg-card">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Our Impact
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          We also support multiple orphanages with food and essentials
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="border-2 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="flex justify-center">
                  <div className="p-4 rounded-full bg-primary/10">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl md:text-4xl font-bold text-primary">
                    {stat.number}
                  </h3>
                  <p className="font-semibold text-foreground">
                    {stat.label}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {stat.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
