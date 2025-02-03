// import { Header } from './components/header'
// import { Hero } from '@/components/hero'
// import { Story } from '@/components/story'
// import { Services } from '@/components/services'
// import { WhyChooseUs } from '@/components/why-choose-us'
// import { LatestVideos } from '@/components/latest-videos'
// import { Announcements } from '@/components/announcements'
// import { CTA } from '@/components/cta'
// import { Footer } from '@/components/footer'

// export default function Page() {
//   return (
//     <div className="min-h-screen bg-black text-white">
//       <Header />
//       <main>
//         <Hero />
//         <Story />
//         <Services />
//         <WhyChooseUs />
//         <LatestVideos />
//         <Announcements />
//         <CTA />
//       </main>
//       <Footer />
//     </div>
//   )
// }


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