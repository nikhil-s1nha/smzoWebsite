'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Tooth,
  Shield,
  Heart,
  Clock,
  CheckCircle,
  AlertTriangle,
  BookOpen,
  Video,
  Download,
  ArrowRight
} from 'lucide-react'
import Navigation from '@/components/Navigation'

export default function DentalHealth() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const healthTopics = [
    {
      icon: Tooth,
      title: "Oral Hygiene Basics",
      description: "Learn the fundamentals of proper brushing and flossing techniques",
      color: "bg-blue-100 text-blue-600",
      articles: [
        "How to Brush Your Teeth Properly",
        "The Importance of Flossing",
        "Choosing the Right Toothbrush",
        "Mouthwash: When and How to Use It"
      ]
    },
    {
      icon: Shield,
      title: "Preventive Care",
      description: "Tips and strategies to prevent common dental problems",
      color: "bg-green-100 text-green-600",
      articles: [
        "Preventing Cavities",
        "Gum Disease Prevention",
        "Dental Sealants for Children",
        "Fluoride and Your Oral Health"
      ]
    },
    {
      icon: Heart,
      title: "Nutrition & Oral Health",
      description: "How your diet affects your teeth and gums",
      color: "bg-pink-100 text-pink-600",
      articles: [
        "Foods That Strengthen Teeth",
        "Foods to Avoid for Better Oral Health",
        "The Impact of Sugar on Teeth",
        "Hydration and Oral Health"
      ]
    },
    {
      icon: Clock,
      title: "Age-Specific Care",
      description: "Dental care tips for different life stages",
      color: "bg-purple-100 text-purple-600",
      articles: [
        "Dental Care for Children",
        "Teen Dental Health",
        "Adult Oral Care",
        "Senior Dental Health"
      ]
    }
  ]

  const emergencyInfo = [
    {
      title: "Toothache",
      description: "Rinse with warm water, use dental floss to remove food, and take over-the-counter pain reliever.",
      urgent: false
    },
    {
      title: "Broken Tooth",
      description: "Rinse mouth with warm water, apply cold compress, and call us immediately.",
      urgent: true
    },
    {
      title: "Knocked-Out Tooth",
      description: "Hold by the crown, rinse gently, try to reinsert, or place in milk and call immediately.",
      urgent: true
    },
    {
      title: "Bleeding Gums",
      description: "Rinse with warm salt water, apply gentle pressure, and call if bleeding persists.",
      urgent: false
    }
  ]

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
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Dental Health Education
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your guide to maintaining excellent oral health. Learn about proper dental care, 
              prevention strategies, and how to keep your smile healthy for life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Health Topics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Educational Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive information to help you maintain optimal oral health.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {healthTopics.map((topic, index) => (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${topic.color} mr-4`}>
                    <topic.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{topic.title}</h3>
                    <p className="text-gray-600">{topic.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Featured Articles:</h4>
                  <ul className="space-y-2">
                    {topic.articles.map((article, idx) => (
                      <li key={idx} className="flex items-center text-gray-600 hover:text-primary-600 transition-colors duration-200 cursor-pointer">
                        <BookOpen className="w-4 h-4 mr-2" />
                        {article}
                        <ArrowRight className="w-4 h-4 ml-auto" />
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Care Routine */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Daily Dental Care Routine
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Follow these simple steps to maintain excellent oral health every day.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card p-6 text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Brush Twice Daily</h3>
              <p className="text-gray-600">
                Use fluoride toothpaste and brush for at least 2 minutes, morning and evening.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card p-6 text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Floss Daily</h3>
              <p className="text-gray-600">
                Clean between teeth to remove plaque and food particles that brushing misses.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="card p-6 text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Use Mouthwash</h3>
              <p className="text-gray-600">
                Rinse with antimicrobial mouthwash to kill bacteria and freshen breath.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="card p-6 text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Regular Checkups</h3>
              <p className="text-gray-600">
                Visit your dentist every 6 months for professional cleaning and examination.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Dental Emergency Guide
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Know what to do in case of a dental emergency. When in doubt, call us immediately.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {emergencyInfo.map((emergency, index) => (
              <motion.div
                key={emergency.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`card p-6 border-l-4 ${emergency.urgent ? 'border-red-500' : 'border-yellow-500'}`}
              >
                <div className="flex items-start">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${emergency.urgent ? 'bg-red-100' : 'bg-yellow-100'}`}>
                    {emergency.urgent ? (
                      <AlertTriangle className="w-6 h-6 text-red-600" />
                    ) : (
                      <CheckCircle className="w-6 h-6 text-yellow-600" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {emergency.title}
                      {emergency.urgent && (
                        <span className="ml-2 text-sm bg-red-100 text-red-600 px-2 py-1 rounded">URGENT</span>
                      )}
                    </h3>
                    <p className="text-gray-600">
                      {emergency.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Videos */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Educational Videos
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Watch our informative videos to learn more about dental health and procedures.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card overflow-hidden group"
            >
              <div className="relative">
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <Video className="w-16 h-16 text-gray-400" />
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Proper Brushing Technique
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn the correct way to brush your teeth for maximum effectiveness.
                </p>
                <button className="text-primary-600 font-medium flex items-center group-hover:text-primary-700 transition-colors duration-200">
                  Watch Video <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card overflow-hidden group"
            >
              <div className="relative">
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <Video className="w-16 h-16 text-gray-400" />
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Flossing Made Easy
                </h3>
                <p className="text-gray-600 mb-4">
                  Master the art of flossing with our step-by-step guide.
                </p>
                <button className="text-primary-600 font-medium flex items-center group-hover:text-primary-700 transition-colors duration-200">
                  Watch Video <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="card overflow-hidden group"
            >
              <div className="relative">
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <Video className="w-16 h-16 text-gray-400" />
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Nutrition for Healthy Teeth
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover which foods promote strong teeth and healthy gums.
                </p>
                <button className="text-primary-600 font-medium flex items-center group-hover:text-primary-700 transition-colors duration-200">
                  Watch Video <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Downloadable Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Access helpful guides and checklists to support your oral health journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card p-6 text-center group"
            >
              <Download className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Oral Hygiene Checklist
              </h3>
              <p className="text-gray-600 mb-4">
                Daily checklist to ensure complete oral care.
              </p>
              <button className="btn-primary w-full">
                Download PDF
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card p-6 text-center group"
            >
              <Download className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Emergency Contact Guide
              </h3>
              <p className="text-gray-600 mb-4">
                Quick reference for dental emergencies.
              </p>
              <button className="btn-primary w-full">
                Download PDF
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="card p-6 text-center group"
            >
              <Download className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Nutrition Guide
              </h3>
              <p className="text-gray-600 mb-4">
                Foods that promote dental health.
              </p>
              <button className="btn-primary w-full">
                Download PDF
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="card p-6 text-center group"
            >
              <Download className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Appointment Prep Guide
              </h3>
              <p className="text-gray-600 mb-4">
                How to prepare for your dental visit.
              </p>
              <button className="btn-primary w-full">
                Download PDF
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-dental-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Questions About Your Oral Health?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Our team is here to help you maintain excellent oral health. 
              Contact us with any questions or to schedule your next appointment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-white text-primary-600 font-medium py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Appointment
              </motion.button>
              <motion.button
                className="border-2 border-white text-white font-medium py-3 px-8 rounded-lg hover:bg-white hover:text-primary-600 transition-colors duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 