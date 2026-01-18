import { motion } from 'motion/react'
import { Building, Users, History } from 'lucide-react'

const milestones = [
  {
    year: '2012',
    event: 'KT Enterprises established in Indian pharmaceutical market',
  },
  {
    year: '2016',
    event: 'Expanded to surgical and dental product distribution',
  },
  { year: '2025', event: 'SRH Global Export founded for international trade' },
]

const stats = [
  { value: '12+', label: 'Years Experience', icon: History },
  { value: '500+', label: 'Manufacturer Partners', icon: Building },
  { value: '1000+', label: 'Happy Clients', icon: Users },
]

export function About() {
  return (
    <section
      id="about"
      className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#f8fbff] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p
              className="text-[#2E8B57] font-semibold mb-2 tracking-wide uppercase text-xs sm:text-sm"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Our Story
            </p>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Rooted in India,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066B3] to-[#2E8B57]">
                Reaching the World
              </span>
            </h2>

            <div
              className="space-y-3 sm:space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              <p>
                <strong className="text-gray-900">SRH Global Export</strong> is
                the international arm of
                <strong className="text-[#0066B3]"> KT Enterprises</strong>, a
                name synonymous with trust and reliability in India's
                pharmaceutical distribution landscape for over a decade.
              </p>
              <p>
                Our journey began in 2012 when KT Enterprises started serving
                hospitals, clinics, and pharmacies across India. This deep
                understanding of the domestic market—its manufacturers, quality
                standards, and supply chains—became the foundation for our
                global expansion.
              </p>
              <p>
                Today, as an{' '}
                <strong className="text-[#2E8B57]">
                  MSME registered enterprise
                </strong>
                , we leverage our extensive network of 500+ verified
                manufacturers to deliver quality-assured healthcare products to
                partners worldwide, maintaining the same ethical standards that
                built our domestic reputation.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#0066B3]/10 to-[#2E8B57]/10 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#0066B3]" />
                  </div>
                  <p
                    className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-xs sm:text-sm text-gray-500"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="bg-gradient-to-br from-[#f8fbff] to-[#f0fdf4] rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10">
              <h3
                className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Our Journey
              </h3>

              <div className="space-y-4 sm:space-y-6">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="flex gap-3 sm:gap-4"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#0066B3] to-[#2E8B57] flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-lg">
                        {milestone.year}
                      </div>
                      {index < milestones.length - 1 && (
                        <div className="w-0.5 h-full bg-gradient-to-b from-[#2E8B57] to-[#0066B3]/30 mt-2" />
                      )}
                    </div>
                    <div className="flex-1 pb-4 sm:pb-6">
                      <p
                        className="text-gray-700 font-medium text-sm sm:text-base"
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                      >
                        {milestone.event}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* MSME Badge */}
              <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-white rounded-xl sm:rounded-2xl border border-[#2E8B57]/20 flex items-center gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#2E8B57] to-[#00A86B] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-[10px] sm:text-xs text-center leading-tight">
                    MSME
                    <br />
                    REG
                  </span>
                </div>
                <div>
                  <p
                    className="font-bold text-gray-900 text-sm sm:text-base"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    Government Recognized Enterprise
                  </p>
                  <p
                    className="text-xs sm:text-sm text-gray-500"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    MSME Registration ensures compliance, credibility, and
                    commitment to quality standards
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
