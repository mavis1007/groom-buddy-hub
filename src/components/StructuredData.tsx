import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
  type: 'LocalBusiness' | 'Service' | 'Review' | 'FAQPage';
  data: any;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const generateSchema = () => {
    const baseSchema = {
      '@context': 'https://schema.org',
      '@type': type,
      ...data
    };

    return JSON.stringify(baseSchema);
  };

  return (
    <Helmet>
      <script type="application/ld+json">{generateSchema()}</script>
    </Helmet>
  );
};

// Pre-configured structured data components
export const LocalBusinessSchema = () => (
  <StructuredData
    type="LocalBusiness"
    data={{
      '@type': ['LocalBusiness', 'PetGroomer'],
      name: 'PawSpa Grooming',
      description: 'Professional pet grooming services in Happy Valley, CA. Expert care for dogs and cats with premium products and gentle handling.',
      url: 'https://pawspagrooming.com',
      telephone: '(555) 729-7722',
      email: 'hello@pawspagrooming.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '123 Pet Paradise Lane',
        addressLocality: 'Happy Valley',
        addressRegion: 'CA',
        postalCode: '90210',
        addressCountry: 'US'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '34.0522',
        longitude: '-118.2437'
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '18:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Saturday',
          opens: '09:00',
          closes: '16:00'
        }
      ],
      priceRange: '$35-$95',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '127',
        bestRating: '5',
        worstRating: '1'
      },
      image: 'https://pawspagrooming.com/hero-pets.jpg',
      paymentAccepted: 'Cash, Credit Card, Debit Card'
    }}
  />
);

export const ServicesSchema = () => (
  <StructuredData
    type="Service"
    data={{
      '@type': 'Service',
      name: 'Pet Grooming Services',
      provider: {
        '@type': 'LocalBusiness',
        name: 'PawSpa Grooming'
      },
      serviceType: 'Pet Grooming',
      description: 'Professional grooming services for dogs and cats including baths, cuts, nail trimming, and spa treatments.',
      offers: [
        {
          '@type': 'Offer',
          name: 'Basic Bath & Brush',
          price: '35',
          priceCurrency: 'USD',
          description: 'Complete wash, dry, and brush out for a fresh, clean look.'
        },
        {
          '@type': 'Offer', 
          name: 'Full Grooming Package',
          price: '75',
          priceCurrency: 'USD',
          description: 'Complete transformation with style cuts and premium care.'
        },
        {
          '@type': 'Offer',
          name: 'Premium Spa Treatment',
          price: '95', 
          priceCurrency: 'USD',
          description: 'Luxury spa experience with specialized treatments and premium products.'
        }
      ]
    }}
  />
);

export default StructuredData;