'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { 
  Shield,
  Heart,
  CheckCircle,
  Star,
  BookOpen,
  Phone,
  Calendar,
  Sparkles,
  Clock,
  Award
} from 'lucide-react'
import Navigation from '@/components/Navigation'

export default function Prophylaxis() {
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
              Prophylaxis (Teeth Cleaning)
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional dental cleanings to maintain optimal oral health, prevent gum disease, and keep your smile bright and healthy.
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
                  What is Prophylaxis?
                </h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  A dental prophylaxis is a cleaning treatment performed to thoroughly clean the teeth and gums. Prophylaxis is an important dental treatment for stopping the progression of gingivitis and periodontal disease.
                </p>
                <p>
                  Prophylaxis is an effective procedure in keeping the oral cavity in proper health and halting the progression of gum disease. This professional cleaning goes beyond what you can achieve with regular brushing and flossing at home.
                </p>
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              id="benefits"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="card p-6 bg-blue-50 border-l-4 border-blue-500"
            >
              <div className="flex items-start mb-4">
                <Award className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <h2 className="text-2xl font-bold text-blue-800">
                  Benefits of Professional Teeth Cleaning
                </h2>
              </div>
              <div className="space-y-6 text-blue-700">
                
                <div className="space-y-3">
                  <h3 className="font-semibold text-blue-800 flex items-center">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Plaque Removal
                  </h3>
                  <p>
                    Tartar and plaque buildup can lead to periodontal problems. Specialized dental equipment is necessary for removal, even with good home care. Professional cleaning removes hardened tartar that cannot be removed by brushing alone.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-blue-800 flex items-center">
                    <Star className="w-5 h-5 mr-2" />
                    A Healthier Looking Smile
                  </h3>
                  <p>
                    Prophylaxis effectively removes unsightly stains from teeth, improving aesthetics and giving you a brighter, more confident smile. This includes removing surface stains from coffee, tea, wine, and tobacco.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-blue-800 flex items-center">
                    <Heart className="w-5 h-5 mr-2" />
                    Fresher Breath
                  </h3>
                  <p>
                    Bad breath (halitosis) is often linked to advancing periodontal disease, rotting food particles, and gum infection. Routine cleaning improves breath and reduces infection, giving you fresher breath and better oral health.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* What to Expect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="card p-6"
            >
              <div className="flex items-start mb-4">
                <Clock className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                <h2 className="text-2xl font-bold text-gray-900">
                  What to Expect During Your Cleaning
                </h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900">The Cleaning Process:</h3>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      <strong>Examination:</strong> Your dentist will examine your teeth and gums for any signs of problems
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      <strong>Scaling:</strong> Removal of plaque and tartar from above and below the gumline
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      <strong>Polishing:</strong> Smoothing the tooth surfaces to prevent future plaque buildup
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      <strong>Flossing:</strong> Professional flossing to remove any remaining debris
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      <strong>Fluoride Treatment:</strong> Application of fluoride to strengthen teeth (optional)
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Frequency Recommendations */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="card p-6 bg-green-50 border-l-4 border-green-500"
            >
              <div className="flex items-start mb-4">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <h2 className="text-2xl font-bold text-green-800">
                  How Often Should You Get Cleanings?
                </h2>
              </div>
              <div className="space-y-4 text-green-700">
                <p>
                  Prophylaxis can be performed at our office. We recommend that prophylaxis be performed twice annually as a preventative measure, but should be completed every 3-4 months for periodontitis sufferers.
                </p>
                <p>
                  It should be noted that gum disease cannot be completely reversed, but prophylaxis is one of the tools Dr. Sinha can use to effectively halt its progression.
                </p>
                
                <div className="space-y-3">
                  <h3 className="font-semibold text-green-800">Recommended Schedule:</h3>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <strong>Every 6 months:</strong> For patients with good oral health
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <strong>Every 3-4 months:</strong> For patients with gum disease or periodontitis
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <strong>As recommended:</strong> Based on your individual oral health needs
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* After Care */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="card p-6"
            >
              <div className="flex items-start mb-4">
                <BookOpen className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                <h2 className="text-2xl font-bold text-gray-900">
                  After Your Professional Cleaning
                </h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  After your professional cleaning, it's important to maintain good oral hygiene habits to prolong the benefits and prevent future buildup.
                </p>
                
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900">Maintenance Tips:</h3>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      Continue brushing twice daily with fluoride toothpaste
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      Floss daily to remove plaque between teeth
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      Use an antiseptic mouthwash if recommended
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      Maintain a healthy diet low in sugary foods
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      Schedule your next cleaning appointment
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
                Ready for Your Professional Cleaning?
              </h3>
              <p className="mb-6 opacity-90">
                Schedule your next dental cleaning to maintain optimal oral health, prevent gum disease, and keep your smile bright and healthy.
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
                  onClick={() => window.open('https://www.patientviewer.com/?RSID=32343634&CID=30&C=1248', '_blank')}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Cleaning
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
} 