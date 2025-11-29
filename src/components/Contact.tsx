import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-card">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Get in Touch
        </h2>
        
        <div className="flex justify-center">
          <Card className="border-2 hover:shadow-lg transition-shadow duration-300 max-w-lg w-full">
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
        </div>
        
        <div className="mt-12 text-center">
          <Card className="border-2 bg-accent">
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
