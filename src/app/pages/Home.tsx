import { useState } from "react";
import {
  TrendingUp,
  Users,
  Target,
  Lightbulb,
  BarChart,
  Award,
  Heart,
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";
import { Hero } from "../components/Hero";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import exampleImage from "figma:asset/78e7ee9cf2ab878098ff1b6640a5da91a339d5de.png";
import teamImage from "figma:asset/df53a52f3805ccd529674023271b613ee9043cea.png";
import pastInvolvementsLogos from "figma:asset/453fbdb6179f062d6d882686dd8d5c0c5a9a66be.png";
import coreValuesDecoration from "figma:asset/6fedcd8ff03885cdac486ac38e0ef754385c2d5a.png";
import userResearchImage from "figma:asset/381ac83bb56f849b6b919e19a11f232277117f5e.png";
import communityOutreachImage from "figma:asset/69d523e6f40e6003a179a83c038b50f9e09cb931.png";
import changeManagementImage from "figma:asset/a887f9a7ff2962f1d044750083ab02e55b427aed.png";
import digitalTransformationImage from "figma:asset/d1a7de85bb3b3b5c1ea7765da78a2c2fccccab82.png";
import { projectId, publicAnonKey } from "../../../utils/supabase/info";

const team = [
  {
    name: "Sarah Johnson",
    role: "Managing Partner",
    bio: "15+ years in strategic consulting with Fortune 500 companies",
  },
  {
    name: "Michael Chen",
    role: "Senior Consultant",
    bio: "Expert in digital transformation and change management",
  },
  {
    name: "Emily Rodriguez",
    role: "Analytics Director",
    bio: "Data scientist specializing in business intelligence",
  },
  {
    name: "David Kim",
    role: "Operations Lead",
    bio: "Process optimization specialist with manufacturing background",
  },
];

const values = [
  {
    icon: Target,
    title: "Client-Focused",
    description:
      "Your success is our top priority. We tailor every solution to your unique needs and goals.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We maintain the highest standards in everything we do, delivering exceptional results consistently.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We work as an extension of your team, fostering partnership and knowledge sharing.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description:
      "We build trust through transparency, honesty, and ethical business practices.",
  },
];

export function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-cd73031e/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: "",
      });
      
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);

    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="[&>section]:!bg-[#F9FAFB]">
        <Hero />
      </div>

      {/* About Section */}
      <section id="about" className="py-20 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[34px] font-bold text-[#1C2541] mb-6">
                Our Methodology
              </h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p className="text-[16px] text-[#1C2541] text-left">
                  Our human-centered problem-solving approach is
                  an iterative cycle consisting of four phases:
                  research, design, testing, and development,
                  with the people at the heart of each step.
                  Grounded in data and inspired by empathy, this
                  process enables us to identify the right
                  problem, and craft brilliant solutions to
                  challenges faced by organizations and
                  communities across a multitude of industries.
                </p>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img
                src={exampleImage}
                alt="Our Methodology Process Diagram"
                className="w-full max-w-md h-auto mx-[0px] my-[20px] transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section
        className="px-[0px] py-[80px]"
        style={{ backgroundColor: "#F9FAFB" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Image */}
            <div className="flex justify-center lg:justify-start pl-[0px] pr-[49px] py-[0px]">
              <img
                src={teamImage}
                alt="Our Team Collaboration"
                className="w-full max-w-lg h-auto object-contain mx-[0px] my-[40px] transition-transform duration-500 hover:scale-105"
              />
            </div>
            
            {/* Right Column: Text */}
            <div>
              <h2 className="text-[34px] font-bold text-[#1C2541] mb-6">
                Our Team
              </h2>
              <p className="text-[16px] text-[#1c2541] leading-relaxed">
                Our team is joined by compassionate collaborators
                and problem-solvers with a deep passion for
                building effective products and services that
                improve people's lives. Ranging from designers and
                researchers to analysts and consultants, we
                utilize our extensive domain expertise across User
                Experience (UX) research, design, business, and
                information systems to turn innovative concepts
                into real-world solutions that generate meaningful
                impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-[0px] pt-[80px] pb-[40px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[34px] font-bold text-[#1C2541] mb-4">
              Past Involvements
            </h2>
            <p className="text-[16px] text-[#1C2541] max-w-2xl mx-auto mb-10">
              We have collaborated with great organizations
              across many industries, to launch products and
              services that have made a real difference in our
              communities.{" "}
            </p>
            <div className="flex justify-center w-full">
              <img 
                src={pastInvolvementsLogos} 
                alt="Partner organizations including Bloodworks Northwest, Greater Seattle Chinese Chamber of Commerce, University of Washington, and City of Seattle" 
                className="max-w-4xl w-full h-auto object-contain px-[80px] mx-[120px] mt-[20px] mb-[0px] transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              ></div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 scroll-mt-16"
        style={{ backgroundColor: "#1C2541" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-16">
            <div className="text-left lg:max-w-2xl">
              <h2 className="text-[34px] font-bold text-[#F5F5F5] mb-4">
                Core Values
              </h2>
              <p className="text-[16px] text-[#F5F5F5]">
                We embrace the following core values when
                developing impactful solutions to support
                organizations and communities:
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img 
                src={coreValuesDecoration} 
                alt="" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-[#e8eaf0] rounded-lg flex items-center justify-center mb-4">
                <Users className="text-[#1C2541]" size={24} />
              </div>
              <h3 className="text-xl mb-3 text-[#1C2541]">
                Human-Centered
              </h3>
              <p className="text-[16px] text-[#1C2541]">
                We believe in the power of empathy to guide our
                problem-solving approach. By intimately
                understanding the needs of our clients, project
                stakeholders, and most crucially, the end-users,
                we craft solutions that deeply resonate with the
                people.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-[#e8eaf0] rounded-lg flex items-center justify-center mb-4">
                <BarChart
                  className="text-[#1C2541]"
                  size={24}
                />
              </div>
              <h3 className="text-xl mb-3 text-[#1C2541]">
                Data-Driven
              </h3>
              <p className="text-[16px] text-[#1C2541]">
                By harnessing the power of data analytics, we
                optimize processes, enhance efficiency, and
                drive innovation while ensuring that our
                strategies and recommendations are grounded in
                concrete insights, resulting in the best
                outcomes for our users.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-[#e8eaf0] rounded-lg flex items-center justify-center mb-4">
                <TrendingUp
                  className="text-[#1C2541]"
                  size={24}
                />
              </div>
              <h3 className="text-xl mb-3 text-[#1C2541]">
                Ethical & Sustainable
              </h3>
              <p className="text-[16px] text-[#1C2541]">
                We are driven to create benevolent and
                long-lasting solutions for the people we serve.
                This encompasses considerations such as privacy
                and security to create hassle-free and long-term
                solutions that protect communities.{" "}
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-[#e8eaf0] rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="text-[#1C2541]" size={24} />
              </div>
              <h3 className="text-xl mb-3 text-[#1C2541]">
                Innovative
              </h3>
              <p className="text-[16px] text-[#1C2541]">
                Our problem-solving approach focuses on thinking
                outside the box collaboratively to push
                boundaries, and find fresh solutions to age-old
                problems. We&nbsp;&nbsp;stay on the forefront of
                technology that drives transformative
                performance improvements to help organizations
                and communities grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Work with Us Section */}
      <section id="work-with-us" className="scroll-mt-16 px-[0px] pt-[80px] pb-[40px]" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[34px] font-bold text-[#1C2541] mb-6">
              What We Do Best
            </h2>
            <p className="text-[16px] text-[#1C2541] mb-8 max-w-3xl mx-auto">
              Leveraging the power of design thinking and
              systems thinking, we generate intuitive,
              sustainable and human-centric solutions, and equip
              organizations and communities with the tools they
              need to combat complex systematic challenges.{" "}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-center hover:scale-[1.02]"
                >
                  <h3 className="text-xl mb-3">
                    {index === 0 && "User Research, Design, & Development"}
                    {index === 1 && "Community-Centric Outreach & Education"}
                    {index === 2 && "End-to-End Change Management"}
                    {index === 3 && "Digital Transformation"}
                  </h3>
                  <p className="text-[16px] text-[#1C2541]">
                    {index === 0 && "With a holistic and iterative approach, we discover critical problems and challenges faced by people, and strategize user-centered solutions to support organizations and communities."}
                    {index === 1 && "We love building real connections with local communities. Our team plans and delivers quality outreach and educational programs tailored to diverse communities groups."}
                    {index === 2 && "We help organizations and communities navigate change seamlessly to ensure systems and processes become more human-centered, efficient and effective over time."}
                    {index === 3 && "Our digital transformation experts thrive in the rapidly evolving digital landscape, empowering organizations to discover new possibilities and leverage the latest technologies."}
                  </p>
                  {index === 0 && (
                    <div className="mt-6 flex justify-center">
                      <img
                        src={userResearchImage}
                        alt="User Research Team collaborating on a kanban board"
                        className="max-w-full h-auto rounded-md px-[40px]"
                      />
                    </div>
                  )}
                  {index === 1 && (
                    <div className="mt-6 flex justify-center">
                      <img
                        src={communityOutreachImage}
                        alt="Community-Centric Outreach & Education"
                        className="max-w-full h-auto rounded-md px-[40px]"
                      />
                    </div>
                  )}
                  {index === 2 && (
                    <div className="mt-6 flex justify-center">
                      <img
                        src={changeManagementImage}
                        alt="End-to-End Change Management"
                        className="max-w-full h-auto rounded-md px-[40px]"
                      />
                    </div>
                  )}
                  {index === 3 && (
                    <div className="mt-6 flex justify-center">
                      <img
                        src={digitalTransformationImage}
                        alt="Digital Transformation"
                        className="max-w-full h-auto rounded-md px-[40px]"
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gray-50 scroll-mt-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[34px] font-bold text-[#1C2541] mb-4">Work with Us</h2>
            <p className="text-[16px] text-[#1C2541] max-w-2xl mx-auto">Whether you are an organization striving for transformation, a community in need of support, or an individual seeking to make a difference, CoReate is here to help. Together, we can empower individuals and uplift communities to reach their potential, and to build a brighter, more equitable world. Let's create a more innovative, ethical, and sustainable future together.            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-3xl mb-6 text-center">
                Send Us a Message
              </h3>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <div className="text-green-600 text-5xl mb-4">
                    ✓
                  </div>
                  <h4 className="text-xl text-green-900 mb-2">
                    Thank You!
                  </h4>
                  <p className="text-[16px] text-[#1C2541]">
                    We've received your message and will get
                    back to you shortly.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm mb-2 text-gray-700"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1C2541] focus:border-transparent outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm mb-2 text-gray-700"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1C2541] focus:border-transparent outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm mb-2 text-gray-700"
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1C2541] focus:border-transparent outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm mb-2 text-gray-700"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1C2541] focus:border-transparent outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm mb-2 text-gray-700"
                    >
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1C2541] focus:border-transparent outline-none appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%231C2541%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem] bg-[position:calc(100%-0.75rem)_center] bg-no-repeat pr-12"
                    >
                      <option value="">
                        Select a service...
                      </option>
                      <option value="strategy">
                        Business Strategy
                      </option>
                      <option value="analytics">
                        Performance Analytics
                      </option>
                      <option value="change">
                        Change Management
                      </option>
                      <option value="research">
                        Market Research
                      </option>
                      <option value="innovation">
                        Innovation Consulting
                      </option>
                      <option value="operations">
                        Operations Excellence
                      </option>
                      <option value="market-entry">
                        Market Entry Strategy
                      </option>
                      <option value="digital">
                        Digital Transformation
                      </option>
                      <option value="ux-ui">
                        UX/UI Design
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm mb-2 text-gray-700"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1C2541] focus:border-transparent outline-none resize-none"
                    />
                  </div>

                  {submitError && (
                    <div className="text-red-600 text-center mb-4 bg-red-50 p-3 rounded-lg border border-red-200">
                      {submitError}
                    </div>
                  )}
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`bg-[#1C2541] text-white px-8 py-3 rounded-lg hover:bg-[#141b31] transition-colors flex items-center justify-center gap-2 ${
                        isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                      }`}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      {!isSubmitting && <Send size={20} />}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}