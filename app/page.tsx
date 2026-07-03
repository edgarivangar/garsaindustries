import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { ProductsSection } from '@/components/products-section'
import { IndustriesSection } from '@/components/industries-section'
import { WhySection } from '@/components/why-section'
import { RfqSection } from '@/components/rfq-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <IndustriesSection />
        <WhySection />
        <RfqSection />
      </main>
      <SiteFooter />
    </>
  )
}
