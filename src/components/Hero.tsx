import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import LazyImage from "@/components/LazyImage";
import heroImage from "@/assets/hero-pets.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden" role="banner">
      <div className="absolute inset-0 bg-black/10" aria-hidden="true"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Premium Pet Grooming
              <span className="block bg-gradient-secondary bg-clip-text text-transparent">
                With Love & Care
              </span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-xl">
              Transform your furry friends into their best selves with our professional grooming services. 
              Expert care, premium products, and gentle handling guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="cta" 
                size="lg"
                aria-label="Book appointment for pet grooming"
              >
                Book Appointment
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                aria-label="View our grooming services"
              >
                View Services
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-hero">
              <LazyImage 
                src={heroImage} 
                alt="Professional pet grooming - happy golden retriever and white cat after grooming session showing excellent results from PawSpa Grooming services"
                className="w-full h-auto object-cover"
                priority={true}
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gradient-card rounded-2xl p-6 shadow-card" role="complementary" aria-label="Customer satisfaction statistics">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary" aria-label="500 plus">500+</div>
                <div className="text-sm text-muted-foreground">Happy Pets</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;