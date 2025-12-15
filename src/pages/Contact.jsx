import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaPrescriptionBottleAlt, FaAmbulance, FaUserMd, FaPills } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

const Contact = () => {

  const SafeMotion = ({ children, ...props }) => {
    const MotionComponent = typeof window !== 'undefined' ? motion.div : 'div'
    return <MotionComponent {...props}>{children}</MotionComponent>
  }

  const [activeTab, setActiveTab] = useState('general');
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Add your form submission logic here
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const tabContentVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <React.Fragment>
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Animated Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >

            <h2 className="text-4xl md:text-5xl font-bold text-[#5F99AE] mb-4">
              Contact Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our pharmacy team is available 24/7 to answer your questions about prescriptions, health products, and medical advice.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Side - Contact Cards */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Location & Hours */}

              <motion.div
                variants={itemVariants}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border-l-4 border-[#3E3F5B]"
              >
                <div className="flex items-start mb-4">
                  <div className="bg-[#3E3F5B] bg-opacity-20 p-3 rounded-full mr-4">
                    <FaMapMarkerAlt className="text-[#fdfdff] text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Location</h3>
                    <p className="text-gray-600">Visit us in person</p>
                  </div>
                </div>
                <div className="pl-16 space-y-4">
                  <p className="text-gray-700">2801 John F. Kennedy Blvd, Jersey City, NJ 07306, United States</p>

                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center text-gray-700 mb-2">
                      <FaClock className="mr-2 text-[#5F99AE]" />
                      <span className="font-medium">Hours:</span>
                    </div>
                    <div className="grid grid-cols-1 gap-1 text-sm">
                      <div>
                        <p className="font-medium">Saturday</p>
                        <p>11:00 AM - 5:00 PM</p>
                      </div>
                      <hr className="opacity-25" />
                      <div>
                        <p className="font-medium">Mon - Fri</p>
                        <p>10:00 AM - 7:00 PM</p>
                      </div>
                      {/* <hr className="opacity-25" /> */}
     
                      <hr className="opacity-25" />

                      <div>
                        <p className="font-medium">Sunday</p>
                        <p>Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>


              {/* Pharmacy Services */}
              {/* <motion.div
                variants={itemVariants}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border-l-4 border-[#5F99AE]"
              >
                <div className="flex items-start mb-4">
                  <div className="bg-[#5F99AE] bg-opacity-20 p-3 rounded-full mr-4">
                    <FaPrescriptionBottleAlt className="text-[#3E3F5B] text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Contact Number</h3>
                    <p className="text-gray-600">Specialized support</p>
                  </div>
                </div>
                <div className="pl-16 space-y-4">


                  <div>
                    <p className="font-semibold text-gray-800">Vaccination Info</p>
                    <p className="text-gray-600">+1 (615) 600 5116</p>
                  </div>
                </div>
              </motion.div> */}

              {/* Emergency Contact */}
              <motion.div
                variants={itemVariants}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border-l-4 border-red-500"
              >
                <div className="flex items-start mb-4">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <FaAmbulance className="text-[#0f0707] text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Contact</h3>
                    <p className="text-gray-600">For any medical needs</p>
                  </div>
                </div>
                <div className="pl-16">
                  <p className="text-lg font-bold text-[#0f0707] mb-2">+1 (201) 222-6655

</p>
                  {/* <p className="text-gray-700 mb-3">Or your local emergency number</p> */}
                </div>
              </motion.div>

            </motion.div>

            {/* Right Side - Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full">
                {/* Form Tabs */}
                <div className="flex border-b border-gray-200">
                  <button
                    onClick={() => setActiveTab('general')}
                    className={`px-6 py-4 font-medium text-lg flex-1 text-center transition-all ${activeTab === 'general' ? 'text-[#5F99AE] border-b-2 border-[#5F99AE]' : 'text-gray-500 hover:text-gray-700'}`}
                  >
                    <FaEnvelope className="inline-block mr-2" />
                    General Inquiry
                  </button>
                  <button
                    onClick={() => setActiveTab('prescription')}
                    className={`px-6 py-4 font-medium text-lg flex-1 text-center transition-all ${activeTab === 'prescription' ? 'text-[#5F99AE] border-b-2 border-[#5F99AE]' : 'text-gray-500 hover:text-gray-700'}`}
                  >
                    <FaPills className="inline-block mr-2" />
                    Prescription Help
                  </button>
                  <button
                    onClick={() => setActiveTab('doctor')}
                    className={`px-6 py-4 font-medium text-lg flex-1 text-center transition-all ${activeTab === 'doctor' ? 'text-[#5F99AE] border-b-2 border-[#5F99AE]' : 'text-gray-500 hover:text-gray-700'}`}
                  >
                    <FaUserMd className="inline-block mr-2" />
                    Doctor Connect
                  </button>
                </div>

                {/* Tab Content */}
                <div className="p-8">
                  <motion.div
                    key={activeTab}
                    variants={tabContentVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.3 }}
                  >
                    {activeTab === 'general' && (
                      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name *</label>
                            <input
                              type="text"
                              id="name"
                              {...register('name', { required: true })}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5F99AE] focus:border-transparent"
                            />
                            {errors.name && <p className="mt-1 text-sm text-red-600">This field is required</p>}
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email *</label>
                            <input
                              type="email"
                              id="email"
                              {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5F99AE] focus:border-transparent"
                            />
                            {errors.email && <p className="mt-1 text-sm text-red-600">Please enter a valid email</p>}
                          </div>
                        </div>
                        <div>
                          <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject *</label>
                          <input
                            type="text"
                            id="subject"
                            {...register('subject', { required: true })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5F99AE] focus:border-transparent"
                          />
                          {errors.subject && <p className="mt-1 text-sm text-red-600">This field is required</p>}
                        </div>
                        <div>
                          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message *</label>
                          <textarea
                            id="message"
                            rows="5"
                            {...register('message', { required: true })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5F99AE] focus:border-transparent"
                          ></textarea>
                          {errors.message && <p className="mt-1 text-sm text-red-600">This field is required</p>}
                        </div>
                        <button
                          type="submit"
                          className="w-full bg-gradient-to-r from-[#5F99AE] to-[#3E3F5B] text-white py-4 px-6 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                          Send Message
                        </button>
                      </form>
                    )}

                    {activeTab === 'prescription' && (
                      <div className="space-y-6">
                        <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                          <h3 className="text-xl font-bold text-[#3E3F5B] mb-3">Prescription Assistance</h3>
                          <p className="text-gray-700 mb-4">
                            For prescription refills, transfers, or medication questions, please provide the following details:
                          </p>
                          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <label htmlFor="rx-name" className="block text-gray-700 font-medium mb-2">Patient Name *</label>
                                <input
                                  type="text"
                                  id="rx-name"
                                  {...register('rxName', { required: true })}
                                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5F99AE] focus:border-transparent"
                                />
                              </div>
                              <div>
                                <label htmlFor="rx-dob" className="block text-gray-700 font-medium mb-2">Date of Birth *</label>
                                <input
                                  type="date"
                                  id="rx-dob"
                                  {...register('rxDob', { required: true })}
                                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5F99AE] focus:border-transparent"
                                />
                              </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <label htmlFor="rx-number" className="block text-gray-700 font-medium mb-2">Prescription #</label>
                                <input
                                  type="text"
                                  id="rx-number"
                                  {...register('rxNumber')}
                                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5F99AE] focus:border-transparent"
                                />
                              </div>
                              <div>
                                <label htmlFor="rx-pharmacy" className="block text-gray-700 font-medium mb-2">Current Pharmacy</label>
                                <input
                                  type="text"
                                  id="rx-pharmacy"
                                  {...register('rxPharmacy')}
                                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5F99AE] focus:border-transparent"
                                />
                              </div>
                            </div>
                            <div>
                              <label htmlFor="rx-medications" className="block text-gray-700 font-medium mb-2">Medications Needed *</label>
                              <textarea
                                id="rx-medications"
                                rows="3"
                                {...register('rxMedications', { required: true })}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5F99AE] focus:border-transparent"
                                placeholder="List all medications, including dosage and frequency"
                              ></textarea>
                            </div>
                            <button
                              type="submit"
                              className="w-full bg-gradient-to-r from-[#5F99AE] to-[#3E3F5B] text-white py-4 px-6 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                              Request Prescription Help
                            </button>
                          </form>
                        </div>
                        <div className="text-center">
                          <p className="text-gray-600">Or call our prescription line directly:</p>
                          <p className="text-2xl font-bold text-[#5F99AE] mt-2">(555) 987-6543</p>
                        </div>
                      </div>
                    )}

                    {activeTab === 'doctor' && (
                      <div className="space-y-6">
                        <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
                          <h3 className="text-xl font-bold text-[#3E3F5B] mb-3">Connect With a Doctor</h3>
                          <p className="text-gray-700 mb-4">
                            Our partnered physicians are available for consultations. Please provide your information:
                          </p>
                          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <label htmlFor="dr-name" className="block text-gray-700 font-medium mb-2">Your Name *</label>
                                <input
                                  type="text"
                                  id="dr-name"
                                  {...register('drName', { required: true })}
                                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5F99AE] focus:border-transparent"
                                />
                              </div>
                              <div>
                                <label htmlFor="dr-phone" className="block text-gray-700 font-medium mb-2">Phone *</label>
                                <input
                                  type="tel"
                                  id="dr-phone"
                                  {...register('drPhone', { required: true })}
                                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5F99AE] focus:border-transparent"
                                />
                              </div>
                            </div>
                            <div>
                              <label htmlFor="dr-reason" className="block text-gray-700 font-medium mb-2">Reason for Consultation *</label>
                              <select
                                id="dr-reason"
                                {...register('drReason', { required: true })}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5F99AE] focus:border-transparent"
                              >
                                <option value="">Select a reason</option>
                                <option value="general">General Health Consultation</option>
                                <option value="prescription">New Prescription Needed</option>
                                <option value="followup">Follow-up Consultation</option>
                                <option value="specialist">Specialist Referral</option>
                              </select>
                            </div>
                            <div>
                              <label htmlFor="dr-details" className="block text-gray-700 font-medium mb-2">Additional Details</label>
                              <textarea
                                id="dr-details"
                                rows="3"
                                {...register('drDetails')}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5F99AE] focus:border-transparent"
                                placeholder="Describe your symptoms or concerns"
                              ></textarea>
                            </div>
                            <div className="flex items-center">
                              <input
                                type="checkbox"
                                id="dr-urgent"
                                {...register('drUrgent')}
                                className="h-4 w-4 text-[#5F99AE] focus:ring-[#5F99AE] border-gray-300 rounded"
                              />
                              <label htmlFor="dr-urgent" className="ml-2 block text-gray-700">
                                This is an urgent medical need
                              </label>
                            </div>
                            <button
                              type="submit"
                              className="w-full bg-gradient-to-r from-[#5F99AE] to-[#3E3F5B] text-white py-4 px-6 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                              Request Doctor Consultation
                            </button>
                          </form>
                        </div>
                        <div className="text-center">
                          <p className="text-gray-600">For immediate assistance, call our medical line:</p>
                          <p className="text-2xl font-bold text-[#5F99AE] mt-2">(555) 789-0123</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* Pharmacy Specialties */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-20 bg-white rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Our Pharmacy Specialties</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: <FaPills className="text-3xl mb-3 text-[#28353a]" />, title: "Custom Compounding", desc: "Tailored medications for unique needs" },
                { icon: <FaPrescriptionBottleAlt className="text-3xl mb-3 text-[#28353a]" />, title: "Chronic Care", desc: "Specialized support for ongoing conditions" },
                { icon: <FaUserMd className="text-3xl mb-3 text-[#28353a]" />, title: "Medication Therapy", desc: "Personalized medication management" },
                { icon: <FaAmbulance className="text-3xl mb-3 text-[#28353a]" />, title: "Emergency Supply", desc: "24/7 access to critical medications" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-gray-50 p-6 rounded-xl text-center hover:bg-[#5F99AE] hover:bg-opacity-10 transition-all duration-300"
                >
                  <div className="flex justify-center">{item.icon}</div>
                  <h4 className="font-bold text-lg text-gray-800 mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Contact;
