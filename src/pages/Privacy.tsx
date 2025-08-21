 import React from 'react';
import SEO from '../components/SEO';
import { CheckCircle } from 'lucide-react';

const Privacy = () => {
  return (
    <>
      <SEO 
        title="Privacy Policy - FitWell Hub"
        description="Learn how FitWell Hub protects your privacy and handles your personal information. Transparent privacy practices for our health and wellness community."
      />
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-gray-600">Last updated: January 15, 2025</p>
          </div>

          <div className="prose max-w-none">
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold text-emerald-800 mb-2">Your Privacy Matters to Us</h2>
              <p className="text-emerald-700">
                At FitWell Hub, we are committed to protecting your privacy and ensuring the security of your personal information. This comprehensive policy explains how we collect, use, and safeguard your data with complete transparency.
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Information You Provide Directly</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-1">
                <li>Email address when subscribing to our newsletter</li>
                <li>Name and contact information when submitting contact forms</li>
                <li>Comments, feedback, and questions you choose to share with us</li>
                <li>Survey responses and preference information</li>
                <li>Communication history when you contact our support team</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Information We Collect Automatically</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-1">
                <li>Device information (browser type, operating system, device model)</li>
                <li>Usage data (pages visited, time spent on site, click patterns)</li>
                <li>IP address and general location data (for analytics and security)</li>
                <li>Referral source (how you found our website)</li>
                <li>Cookies and similar tracking technologies for functionality and analytics</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
              <div className="bg-gray-50 rounded-lg p-6 mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Primary Uses</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Deliver our weekly newsletter with health and wellness content</li>
                  <li>Respond to your inquiries and provide personalized customer support</li>
                  <li>Improve our website functionality and user experience</li>
                  <li>Analyze website traffic patterns and user behavior for optimization</li>
                  <li>Ensure website security and prevent fraudulent activity</li>
                  <li>Comply with legal obligations and regulatory requirements</li>
                </ul>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-3">We Never Use Your Information To:</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Sell or rent your personal data to third parties</li>
                <li>Send spam or unsolicited marketing from other companies</li>
                <li>Share your information without your explicit consent</li>
                <li>Track you across unrelated websites or services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing and Disclosure</h2>
              <p className="text-gray-700 mb-4">
                We respect your privacy and do not sell, trade, or rent your personal information to third parties. We may share information only in these specific circumstances:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Service Providers:</strong> Trusted partners who assist us in operating our website and delivering services (email platform, analytics, hosting)</li>
                <li><strong>Legal Compliance:</strong> When required by law, legal process, or government request</li>
                <li><strong>Protection:</strong> To protect our rights, property, safety, or that of our users</li>
                <li><strong>Business Transfer:</strong> In the event of a merger, acquisition, or sale of assets (with notice to users)</li>
                <li><strong>Explicit Consent:</strong> When you have given us specific permission to share your information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 mb-4">
                We use cookies and similar technologies to enhance your browsing experience and provide better service:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">Essential Cookies</h4>
                  <p className="text-green-700 text-sm">Required for basic website functionality, security, and user authentication.</p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Analytics Cookies</h4>
                  <p className="text-blue-700 text-sm">Help us understand visitor behavior and improve our content and user experience.</p>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-800 mb-2">Preference Cookies</h4>
                  <p className="text-purple-700 text-sm">Remember your settings, preferences, and personalization choices.</p>
                </div>
              </div>
              
              <p className="text-gray-700">
                You can control cookies through your browser settings. Note that disabling certain cookies may affect website functionality and user experience.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Privacy Rights</h2>
              <p className="text-gray-700 mb-4">You have comprehensive rights regarding your personal information:</p>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={16} />
                    <div>
                      <strong>Access:</strong> Request a copy of all personal information we hold about you
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={16} />
                    <div>
                      <strong>Correction:</strong> Request correction of any inaccurate or incomplete information
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={16} />
                    <div>
                      <strong>Deletion:</strong> Request deletion of your personal information (right to be forgotten)
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={16} />
                    <div>
                      <strong>Portability:</strong> Receive your data in a structured, machine-readable format
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={16} />
                    <div>
                      <strong>Opt-out:</strong> Unsubscribe from marketing communications at any time
                    </div>
                  </li>
                </ul>
                <p className="text-gray-700 mt-4 font-medium">
                  To exercise any of these rights, contact us at privacy@fitwellhub.com
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security Measures</h2>
              <p className="text-gray-700 mb-4">
                We implement comprehensive security measures to protect your personal information:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Technical Safeguards</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• SSL/TLS encryption for data transmission</li>
                    <li>• Secure hosting infrastructure</li>
                    <li>• Regular security assessments and updates</li>
                    <li>• Access controls and authentication systems</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Operational Safeguards</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Staff training on privacy and security</li>
                    <li>• Limited access on a need-to-know basis</li>
                    <li>• Regular data backup and recovery procedures</li>
                    <li>• Incident response and breach notification plans</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
              <p className="text-gray-700 mb-4">
                We retain your personal information only as long as necessary for the purposes outlined in this policy:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li><strong>Newsletter subscriptions:</strong> Until you unsubscribe or request deletion</li>
                <li><strong>Contact form submissions:</strong> 3 years for customer service purposes</li>
                <li><strong>Website analytics:</strong> 26 months in anonymized form</li>
                <li><strong>Legal compliance:</strong> As required by applicable laws and regulations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">International Data Transfers</h2>
              <p className="text-gray-700">
                Your information may be processed and stored in countries other than your own. We ensure appropriate safeguards are in place, including adequacy decisions, standard contractual clauses, or other approved transfer mechanisms to protect your data.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
              <p className="text-gray-700">
                Our website is not directed to children under 13 years old. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us immediately so we can take appropriate action.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Links and Services</h2>
              <p className="text-gray-700 mb-4">
                Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-yellow-800">
                  <strong>Note:</strong> This includes embedded content from platforms like YouTube, social media widgets, and external analytics services.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Updates to This Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this privacy policy periodically to reflect changes in our practices, technology, legal requirements, or other factors. We will:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Post the updated policy on this page with a new "Last updated" date</li>
                <li>Notify subscribers via email of any material changes</li>
                <li>Provide at least 30 days notice for significant changes</li>
                <li>Obtain consent where required by applicable laws</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us About Privacy</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy, our data practices, or wish to exercise your privacy rights, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-700 mb-2"><strong>Privacy Team:</strong> privacy@fitwellhub.com</p>
                    <p className="text-gray-700 mb-2"><strong>General Contact:</strong> support@fitwellhub.com</p>
                    <p className="text-gray-700"><strong>Phone:</strong> +1 (555) 123-4567</p>
                  </div>
                  <div>
                    <p className="text-gray-700 mb-2"><strong>Mailing Address:</strong></p>
                    <p className="text-gray-700">
                      FitWell Hub Privacy Team<br />
                      123 Wellness Street<br />
                      Health City, HC 12345<br />
                      United States
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-gray-600 text-sm">
                    <strong>Response Time:</strong> We are committed to responding to all privacy inquiries within 72 hours during business days. For urgent matters, please call us directly.
                  </p>
                </div>
              </div>
            </section>

            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-emerald-800 mb-2">Your Trust is Important to Us</h3>
              <p className="text-emerald-700">
                We continuously review and improve our privacy practices to ensure we're providing the highest level of protection for your personal information. Your trust enables us to continue providing valuable health and wellness resources to our community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;