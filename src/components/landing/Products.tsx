import { motion } from 'motion/react'
import {
  Pill,
  Syringe,
  Stethoscope,
  SmilePlus,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'

const products = [
  {
    icon: Pill,
    title: 'Pharmaceuticals',
    description:
      'Comprehensive range of generic and branded medications from WHO-GMP certified manufacturers.',
    image:
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80',
    features: [
      'Tablets & Capsules',
      'Syrups & Suspensions',
      'Ointments & Creams',
      'Powders & Granules',
    ],
    color: '#0066B3',
  },
  {
    icon: Syringe,
    title: 'Injectables',
    description:
      'Sterile injectable solutions including vials, ampoules, and pre-filled syringes with complete documentation.',
    image:
      'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&q=80',
    features: [
      'IV Solutions',
      'Ampoules & Vials',
      'Pre-filled Syringes',
      'Lyophilized Products',
    ],
    color: '#2E8B57',
  },
  {
    icon: Stethoscope,
    title: 'Surgical Supplies',
    description:
      'High-quality surgical instruments, disposables, and equipment meeting international standards.',
    image:
      'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&q=80',
    features: [
      'Surgical Instruments',
      'Disposable Supplies',
      'Sutures & Staples',
      'Wound Care Products',
    ],
    color: '#00A86B',
  },
  {
    icon: SmilePlus,
    title: 'Dental Products',
    description:
      'Complete dental care solutions from consumables to equipment for clinics and hospitals.',
    image:
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80',
    features: [
      'Dental Instruments',
      'Restorative Materials',
      'Orthodontic Supplies',
      'Dental Equipment',
    ],
    color: '#0066B3',
  },
]

export function Products() {
  return (
    <section
      id="products"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#f8fbff] to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <p
            className="text-[#2E8B57] font-semibold mb-2 tracking-wide uppercase text-xs sm:text-sm"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Our Expertise
          </p>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Product{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066B3] to-[#2E8B57]">
              Categories
            </span>
          </h2>
          <p
            className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg px-4"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Sourced from India's leading manufacturers, our products meet
            stringent quality standards and international regulatory
            requirements.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-40 sm:h-48 lg:h-56 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Icon Badge */}
                <div
                  className="absolute top-3 left-3 sm:top-4 sm:left-4 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: product.color }}
                >
                  <product.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>

                {/* Title on Image */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                  <h3
                    className="text-xl sm:text-2xl font-bold text-white"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {product.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 lg:p-6">
                <p
                  className="text-gray-600 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {product.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-1.5 sm:gap-2 mb-4 sm:mb-5">
                  {product.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-1.5 sm:gap-2"
                    >
                      <CheckCircle2
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0"
                        style={{ color: product.color }}
                      />
                      <span
                        className="text-xs sm:text-sm text-gray-700"
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 font-semibold transition-colors group/link text-sm sm:text-base"
                  style={{
                    color: product.color,
                    fontFamily: 'DM Sans, sans-serif',
                  }}
                >
                  Request Catalog
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-12"
        >
          <p
            className="text-gray-600 mb-4 text-sm sm:text-base px-4"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Looking for specific products? We source from 500+ verified
            manufacturers.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0066B3] to-[#004d87] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Send Your Requirements
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
