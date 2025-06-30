import React from 'react';
import { Bug, FileText, Users, CheckCircle } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Testing Project',
      description: 'Comprehensive testing of a student e-commerce application including user authentication, product catalog, shopping cart, and checkout process.',
      highlights: [
        'Designed 50+ test cases covering user journeys',
        'Identified 15 bugs including 3 critical issues',
        'Performed cross-browser testing on Chrome, Firefox, and Safari',
        'Created detailed bug reports and documentation'
      ],
      tools: ['Manual Testing', 'Cross-browser Testing', 'Bug Documentation'],
      icon: Bug
    },
    {
      title: 'API Testing with Postman',
      description: 'Self-directed learning project focused on REST API testing using Postman for various endpoints and data validation.',
      highlights: [
        'Tested 20+ REST API endpoints',
        'Built automated test collections in Postman',
        'Validated JSON responses and error handling',
        'Created reusable test scripts'
      ],
      tools: ['Postman', 'REST APIs', 'JSON', 'Test Automation'],
      icon: FileText
    },
    {
      title: 'Team Collaboration Project',
      description: 'Worked with development team on a task management application, focusing on quality assurance processes and team communication.',
      highlights: [
        'Participated in agile development process',
        'Collaborated with developers on bug fixes',
        'Improved team testing documentation',
        'Mentored peers on testing best practices'
      ],
      tools: ['Agile Methodology', 'JIRA', 'Team Collaboration'],
      icon: Users
    }
  ];

  const achievements = [
    { count: '50+', label: 'Test Cases Written' },
    { count: '15+', label: 'Bugs Discovered' },
    { count: '200+', label: 'Testing Hours' },
    { count: '3', label: 'Projects Completed' }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">
            Projects & Experience
          </h2>
          <p className="text-xl text-[#7F8C8D] max-w-3xl mx-auto">
            Hands-on testing experience through academic and personal projects
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-[#F4F6F7] rounded-lg p-6 text-center shadow-sm border border-gray-200">
              <div className="text-2xl font-bold text-[#2C3E50] mb-1">{achievement.count}</div>
              <div className="text-sm text-[#7F8C8D]">{achievement.label}</div>
            </div>
          ))}
        </div>

        {/* Projects */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-[#F4F6F7] rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-white rounded-lg shadow-sm">
                      <project.icon className="w-5 h-5 text-[#1ABC9C]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#2C3E50]">{project.title}</h3>
                  </div>
                  
                  <p className="text-[#2C3E50] leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, tIndex) => (
                      <span
                        key={tIndex}
                        className="px-3 py-1 bg-white text-[#7F8C8D] text-sm rounded-full border border-gray-200"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-[#2C3E50]">Key Achievements</h4>
                  {project.highlights.map((highlight, hIndex) => (
                    <div key={hIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-[#1ABC9C] mt-0.5 flex-shrink-0" />
                      <span className="text-[#2C3E50] text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;