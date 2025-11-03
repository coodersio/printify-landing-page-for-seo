'use client'

const pricingPlans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    features: [
      '5 document creations per week',
      '2 exports per month',
      'Basic CMYK conversion',
      'Standard page sizes',
    ],
  },
  {
    name: 'Pro Monthly',
    price: '$8',
    period: 'per month',
    features: [
      'Unlimited documents',
      'Unlimited exports',
      'Advanced CMYK profiles',
      'Custom page sizes',
      'Spot color support',
      'Priority support',
    ],
    popular: true,
  },
  {
    name: 'Pro Yearly',
    price: '$48',
    period: 'per year',
    features: [
      'Everything in Pro Monthly',
      'Save 50% with annual billing',
      'Early access to new features',
    ],
  },
]

export default function Pricing() {
  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold text-center mb-12 text-white">
        Simple Pricing
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`bg-white rounded-2xl p-8 ${
              plan.popular ? 'ring-4 ring-yellow-400 transform scale-105' : ''
            }`}
          >
            {plan.popular && (
              <span className="bg-yellow-400 text-gray-800 text-sm font-semibold px-3 py-1 rounded-full">
                Most Popular
              </span>
            )}
            <h3 className="text-2xl font-bold mt-4 mb-2">{plan.name}</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-purple-600">{plan.price}</span>
              <span className="text-gray-600 ml-2">{plan.period}</span>
            </div>
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://www.figma.com/community/plugin/1419316259939080556/printify-print-for-figma-print-ready-pdfs-with-bleed-crop-marks-cmyk-export-spot-colors"
              target="_blank"
              rel="noopener noreferrer"
              className={`block text-center py-3 px-6 rounded-lg font-semibold transition-all ${
                plan.popular
                  ? 'bg-purple-600 text-white hover:bg-purple-700'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              Get Started
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
