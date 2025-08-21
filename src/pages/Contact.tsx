import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have questions about fitness, nutrition, or wellness? We're here to help you on your health journey. 
            Reach out to our team of certified professionals for personalized guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-emerald-100 p-3 rounded-lg">
                  <Mail className="text-emerald-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                  <p className="text-gray-600">support@fitwellhub.com</p>
                  <p className="text-sm text-gray-500">We typically respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Phone className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-sm text-gray-500">Monday - Friday, 9:00 AM - 6:00 PM EST</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <MapPin className="text-purple-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Visit Us</h3>
                  <p className="text-gray-600">123 Wellness Street<br />Health City, HC 12345<br />United States</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Clock className="text-orange-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                  <div className="text-gray-600 space-y-1">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Expertise */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Expertise</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Certified Personal Training & Fitness Coaching</li>
                <li>• Clinical Nutrition & Meal Planning</li>
                <li>• Mental Health & Stress Management</li>
                <li>• Sports Performance Optimization</li>
                <li>• Injury Prevention & Rehabilitation</li>
                <li>• Wellness Program Development</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
            
            {isSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-8 text-center">
                <CheckCircle className="text-emerald-600 w-16 h-16 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-emerald-800 mb-2">Message Sent Successfully!</h3>
                <p className="text-emerald-700">
                  Thank you for reaching out. We'll get back to you within 24 hours with a comprehensive response to your inquiry.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-colors"
                  >
                    <option value="">Please select a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="fitness">Fitness Training Question</option>
                    <option value="nutrition">Nutrition Advice</option>
                    <option value="mental-health">Mental Health & Wellness</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="media">Media & Press</option>
                    <option value="technical">Technical Support</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-colors resize-none"
                    placeholder="Tell us about your question or how we can help you on your wellness journey..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 text-white py-4 px-6 rounded-lg hover:bg-emerald-700 transition-colors font-semibold flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>

                <p className="text-sm text-gray-500 text-center">
                  By submitting this form, you agree to our{' '}
                  <Link to="/privacy" className="text-emerald-600 hover:text-emerald-700">
                    Privacy Policy
                  </Link>
                  {' '}and{' '}
                  <Link to="/terms" className="text-emerald-600 hover:text-emerald-700">
                    Terms of Service
                  </Link>
                  .
                </p>
              </form>
            )}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-white rounded-xl border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Do you offer personal training services?</h3>
              <p className="text-gray-600 mb-4">
                We provide educational content and general fitness guidance. For personalized training, we recommend consulting with certified trainers in your local area.
              </p>

              <h3 className="font-semibold text-gray-900 mb-2">Can you create a custom meal plan for me?</h3>
              <p className="text-gray-600 mb-4">
                Our articles provide general nutrition guidance. For personalized meal plans, please consult with a registered dietitian or certified nutritionist.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">How often do you publish new content?</h3>
              <p className="text-gray-600 mb-4">
                We publish new articles weekly, covering various aspects of fitness, nutrition, and wellness. Subscribe to our newsletter to stay updated.
              </p>

              <h3 className="font-semibold text-gray-900 mb-2">Are your articles reviewed by professionals?</h3>
              <p className="text-gray-600">
                Yes, all our content is reviewed by certified professionals including registered dietitians, personal trainers, and mental health counselors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;