'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  CreditCard,
  Phone,
  AlertTriangle,
  Shield,
  FileText,
  DollarSign,
  Calendar
} from 'lucide-react'
import Navigation from '@/components/Navigation'

export default function FinancialPolicy() {
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
              Financial Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding our payment methods, insurance policies, and billing procedures.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content - Two Column Layout */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            
            {/* Patient Billing Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Patient Billing
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              
              {/* Left Column */}
              <div className="space-y-6">
                {/* Payment Methods */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="card p-6"
                >
                  <div className="flex items-start">
                    <CreditCard className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        Payment Methods
                      </h3>
                      <p className="text-gray-700 mb-4">
                        We accept <strong>Visa</strong>, <strong>MasterCard</strong>, and <strong>Discover</strong>.
                      </p>
                      <p className="text-gray-700">
                        Payment is due at the time service is rendered, unless prior arrangements have been made.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Insurance Information */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="card p-6"
                >
                  <div className="flex items-start">
                    <Shield className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        Insurance Information
                      </h3>
                      <div className="space-y-3">
                        <p className="text-gray-700">
                          We are in-network with most insurance carriers/companies to help minimize out-of-pocket costs and discount patient co-pays.
                        </p>
                        <p className="text-gray-700">
                          We accept most <strong>PPO plans</strong> and <strong>Denti-Cal</strong>.
                        </p>
                        <p className="text-gray-700">
                          Most insurance companies are expected to respond within <strong>four to six weeks</strong>.
                        </p>
                        <p className="text-gray-700">
                          Any remaining balance after insurance has paid is the patient's responsibility.
                        </p>
                        <p className="text-gray-700">
                          Prompt remittance is appreciated.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Payment Plans */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="card p-6 bg-green-50 border-l-4 border-green-500"
                >
                  <div className="flex items-start">
                    <Calendar className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-green-800 mb-3">
                        Payment Plans Available
                      </h3>
                      <p className="text-green-700">
                        Monthly payment plans can be arranged, but this must be done <strong>prior</strong> to the actual procedure.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Patient Responsibility */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="card p-6 bg-red-50 border-l-4 border-red-500"
                >
                  <div className="flex items-start">
                    <AlertTriangle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-red-800 mb-3">
                        Important Notice
                      </h3>
                      <p className="text-red-700 font-semibold">
                        Please remember you are fully responsible for all fees charged by this office regardless of your insurance coverage.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Contact Information */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="card p-6 bg-blue-50 border-l-4 border-blue-500"
                >
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-blue-800 mb-2">
                        Questions About Your Account?
                      </h3>
                      <p className="text-blue-700 mb-3">
                        For any questions regarding an account, please contact the office at{' '}
                        <a href="tel:510-505-0123" className="font-semibold hover:text-blue-800 transition-colors">
                          510-505-0123
                        </a>
                      </p>
                      <p className="text-blue-700">
                        A simple phone call can often resolve misunderstandings.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Contact CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="card p-6 bg-primary-50 border-l-4 border-primary-500"
                >
                  <div className="flex items-start">
                    <DollarSign className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-primary-800 mb-4">
                        Have Questions About Billing?
                      </h3>
                      <p className="text-primary-700 mb-4">
                        Our team is here to help you understand your financial responsibilities and insurance coverage.
                      </p>
                      <div className="space-y-3">
                        <motion.button
                          className="w-full bg-primary-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-primary-700 transition-colors duration-300 flex items-center justify-center"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => window.open('tel:510-505-0123', '_self')}
                        >
                          <Phone className="w-5 h-5 mr-2" />
                          Call for Questions
                        </motion.button>
                                            <motion.button
                      className="w-full border-2 border-primary-600 text-primary-600 font-medium py-3 px-6 rounded-lg hover:bg-primary-600 hover:text-white transition-colors duration-300 flex items-center justify-center"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => window.open('https://patientviewer.com/WebFormsGWT/GWT/WebForms/WebForms.html?DOID=9952&RKID=2464&WSDID=75163&NFID=75164&NFID=121484', '_blank')}
                    >
                      <FileText className="w-5 h-5 mr-2" />
                      Download Forms
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