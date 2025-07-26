'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [aboutDropdown, setAboutDropdown] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about', dropdown: [
      { name: 'Meet the Team', href: '/about#our-dentist' }
    ] },
    { name: 'Patient Info', href: '/patient-info' },
    { name: 'Services', href: '/services' },
    { name: 'Dental Health', href: '/dental-health' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <>


      {/* Main Navigation */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/">
              <motion.div
                className="flex items-center mr-8 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex flex-col items-start justify-center">
                  <Image src="/logo.jpg" alt="Smile Zone Family Dental Logo" width={100} height={100} className="rounded" />
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="relative"
                  onMouseEnter={() => {
                    if (item.name === 'About Us' && item.dropdown) setAboutDropdown(true)
                  }}
                  onMouseLeave={() => {
                    if (item.name === 'About Us' && item.dropdown) setAboutDropdown(false)
                  }}
                >
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 relative group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                  {/* Dropdown for About Us */}
                  {item.dropdown && aboutDropdown && item.name === 'About Us' && (
                    <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                      {item.dropdown.map((drop) => (
                        <Link
                          key={drop.name}
                          href={drop.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg"
                          onClick={() => setAboutDropdown(false)}
                        >
                          {drop.name}
                        </Link>
                      ))}
                    </div>
                  )}

                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              className="hidden md:block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button 
                className="btn-primary"
                onClick={() => window.open('https://www.zocdoc.com/practice/smile-zone-family-dental-20075', '_blank')}
              >
                Book Appointment
              </button>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden bg-white border-t border-gray-200"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="block text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {/* Mobile Dropdown for About Us and Dental Health */}
                    {item.dropdown && (
                      <div className="pl-4">
                        {item.dropdown.map((drop) => (
                          <Link
                            key={drop.name}
                            href={drop.href}
                            className="block text-gray-600 hover:text-primary-600 py-1"
                            onClick={() => setIsOpen(false)}
                          >
                            {drop.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="pt-4"
                >
                  <button
                    className="btn-primary w-full text-center block"
                    onClick={() => {
                      setIsOpen(false)
                      window.open('https://www.zocdoc.com/practice/smile-zone-family-dental-20075', '_blank')
                    }}
                  >
                    Book Appointment
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}

export default Navigation 