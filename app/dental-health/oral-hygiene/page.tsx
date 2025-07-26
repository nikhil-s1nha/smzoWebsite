'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { 
  Shield,
  Brush,
  Phone,
  AlertTriangle,
  CheckCircle,
  Star,
  Sparkles
} from 'lucide-react'
import Navigation from '@/components/Navigation'

export default function OralHygiene() {
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
              Oral Hygiene
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Essential guidelines for maintaining optimal oral health and preventing dental problems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Why is oral hygiene so important? */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="card p-6"
            >
              <div className="flex items-start mb-4">
                <Shield className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Why is oral hygiene so important?
                </h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  Adults over 35 lose more teeth to gum diseases (periodontal disease) than from cavities. Three out of four adults are affected at some time in their life. The best way to prevent cavities and periodontal disease is by good tooth brushing and flossing techniques, performed daily.
                </p>
                <p>
                  Periodontal disease and decay are both caused by bacterial plaque. Plaque is a colorless film, which sticks to your teeth at the gumline. Plaque constantly forms on your teeth. By thorough daily brushing and flossing you can remove these germs and help prevent periodontal disease.
                </p>
              </div>
            </motion.div>

            {/* How to Brush */}
            <motion.div
              id="how-to-brush"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="card p-6"
            >
              <div className="flex items-start mb-4">
                <Brush className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                <h2 className="text-2xl font-bold text-gray-900">
                  How to Brush
                </h2>
              </div>
              
              {/* Important Note */}
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
                <div className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-yellow-800">
                    <strong>Important:</strong> If you have any pain while brushing or have any questions about how to brush properly, please be sure to call the office at{' '}
                    <a href="tel:510-505-0123" className="font-semibold hover:underline">510-505-0123</a>.
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Dr. Sinha recommends</strong> using a soft to medium tooth brush. Position the brush at a 45 degree angle where your gums and teeth meet. Gently move the brush in a circular motion several times using small, gentle strokes brushing the outside surfaces of your teeth. Use light pressure while putting the bristles between the teeth, but not so much pressure that you feel any discomfort.
                </p>
                <p>
                  When you are done cleaning the outside surfaces of all your teeth, follow the same directions while cleaning the inside of the back teeth.
                </p>
                <p>
                  To clean the inside surfaces of the upper and lower front teeth, hold the brush vertically. Make several gentle back-and-forth strokes over each tooth. Don't forget to gently brush the surrounding gum tissue.
                </p>
                <p>
                  Next you will clean the biting surfaces of your teeth by using short, gentle strokes. Change the position of the brush as often as necessary to reach and clean all surfaces. Try to watch yourself in the mirror to make sure you clean each surface. After you are done, rinse vigorously to remove any plaque you might have loosened while brushing.
                </p>
              </div>
            </motion.div>

            {/* How to Floss */}
            <motion.div
              id="how-to-floss"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="card p-6"
            >
              <div className="flex items-start mb-4">
                <Sparkles className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                <h2 className="text-2xl font-bold text-gray-900">
                  How to Floss
                </h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  Periodontal disease usually appears between the teeth where your toothbrush cannot reach. Flossing is a very effective way to remove plaque from those surfaces. However, it is important to develop the proper technique. The following instructions will help you, but remember it takes time and practice.
                </p>
                <p>
                  Start with a piece of floss (waxed is easier) about 18" long. Lightly wrap most of the floss around the middle finger of one hand. Wrap the rest of the floss around the middle finger of the other hand.
                </p>
                <p>
                  To clean the upper teeth, hold the floss tightly between the thumb and forefinger of each hand. Gently insert the floss tightly between the teeth using a back-and-forth motion. Do not force the floss or try to snap it in to place. Bring the floss to the gumline then curve it into a C-shape against one tooth. Slide it into the space between the gum and the tooth until you feel light resistance. Move the floss up and down on the side of one tooth. Remember there are two tooth surfaces that need to be cleaned in each space. Continue to floss each side of all the upper teeth. Be careful not to cut the gum tissue between the teeth. As the floss becomes soiled, turn from one finger to the other to get a fresh section.
                </p>
                <p>
                  To clean between the bottom teeth, guide the floss using the forefingers of both hands. Do not forget the back side of the last tooth on both sides, upper and lower.
                </p>
                <p>
                  When you are done, rinse vigorously with water to remove plaque and food particles. Do not be alarmed if during the first week of flossing your gums bleed or are a little sore. If your gums hurt while flossing you could be doing it too hard or pinching the gum. As you floss daily and remove the plaque your gums will heal and the bleeding should stop.
                </p>
              </div>
            </motion.div>

            {/* Caring for Sensitive Teeth */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="card p-6 bg-blue-50 border-l-4 border-blue-500"
            >
              <div className="flex items-start mb-4">
                <AlertTriangle className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <h2 className="text-2xl font-bold text-blue-800">
                  Caring for Sensitive Teeth
                </h2>
              </div>
              <p className="text-blue-700">
                Sometimes after dental treatment, teeth are sensitive to hot and cold. This should not last long, but only if the mouth is kept clean. If the mouth is not kept clean the sensitivity will remain and could become more severe. If your teeth are especially sensitive consult with your doctor. They may recommend a medicated toothpaste or mouth rinse made especially for sensitive teeth.
              </p>
            </motion.div>

            {/* Choosing Oral Hygiene Products */}
            <motion.div
              id="choosing-products"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="card p-6"
            >
              <div className="flex items-start mb-4">
                <Star className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Choosing Oral Hygiene Products
                </h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  There are so many products on the market it can become confusing and choosing between all the products can be difficult. Here are some suggestions for choosing dental care products that will work for most patients.
                </p>
                <p>
                  Automatic and "high-tech" electronic toothbrushes are safe and effective for the majority of the patients. Oral irrigators (water spraying devices) will rinse your mouth thoroughly, but will not remove plaque. You need to brush and floss in conjunction with the irrigator. We see excellent results with electric toothbrushes called Rotadent and Interplak.
                </p>
                <p>
                  Some toothbrushes have a rubber tip on the handle, this is used to massage the gums after brushing. There are also tiny brushes (interproximal toothbrushes) that clean between your teeth. If these are used improperly you could injure the gums, so discuss proper use with your doctor.
                </p>
                <p>
                  Fluoride toothpastes and mouth rinses, if used in conjunction with brushing and flossing, can reduce tooth decay as much as 40%. Remember, these rinses are not recommended for children under six years of age. Tartar control toothpastes will reduce tartar above the gum line, but gum disease starts below the gumline so these products have not been proven to reduce the early stage of gum disease.
                </p>
                <p>
                  Anti-plaque rinses, approved by the American Dental Association, contain agents that may help bring early gum disease under control. Use these in conjunction with brushing and flossing.
                </p>
              </div>
            </motion.div>

            {/* Professional Cleaning */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="card p-6 bg-green-50 border-l-4 border-green-500"
            >
              <div className="flex items-start mb-4">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <h2 className="text-2xl font-bold text-green-800">
                  Professional Cleaning
                </h2>
              </div>
              <p className="text-green-700">
                Daily brushing and flossing will keep dental calculus to a minimum, but a professional cleaning will remove calculus in places your toothbrush and floss have missed. Your visit to our office is an important part of your program to prevent gum disease. Keep your teeth for your lifetime.
              </p>
            </motion.div>

            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="card p-6 bg-primary-600 text-white text-center"
            >
              <h3 className="text-xl font-bold mb-4">
                Questions About Oral Hygiene?
              </h3>
              <p className="mb-6 opacity-90">
                Our team is here to help you maintain optimal oral health and answer any questions about proper brushing and flossing techniques.
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
                  <Star className="w-5 h-5 mr-2" />
                  Schedule Cleaning
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
} 