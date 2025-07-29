'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Calendar,
  FileText,
  Shield,
  AlertTriangle,
  X,
  CheckCircle
} from 'lucide-react'
import Navigation from '@/components/Navigation'

export default function FirstVisit() {
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
              First Visit
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What to expect during your first appointment and how to prepare for your visit.
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
                {/* Initial Appointment Info */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="card p-6"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Your Initial Appointment
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Your initial appointment usually will consist of an examination and review of your treatment options. Usually, treatment can be done or started the same day as the consultation. However, a complex medical history or treatment plan will require an evaluation and a second appointment to provide treatment on another day.
                  </p>
                </motion.div>

                {/* Information for Consultation */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="card p-6"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    What to Bring
                  </h2>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Any x-rays taken by a previous dentist, if applicable.</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">A list of medications you are presently taking.</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">If you have dental insurance, bring the necessary completed forms. This will save time and allow us to help you process any claims.</span>
                    </div>
                  </div>
                </motion.div>

                {/* X-Rays Section */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="card p-6"
                >
                  <div className="flex items-start">
                    <X className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        X-Rays
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        If your dentist or physician has taken x-rays, you may request that they forward them to our office. If there is not enough time, please pick them up and bring them to our office. If additional x-rays are necessary, they can be taken at our facility.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Important Note for Minors */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="card p-6 bg-red-50 border-l-4 border-red-500"
                >
                  <div className="flex items-start">
                    <AlertTriangle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-red-800 mb-2">
                        IMPORTANT
                      </h3>
                      <p className="text-red-700">
                        All patients under the age of 18 must be accompanied by a parent or guardian.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Medical Conditions Alert */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="card p-6 bg-blue-50 border-l-4 border-blue-500"
                >
                  <div className="flex items-start">
                    <Shield className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-blue-800 mb-2">
                        Medical Conditions & Medications
                      </h3>
                      <p className="text-blue-700 leading-relaxed">
                        Please alert the office if you have a medical condition that may be of concern prior to treatment (e.g., diabetes, high blood pressure, artificial heart valves and joints, rheumatic fever, etc.) or if you are currently taking any medication (e.g., heart medications, aspirin, anticoagulant therapy, etc.).
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Quick Actions */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="card p-6 bg-primary-50 border-l-4 border-primary-500"
                >
                  <h3 className="text-xl font-bold text-primary-800 mb-4">
                    Ready to Schedule?
                  </h3>
                  <div className="space-y-3">
                    <motion.button
                      className="w-full bg-primary-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-primary-700 transition-colors duration-300 flex items-center justify-center"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => window.open('https://www.patientviewer.com/?RSID=32343634&CID=30&C=1248', '_blank')}
                    >
                      <Calendar className="w-5 h-5 mr-2" />
                      Book Your Appointment
                    </motion.button>
                    <motion.button
                      className="w-full border-2 border-primary-600 text-primary-600 font-medium py-3 px-6 rounded-lg hover:bg-primary-600 hover:text-white transition-colors duration-300 flex items-center justify-center"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => window.open('https://patientviewer.com/WebFormsGWT/GWT/WebForms/WebForms.html?DOID=9952&RKID=2464&WSDID=75163&NFID=75164&NFID=121484', '_blank')}
                    >
                      <FileText className="w-5 h-5 mr-2" />
                      Access Forms
                    </motion.button>
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