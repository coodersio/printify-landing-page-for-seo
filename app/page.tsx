import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Pricing from '@/components/Pricing'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-700">
      <Hero />
      <Features />
      <Pricing />
    </main>
  )
}
