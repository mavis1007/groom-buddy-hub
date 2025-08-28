import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Services = () => {
  const services = [
    {
      title: "Basic Bath & Brush",
      price: "$35",
      duration: "1 hour",
      description: "Complete wash, dry, and brush out for a fresh, clean look.",
      features: ["Gentle shampoo", "Thorough brushing", "Nail trimming", "Ear cleaning"],
      popular: false,
    },
    {
      title: "Full Grooming Package",
      price: "$75",
      duration: "2-3 hours", 
      description: "Complete transformation with style cuts and premium care.",
      features: ["Bath & brush", "Professional cut", "Nail & pad trim", "Ear cleaning", "Cologne spritz", "Bow or bandana"],
      popular: true,
    },
    {
      title: "Premium Spa Treatment", 
      price: "$95",
      duration: "3-4 hours",
      description: "Luxury spa experience with specialized treatments and premium products.",
      features: ["Aromatherapy bath", "Deep conditioning", "Specialized cut", "Paw massage", "Premium cologne", "Photo session"],
      popular: false,
    }
  ];

  return (
    <section className="py-20 bg-background" role="region" aria-labelledby="services-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 id="services-heading" className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Our Grooming Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional grooming services tailored to your pet's needs, from basic maintenance to luxury spa treatments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`relative bg-gradient-card border-0 shadow-card hover:shadow-hero transition-all duration-300 transform hover:-translate-y-2 ${service.popular ? 'ring-2 ring-primary/20' : ''}`}
              role="listitem"
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-secondary text-secondary-foreground px-4 py-1" aria-label="Most popular service">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  {service.title}
                </CardTitle>
                <div className="flex items-center justify-center gap-4">
                  <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent" aria-label={`Price ${service.price}`}>
                    {service.price}
                  </div>
                  <div className="text-sm text-muted-foreground" aria-label={`Duration ${service.duration}`}>
                    {service.duration}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground text-center">
                  {service.description}
                </p>
                
                <ul className="space-y-3" role="list" aria-label="Service features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3" role="listitem">
                      <div className="w-2 h-2 bg-gradient-primary rounded-full" aria-hidden="true"></div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={service.popular ? "hero" : "default"} 
                  className="w-full"
                  size="lg"
                  aria-label={`Book ${service.title} service for ${service.price}`}
                >
                  Book This Service
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;