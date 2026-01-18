import { motion } from 'motion/react'
import { Mail, Phone, MapPin, Clock, Send, Globe } from 'lucide-react'
import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email Us',
    value: 'srhglobalexport@gmail.com',
    href: 'mailto:srhglobalexport@gmail.com',
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: '+91 8805206064',
    href: 'tel:+918805206064',
  },
  {
    icon: MapPin,
    label: 'Visit Us',
    value: 'Bajirao Galli, Jagnath Budhwari, Nagpur-02, Maharashtra, India',
    href: '#',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Mon - Sat: 9:00 AM - 6:00 PM IST',
    href: '#',
  },
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    product: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  useEffect(() => {
    // Debug: Log all environment variables
    console.log('EmailJS Environment Variables:', {
      serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
      templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ? 'Set' : 'Not set',
    })
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // EmailJS service configuration from environment variables with fallback
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_dnq358a'
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_tplyqzl'
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'LUskdloaMEE1IxgeM'

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS credentials are not configured. Please check your environment variables.')
      }

      // Prepare template parameters matching your EmailJS template
      // Update your EmailJS template to include: {{name}}, {{email}}, {{message}}, {{time}}, {{title}}, {{company}}, {{country}}, {{product}}
      const templateParams = {
        name: formData.name,
        email: formData.email,
        from_name: formData.name, // Explicitly set from_name
        title: `New Inquiry from ${formData.name}`,
        message: `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || 'Not provided'}\nCountry: ${formData.country}\nProduct Category: ${formData.product}\n\nMessage:\n${formData.message}`,
        time: new Date().toLocaleString(),
        company: formData.company || 'Not provided',
        country: formData.country,
        product: formData.product,
      }

      // Debug logging (remove in production)
      console.log('Sending email with:', {
        serviceId,
        templateId,
        templateIdLength: templateId?.length,
        templateIdType: typeof templateId,
        publicKey: publicKey.substring(0, 5) + '...', // Only show first 5 chars for security
        templateParams,
      })

      // Ensure template ID has no extra spaces
      const cleanTemplateId = templateId.trim()
      
      if (cleanTemplateId !== templateId) {
        console.warn('Template ID had whitespace, cleaned:', cleanTemplateId)
      }

      // Try sending with EmailJS
      console.log('Calling emailjs.send with:', {
        serviceId,
        templateId: cleanTemplateId,
        hasPublicKey: !!publicKey,
      })

      // EmailJS send format: send(serviceId, templateId, templateParams, publicKey)
      const result = await emailjs.send(serviceId, cleanTemplateId, templateParams, publicKey)
      
      console.log('EmailJS response:', result)
      
      console.log('Email sent successfully!')

      setSubmitStatus('success')
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        country: '',
        product: '',
        message: '',
      })

      // Show success message
      alert('Thank you for your inquiry! We will get back to you within 24 hours.')
    } catch (error) {
      console.error('Email sending failed:', error)
      setSubmitStatus('error')
      
      // Show detailed error message
      let errorMessage = 'Sorry, there was an error sending your message.'
      if (error instanceof Error) {
        errorMessage += `\n\nError: ${error.message}`
        console.error('Full error details:', error)
      }
      
      // Check if credentials are missing
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      
      if (!serviceId || serviceId === 'YOUR_SERVICE_ID' || serviceId.includes('your_')) {
        errorMessage += '\n\n⚠️ Service ID is not configured correctly.'
      }
      if (!templateId || templateId === 'YOUR_TEMPLATE_ID' || templateId.includes('your_')) {
        errorMessage += '\n\n⚠️ Template ID is not configured. Please update your .env file with the correct Template ID.'
      }
      if (!publicKey || publicKey === 'YOUR_PUBLIC_KEY' || publicKey.includes('your_')) {
        errorMessage += '\n\n⚠️ Public Key is not configured correctly.'
      }
      
      alert(errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section
      id="contact"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-[#f8fbff]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Get In Touch
          </p>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Let's Start a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066B3] to-[#2E8B57]">
              Conversation
            </span>
          </h2>
          <p
            className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg px-4"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Whether you need a specific product quote or want to explore
            partnership opportunities, our team is ready to assist you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-gradient-to-br from-[#0066B3] to-[#004d87] rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 text-white h-full relative overflow-hidden">
              {/* Decorative */}
              <div className="absolute top-0 right-0 w-32 sm:w-40 lg:w-48 h-32 sm:h-40 lg:h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-24 sm:w-28 lg:w-32 h-24 sm:h-28 lg:h-32 bg-[#2E8B57]/30 rounded-full translate-y-1/2 -translate-x-1/2" />

              <div className="relative">
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <Globe className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                  <h3
                    className="text-lg sm:text-xl lg:text-2xl font-bold"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    Contact Information
                  </h3>
                </div>

                <p
                  className="text-white/80 mb-6 sm:mb-8 text-sm sm:text-base"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  Reach out to us for product inquiries, partnership
                  opportunities, or any questions about our services.
                </p>

                <div className="space-y-4 sm:space-y-5 lg:space-y-6">
                  {contactInfo.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-start gap-3 sm:gap-4 group"
                    >
                      <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                        <item.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div className="min-w-0">
                        <p
                          className="text-white/60 text-xs sm:text-sm"
                          style={{ fontFamily: 'DM Sans, sans-serif' }}
                        >
                          {item.label}
                        </p>
                        <p
                          className="font-medium group-hover:text-[#90EE90] transition-colors text-sm sm:text-base break-words"
                          style={{ fontFamily: 'DM Sans, sans-serif' }}
                        >
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* MSME Badge */}
                <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl bg-[#2E8B57] flex items-center justify-center">
                      <span className="text-[10px] sm:text-xs font-bold text-center leading-tight">
                        MSME
                      </span>
                    </div>
                    <div>
                      <p
                        className="font-semibold text-sm sm:text-base"
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                      >
                        MSME Registered
                      </p>
                      <p
                        className="text-xs sm:text-sm text-white/60"
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                      >
                        Government Recognized Enterprise
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 shadow-xl border border-gray-100"
            >
              <h3
                className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Request a Quote
              </h3>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
                <div>
                  <label
                    className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-[#0066B3] focus:ring-2 focus:ring-[#0066B3]/20 outline-none transition-all text-sm sm:text-base"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-[#0066B3] focus:ring-2 focus:ring-[#0066B3]/20 outline-none transition-all text-sm sm:text-base"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label
                    className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-[#0066B3] focus:ring-2 focus:ring-[#0066B3]/20 outline-none transition-all text-sm sm:text-base"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                    placeholder="Your Company Ltd."
                  />
                </div>

                <div>
                  <label
                    className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    Country *
                  </label>
                  <input
                    type="text"
                    name="country"
                    required
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-[#0066B3] focus:ring-2 focus:ring-[#0066B3]/20 outline-none transition-all text-sm sm:text-base"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                    placeholder="United States"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    Product Category *
                  </label>
                  <select
                    name="product"
                    required
                    value={formData.product}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-[#0066B3] focus:ring-2 focus:ring-[#0066B3]/20 outline-none transition-all bg-white text-sm sm:text-base"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    <option value="">Select a category</option>
                    <option value="pharmaceuticals">Pharmaceuticals</option>
                    <option value="injectables">Injectables</option>
                    <option value="surgical">Surgical Supplies</option>
                    <option value="dental">Dental Products</option>
                    <option value="multiple">Multiple Categories</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label
                    className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    Your Requirements *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:border-[#0066B3] focus:ring-2 focus:ring-[#0066B3]/20 outline-none transition-all resize-none text-sm sm:text-base"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                    placeholder="Please describe the products you're looking for, quantities, and any specific requirements..."
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-5 sm:mt-6 w-full sm:w-auto bg-gradient-to-r from-[#2E8B57] to-[#00A86B] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:shadow-lg hover:shadow-[#2E8B57]/30 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                {isSubmitting ? 'Sending...' : 'Send Inquiry'}
              </button>
              {submitStatus === 'success' && (
                <p className="mt-3 text-sm text-green-600" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Message sent successfully!
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="mt-3 text-sm text-red-600" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Failed to send message. Please try again.
                </p>
              )}

              <p
                className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-500"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                We typically respond within 24 business hours.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
