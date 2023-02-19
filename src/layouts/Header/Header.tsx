import { InfoHeader } from '../../components/InfoHeader/InfoHeader'
import { NavBar } from '../../components/NavBar/NavBar'

export const Header = () => {
  return (
    <header className='header'>
      <NavBar />
      <InfoHeader />
    </header>
  )
}
