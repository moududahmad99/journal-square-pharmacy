import React from 'react';
import { 
  FaPills, 
  FaSyringe, 
  FaHeartbeat, 
  FaPrescriptionBottleAlt,
  FaClinicMedical,
  FaBaby,
  FaFirstAid,
  FaFlask,
  FaAllergies,
  FaWeight,
  FaProcedures
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const Services = () => {
  const SafeMotion = ({ children, ...props }) => {
      const MotionComponent = typeof window !== 'undefined' ? motion.div : 'div'
      return <MotionComponent {...props}>{children}</MotionComponent>
    }
  const services = [
    {
      icon: <FaPills className="text-4xl" />,
      title: "Comprehensive Medication Management",
      description: "Personalized medication reviews to optimize therapy and prevent harmful interactions",
      details: [
        "90-minute private consultations",
        "Custom medication schedules",
        "Interaction analysis",
        "Adherence packaging available"
      ],
      color: "from-[#5F99AE] to-[#7FB6C7]"
    },
    {
      icon: <FaSyringe className="text-4xl" />,
      title: "Immunization Services",
      description: "Full-service vaccination clinic with all recommended immunizations",
      details: [
        "Flu, COVID-19, Shingles vaccines",
        "Travel immunizations",
        "Childhood vaccination schedules",
        "Corporate flu shot programs"
      ],
      color: "from-[#3E3F5B] to-[#5D5E7F]"
    },
    {
      icon: <FaHeartbeat className="text-4xl" />,
      title: "Advanced Health Screenings",
      description: "Preventive health testing with pharmacist consultation",
      details: [
        "Cholesterol panels",
        "Blood pressure monitoring",
        "Blood glucose testing",
        "BMI and metabolic assessments"
      ],
      color: "from-[#8F6B9E] to-[#B28FC1]"
    },
    {
      icon: <FaPrescriptionBottleAlt className="text-4xl" />,
      title: "Specialty Compounding",
      description: "Custom medication formulations for unique needs",
      details: [
        "Hormone replacement therapy",
        "Pediatric flavoring",
        "Allergy-free preparations",
        "Veterinary compounding"
      ],
      color: "from-[#4AAE9B] to-[#6DC9B6]"
    },
    {
      icon: <FaClinicMedical className="text-4xl" />,
      title: "Chronic Disease Management",
      description: "Specialized support for ongoing health conditions",
      details: [
        "Diabetes care program",
        "Hypertension monitoring",
        "Asthma/COPD management",
        "Mental health medication support"
      ],
      color: "from-[#E67E22] to-[#F39C12]"
    },
    {
      icon: <FaBaby className="text-4xl" />,
      title: "Prenatal & Pediatric Care",
      description: "Specialized medication support for mothers and children",
      details: [
        "Pregnancy-safe medications",
        "Child-dose compounding",
        "Breastfeeding consultations",
        "Vaccination schedules"
      ],
      color: "from-[#E74C3C] to-[#EC7063]"
    }
  ];

  const additionalServices = [
    {
      icon: <FaFirstAid />,
      name: "Emergency Contraception"
    },
    {
      icon: <FaFlask />,
      name: "Genetic Testing"
    },
    {
      icon: <FaAllergies />,
      name: "Allergy Testing"
    },
    {
      icon: <FaWeight />,
      name: "Weight Management"
    },
    {
      icon: <FaProcedures />,
      name: "Post-Surgical Care"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
           
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Exceptional <span className="text-[#5F99AE]">Pharmacy Care</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We go beyond prescriptions to provide comprehensive health solutions tailored to your unique needs.
          </p>
        </motion.div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300"
            >
              <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
              <div className="p-6">
                <div className={`bg-gradient-to-r ${service.color} w-16 h-16 rounded-lg flex items-center justify-center text-white mb-4`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-[#5F99AE] mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
            More Specialty Services We Offer
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 rounded-lg p-4 text-center flex flex-col items-center"
              >
                <div className="bg-[#5F99AE] bg-opacity-10 w-12 h-12 rounded-full flex items-center justify-center text-[#3E3F5B] mb-2">
                  {service.icon}
                </div>
                <span className="font-medium text-gray-700">{service.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-[#3E3F5B] to-[#5F99AE] rounded-xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Experience Exceptional Care?</h3>
            <p className="text-xl mb-6 max-w-2xl mx-auto">
              Our pharmacists are available to discuss how we can support your health journey.
            </p>
            <a
              href="tel:+12012226655"
              className="inline-block bg-white text-[#3E3F5B] px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition shadow-lg"
            >
              Call Now: +1 (201) 222-6655
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;