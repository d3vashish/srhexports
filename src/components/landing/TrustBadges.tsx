import { motion } from 'motion/react'
import { Building2, FileCheck, Handshake, TrendingUp } from 'lucide-react'

const badges = [
  {
    icon: Building2,
    title: 'MSME Registered',
    description:
      'Government recognized enterprise ensuring credibility and compliance',
    color: 'from-[#0066B3] to-[#004d87]',
  },
  {
    icon: FileCheck,
    title: 'Quality Certified',
    description:
      'Stringent quality control at every stage of procurement and delivery',
    color: 'from-[#2E8B57] to-[#00A86B]',
  },
  {
    icon: Handshake,
    title: 'KT Enterprises Legacy',
    description:
      '12 years of trusted domestic operations backing our export expertise',
    color: 'from-[#0066B3] to-[#2E8B57]',
  },
  {
    icon: TrendingUp,
    title: 'Competitive Pricing',
    description: 'Direct manufacturer relationships ensuring best market rates',
    color: 'from-[#00A86B] to-[#2E8B57]',
  },
]

export function TrustBadges() {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-white to-[#f8fbff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <p
            className="text-[#2E8B57] font-semibold mb-2 tracking-wide uppercase text-xs sm:text-sm"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Why Trust Us
          </p>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Built on a Foundation of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066B3] to-[#2E8B57]">
              Trust & Excellence
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#0066B3]/20"
            >
              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br ${badge.color} flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <badge.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3
                className="text-base sm:text-lg font-bold text-gray-900 mb-1.5 sm:mb-2"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                {badge.title}
              </h3>
              <p
                className="text-gray-600 text-xs sm:text-sm leading-relaxed"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                {badge.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
