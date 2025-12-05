import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-card">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Get in Touch
        </h2>
        
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="card-surface max-w-lg w-full mx-auto">
            <CardContent className="pt-6 text-center space-y-4">
              <div className="flex justify-center">
                <div className="p-4 rounded-full bg-primary/10">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Phone</h3>
                <p className="text-muted-foreground mb-2">9972844030</p>
                <p className="text-muted-foreground mb-4">7981951884</p>
                <Button 
                  className="gap-2"
                  asChild
                >
                  <a href="tel:9972844030">
                    <Phone className="h-4 w-4" />
                    Call Now
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="card-surface max-w-lg w-full mx-auto">
            <CardContent className="pt-6 text-center space-y-4">
              <div className="flex justify-center">
                <div className="p-4 rounded-full bg-secondary/10">
                  <Instagram className="h-8 w-8 text-secondary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Instagram</h3>
                <p className="text-muted-foreground italic mb-4">
                  “Every like is a little light of hope. Follow our kindness journey.”
                </p>
                <Button 
                  className="gap-2"
                  asChild
                >
                  <a 
                    href="https://www.instagram.com/manam__foundation?igsh=MWdsOTZtY3premNnZw==" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Instagram className="h-4 w-4" />
                    Visit Instagram
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <Card className="card-surface max-w-3xl mx-auto">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center gap-4">
                <MessageCircle className="h-12 w-12 text-primary" />
                <h3 className="text-2xl font-semibold text-foreground">Join Our Community</h3>
                <p className="text-muted-foreground max-w-md">
                  Stay updated with our activities and contribute to making a difference
                </p>
                <Button 
                  size="lg" 
                  className="gap-2"
                  asChild
                >
                  <a href="https://chat.whatsapp.com/KqUMpVMe9MqDojRy7qPKXm" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5" />
                    Join WhatsApp Group
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
