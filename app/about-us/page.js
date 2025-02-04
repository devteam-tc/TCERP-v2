import Navigation from '../components/Header/navigation'
import VisionMissionSection from './VisionMissionSection'
import CoFoundersSection from './CoFoundersSection '
import WhyTechCloudERP from './WhyTechCloudERP'
import ExpertiseSection from './ExpertiseSection'
import Services from './Services'
import CTA from '../components/Home/CTA'
import OurPartnerSection from '../components/Home/OurPartnerSection'
import RecordSection from './RecordSection'
export default function Page() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <CoFoundersSection />
        <VisionMissionSection />
        <WhyTechCloudERP />
        <ExpertiseSection />
        <Services />
        <CTA />
        <OurPartnerSection />
        <RecordSection />
      </main>
    </div>
  )
}