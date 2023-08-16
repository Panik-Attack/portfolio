import { AgeContent } from "./components/AgeContent"
import { LinkedinContent } from "./components/LinkedinContent"
import { LongContainer } from "./components/layout/LongContainer"
import { MainContent } from "./components/MainContent"
import { SwitchColor } from "./components/SwitchColor"
import { LangSwitch } from "./components/LangSwitch"
import { MainContainer } from "./components/layout/MainContainer"
import { SmallContainer } from "./components/layout/SmallContainer"
import { SmallContainerBtn } from "./components/layout/SmallContainerBtn"
import { GitHubContent } from "./components/GitHubContent"
import { EmailContent } from "./components/EmailContent"
import { ExperieceContent } from "./components/ExperieceContent"
import { SkillsContent } from "./components/SkillsContent"

function App() {

  return (
    <main className="h-full w-full flex flex-col p-5 transition duration-500 bg-[white] dark:bg-[#100a13] "> 
    <div className="grid grid-cols-3 gap-2
    md:grid-cols-4 md:gap-4 my-5 container mx-auto xl:px-20">
      
      <MainContainer>
        <MainContent/>
      </MainContainer>

      <SmallContainerBtn>
        <LangSwitch/>
      </SmallContainerBtn>

      <SmallContainer>
        <SwitchColor/>
      </SmallContainer>

      <SmallContainer>
        <AgeContent/>
      </SmallContainer>

      <LongContainer>
        <GitHubContent />
      </LongContainer>

      <SmallContainerBtn>
        <LinkedinContent />
      </SmallContainerBtn>

      <SmallContainer>
        <ExperieceContent />
      </SmallContainer>

      <SmallContainerBtn>
        <EmailContent />
      </SmallContainerBtn>
      
      <SmallContainer>
        <SkillsContent />
      </SmallContainer>   
     </div>
  </main>
  )
}

export default App
