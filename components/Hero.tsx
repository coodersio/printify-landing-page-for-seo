'use client'

export default function Hero() {
  return (
    <section className="container mx-auto px-4 py-20 text-center text-white">
      <h1 className="text-5xl md:text-6xl font-bold mb-6">
        Printify | Print for Figma
      </h1>
      <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
        Export professional print-ready PDFs directly from Figma with CMYK color conversion,
        bleed zones, crop marks, and spot color support.
      </p>
      <div className="flex gap-4 justify-center flex-wrap">
        <a
          href="https://www.figma.com/community/plugin/1419316259939080556/printify-print-for-figma-print-ready-pdfs-with-bleed-crop-marks-cmyk-export-spot-colors"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all hover:scale-105"
        >
          Install Figma Plugin
        </a>
        <a
          href="https://print-for-figma.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all"
        >
          Visit Website
        </a>
      </div>
    </section>
  )
}
