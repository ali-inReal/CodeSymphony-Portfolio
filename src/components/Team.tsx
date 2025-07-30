import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Muhammad Ali',
      role: 'Chief Executive Officer',
      image: 'public/mali.jpg',
      bio: 'Visionary technology leader with 3+ years of experience in enterprise software development, digital transformation, and strategic business growth. Passionate about leveraging cutting-edge technology to solve complex business challenges.',
      socials: { linkedin: 'https://www.linkedin.com/in/muhammadali2418/' }
    },
    {
      name: 'Muhammad Touseef',
      role: 'Software Engineer',
      image: 'public/touseef.jpg',
      bio: 'Experienced software engineer with expertise in full-stack development and modern web technologies. Specializes in building scalable applications using React, Node.js.',
      socials: { linkedin: '#'}
    },
    {
      name: 'Muhammad Talha Khan',
      role: 'Software Engineer',
      image: 'public/final.jpg',
      bio: 'Versatile software engineer with a strong background in full-stack development and cloud technologies. Excels at architecting scalable solutions and implementing robust backend systems with expertise in microservices and API development.',
      socials: { linkedin: 'https://www.linkedin.com/in/ammuhammadtalha/'}
    },
    
    {
      name: 'Syed Jarar Haider',
      role: 'Software Engineer',
      image: 'public/jerry.jpg',
      bio: 'Skilled software engineer with expertise in full-stack development and cutting-edge web technologies. Focuses on creating robust applications using React, Node.js, and modern frameworks.',
      socials: { linkedin: '#' }
    },
    {
      name: 'Hassan Bilal Butt',
      role: 'Software Engineer',
      image: 'public/hassan.jpg',
      bio: 'Talented software engineer specializing in frontend development with deep expertise in React, TypeScript, and modern web technologies. Passionate about creating intuitive user interfaces and seamless user experiences.',
      socials: { linkedin: 'https://www.linkedin.com/in/hassanbilalbutt/' }
    },
    {
      name: 'Hammad Ashfaq',
      role: 'Associate Software Engineer',
      image: 'public/profile.jpg',
      bio: 'Emerging software engineer with a strong foundation in modern web development technologies. Eager to contribute to innovative projects while continuously learning and growing in full-stack development and software engineering best practices.',
      socials: { linkedin: '#' }
    },

    {
      name: 'Mohib Ali',
      role: 'Associate Software Engineer',
      image: 'public/mohib.jpg',
      bio: 'Dedicated associate software engineer with a passion for backend development and system architecture. Focuses on building efficient APIs, database optimization, and server-side solutions using modern technologies and best practices.',
      socials: { linkedin: '#' }
    }
    
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The talented individuals who bring our digital symphonies to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className={`w-32 h-32 rounded-full mx-auto object-cover object-top group-hover:scale-110 transition-transform duration-300 ring-4 ring-gray-100 ${
                    member.name === 'Syed Jarar Haider' ? '-mt-4' : ''
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-teal-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-orange-500 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {member.bio}
                </p>
                
                <div className="flex justify-center space-x-3">
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
