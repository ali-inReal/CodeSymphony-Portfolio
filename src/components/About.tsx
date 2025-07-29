import React from 'react';
import { Target, Users, Lightbulb, Award } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'We are committed to delivering solutions that create real value and drive meaningful results for our clients.'
    },
    {
      icon: Users,
      title: 'Collaborative',
      description: 'We believe in the power of partnership and work closely with our clients to achieve shared success.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation-Focused',
      description: 'We stay at the forefront of technology trends to provide cutting-edge solutions that future-proof your business.'
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We maintain the highest standards of quality in every project, ensuring robust and reliable solutions.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About CodeSymphony
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Founded in 2025, CodeSymphony is a modern IT solutions company specializing in custom software 
              development, mobile applications, and cloud solutions. We partner with businesses to transform 
              their digital vision into reality through innovative, scalable, and user-centric technology.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our experienced team specializes in building robust solutions—from enterprise web applications 
              and mobile platforms to cloud infrastructure and digital transformation initiatives. We combine 
              technical excellence with strategic thinking to deliver measurable results for our clients.
            </p>

            <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2">Our Vision</h3>
              <p className="text-blue-100">
                To be the trusted technology partner that empowers businesses to achieve their digital potential.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                alt="Team collaboration"
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-4 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">2025</div>
              <div className="text-sm">Founded</div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Core Values
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-r from-blue-600 to-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;