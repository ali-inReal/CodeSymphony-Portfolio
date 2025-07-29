import React from 'react';
import { Code2, Smartphone, Cloud, Database, Shield, Zap } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Code2,
      title: 'Custom Software Development',
      description: 'Tailored solutions built with modern technologies to meet your unique business requirements.',
      features: ['Web Applications', 'Enterprise Software', 'API Development']
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      features: ['iOS Development', 'Android Development', 'React Native']
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services to modernize your business operations.',
      features: ['AWS/Azure/GCP', 'DevOps', 'Microservices']
    },
    
    {
      icon: Zap,
      title: 'Digital Transformation',
      description: 'Strategic guidance and implementation to digitize and optimize your business processes.',
      features: ['Process Automation', 'Legacy Modernization', 'Strategy Consulting']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive suite of technology services designed to propel your business forward
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="bg-gradient-to-r from-blue-600 to-teal-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;