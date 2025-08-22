import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Pamper Your Pet?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Book your appointment today and give your furry friend the royal treatment they deserve. 
              We can't wait to meet you both!
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-primary-foreground">
                <div className="w-6 h-6 bg-gradient-secondary rounded-full flex items-center justify-center">
                  <span className="text-xs">📍</span>
                </div>
                <span>123 Pet Paradise Lane, Happy Valley, CA 90210</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground">
                <div className="w-6 h-6 bg-gradient-secondary rounded-full flex items-center justify-center">
                  <span className="text-xs">📞</span>
                </div>
                <span>(555) PAW-SPAA</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground">
                <div className="w-6 h-6 bg-gradient-secondary rounded-full flex items-center justify-center">
                  <span className="text-xs">✉️</span>
                </div>
                <span>hello@pawspagrooming.com</span>
              </div>
            </div>

            <Button variant="cta" size="lg" className="shadow-glow-secondary">
              Book Appointment Now
            </Button>
          </div>

          <Card className="bg-white/10 backdrop-blur border-white/20 shadow-hero">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary-foreground mb-6">Business Hours</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-white/20 pb-2">
                  <span className="text-primary-foreground/90">Monday - Friday</span>
                  <span className="text-primary-foreground font-semibold">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/20 pb-2">
                  <span className="text-primary-foreground/90">Saturday</span>
                  <span className="text-primary-foreground font-semibold">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/20 pb-2">
                  <span className="text-primary-foreground/90">Sunday</span>
                  <span className="text-primary-foreground font-semibold">Closed</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gradient-secondary rounded-lg">
                <p className="text-secondary-foreground text-center font-semibold">
                  📞 Call us for same-day appointments!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;