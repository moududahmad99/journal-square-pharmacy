import React, { useState } from 'react';
import { FaPrescriptionBottleAlt, FaUserAlt, FaPhoneAlt, FaCalendarAlt, FaPills, FaIdCard, FaAllergies, FaNotesMedical } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Refill = () => {
  const SafeMotion = ({ children, ...props }) => {
    const MotionComponent = typeof window !== 'undefined' ? motion.div : 'div'
    return <MotionComponent {...props}>{children}</MotionComponent>
  }
  const [refillMethod, setRefillMethod] = useState('existing');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto bg-emerald-50 border border-emerald-100 rounded-xl p-8 text-center"
      >
        <div className="text-emerald-500 text-5xl mb-4 mt-5">✓</div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Refill Request Received!</h3>
        <p className="text-gray-600 mb-6">
          Your prescription refill has been submitted. A pharmacist will review your request within 1 hour.
        </p>
        <div className="bg-white p-4 rounded-lg border border-gray-200 inline-block">
          <p className="font-medium text-gray-700">Reference #: <span className="text-[#3E3F5B]">RX-{Math.floor(Math.random() * 1000000)}</span></p>
        </div>
        <button
          onClick={() => setIsSuccess(false)}
          className="mt-6 bg-[#3E3F5B] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition font-medium"
        >
          Submit Another Refill
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200"
      style={{ margin: '4rem auto 3rem auto' }}
    >
      {/* Premium Header */}
      <div className="bg-gradient-to-r from-[#3E3F5B] to-[#5F99AE] p-6 text-white">
        <div className="flex items-center">
          <FaPrescriptionBottleAlt className="text-white text-2xl mr-3" />
          <div>
            <h2 className="text-2xl font-bold">Prescription Refill Request</h2>
            <p className="text-white text-opacity-90 mt-1">
              Complete this form to refill your medications. All fields are required unless noted.
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-8">
        {/* Refill Method Selection */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <FaPills className="mr-2 text-[#5F99AE]" />
            Refill Type
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setRefillMethod('existing')}
              className={`py-3 px-4 rounded-lg border-2 transition-all flex items-center justify-center ${refillMethod === 'existing' ? 'border-[#5F99AE] bg-[#5F99AE] bg-opacity-10 text-[#3E3F5B] font-semibold' : 'border-gray-200 text-gray-600 hover:border-[#5F99AE]'}`}
            >
              <FaPrescriptionBottleAlt className="mr-2" />
              Existing Prescription
            </button>
            <button
              type="button"
              onClick={() => setRefillMethod('new')}
              className={`py-3 px-4 rounded-lg border-2 transition-all flex items-center justify-center ${refillMethod === 'new' ? 'border-[#5F99AE] bg-[#5F99AE] bg-opacity-10 text-[#3E3F5B] font-semibold' : 'border-gray-200 text-gray-600 hover:border-[#5F99AE]'}`}
            >
              <FaNotesMedical className="mr-2" />
              New Prescription
            </button>
          </div>
        </div>

        {/* Patient Information - Enhanced */}
        <div className="mb-10 bg-gray-50 p-6 rounded-xl">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <FaUserAlt className="mr-2 text-[#5F99AE]" />
            Patient Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Full Legal Name *</label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5F99AE] focus:border-transparent"
                placeholder="As it appears on your ID"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Date of Birth *</label>
              <input
                type="date"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5F99AE] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Phone Number *</label>
              <input
                type="tel"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5F99AE] focus:border-transparent"
                placeholder="(555) 123-4567"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Email Address *</label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5F99AE] focus:border-transparent"
                placeholder="john@example.com"
              />
            </div>
            {/* NEW: Insurance Information */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Insurance Provider</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5F99AE] focus:border-transparent">
                <option value="">Select Provider</option>
                <option value="aetna">Aetna</option>
                <option value="bluecross">Blue Cross Blue Shield</option>
                <option value="medicare">Medicare</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Member ID</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5F99AE] focus:border-transparent"
                placeholder="Insurance ID number"
              />
            </div>
          </div>
        </div>

        {/* Prescription Details - Enhanced */}
        <div className="mb-10 bg-gray-50 p-6 rounded-xl">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <FaPrescriptionBottleAlt className="mr-2 text-[#5F99AE]" />
            Prescription Details
          </h3>

          {refillMethod === 'existing' ? (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Prescription Number *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5F99AE] focus:border-transparent"
                    placeholder="RX123456"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Original Fill Date *</label>
                  <input
                    type="date"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5F99AE] focus:border-transparent"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Medication Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5F99AE] focus:border-transparent"
                    placeholder="e.g., Atorvastatin 20mg"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Dosage *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5F99AE] focus:border-transparent"
                    placeholder="e.g., 1 tablet daily"
                  />
                </div>
              </div>
              {/* NEW: Refill Details */}
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Refill Instructions</label>
                <textarea
                  rows="2"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5F99AE] focus:border-transparent"
                  placeholder="Any special instructions for this refill"
                ></textarea>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Prescribing Doctor *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5F99AE] focus:border-transparent"
                    placeholder="Dr. Smith"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Doctor's Phone *</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5F99AE] focus:border-transparent"
                    placeholder="(555) 987-6543"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Current Pharmacy</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5F99AE] focus:border-transparent"
                  placeholder="Name and location of current pharmacy"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Medication Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5F99AE] focus:border-transparent"
                    placeholder="Brand or generic name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Strength/Dosage *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5F99AE] focus:border-transparent"
                    placeholder="e.g., 20mg tablets"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Prescription Details *</label>
                <textarea
                  required
                  rows="3"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5F99AE] focus:border-transparent"
                  placeholder="Include: Quantity, directions for use, refills authorized, etc."
                ></textarea>
              </div>
            </div>
          )}
        </div>

        {/* NEW: Medical History Section */}
        <div className="mb-10 bg-gray-50 p-6 rounded-xl">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <FaNotesMedical className="mr-2 text-[#5F99AE]" />
            Medical Information
          </h3>
          <div className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Known Allergies</label>
              <textarea
                rows="2"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5F99AE] focus:border-transparent"
                placeholder="List any medication allergies or adverse reactions"
              ></textarea>
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Current Medications</label>
              <textarea
                rows="3"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5F99AE] focus:border-transparent"
                placeholder="List all other medications you're currently taking (including OTC)"
              ></textarea>
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Medical Conditions</label>
              <textarea
                rows="2"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5F99AE] focus:border-transparent"
                placeholder="Any relevant health conditions (optional)"
              ></textarea>
            </div>
          </div>
        </div>

        {/* Pickup Options - Simplified */}
        <div className="mb-10 bg-gray-50 p-6 rounded-xl">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <FaCalendarAlt className="mr-2 text-[#5F99AE]" />
            Pickup Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Preferred Pickup Date *</label>
              <input
                type="date"
                required
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5F99AE] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Preferred Pickup Time *</label>
              <select
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5F99AE] focus:border-transparent"
              >
                <option value="">Select Time Window</option>
                <option value="morning">Morning (8AM - 12PM)</option>
                <option value="afternoon">Afternoon (12PM - 4PM)</option>
                <option value="evening">Evening (4PM - 8PM)</option>
              </select>
            </div>
          </div>
          <div className="mt-6">
            <label className="block text-gray-700 mb-2 font-medium">Special Instructions</label>
            <textarea
              rows="2"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5F99AE] focus:border-transparent"
              placeholder="Any special requests for pickup"
            ></textarea>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-4 px-6 rounded-lg font-bold text-white transition-all ${isSubmitting ? 'bg-[#3E3F5B] bg-opacity-70' : 'bg-[#3E3F5B] hover:bg-opacity-90'}`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : (
              'Submit Refill Request'
            )}
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default Refill;