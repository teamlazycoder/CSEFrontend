import { Hero } from '@/components/home/Hero'
import { StatsSection } from '@/components/home/StatsSection'
import { AboutSection } from '@/components/home/AboutSection'
import { ProgramsSection } from '@/components/home/ProgramsSection'
import { FacultyHighlights } from '@/components/home/FacultyHighlights'
import { ResearchLabsSection } from '@/components/home/ResearchLabsSection'
import { PlacementsSection } from '@/components/home/PlacementsSection'
import { CommunitySection } from '@/components/home/CommunitySection'
import { CtaSection } from '@/components/home/CtaSection'

export default function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <AboutSection />
      <ProgramsSection />
      <FacultyHighlights />
      <ResearchLabsSection />
      <PlacementsSection />
      <CommunitySection />
      <CtaSection />
    </>
  )
}
