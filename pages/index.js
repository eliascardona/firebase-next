import { Header } from '../components/utils/Header'
import { Login } from '../components/vitals/Login'
import { InfoModal } from '../components/utils/InfoModal'
import { Landing } from '../components/sections/Landing'
import LandingPage from '../components/sections/LandingPage'
import { PageHeader } from '../components/sections/PageHeader'
import { SectionOne } from '../components/sections/SectionOne'
import { SectionTwo } from '../components/sections/SectionTwo'
import { SectionThree } from '../components/sections/SectionThree'
import { SectionFour } from '../components/sections/SectionFour'
import { SectionFive } from '../components/sections/SectionFive'
import { SectionSix } from '../components/sections/SectionSix'
import { SectionSeven } from '../components/sections/SectionSeven'
import { SectionEight } from '../components/sections/SectionEight'
import { SectionNine } from '../components/sections/SectionNine'
import { SectionTen } from '../components/sections/SectionTen'
import { SectionEleven } from '../components/sections/SectionEleven'
import { PageFooter } from '../components/sections/PageFooter'

function Home() {
  return (
    <>
      {/* <Header login="true" />
      <InfoModal modalId="login-form" modalTitle="Access to the course">
        <Login />
      </InfoModal> */}
      <PageHeader/>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <SectionFive/>
      <SectionSix/>
      <SectionSeven/>
      <SectionEight/>
      <SectionNine/>
      <SectionTen/>
      <SectionEleven/>
      <PageFooter/>
    </>
  )
}

export default Home