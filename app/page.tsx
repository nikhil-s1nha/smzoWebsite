'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Heart, 
  Shield, 
  Users, 
  Award, 
  ArrowRight, 
  Star,
  CheckCircle,
  Phone,
  Calendar,
  MapPin
} from 'lucide-react'
import Navigation from '@/components/Navigation'

export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const features = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "Your comfort and health are our top priorities"
    },
    {
      icon: Shield,
      title: "Advanced Technology",
      description: "State-of-the-art equipment for precise treatments"
    },
    {
      icon: Users,
      title: "Experienced Team",
      description: "Skilled professionals with years of expertise"
    },
    {
      icon: Award,
      title: "Excellence Awarded",
      description: "Recognized for outstanding dental care quality"
    }
  ]

  const services = [
    {
      title: "Preventive Care",
      description: "Regular checkups and cleanings to maintain oral health",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop"
    },
    {
      title: "Cosmetic Dentistry",
      description: "Transform your smile with modern cosmetic procedures",
      image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=300&fit=crop"
    },
    {
      title: "Restorative Care",
      description: "Comprehensive solutions for damaged or missing teeth",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=300&fit=crop"
    }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "The best dental experience I've ever had. The staff is incredibly professional and caring."
    },
    {
      name: "Michael Chen",
      rating: 5,
      text: "Dr. Smith and the team made me feel comfortable throughout my entire treatment."
    },
    {
      name: "Emily Rodriguez",
      rating: 5,
      text: "Outstanding care and attention to detail. I highly recommend SMZO Dental!"
    }
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-dental-50"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Your Smile,
              <span className="text-primary-600 block">Our Passion</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Experience exceptional dental care in a modern, comfortable environment. 
              We're committed to your oral health and beautiful smile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="btn-primary text-lg px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Your Appointment
              </motion.button>
              <motion.button
                className="btn-secondary text-lg px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn About Us
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Floating elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-primary-200 rounded-full opacity-20"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-16 h-16 bg-dental-200 rounded-full opacity-20"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </section>

      {/* Dentist & Why Choose Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Dentist Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <div className="mb-8">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop"
                  alt="Dr. Sarah Johnson"
                  className="w-64 h-64 rounded-full mx-auto lg:mx-0 object-cover shadow-xl"
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Meet Dr. Sarah Johnson
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Dr. Johnson grad=uated from the University of Dental Medicine with honors 
                and has been practicing dentistry for over 15 years. She specializes in 
                cosmetic and restorative dentistry, committed to providing personalized care 
                in a comfortable environment.
              </p>
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More About Dr. Johnson
              </motion.button>
            </motion.div>

            {/* Why Choose Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose SMZO Dental?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We combine advanced technology with compassionate care to deliver 
                exceptional dental experiences for you and your family.
              </p>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive dental care for every member of your family
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <motion.button
                    className="text-primary-600 font-medium flex items-center group-hover:text-primary-700 transition-colors duration-200"
                    whileHover={{ x: 5 }}
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Patients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied patients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card p-6"
              >
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-gray-900">
                  {testimonial.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 dental-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Ready to Transform Your Smile?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Schedule your consultation today and take the first step towards 
              a healthier, more beautiful smile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-white text-dental-600 font-medium py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </motion.button>
              <motion.button
                className="border-2 border-white text-white font-medium py-3 px-8 rounded-lg hover:bg-white hover:text-dental-600 transition-colors duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Online
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-dental-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">S</span>
                </div>
                <div>
                  <h3 className="font-bold">SMZO Dental</h3>
                  <p className="text-sm text-gray-400">Family Dentistry</p>
                </div>
              </div>
              <p className="text-gray-400">
                Providing exceptional dental care with a focus on patient comfort and satisfaction.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="/services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="/patient-info" className="hover:text-white transition-colors">Patient Info</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/services" className="hover:text-white transition-colors">Preventive Care</a></li>
                <li><a href="/services" className="hover:text-white transition-colors">Cosmetic Dentistry</a></li>
                <li><a href="/services" className="hover:text-white transition-colors">Restorative Care</a></li>
                <li><a href="/services" className="hover:text-white transition-colors">Emergency Care</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>123 Dental Street, City, State 12345</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Mon-Fri: 8AM-6PM</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SMZO Dental Clinic. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 