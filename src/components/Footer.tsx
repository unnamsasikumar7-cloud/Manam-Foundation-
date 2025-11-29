import { Heart, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20 text-foreground py-12 px-4 border-t border-primary/20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center gap-2">
            <Heart className="h-6 w-6 fill-current" />
            <h3 className="text-2xl font-bold">Manam Foundation</h3>
          </div>
          
          <p className="text-lg">
            Together, we make kindness a habit.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>9972844030 / 7981951884</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Hyderabad, Telangana</span>
            </div>
          </div>
          
          <div className="pt-6 border-t border-foreground/20">
            <p className="text-sm">
              © {new Date().getFullYear()} Manam Foundation. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
