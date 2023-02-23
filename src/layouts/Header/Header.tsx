import { BackgroundAnimation } from '../../components/BackgroundAnimation/BackgroundAnimation'
import { InfoHeader } from '../../components/InfoHeader/InfoHeader'
import { NavBar } from '../../components/NavBar/NavBar'

export const Header = () => {
  return (
    <header className='header'>
      <BackgroundAnimation />
      <NavBar />
      <InfoHeader />
    </header>
  )
}
