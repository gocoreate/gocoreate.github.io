import { ArrowRight } from "lucide-react";
import heroImage from "figma:asset/d026b8079c9d5fe9c4bac5950ec2e954a79763f7.png";

export function Hero() {
  return (
    <section className="bg-[#f5f5f5] py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="max-w-2xl relative z-10">
            <h1 className="text-[#1c2541] font-serif font-bold leading-tight mb-6 text-[36px]">
              We Create{" "}
              <span className="relative inline-block px-2">
                <span className="absolute inset-0 bg-[#FFBC3E] -z-10"></span>
                <span className="relative z-10">Human-Centered</span>
              </span>{" "}
              Solutions that Empower Organizations and Communities.
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Partner with us to transform your business through strategic innovation and data-driven insights.
            </p>
            <div className="flex gap-4">
              <a 
                href="#work-with-us" 
                className="bg-[#1C2541] text-white px-8 py-3 rounded-lg hover:bg-[#141b31] transition-colors inline-flex items-center gap-2 font-medium"
              >
                Get Started
                <ArrowRight size={20} />
              </a>
              <a 
                href="#about" 
                className="bg-white text-[#1C2541] border border-[#1C2541] px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors inline-flex items-center gap-2 font-medium"
              >
                Learn More
              </a>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative z-10 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              <img 
                src={heroImage}
                alt="CoReate strategic consulting illustration" 
                className="relative w-full h-auto object-contain transform hover:scale-105 transition-transform duration-500 py-[20px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
