import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaPills, FaHeartbeat, FaShieldAlt, FaTruck, 
  FaUserMd, FaAward, FaRegClock, FaRegSmile, 
  FaClinicMedical, FaFlask, FaArrowRight 
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Import your images
import feature1 from '../assets/1.jpg';
import feature2 from '../assets/2.jpg';
import feature3 from '../assets/3.jpg';
import feature4 from '../assets/4.jpg';

const About = () => {

  const SafeMotion = ({ children, ...props }) => {
      const MotionComponent = typeof window !== 'undefined' ? motion.div : 'div'
      return <MotionComponent {...props}>{children}</MotionComponent>
    }
  const stats = [
    { icon: <FaRegClock className="w-8 h-8" />, value: "5+", label: "Years Serving" },
    { icon: <FaPills className="w-8 h-8" />, value: "1240+", label: "Prescriptions" },
    { icon: <FaUserMd className="w-8 h-8" />, value: "2", label: "Specialists" },
    { icon: <FaRegSmile className="w-8 h-8" />, value: "99.7%", label: "Satisfaction" }
  ];

  const features = [
    {
      title: "Medication Management",
      description: "99.9% accuracy with triple-check verification",
      icon: <FaPills className="w-6 h-6 text-[#5C90A5]" />
    },
    {
      title: "Vaccination Services",
      description: "Comprehensive immunization programs",
      icon: <FaHeartbeat className="w-6 h-6 text-[#5C90A5]" />
    },
    {
      title: "Safety Protocols",
      description: "ISO 9001 certified facility",
      icon: <FaShieldAlt className="w-6 h-6 text-[#5C90A5]" />
    },
    {
      title: "Concierge Delivery",
      description: "Temperature-controlled logistics",
      icon: <FaTruck className="w-6 h-6 text-[#5C90A5]" />
    }
  ];

  const galleryImages = [
    { image: feature1, alt: "Medical Equipment", caption: "State-of-the-art Facilities" },
    { image: feature2, alt: "Vaccination Services", caption: "Immunization Center" },
    { image: feature3, alt: "Pharmacy Interior", caption: "Modern Pharmacy" },
    { image: feature4, alt: "Skin Care", caption: "Dermatological Solutions" }
  ];

  const team = [
    { initials: "M", name: "Dr. Natalia", role: "Founder-CEO", bio: "Specializes in custom medication formulations." }
  ];

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Animated Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#404460] mb-6 relative inline-block">
            <span>Pharmaceutical Excellence</span>
            <motion.span 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.3 }}
              className="absolute bottom-[-12px] left-0 h-1 bg-gradient-to-r from-[#5C90A5] to-[#404460] rounded-full"
            />
          </h2>
          <p className="text-xl text-[#364153] max-w-3xl mx-auto opacity-90 leading-relaxed">
            For over 15 years, we've blended cutting-edge medicine with compassionate care.
          </p>
        </motion.div>

        {/* Features Section with Enhanced Gallery */}
        <div className="flex flex-col lg:flex-row gap-12 mb-20">
          {/* Left side - Text content */}
          <div className="lg:w-1/2">
            <h3 className="text-3xl font-bold text-[#404460] mb-8">Our Distinguished Services</h3>
            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-start gap-4 p-6 hover:bg-[#f8fafc] rounded-lg transition-all">
                    <div className="w-10 h-10 bg-[#5C90A5]/10 rounded-full flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-[#404460] mb-2">{feature.title}</h4>
                      <p className="text-[#364153] opacity-90 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Right side - Enhanced Image Gallery */}
          <div className="lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 gap-4"
            >
              {galleryImages.map((img, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className={`relative overflow-hidden rounded-xl aspect-square shadow-lg ${
                    index % 2 === 0 ? "rotate-1" : "-rotate-1"
                  } hover:rotate-0 transition-all duration-300`}
                >
                  <img 
                    src={img.image} 
                    alt={img.alt}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4"
                  >
                    <span className="text-white font-medium">{img.caption}</span>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Stats with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-[#5C90A5]/10 to-[#404460]/10 rounded-2xl p-12 mb-20 border border-[#5C90A5]/20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 text-[#5C90A5]">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-[#404460] mb-2">{stat.value}</div>
                <div className="text-[#364153] opacity-80 uppercase text-sm tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#404460] mb-4">Meet Our Expert Team</h2>
          <p className="text-xl text-[#364153] max-w-3xl mx-auto opacity-90 mb-12">
            Our pharmacists aren't just medication experts—they're compassionate healthcare partners.
          </p>
          
          <div className="grid grid-cols-1 gap-8 max-w-md mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#5C90A5] to-[#404460] flex items-center justify-center text-white text-3xl font-bold">
                  {member.initials}
                </div>
                <h3 className="text-xl font-semibold text-[#404460] mb-1">{member.name}</h3>
                <p className="text-[#5C90A5] font-medium mb-4">{member.role}</p>
                <p className="text-[#364153] opacity-80">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quality Promise with CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-xl overflow-hidden"
        >
          <div className="h-2 bg-gradient-to-r from-[#5C90A5] via-[#404460] to-[#28353A]"></div>
          <div className="p-12 text-center">
            <div className="w-20 h-20 mx-auto mb-6 text-[#5C90A5]">
              <FaClinicMedical className="w-full h-full" />
            </div>
            <h2 className="text-3xl font-bold text-[#404460] mb-6">Our Quality Promise</h2>
            <p className="text-xl text-[#364153] max-w-4xl mx-auto opacity-90 leading-relaxed mb-8">
              Every prescription undergoes 7-point verification from our team of pharmacists.
            </p>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#5C90A5] to-[#404460] text-white font-semibold py-3 px-8 rounded-full hover:shadow-lg transition-all"
            >
              Explore Our Services <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;