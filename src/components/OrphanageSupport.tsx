import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Users } from "lucide-react";

const OrphanageSupport = () => {
  return (
    <section className="py-20 px-4 bg-card">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Orphanage We Support
        </h2>
        
        <Card className="card-surface mt-12">
          <CardHeader className="text-center space-y-4 pb-4">
            <div className="flex justify-center">
              <div className="p-4 rounded-full bg-primary/10">
                <Users className="h-12 w-12 text-primary" />
              </div>
            </div>
            <CardTitle className="text-3xl">Dwarakamayee Seva Samithi</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-center text-muted-foreground text-lg">
              We work closely with Dwarakamayee Seva Samithi to support 45 children with regular meals.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="card-surface bg-accent/40 border-none">
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">₹2,000</div>
                  <div className="text-foreground font-medium">Vegetarian Meal</div>
                  <div className="text-sm text-muted-foreground mt-1">For 45 children</div>
                </CardContent>
              </Card>
              
              <Card className="card-surface bg-accent/40 border-none">
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">₹4,000</div>
                  <div className="text-foreground font-medium">Non-Vegetarian Meal</div>
                  <div className="text-sm text-muted-foreground mt-1">For 45 children</div>
                </CardContent>
              </Card>
            </div>
            
            <div className="flex flex-col items-center gap-4 pt-4">
              <Button 
                size="lg" 
                variant="outline"
                className="gap-2"
                asChild
              >
                <a 
                  href="https://share.google/97g9McTp5o8ErkNKn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <MapPin className="h-5 w-5" />
                  View Location on Map
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default OrphanageSupport;
