import React from 'react';
import { Award, Users, Target, Heart, Star, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';

const About = () => {
  return (
    <>
      <SEO 
        title="About FitWell Hub - Expert Health & Wellness Team"
        description="Meet our team of certified professionals: nutritionists, personal trainers, and mental health counselors dedicated to your wellness journey."
      />
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">About FitWell Hub</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're a team of certified health professionals passionate about making evidence-based wellness accessible to everyone. 
              Our mission is to provide trustworthy, practical guidance that helps you build lasting healthy habits.
            </p>
          </div>

          {/* Mission Section */}
          <div className="bg-emerald-50 rounded-2xl p-8 md:p-12 mb-16">
            <div className="text-center mb-8">
              <Target className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission & Vision</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Mission Statement</h3>
                <p className="text-gray-700 leading-relaxed">
                  To empower individuals on their wellness journey by providing trustworthy, science-backed information about fitness, nutrition, and mental health. We believe that small, consistent changes lead to transformative results.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  A world where everyone has access to reliable health information and the tools they need to live their healthiest, most fulfilling life through sustainable lifestyle changes.
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-4xl font-bold text-emerald-600 mb-2">500K+</div>
              <div className="text-gray-600 font-medium">Monthly Readers</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-4xl font-bold text-emerald-600 mb-2">1,000+</div>
              <div className="text-gray-600 font-medium">Articles Published</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-4xl font-bold text-emerald-600 mb-2">50K+</div>
              <div className="text-gray-600 font-medium">Newsletter Subscribers</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-4xl font-bold text-emerald-600 mb-2">5+</div>
              <div className="text-gray-600 font-medium">Years of Excellence</div>
            </div>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Evidence-Based Excellence</h3>
                <p className="text-gray-600 leading-relaxed">
                  All our content is backed by peer-reviewed scientific research and reviewed by qualified health professionals to ensure accuracy and reliability in every recommendation.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="text-purple-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Inclusive Community</h3>
                <p className="text-gray-600 leading-relaxed">
                  We welcome people of all fitness levels, backgrounds, and goals. Health is personal, and every journey is unique, valid, and deserving of support and encouragement.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="text-orange-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Holistic Wellness</h3>
                <p className="text-gray-600 leading-relaxed">
                  True wellness encompasses physical fitness, mental health, nutrition, and lifestyle factors. We address all aspects of well-being for comprehensive health optimization.
                </p>
              </div>
            </div>
          </div>

          {/* Team */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Meet Our Expert Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center bg-white rounded-xl p-8">
                <div className="w-32 h-32 bg-emerald-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-3xl font-bold text-emerald-700">DR</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Dr. Rachel Martinez</h3>
                <p className="text-emerald-600 mb-3 font-medium">Certified Nutritionist & Founder</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  PhD in Nutritional Science from Stanford University. 15+ years of clinical experience in nutrition counseling and wellness coaching. Specializes in metabolic health and sustainable weight management.
                </p>
                <div className="flex justify-center space-x-2">
                  <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded text-xs">RD</span>
                  <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded text-xs">PhD</span>
                  <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded text-xs">CDN</span>
                </div>
              </div>

              <div className="text-center bg-white rounded-xl p-8">
                <div className="w-32 h-32 bg-blue-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-3xl font-bold text-blue-700">MC</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Mike Chen</h3>
                <p className="text-blue-600 mb-3 font-medium">Certified Personal Trainer</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  NASM-CPT with specializations in corrective exercise and sports performance. 10+ years of experience helping clients achieve their fitness goals through functional movement and strength training.
                </p>
                <div className="flex justify-center space-x-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">NASM-CPT</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">CES</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">PES</span>
                </div>
              </div>

              <div className="text-center bg-white rounded-xl p-8">
                <div className="w-32 h-32 bg-purple-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-3xl font-bold text-purple-700">SL</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Sarah Lopez</h3>
                <p className="text-purple-600 mb-3 font-medium">Mental Health Counselor</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Licensed Clinical Mental Health Counselor (LCMHC) with Master's in Psychology. Specializes in stress management, anxiety treatment, and mindfulness-based interventions for wellness optimization.
                </p>
                <div className="flex justify-center space-x-2">
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">LCMHC</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">MA</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">MBSR</span>
                </div>
              </div>
            </div>
          </div>

          {/* Credentials */}
          <div className="mt-12 bg-white rounded-xl border border-gray-200 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Professional Credentials & Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-emerald-600" size={20} />
                  <span className="text-gray-700">Registered Dietitian Nutritionist (RDN)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-emerald-600" size={20} />
                  <span className="text-gray-700">NASM Certified Personal Trainer (CPT)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-emerald-600" size={20} />
                  <span className="text-gray-700">Licensed Clinical Mental Health Counselor</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-emerald-600" size={20} />
                  <span className="text-gray-700">Precision Nutrition Level 1 Certified</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-emerald-600" size={20} />
                  <span className="text-gray-700">Corrective Exercise Specialist (CES)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-emerald-600" size={20} />
                  <span className="text-gray-700">Mindfulness-Based Stress Reduction (MBSR)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-emerald-600" size={20} />
                  <span className="text-gray-700">PhD in Nutritional Science</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-emerald-600" size={20} />
                  <span className="text-gray-700">Master's in Clinical Psychology</span>
                </div>
              </div>
            </div>
          </div>

          {/* Editorial Standards */}
          <div className="mt-12 bg-blue-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Editorial Standards</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Content Review Process</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• All articles reviewed by subject matter experts</li>
                  <li>• Fact-checking against peer-reviewed research</li>
                  <li>• Medical disclaimer and safety considerations</li>
                  <li>• Regular content updates based on new research</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Quality Assurance</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• References to credible scientific sources</li>
                  <li>• Clear distinction between general advice and medical care</li>
                  <li>• Practical, actionable recommendations</li>
                  <li>• Inclusive approach for all fitness levels</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Health?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join our community of health-conscious individuals and get access to expert advice, evidence-based strategies, and ongoing support for your wellness journey.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition-colors font-semibold text-lg">
                Subscribe to Our Newsletter
              </button>
              <button className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-lg">
                Browse Our Articles
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;