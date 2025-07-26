'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { 
  Baby,
  Shield,
  Heart,
  Clock,
  CheckCircle,
  AlertTriangle,
  Star,
  BookOpen,
  Phone,
  Calendar
} from 'lucide-react'
import Navigation from '@/components/Navigation'

export default function AgeSpecificCare() {
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
              Age-Specific Care
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive dental care guidance for every stage of life, from your child's first visit to maintaining healthy teeth throughout adulthood.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Your Child's First Visit */}
            <motion.div
              id="first-visit"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="card p-6"
            >
              <div className="flex items-start mb-4">
                <Baby className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Your Child's First Visit
                </h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  The first "regular" dental visit should be just after your child's third birthday. The first dental visit is short and involves very little treatment. We may ask you to sit in the dental chair and hold your child during the examination. Or, you might wait in the reception area during part of the visit so that a relationship can be built between your child and your dentist.
                </p>
                <p>
                  During the first visit, we will gently examine your child's teeth and gums. X-rays may be taken to reveal decay and check on the progress of your child's permanent teeth under the gums. We may clean your child's teeth and apply topical fluoride to help protect the teeth against decay. We will make sure your child is receiving adequate fluoride at home. Most important of all, we will review with you how to clean and care for your child's teeth.
                </p>
              </div>
            </motion.div>

            {/* What Should I Tell My Child */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="card p-6 bg-blue-50 border-l-4 border-blue-500"
            >
              <div className="flex items-start mb-4">
                <BookOpen className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <h2 className="text-2xl font-bold text-blue-800">
                  What Should I Tell My Child About the First Dental Visit?
                </h2>
              </div>
              <div className="space-y-4 text-blue-700">
                <p>
                  We are asked this question many times. We suggest you prepare your child the same way you would before their first haircut or trip to the shoe store. Your child's reaction to his first visit to the dentist may surprise you.
                </p>
                
                <div className="space-y-3">
                  <h3 className="font-semibold text-blue-800">"First Visit" Tips:</h3>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      Take your child for a "preview" of the office
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      Read books with them about going to the dentist
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      Review with them what the dentist will do during the visit
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      Speak positively about your own dental experiences
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-blue-800">During the first visit, the dentist will:</h3>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      Examine the mouth, teeth, and gums
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      Evaluate adverse habits like thumb sucking
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      Check to see if you need fluoride
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      Teach you about cleaning your teeth and gums
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      Suggest a schedule for regular dental visits
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Preventative Care */}
            <motion.div
              id="preventative-care"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="card p-6 bg-green-50 border-l-4 border-green-500"
            >
              <div className="flex items-start mb-4">
                <Shield className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <h2 className="text-2xl font-bold text-green-800">
                  What About Preventative Care?
                </h2>
              </div>
              <div className="text-green-700">
                <p>
                  Tooth decay and children no longer need to be linked. With the help of <strong className="text-green-800">dental sealant</strong> technology, we can protect the chewing surfaces of the back teeth, establishing a foundation for lifelong oral health.
                </p>
              </div>
            </motion.div>

            {/* Cavity Prevention */}
            <motion.div
              id="cavity-prevention"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="card p-6"
            >
              <div className="flex items-start mb-4">
                <Heart className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Cavity Prevention
                </h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  Cavities are often caused by a diet high in sugary foods and a lack of brushing. Limiting sugar intake and brushing regularly, of course, can help. The longer it takes your child to chew their food, the longer the residue stays on their teeth, and the greater the chances of getting cavities.
                </p>
                <p>
                  Every time someone eats, an acid reaction occurs inside their mouth as the bacteria digests the sugars. This reaction lasts approximately 20 minutes. During this time the acid environment can destroy the tooth structure, eventually leading to cavities.
                </p>
                <p>
                  Consistency of a person's saliva also makes a difference; thinner saliva breaks up and washes away food more quickly. When a person eats diets high in carbohydrates and sugars they tend to have thicker saliva, which in turn allows more of the acid-producing bacteria that can cause cavities.
                </p>
                
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900">Tips for Cavity Prevention:</h3>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      Limit frequency of meals and snacks
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      Encourage brushing, flossing, and rinsing
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      Watch what your child drinks
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      Avoid sticky foods
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      Make treats part of meals
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      Choose nutritious snacks
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Baby Teeth Information */}
            <motion.div
              id="baby-teeth"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="card p-6 bg-purple-50 border-l-4 border-purple-500"
            >
              <div className="flex items-start mb-4">
                <Star className="w-6 h-6 text-purple-600 mr-3 mt-1 flex-shrink-0" />
                <h2 className="text-2xl font-bold text-purple-800">
                  Information About Baby Teeth
                </h2>
              </div>
              <div className="space-y-4 text-purple-700">
                <div>
                  <h3 className="font-semibold text-purple-800 mb-2">Eruption Timeline:</h3>
                  <p>
                    The two bottom front teeth (lower central incisors) erupt first, usually around 6-8 months, followed by the four upper front teeth (upper central and lateral incisors). The others follow periodically until the child has all 20 teeth around 2 1/2 years old.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-purple-800 mb-2">Permanent Teeth:</h3>
                  <p>
                    The first permanent teeth begin to erupt between ages 5 and 6, replacing some of the baby teeth. The timing can vary among children.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-purple-800 mb-2">Importance of Baby Teeth:</h3>
                  <p>
                    Baby teeth are important not only for holding space for permanent teeth, but also for chewing, biting, speech, and appearance. For this reason it is important to maintain a healthy diet and daily hygiene.
                  </p>
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
                Ready for Your Child's First Visit?
              </h3>
              <p className="mb-6 opacity-90">
                Schedule your child's first dental visit and start them on the path to lifelong oral health. Our gentle approach ensures a positive experience for your little one.
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
                  Schedule First Visit
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
} 