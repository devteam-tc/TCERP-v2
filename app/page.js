
import Navigation from './components/Header/navigation'
import CallToAction from './components/Home/CallToAction'
import CardSection from './components/Home/CardSection'
import Home from './components/Home/Home'
import HomeVideoLanding from './components/Home/HomeVideoLanding'
import OurMissionSection from './components/Home/OurMissionSection'

export default function Page() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HomeVideoLanding/>
        <OurMissionSection/>
        <CardSection/>
        <CallToAction/>
        
        {/* <Hero />
        <Story />
        <Services />
        <CTA />
        <LatestVideos />
        <Announcements/>
        <CTASection/> */}

      </main>
    </div>
  )
}