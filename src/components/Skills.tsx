import React from 'react';
import { CheckCircle, Clock, Target } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Current Skills',
      icon: CheckCircle,
      skills: [
        { name: 'Manual Testing', level: 85 },
        { name: 'Bug Reporting', level: 90 },
        { name: 'UI/UX Testing', level: 80 },
        { name: 'Cross-browser Testing', level: 75 },
        { name: 'Test Documentation', level: 85 }
      ]
    },
    {
      category: 'Learning',
      icon: Clock,
      skills: [
        { name: 'API Testing', level: 60 },
        { name: 'Automation Basics', level: 45 },
        { name: 'Performance Testing', level: 35 },
        { name: 'Mobile Testing', level: 40 }
      ]
    },
    {
      category: 'Goals',
      icon: Target,
      skills: [
        { name: 'Advanced Automation', level: 20 },
        { name: 'CI/CD Integration', level: 15 },
        { name: 'Security Testing', level: 25 },
        { name: 'Load Testing', level: 20 }
      ]
    }
  ];

  const tools = [
    { name: 'JIRA', proficiency: 'Intermediate' },
    { name: 'Postman', proficiency: 'Intermediate' },
    { name: 'Selenium', proficiency: 'Beginner' },
    { name: 'Git', proficiency: 'Intermediate' },
    { name: 'HTML/CSS', proficiency: 'Intermediate' },
    { name: 'JavaScript', proficiency: 'Beginner' },
    { name: 'SQL', proficiency: 'Beginner' },
    { name: 'Chrome DevTools', proficiency: 'Intermediate' }
  ];

  return (
    <section id="skills" className="py-20 bg-[#F4F6F7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-[#7F8C8D] max-w-3xl mx-auto">
            My QA skillset from current strengths to future learning goals
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-6">
                <div className="p-2 bg-[#F4F6F7] rounded-lg mr-3">
                  <category.icon className="w-5 h-5 text-[#1ABC9C]" />
                </div>
                <h3 className="text-xl font-bold text-[#2C3E50]">{category.category}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-[#2C3E50]">{skill.name}</span>
                      <span className="text-sm text-[#7F8C8D]">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-[#3498DB] h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools */}
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-[#2C3E50] mb-6 text-center">Tools & Technologies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tools.map((tool, index) => (
              <div key={index} className="bg-[#F4F6F7] rounded-lg p-4 text-center border border-gray-200">
                <h4 className="font-semibold text-[#2C3E50] mb-1">{tool.name}</h4>
                <span className="text-sm text-[#7F8C8D]">{tool.proficiency}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;