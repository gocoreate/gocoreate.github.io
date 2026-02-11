import { TrendingUp, Users, Target, BarChart, Lightbulb, Briefcase, Globe, Cpu } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const services = [
  {
    icon: TrendingUp,
    title: 'Business Strategy',
    description: 'Develop comprehensive strategies that position your business for long-term success.',
    features: [
      'Strategic planning and roadmapping',
      'Competitive analysis',
      'Market positioning',
      'Growth strategy development'
    ]
  },
  {
    icon: BarChart,
    title: 'Performance Analytics',
    description: 'Leverage data to drive informed decisions and measure what matters most.',
    features: [
      'KPI development and tracking',
      'Business intelligence solutions',
      'Financial analysis',
      'Operational efficiency metrics'
    ]
  },
  {
    icon: Users,
    title: 'Change Management',
    description: 'Navigate organizational transformation with confidence and minimal disruption.',
    features: [
      'Change readiness assessment',
      'Stakeholder engagement',
      'Communication planning',
      'Training and support'
    ]
  },
  {
    icon: Target,
    title: 'Market Research',
    description: 'Gain deep insights into your market, customers, and competitive landscape.',
    features: [
      'Customer surveys and interviews',
      'Competitor intelligence',
      'Market trend analysis',
      'Consumer behavior studies'
    ]
  },
  {
    icon: Lightbulb,
    title: 'Innovation Consulting',
    description: 'Foster a culture of innovation and bring new ideas to market effectively.',
    features: [
      'Innovation workshops',
      'Product development strategy',
      'Digital transformation',
      'R&D optimization'
    ]
  },
  {
    icon: Briefcase,
    title: 'Operations Excellence',
    description: 'Streamline operations and maximize efficiency across your organization.',
    features: [
      'Process optimization',
      'Supply chain management',
      'Quality assurance programs',
      'Cost reduction initiatives'
    ]
  },
  {
    icon: Globe,
    title: 'Market Entry Strategy',
    description: 'Successfully expand into new markets with minimal risk and maximum impact.',
    features: [
      'Market assessment',
      'Entry strategy development',
      'Partner identification',
      'Risk mitigation planning'
    ]
  },
  {
    icon: Cpu,
    title: 'Digital Transformation',
    description: 'Embrace technology to modernize operations and enhance customer experience.',
    features: [
      'Technology roadmap',
      'System integration',
      'Digital capability building',
      'Automation strategy'
    ]
  }
];

export function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/90 z-10" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1758876202468-5ffe0ee61f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhdGVneSUyMHBsYW5uaW5nJTIwYm9hcmR8ZW58MXx8fHwxNzcwODA1MDIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Strategy planning"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl mb-6">Our Services</h1>
          <p className="text-xl text-gray-100">
            Comprehensive consulting solutions to drive your business forward
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expert consultants deliver tailored solutions across a wide range of business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all border border-gray-100"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Icon className="text-blue-600" size={28} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-700">
                            <span className="text-blue-600 mt-1">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that delivers results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl mb-2">Discovery</h3>
              <p className="text-gray-600">
                We learn about your business, challenges, and objectives
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl mb-2">Analysis</h3>
              <p className="text-gray-600">
                Deep dive into data and market insights to identify opportunities
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl mb-2">Strategy</h3>
              <p className="text-gray-600">
                Develop tailored solutions and actionable recommendations
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl mb-2">Implementation</h3>
              <p className="text-gray-600">
                Support execution and measure results for continuous improvement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6">Let's Discuss Your Needs</h2>
          <p className="text-xl mb-8 text-blue-100">
            Every business is unique. Contact us to learn how we can help you achieve your goals.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
}
