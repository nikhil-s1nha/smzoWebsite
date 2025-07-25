'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'
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
  MapPin,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import Navigation from '@/components/Navigation'
import Image from 'next/image';

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
      name: "Anonymous",
      text: "My experienced with the Clinic is totally satisfactory. The office staffs are friendly and courteous, the Assistants are skilled and Dr. Milu Sinha is professional, knowledgeable and caring. Lastly the Clinic is organized, clean and neat.",
      date: "2019-08-01"
    },
    {
      name: "Ryan Yamagata",
      text: "Very caring and efficient staff.",
      date: "2019-07-30"
    },
    {
      name: "Manish Gautam",
      text: "Excellent.",
      date: "2019-05-12"
    },
    {
      name: "Ariana Aguilera",
      text: "My kids love coming to the dentist. Dr. Sinha and her team are always friendly and provide excellent service.",
      date: "2019-02-12"
    },
    {
      name: "Chinh Pham",
      text: "Thank you Dr. Milu Sinha for your gentle and kind care….Best regards.",
      date: "2019-01-31"
    },
    {
      name: "Reema Suresh",
      text: "Brenda and Dr. Milu were great. I was very nervous about my wisdom teeth removal procedure and they put me at ease. They were very understanding and explained the procedure and addressed all my concerns. Dr. Phan was great as well. He is very specialized at what he does and was very thorough and quick. I did not feel any pain. I would definitely recommend Smile Zone Family Dental and will come back here again!",
      date: "2018-11-12"
    },
    {
      name: "Noor Mumtaz",
      text: "Great staff and service. I take my kids here and they are wonderful with them to help decrease their anxiety about going to the dentist. The staff make it a relaxing experience.",
      date: "2018-11-12"
    },
    {
      name: "Francisco Ilog",
      text: "An Excellent Dentist.. The best Dentist I have encountered.. Really care about her patients well being..",
      date: "2018-10-31"
    },
    {
      name: "Mohammed Hussain",
      text: "Great Service and no waiting, friendly staff able to answer any questions.",
      date: "2018-10-16"
    },
    {
      name: "Abdul-Rahman Mohammed",
      text: "I fully satisfied with Smile Zone Family Dental I e Dr Milu Sinha for my dental treatment. They are taking care of every patient with sincerity and utmost satisfaction to the patient",
      date: "2018-07-21"
    },
    {
      name: "Bobby Thomas",
      text: "We loved the care and dedication the doctor has towards every aspect of the treatment. She was able to put me at ease and get my work done, to my expected levels. My family has been going to her for past 2 yrs and we have had no negative experiences.",
      date: "2018-07-10"
    },
    {
      name: "Lilian Maher",
      text: "I started going to Smile Zone because it was near my work and home and loved it so much that after we moved, we traveled all the way from Oakland for dental visits. My oldest kid would always ask if he could go see Mr. Thirsty and friends. I was looking forward to bringing my twin babies to join the SZ family but I had to switch insurance otherwise we'd gladly make the trek for the most friendly and awesome dental office ever. They were not only great with kids but grown ups! We miss your wonderful dental team and wish you the best!",
      date: "2018-04-21"
    },
    {
      name: "Derrick Davis",
      text: "I love milu! She has totally transformed my smile!!!! I am no longer embarrassed to smile in pictures!! My friends and family also go to her, they all thanked me for referring them to her. Milu is just pure GREATNESS",
      date: "2017-11-12"
    },
    {
      name: "Scarlett Mcintosh",
      text: "She is the best dentist I've ever had. She listened to my concerns regarding my teeth and previous procedures, she explained what could be going on, and what steps I could take next. She obviously values informed consent and patients making the best decisions for themselves. She corrected poorly done fillings by a different dentist that had made my mouth uncomfortable for over a year. I like that she does the teeth cleanings to make sure she doesn't miss anything going on with your teeth. I feel very grateful to have such a great dentist that also accepts medi-cal. Her reviews were very reassuring and it was worth the long commute!!",
      date: "2017-09-17"
    },
    {
      name: "Katarina Raj",
      text: "Since we started visiting Dr Milu Sinha it has always been a fun trip to the dentist's office. Everybody in her office is super nice – always cheerful and ready to help (whether it's rescheduling an appointment, babysitting my infant while I am getting my teeth checked or answering a million questions about a procedure). I also love how caring and patient they are with my 3-year-old son who usually does not want to go home from there.",
      date: "2017-07-25"
    },
    {
      name: "Shirley Henry",
      text: "Let me first start off with saying I have a severe fear of dentist and that fear was part of what kept me from seeing a dentist for over 10 years. The entire staff team at Smile Zone were the most caring, understanding, gentle, and most patient dental office I have ever seen. I wish I could give this office 100 star rating. The dentist and each and every staff member go the extra mile to make you feel as comfortable as possible. For me I had not seen a dentist for more than 10 years I had to have multiple root canals done (ouch right) NO! The same day and even by the next day I felt little to no pain after the root canals. The staff went above and beyond to put my nerves at ease and they did a terrific job. I can't thank everyone at Smile Zone enough for the top notch service and care they provided to me. I will be scheduling appointments for my husband and my children as well. I would recommend Smile Zone to anyone looking for a kind, gentle, and caring dentist. Thank You to all the staff at Smile Zone Family Dental you are truly amazing.",
      date: "2015-04-30"
    }
  ]

  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 20000) // 20 seconds

    return () => clearInterval(interval)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Full-page Hero Banner */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-dental-50 overflow-hidden">
        {/* Banner background image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/bannerFront.jpg"
            alt="Dental Banner"
            fill
            style={{ objectFit: 'cover', opacity: 0.35 }}
            priority
          />
        </div>
        <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">Your Smile, <span className="text-primary-600">Our Passion</span></h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-10">Experience exceptional dental care in a modern, comfortable environment. We're committed to your oral health and beautiful smile.</p>
          <button
            className="btn-primary px-10 py-4 text-lg"
            onClick={() => window.location.href = '/contact'}
          >
            Book Your Appointment
          </button>
        </div>
      </section>

      {/* Two-column Section: Dentist & Why Choose */}
      <section className="relative py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-12">
            {/* Left: Dentist */}
            <div className="flex-1 flex flex-col items-center lg:items-end text-center lg:text-right justify-center">
              <img
                src="/doctor.png"
                alt="Dr. Milu Sinhaad"
                className="w-56 h-56 rounded-full object-cover shadow-xl mb-6"
              />
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Meet Dr. Milu Sinha</h2>
              <p className="text-lg text-gray-600 mb-6 max-w-md">
              Dr. Milu Sinha, D.D.S, practices a full scope of general and cosmetic dentistry with 17 years of expertise ranging from porcelain crowns, dental implants, root canals, crowns and bridges . 
              </p>
              <button
                className="btn-primary px-8 py-3"
                onClick={() => window.location.href = '/about#our-dentist'}
              >
                Learn More About Dr. Sinha
              </button>
            </div>
            {/* Vertical Divider */}
            <div className="hidden lg:flex items-stretch">
              <div className="w-px bg-gray-200 mx-12 self-stretch opacity-50" />
            </div>
            {/* Right: Why Choose */}
            <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left justify-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Smile Zone?</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-md">
                We combine advanced technology with compassionate care to deliver exceptional dental experiences for you and your family.
              </p>
              <div className="space-y-6 w-full max-w-md">
                {features.map((feature, index) => (
                  <div key={feature.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <feature.icon className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button
                className="btn-secondary mt-8 px-8 py-3"
                onClick={() => window.location.href = '/about'}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-12 bg-gray-50">
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

      {/* Testimonials Section */}
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
              Real stories from our patients and their families.
            </p>
          </motion.div>

          {/* Testimonials Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <div className="relative h-80 overflow-hidden rounded-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="card p-12 text-center max-w-3xl">
                    <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                      "{testimonials[currentTestimonial].text}"
                    </p>
                    <div className="font-semibold text-primary-600 text-lg">
                      - {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-sm text-gray-500 mt-2">
                      {testimonials[currentTestimonial].date}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200 z-10"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200 z-10"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentTestimonial 
                      ? 'bg-primary-600 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
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
                  <span>34743 Ardenwood Blvd, Fremont, CA 94555</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>(510) 505-0123</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Mon, Wed-Fri: 9:30AM-5:30PM</span>
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