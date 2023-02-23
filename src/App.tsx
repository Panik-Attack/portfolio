import { ButtonToTop } from './components/ButtonToTop/ButtonToTop'
import { AboutSection } from './layouts/AboutSection/AboutSection'
import { EducationSection } from './layouts/EducationSection/EducationSection'
import { ExperienceSection } from './layouts/ExperienceSection/ExperienceSection'
import { Footer } from './layouts/Footer/Footer'
import { Header } from './layouts/Header/Header'
import { SkillsSection } from './layouts/SkillsSection/SkillsSection'

export const App = () => {
  return (
    <>
      <ButtonToTop />
      <Header />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <SkillsSection />
      <Footer />
    </>
  )
}
