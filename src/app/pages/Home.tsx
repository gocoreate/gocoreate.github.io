import { Link } from 'react-router';
import { ArrowRight, TrendingUp, Users, Target, BarChart } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-600/90 z-10" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1758518729908-d4220a678d81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRpbmclMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NzA2OTk4MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Consulting team meeting"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl mb-6">
            Strategic Solutions for Business Growth
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Transform your vision into reality with expert consulting services tailored to your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Our Services
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">How We Can Help</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our comprehensive suite of services designed to drive your business forward
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl mb-3">Business Strategy</h3>
              <p className="text-gray-600">
                Develop winning strategies that align with your goals and market opportunities
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl mb-3">Performance Analytics</h3>
              <p className="text-gray-600">
                Data-driven insights to optimize operations and maximize ROI
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl mb-3">Change Management</h3>
              <p className="text-gray-600">
                Guide your organization through transformation with minimal disruption
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl mb-3">Market Research</h3>
              <p className="text-gray-600">
                Understand your customers and competitors to make informed decisions
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
            >
              View All Services
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-6">Why Choose Apex Consulting?</h2>
              <p className="text-lg text-gray-600 mb-8">
                With over a decade of experience helping businesses transform and grow, 
                we bring expertise, dedication, and proven results to every engagement.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-lg mb-1">Expert Team</h3>
                    <p className="text-gray-600">
                      Certified consultants with industry-specific expertise
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-lg mb-1">Proven Results</h3>
                    <p className="text-gray-600">
                      Track record of delivering measurable business outcomes
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-lg mb-1">Tailored Approach</h3>
                    <p className="text-gray-600">
                      Custom solutions designed for your unique challenges
                    </p>
                  </div>
                </div>
              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 mt-8 text-blue-600 hover:text-blue-700"
              >
                Learn More About Us
                <ArrowRight size={20} />
              </Link>
            </div>

            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzcwNzY1NDYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern office workspace"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss how we can help you achieve your goals
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Schedule a Consultation
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
