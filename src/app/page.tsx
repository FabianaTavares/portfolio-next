import ContactCTA from '@/components/home/ContactCTA/ContactCTA'
import FeaturedProjects from '@/components/home/FeaturedProjects/FeaturedProjects'
import Hero from '@/components/home/Hero/Hero'
import TechnicalContent from '@/components/home/TechnicalContent/TechnicalContent'
import Container from '@/components/ui/Container/Container'
import Section from '@/components/ui/Section/Section'

export default function Home() {
  return (
    <>
      <Section>
        <Container>
          <Hero />
        </Container>
      </Section>
      <Section surface>
        <Container>
          <FeaturedProjects />
          <TechnicalContent />
          <ContactCTA />
        </Container>
      </Section>
    </>
  )
}
