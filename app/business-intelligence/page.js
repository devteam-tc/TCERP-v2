// page.js
import ReportingSection from './ReportingSection';  // Correct default import
import Navigation from '../components/Header/navigation';
import Footer from '../components/Footer';
import BusinessSlider from './BusinessSlider';
import OurPartnerSection from '../components/OurPartnerSection';
import PartnerShipSection from '../components/PartnershipSection'
import TransformingIndustriesSection from './TransformingIndustriesSection'
export default function Page() {
  return (
    <div className="min-h-screen">
      <Navigation />
    
      <main>
        <BusinessSlider />
        <ReportingSection /> 
        <TransformingIndustriesSection />
        <OurPartnerSection />
        <PartnerShipSection />
        
      </main>
      <Footer />
    </div>
  )
}
