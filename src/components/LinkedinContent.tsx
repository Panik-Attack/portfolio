import LINKEDIN_ICON from '../assets/icons/linkedinIcon.svg'
import REDIRECT_ICON from '../assets/icons/redirectIcon.svg'

export const LinkedinContent = () => {
  return (
    <a href='https:linkedin.com/in/eduardojga' target='blank' className='h-full w-full' >
      <div className="flex h-full w-full bg-[#1178ff9c]/75 justify-center items-center p-2" >
        <div className='absolute transition duration-300 opacity-0 hover:opacity-100 top-0 w-full h-full p-2 bg-[black]/25 bg-transparent'>
          <img className='absolute right-3 top-3 w-[10%] h-[10%] md:right-5 md:top-5' src={REDIRECT_ICON} alt="REDIRECT_ICON" />
        </div>

        <div className='flex h-full w-full justify-center items-center'>
          <img src={LINKEDIN_ICON} alt="LINKEDIN_ICON" className='w-[50%]' />
        </div>
      </div>
    </a>
  )
}