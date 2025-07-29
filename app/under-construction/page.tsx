'use client'

import { motion } from 'framer-motion'
import { Wrench, ArrowLeft } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Link from 'next/link'

export default function UnderConstruction() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-50 to-dental-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <Wrench className="w-12 h-12 text-primary-600" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Under Construction
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
              We're working hard to bring you detailed information about our services. 
              This page will be available soon with comprehensive details about our dental care offerings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <motion.button
                  className="btn-primary px-8 py-3 flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Back to Home
                </motion.button>
              </Link>
              <Link href="/contact#send-message">
                <motion.button
                  className="btn-secondary px-8 py-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What's Coming Soon?
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="card p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Service Details
                  </h3>
                  <p className="text-gray-600">
                    Comprehensive information about all our dental services and procedures.
                  </p>
                </div>
                <div className="card p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Treatment Options
                  </h3>
                  <p className="text-gray-600">
                    Detailed explanations of different treatment approaches and options.
                  </p>
                </div>
                <div className="card p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Pricing Information
                  </h3>
                  <p className="text-gray-600">
                    Transparent pricing and insurance information for our services.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Need Information Now?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              While we're building this page, feel free to contact us directly for 
              information about our services or to schedule an appointment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="btn-primary px-8 py-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://www.patientviewer.com/?RSID=32343634&CID=30&C=1248', '_blank')}
              >
                Book Appointment
              </motion.button>
              <Link href="/contact#send-message">
                <motion.button
                  className="btn-secondary px-8 py-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 