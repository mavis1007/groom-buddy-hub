import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Caring for Pets
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Since 2018
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              At PawSpa Grooming, we believe every pet deserves to look and feel their best. 
              Our certified groomers use only the finest products and gentlest techniques to 
              ensure your furry family members receive the royal treatment they deserve.
            </p>
            <p className="text-muted-foreground mb-8">
              With over 6 years of experience and hundreds of happy pets, we've built our 
              reputation on trust, care, and exceptional results. From nervous first-timers 
              to seasoned spa veterans, we treat each pet with individual attention and love.
            </p>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  6+
                </div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  500+
                </div>
                <div className="text-sm text-muted-foreground">Happy Pets</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  4.9★
                </div>
                <div className="text-sm text-muted-foreground">Customer Rating</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🐕</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Certified Groomers</h3>
                <p className="text-sm text-muted-foreground">
                  Professional certification and ongoing education
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-card">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Safety First</h3>
                <p className="text-sm text-muted-foreground">
                  Gentle handling and safe, pet-friendly products
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-card">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💎</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Premium Products</h3>
                <p className="text-sm text-muted-foreground">
                  High-quality, natural ingredients for best results
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-card">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">❤️</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Individual Care</h3>
                <p className="text-sm text-muted-foreground">
                  Personalized attention for each pet's needs
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;