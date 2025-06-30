import React from 'react';
import { Calendar, MapPin, Award, Target, Users, FileCheck } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Academic Testing Projects',
      type: 'Academic Experience',
      period: 'Recent Projects',
      location: 'University',
      description: 'Gained hands-on experience testing and documenting web applications developed during coursework.',
      achievements: [
        'Designed and executed comprehensive test cases for web applications',
        'Identified and documented critical UI/UX issues',
        'Collaborated with development teams to resolve identified bugs',
        'Implemented testing protocols that improved project quality by 30%'
      ],
      icon: Award,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Quality Assurance Practice',
      type: 'Self-Directed Learning',
      period: 'Ongoing',
      location: 'Independent Study',
      description: 'Continuously developing QA skills through practical application and industry best practices.',
      achievements: [
        'Practiced writing detailed test cases for various scenarios',
        'Identified edge cases and potential failure points',
        'Documented testing procedures and bug reports',
        'Studied automation frameworks and testing tools'
      ],
      icon: Target,
      color: 'from-green-500 to-green-600'
    }
  ];

  const keyProjects = [
    {
      title: 'E-commerce Web Application Testing',
      description: 'Comprehensive testing of a full-featured e-commerce platform including user authentication, product catalog, shopping cart, and payment processing.',
      skills: ['Manual Testing', 'UI/UX Testing', 'Cross-browser Testing', 'Bug Reporting'],
      icon: FileCheck
    },
    {
      title: 'Mobile App QA Documentation',
      description: 'Created detailed test cases and documentation for a mobile application, focusing on usability and functionality across different devices.',
      skills: ['Test Case Design', 'Mobile Testing', 'Usability Testing', 'Documentation'],
      icon: Users
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Experience & Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building expertise through hands-on testing experience and continuous learning
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-12 mb-16">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6">
                  <div className={`flex-shrink-0 p-3 rounded-lg bg-gradient-to-r ${exp.color} text-white mb-4 lg:mb-0 self-start`}>
                    <exp.icon className="w-6 h-6" />
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                        <p className="text-blue-600 font-medium">{exp.type}</p>
                      </div>
                      <div className="flex flex-col lg:items-end text-sm text-gray-500 mt-2 lg:mt-0">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center mt-1">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">{exp.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Projects */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Key Testing Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {keyProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-purple-100 rounded-lg mr-3">
                    <project.icon className="w-5 h-5 text-purple-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">{project.title}</h4>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;