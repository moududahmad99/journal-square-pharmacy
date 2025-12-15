import React from 'react';
import { 
  FaCalendarAlt, 
  FaPhoneAlt, 
  FaClock, 
  FaMapMarkerAlt, 
  FaUserMd,
  FaPills,
  FaSyringe,
  FaHeartbeat,
  FaCheckCircle
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const BookAnAppointment = () => {

  const SafeMotion = ({ children, ...props }) => {
    const MotionComponent = typeof window !== 'undefined' ? motion.div : 'div'
    return <MotionComponent {...props}>{children}</MotionComponent>
  }

  const appointmentOptions = [
    {
      icon: <FaUserMd className="text-3xl" />,
      title: "Medication Consultation",
      duration: "30-60 min",
      benefits: [
        "Personalized medication review",
        "Interaction analysis",
        "Adherence strategies"
      ]
    },
    {
      icon: <FaSyringe className="text-3xl" />,
      title: "Vaccination Appointment",
      duration: "15-30 min",
      benefits: [
        "Flu, COVID-19, Shingles",
        "Travel immunizations",
        "Vaccine records management"
      ]
    },
    {
      icon: <FaHeartbeat className="text-3xl" />,
      title: "Health Screening",
      duration: "20-40 min",
      benefits: [
        "Blood pressure check",
        "Cholesterol testing",
        "Diabetes screening"
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Appointment Options */}
      <div className="mb-24">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our <span className="text-[#5F99AE]">Appointment</span> Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the service that matches your needs and schedule with one of our specialists.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {appointmentOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
            >
              <div className="bg-gradient-to-r from-[#5F99AE] to-[#3E3F5B] h-2"></div>
              <div className="p-8">
                <div className="bg-[#5F99AE] bg-opacity-10 w-16 h-16 rounded-xl flex items-center justify-center text-[#3E3F5B] mb-6">
                  {option.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{option.title}</h3>
                <div className="flex items-center text-gray-500 mb-5">
                  <FaClock className="mr-2" />
                  <span>{option.duration}</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {option.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <FaCheckCircle className="text-[#5F99AE] mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="tel:+16156005116"
                  className="inline-block bg-[#3E3F5B] text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition w-full text-center"
                >
                  Book Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>


      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Personalized <span className="text-[#5F99AE]">Pharmacy Care</span> On Your Schedule
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Our certified pharmacists provide comprehensive consultations to optimize your medication therapy and overall health.
          </p>
          
          <div className="space-y-5 mb-10">
            {[
              { icon: <FaUserMd />, text: "Board-certified medication experts" },
              { icon: <FaClock />, text: "Evening and weekend availability" },
              { icon: <FaMapMarkerAlt />, text: "Convenient downtown location with free parking" }
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="bg-[#5F99AE] bg-opacity-20 p-2 rounded-full mr-4">
                  {React.cloneElement(item.icon, { className: "text-[#3E3F5B] text-xl" })}
                </div>
                <span className="text-lg text-gray-700">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-2 relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
              alt="Pharmacist consulting with patient"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3E3F5B] to-transparent opacity-50"></div>
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <div className="flex items-center">
              <div className="bg-[#5F99AE] text-white p-3 rounded-full mr-4">
                <FaPhoneAlt className="text-xl" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Call now to book</p>
                <a href="tel:+16156005116" className="text-xl font-bold text-[#3E3F5B] hover:text-[#5F99AE] transition">
                  (615) 600-5116
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      
      {/* Premium CTA Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-[#3E3F5B] to-[#5F99AE] rounded-2xl p-12 text-center text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full transform translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full transform -translate-x-32 translate-y-32"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <FaCalendarAlt className="text-5xl mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Take Control of Your Health?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule your personalized consultation today and experience pharmacy care that puts you first.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a
              href="tel:+16156005116"
              className="bg-white text-[#3E3F5B] px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition flex items-center shadow-lg transform hover:scale-105"
            >
              <FaPhoneAlt className="mr-3" />
              Call (615) 600-5116
            </a>
            <div className="text-white text-opacity-90 text-lg">
              <p>Monday-Friday: 8AM-8PM</p>
              <p>Saturday: 9AM-5PM</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BookAnAppointment;