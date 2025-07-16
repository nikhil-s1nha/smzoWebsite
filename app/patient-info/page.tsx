'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Star,
  Calendar,
  FileText,
  CreditCard,
  Shield,
  Download,
  Phone,
  Clock,
  MapPin,
  ArrowRight,
  CheckCircle,
  Users,
  Heart
} from 'lucide-react'
import Navigation from '@/components/Navigation'
import Link from 'next/link'

export default function PatientInfo() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const patientServices = [
    {
      icon: Clock,
      title: "Office Hours",
      description: "Monday - Friday: 8:00 AM - 6:00 PM | Saturday: 9:00 AM - 3:00 PM",
      href: "#",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Phone,
      title: "Contact Information",
      description: "Phone: (555) 123-4567 | Emergency: (555) 123-4568",
      href: "#",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: MapPin,
      title: "Location",
      description: "123 Dental Street, City, State 12345 | Free parking available",
      href: "#",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Star,
      title: "Patient Reviews",
      description: "Read what our patients say about their experience",
      href: "/patient-info/reviews",
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      icon: Calendar,
      title: "First Visit",
      description: "What to expect during your first appointment",
      href: "/patient-info/first-visit",
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      icon: FileText,
      title: "Patient Registration",
      description: "Complete your registration forms online",
      href: "/patient-info/registration",
      color: "bg-teal-100 text-teal-600"
    },
    {
      icon: Clock,
      title: "Scheduling",
      description: "Book appointments and manage your schedule",
      href: "/patient-info/scheduling",
      color: "bg-pink-100 text-pink-600"
    },
    {
      icon: CreditCard,
      title: "Financial Policy",
      description: "Understanding our payment and insurance policies",
      href: "/patient-info/financial-policy",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: Shield,
      title: "Insurance",
      description: "Accepted insurance plans and coverage information",
      href: "/patient-info/insurance",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: Heart,
      title: "Home Instructions",
      description: "Post-treatment care and home care guidelines",
      href: "/patient-info/home-instructions",
      color: "bg-cyan-100 text-cyan-600"
    },
    {
      icon: Download,
      title: "Forms",
      description: "Download and complete patient forms",
      href: "/patient-info/forms",
      color: "bg-gray-100 text-gray-600"
    },
    {
      icon: CreditCard,
      title: "Care Credit",
      description: "Financing options for your dental care",
      href: "/patient-info/care-credit",
      color: "bg-emerald-100 text-emerald-600"
    }
  ]

  const quickInfo = [
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Monday - Friday: 8:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 3:00 PM",
        "Sunday: Closed"
      ]
    },
    {
      icon: Phone,
      title: "Contact Information",
      details: [
        "Phone: (555) 123-4567",
        "Emergency: (555) 123-4568",
        "Email: info@smzodental.com"
      ]
    },
    {
      icon: MapPin,
      title: "Location",
      details: [
        "123 Dental Street",
        "City, State 12345",
        "Free parking available"
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
              Patient Information
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about your dental care journey with us. 
              From scheduling appointments to understanding your treatment plan.
            </p>
          </motion.div>
        </div>
      </section>



      {/* Patient Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Patient Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Access all the information and tools you need for a smooth dental care experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {patientServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link href={service.href}>
                  <div className="card p-6 h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${service.color}`}>
                        <service.icon className="w-6 h-6" />
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary-600 transition-colors duration-200" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">
                      {service.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>





      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Quick answers to common questions about your dental care.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What should I bring to my first appointment?
              </h3>
              <p className="text-gray-600">
                Please bring your ID, insurance card, list of current medications, 
                and any previous dental records if available.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How do I schedule an appointment?
              </h3>
              <p className="text-gray-600">
                You can schedule online through our patient portal, call us directly, 
                or use our online booking system.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="card p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Do you accept insurance?
              </h3>
              <p className="text-gray-600">
                Yes, we accept most major insurance plans. Contact us to verify 
                your specific coverage and benefits.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="card p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What if I have a dental emergency?
              </h3>
              <p className="text-gray-600">
                For dental emergencies, call our emergency line immediately. 
                We provide emergency care during and outside regular hours.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
} 