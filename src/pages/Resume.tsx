
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, ArrowRight } from 'lucide-react';

const Resume = () => {
  const experience = [
    {
      position: "Senior Full-Stack Developer",
      company: "Tech Innovations Inc.",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: "Leading development of scalable web applications serving 100K+ users. Mentoring junior developers and driving technical decisions for multiple product teams.",
      achievements: [
        "Increased application performance by 40% through optimization",
        "Led migration to microservices architecture",
        "Mentored 5 junior developers",
        "Implemented CI/CD pipeline reducing deployment time by 60%"
      ],
      technologies: ["React", "Node.js", "AWS", "Docker", "MongoDB"]
    },
    {
      position: "Full-Stack Developer",
      company: "Digital Solutions Ltd.",
      location: "San Francisco, CA",
      period: "2020 - 2022",
      description: "Developed and maintained multiple client projects including e-commerce platforms, management systems, and mobile applications.",
      achievements: [
        "Built 15+ client projects from conception to deployment",
        "Reduced bug reports by 50% through comprehensive testing",
        "Implemented responsive design increasing mobile usage by 35%",
        "Optimized database queries improving response time by 25%"
      ],
      technologies: ["Vue.js", "Laravel", "MySQL", "JavaScript", "CSS3"]
    },
    {
      position: "Frontend Developer",
      company: "Creative Web Agency",
      location: "San Francisco, CA", 
      period: "2019 - 2020",
      description: "Specialized in creating responsive and interactive user interfaces for various client websites and web applications.",
      achievements: [
        "Delivered 20+ responsive websites",
        "Improved client satisfaction scores by 30%",
        "Reduced page load times by 45%",
        "Established component library used across projects"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of California, Berkeley",
      period: "2015 - 2019",
      gpa: "3.8/4.0",
      coursework: ["Data Structures", "Algorithms", "Database Systems", "Software Engineering", "Web Development"]
    },
    {
      degree: "Full-Stack Web Development Bootcamp",
      school: "General Assembly",
      period: "2019",
      gpa: "Honor Graduate",
      coursework: ["React", "Node.js", "Express", "MongoDB", "Project Management"]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navigation />
      
      <section className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-6xl lg:text-7xl font-black mb-8 text-gray-900">
              Resume
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              5+ years of experience in full-stack development, creating innovative 
              digital solutions and leading development teams.
            </p>
            <button className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-colors rounded-lg">
              <Download size={20} />
              Download PDF Resume
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Professional Summary */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Professional Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    Passionate Full-Stack Developer with 5+ years of experience building scalable web applications 
                    and leading development teams. Expertise in modern JavaScript frameworks, cloud architecture, 
                    and agile development practices. Proven track record of delivering high-quality solutions that 
                    drive business growth and enhance user experience.
                  </p>
                </CardContent>
              </Card>

              {/* Experience */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Professional Experience</h2>
                <div className="space-y-8">
                  {experience.map((job, index) => (
                    <Card key={index} className="border-l-4 border-l-gray-900 shadow-lg">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <CardTitle className="text-xl">{job.position}</CardTitle>
                          <span className="text-sm text-gray-600 font-medium">{job.period}</span>
                        </div>
                        <div className="text-gray-600">
                          <p className="font-medium">{job.company}</p>
                          <p className="text-sm">{job.location}</p>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 mb-4">{job.description}</p>
                        
                        <div className="mb-4">
                          <h4 className="font-semibold mb-2">Key Achievements:</h4>
                          <ul className="space-y-1">
                            {job.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="flex items-start gap-2 text-gray-700">
                                <ArrowRight size={16} className="mt-1 flex-shrink-0" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2">Technologies:</h4>
                          <div className="flex flex-wrap gap-2">
                            {job.technologies.map((tech, techIndex) => (
                              <span 
                                key={techIndex}
                                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Education</h2>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <Card key={index} className="shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-xl font-bold">{edu.degree}</h3>
                          <span className="text-sm text-gray-600 font-medium">{edu.period}</span>
                        </div>
                        <p className="text-gray-600 font-medium mb-2">{edu.school}</p>
                        <p className="text-gray-600 mb-3">{edu.gpa}</p>
                        
                        <div>
                          <h4 className="font-semibold mb-2">Relevant Coursework:</h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.coursework.map((course, courseIndex) => (
                              <span 
                                key={courseIndex}
                                className="px-2 py-1 bg-gray-50 text-gray-600 text-sm rounded"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Contact Info */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm text-gray-600">Email</h4>
                    <p>hello@shannii.dev</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-600">Phone</h4>
                    <p>+1 (555) 123-4567</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-600">Location</h4>
                    <p>San Francisco, CA</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-600">Website</h4>
                    <p>www.shannii.dev</p>
                  </div>
                </CardContent>
              </Card>

              {/* Core Skills */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Core Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { skill: "React/Next.js", level: 95 },
                      { skill: "Node.js", level: 90 },
                      { skill: "TypeScript", level: 90 },
                      { skill: "Python", level: 85 },
                      { skill: "AWS/Cloud", level: 85 },
                      { skill: "MongoDB", level: 90 },
                      { skill: "PostgreSQL", level: 85 }
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium">{item.skill}</span>
                          <span className="text-xs text-gray-600">{item.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gray-900 h-2 rounded-full"
                            style={{ width: `${item.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Languages */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Languages</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span>English</span>
                    <span className="text-gray-600">Native</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Spanish</span>
                    <span className="text-gray-600">Conversational</span>
                  </div>
                  <div className="flex justify-between">
                    <span>French</span>
                    <span className="text-gray-600">Basic</span>
                  </div>
                </CardContent>
              </Card>

              {/* Interests */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Interests</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["Open Source", "AI/ML", "Photography", "Travel", "Music", "Hiking"].map((interest, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resume;
