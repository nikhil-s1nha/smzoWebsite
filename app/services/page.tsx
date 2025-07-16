'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Smile,
  Shield,
  Heart,
  Star,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Award
} from 'lucide-react'
import Navigation from '@/components/Navigation'

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const services = [
    {
      category: "Preventive Care",
      icon: Shield,
      color: "bg-blue-100 text-blue-600",
      description: "Maintain your oral health with our comprehensive preventive care services.",
      services: [
        {
          name: "Dental Cleanings",
          description: "Professional cleanings to remove plaque and tartar buildup",
          duration: "30-60 minutes",
          image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop"
        },
        {
          name: "Dental Exams",
          description: "Comprehensive oral health assessments and screenings",
          duration: "45 minutes",
          image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=300&fit=crop"
        },
        {
          name: "X-Rays & Imaging",
          description: "Digital imaging for accurate diagnosis and treatment planning",
          duration: "15-30 minutes",
          image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=300&fit=crop"
        },
        {
          name: "Fluoride Treatments",
          description: "Strengthen enamel and prevent tooth decay",
          duration: "15 minutes",
          image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop"
        }
      ]
    },
    {
      category: "Cosmetic Dentistry",
      icon: Smile,
      color: "bg-pink-100 text-pink-600",
      description: "Transform your smile with our advanced cosmetic dental procedures.",
      services: [
        {
          name: "Teeth Whitening",
          description: "Professional whitening for a brighter, more confident smile",
          duration: "1-2 hours",
          image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=300&fit=crop"
        },
        {
          name: "Porcelain Veneers",
          description: "Custom-made veneers to perfect your smile",
          duration: "2-3 visits",
          image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=300&fit=crop"
        },
        {
          name: "Dental Bonding",
          description: "Repair chips, cracks, and gaps with tooth-colored composite",
          duration: "30-60 minutes",
          image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop"
        },
        {
          name: "Smile Makeover",
          description: "Comprehensive treatment plan for your dream smile",
          duration: "Multiple visits",
          image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=300&fit=crop"
        }
      ]
    },
    {
      category: "Restorative Care",
      icon: Shield,
      color: "bg-green-100 text-green-600",
      description: "Restore damaged or missing teeth with modern restorative solutions.",
      services: [
        {
          name: "Dental Fillings",
          description: "Tooth-colored fillings to restore decayed teeth",
          duration: "30-60 minutes",
          image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=300&fit=crop"
        },
        {
          name: "Dental Crowns",
          description: "Custom crowns to protect and restore damaged teeth",
          duration: "2 visits",
          image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop"
        },
        {
          name: "Dental Bridges",
          description: "Replace missing teeth with fixed bridge solutions",
          duration: "2-3 visits",
          image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=300&fit=crop"
        },
        {
          name: "Dental Implants",
          description: "Permanent tooth replacement with titanium implants",
          duration: "3-6 months",
          image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=300&fit=crop"
        }
      ]
    },
    {
      category: "Orthodontics",
      icon: Smile,
      color: "bg-purple-100 text-purple-600",
      description: "Straighten your teeth and improve your bite with modern orthodontic solutions.",
      services: [
        {
          name: "Traditional Braces",
          description: "Metal braces for comprehensive teeth straightening",
          duration: "18-24 months",
          image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop"
        },
        {
          name: "Invisalign",
          description: "Clear aligners for discreet teeth straightening",
          duration: "12-18 months",
          image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=300&fit=crop"
        },
        {
          name: "Ceramic Braces",
          description: "Tooth-colored braces for a more aesthetic option",
          duration: "18-24 months",
          image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=300&fit=crop"
        },
        {
          name: "Retainers",
          description: "Maintain your straight smile after treatment",
          duration: "Lifetime wear",
          image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop"
        }
      ]
    },
    {
      category: "Emergency Care",
      icon: Heart,
      color: "bg-red-100 text-red-600",
      description: "Immediate care for dental emergencies and urgent dental needs.",
      services: [
        {
          name: "Toothache Relief",
          description: "Immediate pain relief and treatment for severe toothaches",
          duration: "Same day",
          image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=300&fit=crop"
        },
        {
          name: "Broken Tooth Repair",
          description: "Emergency repair for chipped, cracked, or broken teeth",
          duration: "Same day",
          image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop"
        },
        {
          name: "Knocked-Out Tooth",
          description: "Emergency treatment to save and reimplant knocked-out teeth",
          duration: "Immediate",
          image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=300&fit=crop"
        },
        {
          name: "Dental Abscess",
          description: "Treatment for infected teeth and gum abscesses",
          duration: "Same day",
          image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=300&fit=crop"
        }
      ]
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
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive dental care for every member of your family. From routine 
              checkups to advanced cosmetic procedures, we're here to keep your smile healthy and beautiful.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
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
              Comprehensive Dental Care
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We offer a full range of dental services to meet all your oral health needs.
            </p>
          </motion.div>

          <div className="space-y-16">
            {services.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                className="bg-gray-50 rounded-2xl p-8"
              >
                <div className="flex items-center mb-8">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center ${category.color} mr-6`}>
                    <category.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      {category.category}
                    </h3>
                    <p className="text-lg text-gray-600">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                      className="card overflow-hidden group"
                    >
                      <div className="relative overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.name}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                      </div>
                      <div className="p-6">
                        <h4 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
                          {service.name}
                        </h4>
                        <p className="text-gray-600 mb-4">
                          {service.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="w-4 h-4 mr-1" />
                            {service.duration}
                          </div>
                          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary-600 transition-colors duration-200" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-dental-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Experience the difference that advanced technology and compassionate care can make.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Care</h3>
              <p className="opacity-90">
                Experienced professionals with advanced training and certifications.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Advanced Technology</h3>
              <p className="opacity-90">
                State-of-the-art equipment for precise, comfortable treatments.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Comfortable Environment</h3>
              <p className="opacity-90">
                Relaxing atmosphere designed to reduce anxiety and stress.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Family Friendly</h3>
              <p className="opacity-90">
                Welcoming environment for patients of all ages and backgrounds.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Guarantee */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Service Guarantee
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We stand behind the quality of our work and your satisfaction. 
                If you're not completely satisfied with your treatment, we'll work 
                with you to make it right.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-dental-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Quality Assurance</h4>
                    <p className="text-gray-600">All treatments meet the highest standards of care</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-dental-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Satisfaction Guarantee</h4>
                    <p className="text-gray-600">We're committed to your complete satisfaction</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-dental-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Follow-up Care</h4>
                    <p className="text-gray-600">Comprehensive aftercare and support</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600&h=400&fit=crop"
                alt="Dental Care"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
                  <div className="text-sm text-gray-600">Satisfaction Guaranteed</div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Smile?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Schedule your consultation today and discover how our comprehensive 
              dental services can improve your oral health and confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="btn-primary text-lg px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Your Consultation
              </motion.button>
              <motion.button
                className="btn-secondary text-lg px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More About Treatment
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 