'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Shield,
  Phone,
  CreditCard,
  User,
  AlertTriangle,
  CheckCircle
} from 'lucide-react'
import Navigation from '@/components/Navigation'

export default function Insurance() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 bg-gradient-to-br from-primary-50 to-dental-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Insurance Information
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding your insurance coverage and maximizing your benefits.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content - Two Column Layout */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            
            <div className="grid lg:grid-cols-2 gap-8">
              
              {/* Left Column */}
              <div className="space-y-6">
                {/* Insurance Overview */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="card p-6"
                >
                  <div className="flex items-start">
                    <Shield className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        Our Commitment to You
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Smile Zone Family Dental is committed to providing excellent care and convenient financial options. We work with our patients to maximize insurance reimbursement for covered procedures.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Our staff is well-informed and can be reached by phone at{' '}
                        <a href="tel:510-505-0123" className="font-semibold text-primary-600 hover:text-primary-800 transition-colors">
                          510-505-0123
                        </a>{' '}
                        if you have any problems or questions.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* First Visit Instructions */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="card p-6"
                >
                  <div className="flex items-start">
                    <User className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        Instructions for Your First Visit
                      </h3>
                      <div className="space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                          Please bring your insurance card if applicable. If you do not have an insurance card, please provide the following information to expedite benefit checking before your appointment:
                        </p>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                              <span><strong>Member ID</strong></span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                              <span><strong>SSN</strong></span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                              <span><strong>Group Number</strong></span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                              <span><strong>Employer Name</strong></span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Important Call to Action */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="card p-6 bg-primary-50 border-l-4 border-primary-500"
                >
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-primary-800 mb-3">
                        Have Questions?
                      </h3>
                      <p className="text-primary-700 font-semibold">
                        Please call if you have any questions or concerns regarding your initial visit.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Photo ID Requirement */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="card p-6 bg-yellow-50 border-l-4 border-yellow-500"
                >
                  <div className="flex items-start">
                    <AlertTriangle className="w-6 h-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-yellow-800 mb-3">
                        Important: Photo ID Required
                      </h3>
                      <p className="text-yellow-700 font-semibold">
                        Please bring a valid photo ID TO YOUR FIRST APPOINTMENT WITH US.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Contact CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="card p-6 bg-blue-50 border-l-4 border-blue-500"
                >
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-blue-800 mb-4">
                        Need Help with Insurance?
                      </h3>
                      <p className="text-blue-700 mb-4">
                        Our experienced staff is here to help you understand your insurance benefits and maximize your coverage.
                      </p>
                      <div className="space-y-3">
                        <motion.button
                          className="w-full bg-blue-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => window.open('tel:510-505-0123', '_self')}
                        >
                          <Phone className="w-5 h-5 mr-2" />
                          Call for Questions
                        </motion.button>
                        <motion.button
                          className="w-full border-2 border-blue-600 text-blue-600 font-medium py-3 px-6 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-300 flex items-center justify-center"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => window.location.href = '/patient-info/financial-policy'}
                        >
                          <CreditCard className="w-5 h-5 mr-2" />
                          View Financial Policy
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 