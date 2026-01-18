import { motion } from 'motion/react'
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'About Us', href: '#about' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
]

const productLinks = [
  { label: 'Pharmaceuticals', href: '#products' },
  { label: 'Injectables', href: '#products' },
  { label: 'Surgical Supplies', href: '#products' },
  { label: 'Dental Products', href: '#products' },
]

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
]

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-2 md:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <img
                src="/images/logo.jpg"
                alt="SRH Global Export"
                className="h-10 sm:h-12 w-auto rounded-lg"
              />
            </div>
            <p
              className="text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Your trusted Indian partner for pharmaceutical and medical supply
              exports. 12+ years of market expertise, MSME registered, committed
              to ethical trade.
            </p>

            {/* Social Links */}
            <div className="flex gap-2 sm:gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/5 hover:bg-[#0066B3] flex items-center justify-center transition-colors duration-300"
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4
              className="text-base sm:text-lg font-bold mb-4 sm:mb-6"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#90EE90] transition-colors text-sm sm:text-base"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4
              className="text-base sm:text-lg font-bold mb-4 sm:mb-6"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Our Products
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#90EE90] transition-colors text-sm sm:text-base"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="col-span-2 md:col-span-1"
          >
            <h4
              className="text-base sm:text-lg font-bold mb-4 sm:mb-6"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Contact Us
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a
                  href="mailto:srhglobalexport@gmail.com"
                  className="flex items-center gap-2 sm:gap-3 text-gray-400 hover:text-[#90EE90] transition-colors text-sm sm:text-base"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#2E8B57] flex-shrink-0" />
                  <span className="break-all">srhglobalexport@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+918805206064"
                  className="flex items-center gap-2 sm:gap-3 text-gray-400 hover:text-[#90EE90] transition-colors text-sm sm:text-base"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#2E8B57] flex-shrink-0" />
                  +91 8805206064
                </a>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 text-gray-400">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#2E8B57] flex-shrink-0 mt-0.5" />
                <span
                  className="text-sm sm:text-base"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Bajirao Galli, Jagnath Budhwari,
                  <br />
                  Nagpur-02, Maharashtra,
                  <br />
                  India
                </span>
              </li>
            </ul>

            {/* MSME Badge */}
            <div className="mt-4 sm:mt-6 inline-flex items-center gap-2 bg-[#2E8B57]/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg">
              <span className="text-[#2E8B57] font-bold text-xs sm:text-sm">
                MSME
              </span>
              <span
                className="text-gray-400 text-xs sm:text-sm"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Registered Enterprise
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p
              className="text-gray-500 text-xs sm:text-sm text-center sm:text-left"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              © {new Date().getFullYear()} SRH Global Export. All rights
              reserved.
            </p>
            <p
              className="text-gray-500 text-xs sm:text-sm text-center sm:text-left"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              A division of{' '}
              <span className="text-[#0066B3]">KT Enterprises</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
