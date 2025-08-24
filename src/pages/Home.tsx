import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Dumbbell, Apple, Brain, Clock, User, Calendar, Star } from 'lucide-react';
import { articles } from '../data/articles';
import SEO from '../components/SEO';

const Home = () => {
  const featuredArticles = articles.slice(0, 30);

  return (
    <>
      <SEO />
      <div>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-emerald-50 to-blue-50 py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="flex items-center space-x-1 bg-emerald-100 px-4 py-2 rounded-full">
                  <Star className="text-emerald-600 fill-current" size={16} />
                  <span className="text-emerald-800 font-medium text-sm">Trusted by 500K+ readers</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Your Journey to
                <span className="text-emerald-600 block">Better Health Starts Here</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Discover evidence-based fitness routines, nutrition guidance, and wellness strategies from certified professionals. 
                Build sustainable healthy habits that transform your life, one day at a time.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                <Link 
                  to="/about"
                  className="bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition-colors font-semibold text-lg flex items-center justify-center space-x-2"
                >
                  <span>Start Your Journey</span>
                  <ArrowRight size={20} />
                </Link>
                <Link 
                  to="/contact"
                  className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-lg"
                >
                  Get Expert Guidance
                </Link>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span>Evidence-Based Content</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Certified Professionals</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>5+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ✅ HilltopAds Banner */}
        <div className="max-w-6xl mx-auto my-10 flex justify-center">
          <div
            dangerouslySetInnerHTML={{
              __html: `
                <script type="text/javascript" data-cfasync="false">
                  (function(ex){
                    var d = document,
                        s = d.createElement('script'),
                        l = d.scripts[d.scripts.length - 1];
                    s.settings = ex || {};
                    s.src = "//handsome-storm.com/bZX.VWsNdYG/lS0sYZW/cz/Ge/m-9EuUZvUYlWkQPdTWYh2SMYjpUQwFMgTEMot/NljHYAyhN-T/Afx/NDAO";
                    s.async = true;
                    s.referrerPolicy = 'no-referrer-when-downgrade';
                    l.parentNode.insertBefore(s, l);
                  })({});
                </script>
              `,
            }}
          />
        </div>
        {/* ✅ End HilltopAds Banner */}

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            ...
          </div>
        </section>

        {/* keep rest of your code same (Featured Articles, Testimonials, Newsletter, Benefits, etc.) */}
      </div>
    </>
  );
};

export default Home;
