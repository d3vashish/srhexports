import { motion } from 'motion/react'
import { Globe, Shield, Clock, Award } from 'lucide-react'

const trustIndicators = [
  { icon: Award, label: '12+ Years Experience' },
  { icon: Shield, label: 'MSME Registered' },
  { icon: Globe, label: 'Global Reach' },
  { icon: Clock, label: 'Timely Delivery' },
]

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f8fbff] via-white to-[#f0fdf4]" />

      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-[300px] sm:w-[400px] lg:w-[600px] h-[300px] sm:h-[400px] lg:h-[600px] bg-gradient-to-br from-[#0066B3]/5 to-[#2E8B57]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[200px] sm:w-[300px] lg:w-[400px] h-[200px] sm:h-[300px] lg:h-[400px] bg-gradient-to-tr from-[#2E8B57]/10 to-transparent rounded-full blur-3xl" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230066B3' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-[#0066B3]/10 text-[#0066B3] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6"
            >
              <span className="w-2 h-2 bg-[#2E8B57] rounded-full animate-pulse" />
              <span
                className="text-xs sm:text-sm font-semibold"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Trusted Partner Since 2012
              </span>
            </motion.div>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Your Reliable{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066B3] to-[#2E8B57]">
                Indian Partner
              </span>{' '}
              for Healthcare Exports
            </h1>

            <p
              className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              With 12 years of deep-rooted experience in the Indian
              pharmaceutical market through KT Enterprises, SRH Global Export
              brings you quality-assured medical supplies with ethical trade
              practices, competitive pricing, and guaranteed timely delivery.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 justify-center lg:justify-start">
              <motion.a
                href="#products"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-[#0066B3] to-[#004d87] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold shadow-lg shadow-[#0066B3]/30 hover:shadow-xl hover:shadow-[#0066B3]/40 transition-all duration-300 text-center"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Explore Products
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-[#0066B3] border-2 border-[#0066B3] px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-[#0066B3]/5 transition-all duration-300 text-center"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Get in Touch
              </motion.a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-md mx-auto lg:mx-0 lg:max-w-none">
              {trustIndicators.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2 text-gray-600 justify-center lg:justify-start"
                >
                  <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#2E8B57] flex-shrink-0" />
                  <span
                    className="text-xs sm:text-sm font-medium"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl shadow-[#0066B3]/20">
                <img
                  src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80"
                  alt="Pharmaceutical products and medical supplies"
                  className="w-full h-[280px] sm:h-[350px] md:h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0066B3]/40 to-transparent" />
              </div>

              {/* Stats Card - Quality */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -right-2 sm:-right-2 lg:-right-4 bottom-12 sm:bottom-16 lg:bottom-20 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-5 shadow-lg sm:shadow-xl"
              >
                <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-[#0066B3] to-[#004d87] rounded-lg sm:rounded-xl flex items-center justify-center">
                    <Shield className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
                  </div>
                  <div>
                    <p
                      className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      100%
                    </p>
                    <p
                      className="text-xs sm:text-sm text-gray-500"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      Quality Assured
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
