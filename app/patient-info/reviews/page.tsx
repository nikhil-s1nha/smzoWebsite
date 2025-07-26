'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'

export default function Reviews() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

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
              Patient Reviews
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from our patients and their families. See what our community says about their dental care experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="relative max-w-4xl mx-auto">
            <div className="relative h-96 overflow-hidden rounded-xl">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="bg-white p-8 text-center w-full h-full flex flex-col justify-center rounded-xl shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] transition-all duration-300">
                  <div className="flex-1 flex flex-col justify-center">
                    <p className={`text-gray-700 mb-4 leading-relaxed ${
                      testimonials[currentTestimonial].text.length > 200 
                        ? 'text-sm md:text-base' 
                        : testimonials[currentTestimonial].text.length > 100 
                        ? 'text-base md:text-lg' 
                        : 'text-lg md:text-xl'
                    }`}>
                      "{testimonials[currentTestimonial].text}"
                    </p>
                  </div>
                  <div className="mt-auto">
                    <div className="font-semibold text-primary-600 text-base md:text-lg">
                      - {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-sm text-gray-500 mt-0.5">
                      {testimonials[currentTestimonial].date}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute -left-20 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-200 z-10 border border-gray-200"
            >
              <ChevronLeft className="w-7 h-7 text-gray-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute -right-20 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-200 z-10 border border-gray-200"
            >
              <ChevronRight className="w-7 h-7 text-gray-600" />
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

      {/* All Reviews Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              All Patient Reviews
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Browse through all our patient testimonials and experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6"
              >
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                  "{testimonial.text}"
                </p>
                <div className="font-semibold text-primary-600 text-sm">
                  - {testimonial.name}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {testimonial.date}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 