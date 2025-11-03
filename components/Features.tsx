'use client'

const features = [
  {
    title: 'CMYK Conversion',
    description: 'Industry-standard ICC profiles and custom color mappings for accurate print colors',
  },
  {
    title: 'Bleed & Crop Marks',
    description: 'Automated bleed zones and crop marks for professional printing',
  },
  {
    title: 'DPI Checker',
    description: 'Real-time quality assurance and resolution optimization',
  },
  {
    title: 'Multi-Page Export',
    description: 'Perfect for brochures, catalogs, and booklets',
  },
  {
    title: 'Spot Color Support',
    description: 'Pantone colors with density control and overprint settings',
  },
  {
    title: 'Easy to Use',
    description: 'No external software needed - export directly from Figma',
  },
]

export default function Features() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="bg-white rounded-3xl p-8 md:p-12">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Key Features
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 text-purple-600">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
