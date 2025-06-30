import React from 'react';
import { ArrowDown, Mail, Download, CheckCircle } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-16 min-h-screen flex items-center justify-center bg-[#F4F6F7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <CheckCircle className="w-4 h-4 text-[#1ABC9C]" />
                <span className="text-sm font-medium text-[#7F8C8D]">QA Engineer</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-[#2C3E50] leading-tight">
                Tharani Senevirathna
              </h1>
              
              <div className="space-y-3">
                <p className="text-xl md:text-2xl font-semibold text-[#3498DB]">
                  Quality Assurance Engineer
                </p>
                <p className="text-lg text-[#7F8C8D] max-w-lg">
                  Dedicated to ensuring software quality through comprehensive testing and attention to detail
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="flex items-center space-x-2 bg-[#3498DB] hover:bg-[#2980B9] text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </button>
              
              <button className="flex items-center space-x-2 border border-[#7F8C8D] hover:bg-white text-[#2C3E50] px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-[#2C3E50]">50+</div>
                <div className="text-sm text-[#7F8C8D]">Test Cases</div>
              </div>
              <div className="text-center bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-[#2C3E50]">15+</div>
                <div className="text-sm text-[#7F8C8D]">Bugs Found</div>
              </div>
              <div className="text-center bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-[#2C3E50]">3</div>
                <div className="text-sm text-[#7F8C8D]">Projects</div>
              </div>
            </div>
          </div>

          {/* Right Profile Section */}
         

<div className="flex justify-center lg:justify-end">
  <div className="relative">
    <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
    <img
  src="/images/tharani-profile.jpg"
  alt="Tharani Senevirathna - QA Engineer"
  className="w-full h-full object-cover"
/>

    </div>
  </div>
</div>

        </div>

        {/* Scroll Indicator */}
        <div className="text-center mt-16">
          <button
            onClick={() => scrollToSection('about')}
            className="text-[#7F8C8D] hover:text-[#2C3E50] transition-colors duration-200"
          >
            <div className="flex flex-col items-center space-y-2">
              <ArrowDown className="w-5 h-5" />
              <span className="text-sm">Learn More</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;