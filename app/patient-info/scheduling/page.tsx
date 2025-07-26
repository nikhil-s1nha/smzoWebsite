'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Calendar,
  Clock,
  Phone,
  AlertTriangle,
  User,
  CheckCircle
} from 'lucide-react'
import Navigation from '@/components/Navigation'

export default function Scheduling() {
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
              Scheduling
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Office hours, appointment policies, and how to schedule your visit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content - Two Column Layout */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            
            {/* COVID-19 Notice - Full Width */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="card p-6 mb-8 bg-yellow-50 border-l-4 border-yellow-500"
            >
              <div className="flex items-start">
                <AlertTriangle className="w-6 h-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-yellow-800 mb-2">
                    COVID-19 Notice
                  </h3>
                  <p className="text-yellow-700">
                    Due to Coronavirus epidemic, our office is closed till May 1, as per government guidelines.
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              
              {/* Left Column */}
              <div className="space-y-6">
                {/* Office Hours */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="card p-6"
                >
                  <div className="flex items-start">
                    <Clock className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        Office Hours
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <Calendar className="w-5 h-5 text-primary-600 mr-3" />
                          <span className="text-gray-700">
                            <strong>Monday, Wednesday, Friday:</strong> 8:30 AM - 5:30 PM
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-5 h-5 text-primary-600 mr-3" />
                          <span className="text-gray-700">
                            <strong>Saturday:</strong> One Saturday a month by appointment only
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Appointment Policy */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="card p-6"
                >
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        Appointment Policy
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        We will schedule your appointment as promptly as possible. If you have pain or an emergency situation, every attempt will be made to see you that day.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Scheduling Expectations */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="card p-6"
                >
                  <div className="flex items-start">
                    <User className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        Scheduling Expectations
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        We try our best to stay on schedule to minimize your waiting. Due to the fact that{' '}
                        <span className="text-primary-600 font-semibold">Dr. Sinha</span> provides many types of dental services, various circumstances may lengthen the time allocated for a procedure. Emergency cases can also arise and cause delays. We appreciate your understanding and patience.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Contact CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="card p-6 bg-primary-50 border-l-4 border-primary-500"
                >
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-primary-800 mb-4">
                        Ready to Schedule?
                      </h3>
                      <p className="text-primary-700 mb-4">
                        Please call us at{' '}
                        <a href="tel:510-505-0123" className="font-semibold hover:text-primary-800 transition-colors">
                          510-505-0123
                        </a>{' '}
                        with any questions or to schedule an appointment.
                      </p>
                      <div className="space-y-3">
                        <motion.button
                          className="w-full bg-primary-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-primary-700 transition-colors duration-300 flex items-center justify-center"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => window.open('tel:510-505-0123', '_self')}
                        >
                          <Phone className="w-5 h-5 mr-2" />
                          Call Now
                        </motion.button>
                        <motion.button
                          className="w-full border-2 border-primary-600 text-primary-600 font-medium py-3 px-6 rounded-lg hover:bg-primary-600 hover:text-white transition-colors duration-300 flex items-center justify-center"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => window.open('https://www.zocdoc.com/practice/smile-zone-family-dental-20075', '_blank')}
                        >
                          <Calendar className="w-5 h-5 mr-2" />
                          Book Online
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