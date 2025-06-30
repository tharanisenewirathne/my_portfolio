import React from 'react';
import { Eye, Heart, Lightbulb, Users } from 'lucide-react';

const About = () => {
  const qualities = [
    {
      icon: Eye,
      title: 'Detail-Oriented',
      description: 'Thorough testing approach with attention to edge cases'
    },
    {
      icon: Heart,
      title: 'User-Focused',
      description: 'Testing with real user experience in mind'
    },
    {
      icon: Lightbulb,
      title: 'Problem Solver',
      description: 'Creative approach to finding and resolving issues'
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'Collaborative approach to quality assurance'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">
            About Me
          </h2>
          <p className="text-xl text-[#7F8C8D] max-w-3xl mx-auto">
            Passionate QA engineer with a focus on delivering quality software through comprehensive testing
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Story Section */}
          <div className="space-y-6">
            <div className="bg-[#F4F6F7] p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-[#2C3E50] mb-4">My QA Journey</h3>
              <div className="space-y-4 text-[#2C3E50]">
                <p>
                  During my computer science studies, I discovered my passion for quality assurance 
                  when I naturally gravitated toward testing and finding edge cases in group projects.
                </p>
                <p>
                  What started as attention to detail evolved into a genuine enthusiasm for ensuring 
                  software quality and preventing user frustration through comprehensive testing.
                </p>
                <p>
                  I'm eager to bring fresh perspective and dedication to a QA team where I can 
                  contribute to building reliable, high-quality software products.
                </p>
              </div>
            </div>
          </div>

          {/* Qualities Grid */}
          <div className="grid grid-cols-2 gap-6">
            {qualities.map((quality, index) => (
              <div
                key={index}
                className="bg-[#F4F6F7] p-6 rounded-lg text-center border border-gray-200 hover:shadow-md transition-shadow duration-200"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-lg mb-4 shadow-sm">
                  <quality.icon className="w-6 h-6 text-[#1ABC9C]" />
                </div>
                <h4 className="font-bold text-[#2C3E50] mb-2">{quality.title}</h4>
                <p className="text-sm text-[#7F8C8D]">{quality.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quote Section */}
        <div className="bg-[#2C3E50] rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            "Quality is not an act, it is a habit."
          </h3>
          <p className="text-gray-300 text-lg">
            This philosophy drives my approach to QA - building quality into every step of the process.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;