import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X, Phone, Mail } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'About Us', href: '#about' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
]

export function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-[#0066B3] to-[#004d87] text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs sm:text-sm">
          <div className="flex items-center gap-3 sm:gap-6">
            <a
              href="mailto:srhglobalexport@gmail.com"
              className="flex items-center gap-1.5 sm:gap-2 hover:text-[#90EE90] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden xs:inline sm:inline truncate max-w-[140px] sm:max-w-none">
                srhglobalexport@gmail.com
              </span>
            </a>
            <a
              href="tel:+918805206064"
              className="flex items-center gap-1.5 sm:gap-2 hover:text-[#90EE90] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden xs:inline sm:inline">
                +91 8805206064
              </span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-[#2E8B57] px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold tracking-wide whitespace-nowrap">
              MSME Registered
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2 sm:gap-3">
              <img
                src="/images/logo.jpg"
                alt="SRH Global Export"
                className="h-10 sm:h-14 w-auto object-contain"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-700 hover:text-[#0066B3] font-medium transition-colors relative group text-sm xl:text-base"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2E8B57] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a
                href="#contact"
                className="bg-gradient-to-r from-[#2E8B57] to-[#00A86B] text-white px-5 xl:px-6 py-2.5 xl:py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-[#2E8B57]/30 transition-all duration-300 transform hover:-translate-y-0.5 text-sm xl:text-base"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Request Quote
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-[#0066B3] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-100"
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-3 px-3 text-gray-700 hover:text-[#0066B3] hover:bg-gray-50 rounded-lg font-medium transition-colors"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center bg-gradient-to-r from-[#2E8B57] to-[#00A86B] text-white px-6 py-3 rounded-lg font-semibold mt-4"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Request Quote
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  )
}
