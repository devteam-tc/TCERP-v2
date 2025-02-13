
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'
import Navigation from './components/Header/navigation'
import CallToAction from './components/Home/CallToAction'
import CardSection from './components/Home/CardSection'
import HomeVideoLanding from './components/Home/HomeVideoLanding'
import OurMissionSection from './components/Home/OurMissionSection'
import OurPartnerSection from './components/OurPartnerSection'
import GalleryTabs from "../app/gallery/GalleryTabs"; 
import PricingSection from './components/Home/PricingSection'
import Recordsection from './about-us/RecordSection'
import ScrollFeature from './components/Home/ScrollFeature'
import ImportantModuleSection from './components/Home/ImportantModuleSection'
export default function Page() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HomeVideoLanding/>
        <OurMissionSection/>
        <CardSection/>
        <ImportantModuleSection />
        <Recordsection />
        <ScrollFeature />
        <CallToAction/>
        <GalleryTabs /> 
        <Testimonials/>
        <PricingSection />

      </main>
      <OurPartnerSection/>
      <Footer/>
    </div>
  )
}