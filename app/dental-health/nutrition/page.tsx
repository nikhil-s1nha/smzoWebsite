'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { 
  Heart,
  Shield,
  AlertTriangle,
  CheckCircle,
  Star,
  BookOpen,
  Phone,
  Calendar,
  Droplets,
  Apple,
  Coffee,
  Carrot,
  Milk,
  Leaf
} from 'lucide-react'
import Navigation from '@/components/Navigation'

export default function Nutrition() {
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
              Nutrition & Oral Health
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how your diet directly impacts your dental health. Learn which foods strengthen your teeth and which ones to avoid for optimal oral wellness.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Foods That Strengthen Teeth */}
            <motion.div
              id="strengthen-teeth"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="card p-6"
            >
              <div className="flex items-start mb-4">
                <Apple className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Foods That Strengthen Teeth
                </h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  Your diet plays a crucial role in maintaining strong, healthy teeth. Certain foods provide essential nutrients that help build and protect your tooth enamel, strengthen your jawbone, and promote overall oral health.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                    <h3 className="font-semibold text-green-800 mb-2 flex items-center">
                      <Milk className="w-5 h-5 mr-2" />
                      Dairy Products
                    </h3>
                    <p className="text-green-700">
                      Milk, cheese, and yogurt are excellent sources of calcium and phosphorus, which are essential for strong teeth and bones. They also contain casein, a protein that helps strengthen tooth enamel.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h3 className="font-semibold text-blue-800 mb-2 flex items-center">
                      <Carrot className="w-5 h-5 mr-2" />
                      Crunchy Fruits and Vegetables
                    </h3>
                    <p className="text-blue-700">
                      Apples, carrots, celery, and other crunchy produce help clean your teeth naturally by stimulating saliva production and scrubbing away plaque. They're also rich in vitamins and minerals.
                    </p>
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                    <h3 className="font-semibold text-yellow-800 mb-2 flex items-center">
                      <Leaf className="w-5 h-5 mr-2" />
                      Leafy Greens
                    </h3>
                    <p className="text-yellow-700">
                      Spinach, kale, and other leafy greens are packed with calcium, folic acid, and other nutrients that promote healthy gums and strong teeth.
                    </p>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                    <h3 className="font-semibold text-purple-800 mb-2 flex items-center">
                      <Star className="w-5 h-5 mr-2" />
                      Nuts and Seeds
                    </h3>
                    <p className="text-purple-700">
                      Almonds, walnuts, and sesame seeds provide calcium, phosphorus, and healthy fats that support tooth strength and gum health.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Foods to Avoid */}
            <motion.div
              id="avoid-foods"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="card p-6 bg-red-50 border-l-4 border-red-500"
            >
              <div className="flex items-start mb-4">
                <AlertTriangle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                <h2 className="text-2xl font-bold text-red-800">
                  Foods to Avoid for Better Oral Health
                </h2>
              </div>
              <div className="space-y-4 text-red-700">
                <p>
                  Certain foods and beverages can significantly damage your teeth and gums. Limiting or avoiding these items can help prevent cavities, gum disease, and enamel erosion.
                </p>
                
                <div className="space-y-3">
                  <h3 className="font-semibold text-red-800">Foods and Beverages to Limit:</h3>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <AlertTriangle className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <strong>Sugary candies and sweets:</strong> Hard candies, gummies, and chocolate that stick to teeth
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <strong>Carbonated soft drinks:</strong> High in sugar and acid that erode enamel
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <strong>Sticky foods:</strong> Dried fruits, caramel, and chewy candies that cling to teeth
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <strong>Acidic foods:</strong> Citrus fruits, tomatoes, and vinegar-based foods that can erode enamel
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <strong>Starchy foods:</strong> Chips, crackers, and bread that break down into sugars
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <strong>Alcohol:</strong> Can dry out the mouth and reduce saliva production
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Impact of Sugar */}
            <motion.div
              id="sugar-impact"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="card p-6"
            >
              <div className="flex items-start mb-4">
                <Coffee className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                <h2 className="text-2xl font-bold text-gray-900">
                  The Impact of Sugar on Teeth
                </h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  Sugar is one of the biggest enemies of oral health. Understanding how sugar affects your teeth can help you make better dietary choices and protect your dental health.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                    <h3 className="font-semibold text-orange-800 mb-2">How Sugar Causes Cavities</h3>
                    <p className="text-orange-700">
                      When you consume sugar, bacteria in your mouth feed on it and produce acids. These acids attack your tooth enamel, leading to cavities and tooth decay over time.
                    </p>
                  </div>

                  <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-500">
                    <h3 className="font-semibold text-pink-800 mb-2">The 20-Minute Acid Attack</h3>
                    <p className="text-pink-700">
                      Every time you eat sugar, an acid reaction occurs in your mouth that lasts approximately 20 minutes. During this time, the acid environment can destroy tooth structure and lead to cavities.
                    </p>
                  </div>

                  <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                    <h3 className="font-semibold text-indigo-800 mb-2">Hidden Sugars</h3>
                    <p className="text-indigo-700">
                      Many processed foods contain hidden sugars. Read labels carefully and watch out for ingredients like high fructose corn syrup, sucrose, glucose, and other sugar derivatives.
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900">Tips for Reducing Sugar Intake:</h3>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      Choose water or unsweetened beverages instead of sodas
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      Eat fresh fruits instead of sugary snacks
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      Limit desserts and sweets to special occasions
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      Brush your teeth after consuming sugary foods
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Hydration */}
            <motion.div
              id="hydration"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="card p-6 bg-blue-50 border-l-4 border-blue-500"
            >
              <div className="flex items-start mb-4">
                <Droplets className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <h2 className="text-2xl font-bold text-blue-800">
                  Hydration and Oral Health
                </h2>
              </div>
              <div className="space-y-4 text-blue-700">
                <p>
                  Staying properly hydrated is essential for maintaining good oral health. Water plays a crucial role in keeping your mouth healthy and preventing dental problems.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-2">The Role of Saliva</h3>
                    <p className="text-blue-700">
                      Saliva helps wash away food particles, neutralize acids, and remineralize teeth. Proper hydration ensures adequate saliva production, which is your mouth's natural defense system.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-2">Water vs. Other Beverages</h3>
                    <p className="text-blue-700">
                      Water is the best choice for hydration and oral health. Unlike sugary drinks, water doesn't contribute to tooth decay and helps rinse away food particles and bacteria.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-2">Fluoridated Water Benefits</h3>
                    <p className="text-blue-700">
                      Drinking fluoridated water helps strengthen tooth enamel and prevent cavities. Many municipal water supplies contain fluoride, providing ongoing protection for your teeth.
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-blue-800">Hydration Tips for Oral Health:</h3>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      Drink 8-10 glasses of water daily
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      Rinse your mouth with water after meals
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      Choose water over sugary or acidic beverages
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      Stay hydrated during exercise and hot weather
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="card p-6 bg-primary-600 text-white text-center"
            >
              <h3 className="text-xl font-bold mb-4">
                Need Personalized Nutrition Advice?
              </h3>
              <p className="mb-6 opacity-90">
                Dr. Sinha can provide personalized dietary recommendations based on your specific oral health needs and help you develop a nutrition plan that supports your dental wellness.
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
                  Schedule Consultation
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
} 