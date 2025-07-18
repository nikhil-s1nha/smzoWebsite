'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Heart, 
  Shield, 
  Users, 
  Award, 
  Star,
  Phone,
  MapPin,
  Clock,
  GraduationCap,
  Calendar
} from 'lucide-react'
import Navigation from '@/components/Navigation'
import Image from 'next/image';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const teamMembers = [
    {
      name: "Dr. Milu Sinha",
      role: "Owner, General Dentist",
      image: "/doctor.png",
      description: "Specializes in cosmetic and restorative dentistry with 15+ years of experience."
    },
    {
      name: "Dr. Michael Chen",
      role: "Orthodontist",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&h=300&fit=crop",
      description: "Expert in braces, Invisalign, and orthodontic surgery with 12+ years experience."
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Pediatric Dentist",
      image: "https://images.unsplash.com/photo-1594824475545-9d0c7c4951c1?w=300&h=300&fit=crop",
      description: "Dedicated to children's dental health with gentle, patient-centered care."
    },
    {
      name: "Dr. James Wilson",
      role: "Endodontist",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop",
      description: "Specializes in root canal therapy and endodontic procedures."
    },
    {
      name: "Dr. Lisa Thompson",
      role: "Periodontist",
      image: "https://images.unsplash.com/photo-1594824475545-9d0c7c4951c1?w=300&h=300&fit=crop",
      description: "Expert in gum disease treatment and dental implant surgery."
    },
    {
      name: "Dr. Robert Davis",
      role: "Oral Surgeon",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&h=300&fit=crop",
      description: "Performs complex oral surgeries and wisdom tooth extractions."
    },
    {
      name: "Dr. Jennifer Lee",
      role: "Hygienist",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop",
      description: "Provides thorough cleanings and preventive dental care education."
    },
    {
      name: "Dr. David Martinez",
      role: "Dental Assistant",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop",
      description: "Ensures patient comfort and assists with dental procedures."
    },
    {
      name: "Dr. Amanda Foster",
      role: "Office Manager",
      image: "https://images.unsplash.com/photo-1594824475545-9d0c7c4951c1?w=300&h=300&fit=crop",
      description: "Manages patient scheduling and administrative operations."
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
              About SMZO Dental
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're more than just a dental practice. We're your partners in oral health, 
              committed to providing exceptional care in a warm, welcoming environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Practice Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Practice Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2010, SMZO Dental has been serving our community with 
                dedication and excellence. What started as a small family practice 
                has grown into a comprehensive dental care center, but our core 
                values remain the same.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We believe that everyone deserves access to high-quality dental care 
                in a comfortable, stress-free environment. Our team combines years 
                of experience with the latest technology to provide you with the 
                best possible care.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">5000+</div>
                  <div className="text-gray-600">Happy Patients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">15+</div>
                  <div className="text-gray-600">Years Experience</div>
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
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop"
                alt="Dental Practice"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-dental-100 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-dental-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Award Winning</div>
                    <div className="text-sm text-gray-600">Best Dental Practice 2023</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Dentist */}
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
              Our Dentist
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated professional behind SMZO Dental's exceptional care.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-xl p-8 shadow-none"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="flex justify-center">
                  <Image
                    src="/doctor.png"
                    alt="Dr. Milu Sinha"
                    width={400}
                    height={400}
                    className="w-60 h-90 object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Dr. Milu Sinha, DDS
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Dr. Sinha graduated with
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <GraduationCap className="w-5 h-5 text-primary-600 mr-3" />
                      <span className="text-gray-700">University of Dental Medicine, DDS</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 text-primary-600 mr-3" />
                      <span className="text-gray-700">15+ years of experience</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="w-5 h-5 text-primary-600 mr-3" />
                      <span className="text-gray-700">Board Certified in General Dentistry</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our experienced professionals are dedicated to providing you with 
              exceptional dental care in a comfortable environment.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6 text-center group"
              >
                <div className="mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-dental-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Why Patients Choose SMZO Dental
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Experience the difference that personalized care and advanced technology can make.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
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
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Compassionate Care</h3>
              <p className="opacity-90">
                We understand dental anxiety and work to make every visit comfortable.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Family Friendly</h3>
              <p className="opacity-90">
                Welcoming environment for patients of all ages, from children to seniors.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ready to Meet Our Team?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Schedule your consultation and experience the SMZO Dental difference for yourself.
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
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 