'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Shield,
  AlertTriangle,
  X,
  CheckCircle,
  Phone,
  Calendar
} from 'lucide-react'
import Navigation from '@/components/Navigation'

export default function HomeInstructions() {
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
              Home Instructions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Important guidelines for your post-treatment care to ensure a smooth recovery and lasting results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content - Compact Layout */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            
            <div className="grid lg:grid-cols-2 gap-8">
              
              {/* Left Column */}
              <div className="space-y-6">
                {/* After Cosmetic Reconstruction */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="card p-6"
                >
                  <div className="flex items-start mb-4">
                    <Shield className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0" />
                    <h2 className="text-xl font-bold text-gray-900">
                      After Cosmetic Reconstruction
                    </h2>
                  </div>
                  <div className="space-y-2 text-gray-700 text-sm">
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Adjustment Period:</strong> Expect several days for your brain to adjust to the new bite/teeth position. Call <a href="tel:510-505-0123" className="text-primary-600 hover:underline">510-505-0123</a> for adjustment appointments if high spots or problems persist.</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Sensitivity:</strong> Hot and cold sensitivity is normal. Use warm salt water rinses (1 tsp salt in a cup of warm water, 3 times/day) to reduce pain and swelling. Mild pain medication (Tylenol or Ibuprofen/Motrin every 3-4 hours) can ease discomfort.</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Speech & Salivation:</strong> Speech may be affected and increased salivation is normal initially; both should subside within about a week as your brain adapts.</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Oral Hygiene:</strong> Daily brushing and flossing are essential for new dental work and long-term success, along with regular cleaning appointments.</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Diet & Habits:</strong> Avoid hard foods (beer nuts, peanut brittle, ice, fingernails, pencils) and sticky candies. Minimize or avoid staining foods like coffee, red wine, tea, and berries. Smoking will stain new teeth.</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Protective Gear:</strong> Inform the office for a custom mouthguard if you play sports. Wear the provided night guard if you grind your teeth.</span>
                    </div>
                  </div>
                </motion.div>

                {/* After Crown and Bridge Appointments */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="card p-6"
                >
                  <div className="flex items-start mb-4">
                    <Shield className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0" />
                    <h2 className="text-xl font-bold text-gray-900">
                      After Crown and Bridge Appointments
                    </h2>
                  </div>
                  <div className="space-y-2 text-gray-700 text-sm">
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Procedure:</strong> Typically involves 2-3 appointments: preparation, molds, temporary crown/bridge placement, and final restoration.</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Numbness:</strong> Expect numbness in the tongue, lips, and roof of the mouth due to anesthesia. Avoid eating and hot beverages until numbness completely wears off.</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Temporary Crown Care:</strong> If a temporary crown comes off, call <a href="tel:510-505-0123" className="text-primary-600 hover:underline">510-505-0123</a> and bring it for re-cementation. It's crucial for preventing other teeth from shifting.</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Diet & Flossing:</strong> Avoid sticky foods (gum) and hard foods. Chew on the opposite side if possible. Brush normally, but floss carefully by pulling the floss out from the side of the temporary crown, not pulling up.</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Sensitivity:</strong> Temperature and pressure sensitivity is normal after appointments and should subside within a few weeks after final restoration. Mild pain medications can be used as directed.</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* After Tooth Extraction */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="card p-6"
                >
                  <div className="flex items-start mb-4">
                    <X className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0" />
                    <h2 className="text-xl font-bold text-gray-900">
                      After Tooth Extraction
                    </h2>
                  </div>
                  <div className="space-y-2 text-gray-700 text-sm">
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Blood Clot Formation:</strong> Essential for healing. Bite on a gauze pad for 30-45 minutes after the appointment. If bleeding persists, replace with a new gauze pad and bite firmly for another 30 minutes, repeating as needed.</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Protecting the Clot (72 hours):</strong> Do not disturb or dislodge the clot. Avoid vigorous rinsing, sucking on straws, smoking, drinking alcohol, or brushing teeth directly next to the extraction site for 72 hours.</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Physical Activity:</strong> Limit vigorous exercise for the first 24 hours to prevent increased blood pressure and bleeding.</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Pain & Swelling:</strong> Expect some pain and swelling. Apply an ice pack or unopened bag of frozen peas/corn to the area to minimize swelling. Take pain medications as prescribed. Swelling usually subsides after 48 hours.</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Medication & Diet:</strong> Use pain medication as directed; call <a href="tel:510-505-0123" className="text-primary-600 hover:underline">510-505-0123</a> if it's not working. If antibiotics are prescribed, take them for the full duration. Drink plenty of fluids and eat nutritious soft food on the day of extraction.</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Oral Hygiene:</strong> Resume your normal dental routine (brushing and flossing at least once a day) after 24 hours to speed healing and keep your mouth fresh and clean.</span>
                    </div>
                  </div>
                </motion.div>

                {/* After Composite Fillings */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="card p-6"
                >
                  <div className="flex items-start mb-4">
                    <CheckCircle className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0" />
                    <h2 className="text-xl font-bold text-gray-900">
                      After Composite Fillings (White Fillings)
                    </h2>
                  </div>
                  <div className="space-y-2 text-gray-700 text-sm">
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Numbness:</strong> Lips and tongue may be numb for several hours. Avoid chewing and hot beverages until numbness completely wears off, as it's easy to bite or burn your tongue/lip.</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Sensitivity:</strong> Hot, cold, and pressure sensitivity is normal. Injection sites may also be sore. Ibuprofen (Motrin), Tylenol, or aspirin (one tablet every 3-4 hours as needed) can alleviate tenderness. Contact <a href="tel:510-505-0123" className="text-primary-600 hover:underline">510-505-0123</a> if sensitivity persists beyond a few days or increases.</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span><strong>Chewing:</strong> You can chew with your composite fillings as soon as the anesthetic completely wears off, as they are fully set when you leave the office.</span>
                    </div>
                  </div>
                </motion.div>

                {/* Contact CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="card p-6 bg-primary-600 text-white text-center"
                >
                  <h3 className="text-xl font-bold mb-4">
                    Have Questions or Concerns?
                  </h3>
                  <p className="mb-6 opacity-90">
                    Don't hesitate to reach out if you have any concerns or need further assistance with your recovery.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.button
                      className="bg-white text-primary-600 font-medium py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center w-full sm:w-auto"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.open('tel:510-505-0123', '_self')}
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Call Us: (510) 505-0123
                    </motion.button>
                    <motion.button
                      className="border-2 border-white text-white font-medium py-3 px-8 rounded-lg hover:bg-white hover:text-primary-600 transition-colors duration-300 flex items-center justify-center w-full sm:w-auto"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.open('https://www.zocdoc.com/practice/smile-zone-family-dental-20075', '_blank')}
                    >
                      <Calendar className="w-5 h-5 mr-2" />
                      Book Online
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