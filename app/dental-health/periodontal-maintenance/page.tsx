'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { 
  Shield,
  Heart,
  AlertTriangle,
  CheckCircle,
  Star,
  BookOpen,
  Phone,
  Calendar,
  Activity,
  Zap
} from 'lucide-react'
import Navigation from '@/components/Navigation'

export default function PeriodontalMaintenance() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  // Handle anchor links on page load
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash
      if (hash) {
        // Wait for the page to fully load, then scroll to the anchor
        setTimeout(() => {
          const element = document.querySelector(hash) as HTMLElement
          if (element) {
            // Calculate position to account for fixed navigation
            const navHeight = 80; // Approximate height of fixed navigation
            const elementTop = element.offsetTop - navHeight - 20; // Extra 20px padding
            
            window.scrollTo({
              top: elementTop,
              behavior: 'smooth'
            })
          }
        }, 500)
      }
    }
  }, [])

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
              Periodontal Maintenance
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding gum disease, periodontal health, and the importance of professional maintenance for optimal oral health.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Overview */}
            <motion.div
              id="overview"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="card p-6"
            >
              <div className="flex items-start mb-4">
                <Shield className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Understanding Periodontal Disease
                </h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  Periodontal diseases are infections of the gums, which gradually destroy the support of your natural teeth. Dental plaque is the primary cause of periodontal disease, and daily brushing and flossing can prevent most conditions.
                </p>
                <p>
                  These diseases can be accelerated by various factors but are mainly caused by bacteria in dental plaque, which hardens into calculus (tartar) if not removed.
                </p>
              </div>
            </motion.div>

            {/* Why Oral Hygiene is Important */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="card p-6 bg-blue-50 border-l-4 border-blue-500"
            >
              <div className="flex items-start mb-4">
                <Activity className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <h2 className="text-2xl font-bold text-blue-800">
                  Why is Oral Hygiene So Important?
                </h2>
              </div>
              <div className="space-y-4 text-blue-700">
                <p>
                  Adults over 35 lose more teeth to gum diseases than cavities. Three out of four adults are affected at some time in their life. The best way to prevent cavities and periodontal disease is by good tooth brushing and flossing techniques, performed daily.
                </p>
                <p>
                  Periodontal disease and decay are both caused by bacterial plaque. Plaque is a colorless film, which sticks to your teeth at the gumline. Plaque constantly forms on your teeth. By thorough daily brushing and flossing you can remove these germs and help prevent periodontal disease.
                </p>
              </div>
            </motion.div>

            {/* Contributing Factors */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="card p-6 bg-red-50 border-l-4 border-red-500"
            >
              <div className="flex items-start mb-4">
                <AlertTriangle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                <h2 className="text-2xl font-bold text-red-800">
                  Other Important Factors Affecting Gum Health
                </h2>
              </div>
              <div className="text-red-700">
                <p className="mb-4">
                  While bacterial plaque is the primary cause, several other factors can accelerate periodontal disease:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Zap className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      Smoking
                    </li>
                    <li className="flex items-start">
                      <Zap className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      Diabetes
                    </li>
                    <li className="flex items-start">
                      <Zap className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      Stress
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Zap className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      Clenching and grinding teeth
                    </li>
                    <li className="flex items-start">
                      <Zap className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      Medication
                    </li>
                    <li className="flex items-start">
                      <Zap className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      Poor nutrition
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Periodontal Disease Progression */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="card p-6"
            >
              <div className="flex items-start mb-4">
                <Heart className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                <h2 className="text-2xl font-bold text-gray-900">
                  How Periodontal Disease Progresses
                </h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  Plaque bacteria irritate the gums, causing redness, swelling, and bleeding. This is the early stage of gum disease known as gingivitis.
                </p>
                <p>
                  Prolonged irritation leads to gums separating from teeth, forming pockets. These pockets collect more plaque and bacteria, leading to further infection.
                </p>
                <p>
                  Eventually, the supporting tissue and bone deteriorate, leading to tooth loss if left untreated. This advanced stage is called periodontitis.
                </p>
              </div>
            </motion.div>

            {/* Prevention */}
            <motion.div
              id="prevention"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="card p-6 bg-green-50 border-l-4 border-green-500"
            >
              <div className="flex items-start mb-4">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <h2 className="text-2xl font-bold text-green-800">
                  Preventing Gum Disease
                </h2>
              </div>
              <div className="space-y-4 text-green-700">
                <p>
                  Effective daily brushing and flossing and regular professional examinations and cleanings are the best prevention against periodontal disease.
                </p>
                <p>
                  Some people may still develop the disease despite diligent home care, requiring professional intervention. This is why regular dental visits are crucial for early detection and treatment.
                </p>
                
                <div className="space-y-3">
                  <h3 className="font-semibold text-green-800">Key Prevention Strategies:</h3>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      Brush twice daily with fluoride toothpaste
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      Floss daily to remove plaque between teeth
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      Regular professional cleanings (every 6 months)
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      Maintain a healthy diet low in sugar
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      Avoid smoking and excessive alcohol
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      Manage stress and underlying health conditions
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="card p-6 bg-primary-600 text-white text-center"
            >
              <h3 className="text-xl font-bold mb-4">
                Concerned About Gum Health?
              </h3>
              <p className="mb-6 opacity-90">
                Don't wait until it's too late. Schedule a periodontal evaluation and professional cleaning to maintain optimal gum health and prevent tooth loss.
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
                  Schedule Evaluation
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
} 