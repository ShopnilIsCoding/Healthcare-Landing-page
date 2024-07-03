
import Banner from './Components/Banner/Banner'
import FAQ from './Components/FAQ/FAQ'
import Navbar from './Components/Navbar/Navbar'
import OurMission from './Components/OurMission/OurMission'
import Services from './Components/Services/Services'
import Stats from './Components/Stats/Stats'
import TestimonialSlider from './Components/Testimonials/TestimonialSlider'
import './index.css'

function App() {
  

  return (
    <div >
      <div className=''>
     <Navbar></Navbar>
     <Banner></Banner>
     <Stats></Stats>
     <OurMission></OurMission>
     <Services></Services>
     <TestimonialSlider></TestimonialSlider>
     <FAQ></FAQ>
    </div>
    </div>
  )
}

export default App
