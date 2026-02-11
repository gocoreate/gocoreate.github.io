import { Award, Users, Target, Heart } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const team = [
  {
    name: 'Sarah Johnson',
    role: 'Managing Partner',
    bio: '15+ years in strategic consulting with Fortune 500 companies'
  },
  {
    name: 'Michael Chen',
    role: 'Senior Consultant',
    bio: 'Expert in digital transformation and change management'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Analytics Director',
    bio: 'Data scientist specializing in business intelligence'
  },
  {
    name: 'David Kim',
    role: 'Operations Lead',
    bio: 'Process optimization specialist with manufacturing background'
  }
];

const values = [
  {
    icon: Target,
    title: 'Client-Focused',
    description: 'Your success is our top priority. We tailor every solution to your unique needs and goals.'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We maintain the highest standards in everything we do, delivering exceptional results consistently.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We work as an extension of your team, fostering partnership and knowledge sharing.'
  },
  {
    icon: Heart,
    title: 'Integrity',
    description: 'We build trust through transparency, honesty, and ethical business practices.'
  }
];

export function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/90 z-10" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1758518730384-be3d205838e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoYW5kc2hha2UlMjBidXNpbmVzc3xlbnwxfHx8fDE3NzA4MDIyMjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Professional partnership"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl mb-6">About Us</h1>
          <p className="text-xl text-gray-100">
            Passionate consultants dedicated to transforming businesses
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  Founded in 2015, Apex Consulting emerged from a simple belief: that every business, 
                  regardless of size, deserves access to world-class strategic guidance.
                </p>
                <p>
                  Our founders, veterans of top consulting firms, saw an opportunity to create a 
                  more personalized, agile approach to business consulting. They envisioned a firm 
                  that combined the rigor and expertise of large consultancies with the flexibility 
                  and attention to detail that small businesses need.
                </p>
                <p>
                  Today, we're proud to have helped over 200 companies across various industries 
                  achieve their goals, from startups finding product-market fit to established 
                  enterprises navigating digital transformation.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="bg-blue-50 p-8 rounded-lg text-center">
                <div className="text-4xl text-blue-600 mb-2">200+</div>
                <div className="text-gray-700">Clients Served</div>
              </div>
              <div className="bg-blue-50 p-8 rounded-lg text-center">
                <div className="text-4xl text-blue-600 mb-2">9+</div>
                <div className="text-gray-700">Years Experience</div>
              </div>
              <div className="bg-blue-50 p-8 rounded-lg text-center">
                <div className="text-4xl text-blue-600 mb-2">15+</div>
                <div className="text-gray-700">Industries</div>
              </div>
              <div className="bg-blue-50 p-8 rounded-lg text-center">
                <div className="text-4xl text-blue-600 mb-2">95%</div>
                <div className="text-gray-700">Client Retention</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-blue-600" size={28} />
                  </div>
                  <h3 className="text-xl mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced professionals committed to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-64 bg-gradient-to-br from-blue-400 to-blue-600" />
                <div className="p-6">
                  <h3 className="text-xl mb-1">{member.name}</h3>
                  <div className="text-blue-600 mb-3">{member.role}</div>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6">Join Our Success Stories</h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's work together to achieve your business objectives
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Start a Conversation
          </a>
        </div>
      </section>
    </div>
  );
}
