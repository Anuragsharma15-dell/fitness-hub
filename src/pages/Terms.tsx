import React from 'react';
import SEO from '../components/SEO';

const Terms = () => {
  return (
    <>
      <SEO 
        title="Terms of Service - FitWell Hub"
        description="Review the terms of service for FitWell Hub. Clear guidelines for using our health and wellness content and community resources."
      />
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-gray-600">Last updated: January 15, 2025</p>
          </div>

          <div className="prose max-w-none">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold text-blue-800 mb-2">Agreement to Terms</h2>
              <p className="text-blue-700">
                By accessing and using FitWell Hub, you agree to be bound by these Terms of Service and our Privacy Policy. If you disagree with any part of these terms, please do not use our website or services.
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Description of Service</h2>
              <p className="text-gray-700 mb-4">
                FitWell Hub is a comprehensive health and wellness resource that provides:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                <li>Educational articles about fitness, nutrition, and mental health</li>
                <li>Expert guidance from certified health professionals</li>
                <li>Evidence-based wellness strategies and tips</li>
                <li>Community resources and support information</li>
                <li>Weekly newsletter with curated health content</li>
              </ul>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Medical Disclaimer</h3>
                <p className="text-yellow-700 mb-2">
                  <strong>The information provided on FitWell Hub is for educational and informational purposes only and is not intended to replace professional medical advice, diagnosis, or treatment.</strong>
                </p>
                <ul className="text-yellow-700 space-y-1 text-sm">
                  <li>• Always consult with qualified healthcare providers before making health-related decisions</li>
                  <li>• Never disregard professional medical advice or delay seeking treatment because of information from our website</li>
                  <li>• Individual results may vary based on numerous personal factors</li>
                  <li>• Stop any exercise or dietary changes if you experience adverse effects</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptable Use Policy</h2>
              <p className="text-gray-700 mb-4">You agree to use our website responsibly and in accordance with these guidelines. You must not:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Prohibited Activities</h4>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm">
                    <li>Violate any applicable laws or regulations</li>
                    <li>Transmit harmful, threatening, or inappropriate content</li>
                    <li>Attempt unauthorized access to our systems</li>
                    <li>Interfere with or disrupt our website functionality</li>
                    <li>Use automated tools to scrape or harvest content</li>
                    <li>Impersonate others or provide false information</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Community Standards</h4>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm">
                    <li>Maintain respectful communication in all interactions</li>
                    <li>Avoid sharing personal medical information publicly</li>
                    <li>Respect intellectual property rights</li>
                    <li>Do not promote harmful health practices</li>
                    <li>Report inappropriate content or behavior</li>
                    <li>Follow professional and ethical guidelines</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property Rights</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Content and Materials</h3>
              <p className="text-gray-700 mb-4">
                All content on FitWell Hub, including articles, images, graphics, logos, videos, and software, is owned by FitWell Hub or our content licensors and is protected by United States and international copyright, trademark, and other intellectual property laws.
              </p>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-4">
                <h4 className="font-semibold text-green-800 mb-2">What You Can Do (Permitted Uses)</h4>
                <ul className="text-green-700 space-y-1 text-sm">
                  <li>• View and read our articles for personal, non-commercial use</li>
                  <li>• Share links to our content on social media platforms</li>
                  <li>• Print individual articles for personal reference and study</li>
                  <li>• Quote brief excerpts with proper attribution and linking</li>
                </ul>
              </div>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h4 className="font-semibold text-red-800 mb-2">What You Cannot Do (Prohibited Uses)</h4>
                <ul className="text-red-700 space-y-1 text-sm">
                  <li>• Reproduce, distribute, or republish substantial portions without permission</li>
                  <li>• Modify, adapt, or create derivative works from our content</li>
                  <li>• Use our content for commercial purposes without licensing</li>
                  <li>• Remove or modify copyright notices or attributions</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Health and Safety Responsibilities</h2>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-4">
                <h3 className="text-lg font-semibold text-red-800 mb-3">Critical Health and Safety Notice</h3>
                <ul className="text-red-700 space-y-2">
                  <li><strong>Medical Consultation Required:</strong> Always consult with healthcare professionals before starting any new fitness program, diet plan, or wellness routine</li>
                  <li><strong>Individual Assessment:</strong> Our content provides general information that may not be suitable for your specific health conditions or circumstances</li>
                  <li><strong>Stop if Unsafe:</strong> Discontinue any activity immediately if you experience pain, discomfort, or adverse reactions</li>
                  <li><strong>Emergency Situations:</strong> Seek immediate medical attention for any health emergencies—do not rely on our content for urgent medical decisions</li>
                  <li><strong>Medication Interactions:</strong> Dietary and exercise changes may affect medications—consult your doctor or pharmacist</li>
                </ul>
              </div>
              
              <p className="text-gray-700">
                You acknowledge and agree that you participate in any fitness activities or follow any health advice at your own risk and that FitWell Hub is not liable for any injuries, health issues, or adverse effects that may result.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                To the maximum extent permitted by law, FitWell Hub and its team members shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Personal injury or health complications resulting from following our advice</li>
                <li>Loss of data, profits, or business opportunities</li>
                <li>Damages resulting from website downtime or technical issues</li>
                <li>Third-party actions or content</li>
                <li>Reliance on information provided on our website</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Our total liability in any matter shall not exceed $100 USD.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Boundaries</h2>
              <p className="text-gray-700 mb-4">
                While our team includes certified health professionals, our website content does not constitute:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>A doctor-patient relationship or professional consultation</li>
                <li>Personalized medical, nutritional, or fitness advice</li>
                <li>Diagnosis, treatment, or cure for any health condition</li>
                <li>Substitute for in-person professional assessment</li>
              </ul>
              <p className="text-gray-700 mt-4">
                For personalized advice, please consult with qualified professionals in your area who can assess your individual circumstances.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law and Dispute Resolution</h2>
              <p className="text-gray-700 mb-4">
                These terms shall be governed by and construed in accordance with the laws of the United States and the State of California, without regard to conflict of law principles.
              </p>
              <p className="text-gray-700">
                Any disputes arising from these terms or your use of our website shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association, except for claims that may be brought in small claims court.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-700 mb-4">
                For questions about these Terms of Service or any legal matters, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-700 mb-2"><strong>Legal Team:</strong> legal@fitwellhub.com</p>
                    <p className="text-gray-700 mb-2"><strong>General Support:</strong> support@fitwellhub.com</p>
                    <p className="text-gray-700"><strong>Phone:</strong> +1 (555) 123-4567</p>
                  </div>
                  <div>
                    <p className="text-gray-700 mb-2"><strong>Business Hours:</strong></p>
                    <p className="text-gray-700">
                      Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                      Saturday: 10:00 AM - 4:00 PM EST<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Acknowledgment</h3>
              <p className="text-blue-700">
                By using FitWell Hub, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. These terms constitute a legally binding agreement between you and FitWell Hub.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;