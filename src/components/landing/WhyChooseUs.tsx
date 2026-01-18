import { motion } from 'motion/react'
import {
  Scale,
  BadgeDollarSign,
  Truck,
  FileCheck,
  HeartHandshake,
  ShieldCheck,
} from 'lucide-react'

const reasons = [
  {
    icon: Scale,
    title: 'Ethical Trade Practices',
    description:
      'We believe in transparent, honest business relationships. No hidden costs, no compromises on quality, and complete documentation for every transaction.',
    highlight: 'Transparency First',
  },
  {
    icon: BadgeDollarSign,
    title: 'Competitive Pricing',
    description:
      'Direct partnerships with 500+ manufacturers eliminate middlemen, ensuring you receive the best market rates without sacrificing quality.',
    highlight: 'Best Value',
  },
  {
    icon: Truck,
    title: 'Timely Delivery',
    description:
      'Our robust logistics network and inventory management ensure your orders reach you on schedule, every time. We understand that healthcare cannot wait.',
    highlight: 'On-Time Guarantee',
  },
  {
    icon: FileCheck,
    title: 'Complete Documentation',
    description:
      'All products come with proper certificates of analysis, batch records, and regulatory documentation required for international import.',
    highlight: 'Fully Compliant',
  },
  {
    icon: HeartHandshake,
    title: 'Dedicated Support',
    description:
      'A single point of contact for all your needs. Our team understands international trade requirements and provides end-to-end assistance.',
    highlight: '24/7 Available',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Assurance',
    description:
      'Every product undergoes rigorous quality checks. We source only from WHO-GMP, ISO certified manufacturers with proven track records.',
    highlight: 'Certified Quality',
  },
]

export function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white via-[#f8fbff] to-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%230066B3' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <p
            className="text-[#2E8B57] font-semibold mb-2 tracking-wide uppercase text-xs sm:text-sm"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            The SRH Advantage
          </p>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Why Partner With{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066B3] to-[#2E8B57]">
              SRH Global Export
            </span>
          </h2>
          <p
            className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg px-4"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            We combine decades of market expertise with unwavering commitment to
            ethical business practices, making us your ideal partner for
            healthcare procurement from India.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 h-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#0066B3]/20 relative overflow-hidden">
                {/* Highlight Badge */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                  <span
                    className="text-[10px] sm:text-xs font-semibold px-2 sm:px-3 py-1 rounded-full bg-gradient-to-r from-[#0066B3]/10 to-[#2E8B57]/10 text-[#0066B3]"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {reason.highlight}
                  </span>
                </div>

                {/* Icon */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#0066B3] to-[#2E8B57] flex items-center justify-center mb-4 sm:mb-5 lg:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#0066B3]/20">
                  <reason.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                </div>

                {/* Content */}
                <h3
                  className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3 pr-16 sm:pr-20"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {reason.title}
                </h3>
                <p
                  className="text-gray-600 leading-relaxed text-xs sm:text-sm lg:text-base"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {reason.description}
                </p>

                {/* Decorative Corner */}
                <div className="absolute bottom-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-tl from-[#0066B3]/5 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-12 lg:mt-16 bg-gradient-to-r from-[#0066B3] to-[#004d87] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-center relative overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-24 sm:w-36 lg:w-48 h-24 sm:h-36 lg:h-48 bg-[#2E8B57]/20 rounded-full translate-x-1/4 translate-y-1/4" />

          <div className="relative">
            <h3
              className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Ready to Experience the Difference?
            </h3>
            <p
              className="text-white/80 max-w-2xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base px-4"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Join hundreds of satisfied partners who trust SRH Global Export
              for their pharmaceutical and medical supply needs. Let's build a
              lasting partnership.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-[#0066B3] px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-[#f8fbff] transition-all duration-300 shadow-lg text-sm sm:text-base"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Start Your Partnership Today
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
