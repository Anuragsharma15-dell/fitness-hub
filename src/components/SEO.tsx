import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "FitWell Hub - Your Trusted Source for Fitness, Nutrition & Wellness",
  description = "Expert-backed fitness routines, nutrition guidance, and wellness strategies. Evidence-based health information to help you build sustainable healthy habits for life.",
  keywords = "fitness, nutrition, wellness, health, exercise, diet, mental health, weight loss, muscle building, stress management",
  image = "https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg",
  url = "https://fitwellhub.com"
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="FitWell Hub" />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;