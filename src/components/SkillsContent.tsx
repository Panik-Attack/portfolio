import REACT_ICON from '../assets/icons/reactIcon.svg'
import CSS_ICON from '../assets/icons/cssIcon.svg'
import GIT_ICON from '../assets/icons/gitIcon.svg'
import JAVASCRIPT_ICON from '../assets/icons/javascriptIcon.svg'
import JSON_ICON from '../assets/icons/jsonIcon.svg'
import HTML_ICON from '../assets/icons/htmlIcon.svg'
import NEXT_ICON from '../assets/icons/nextIcon.svg'
import TAILDWIND_ICON from '../assets/icons/taildwindIcon.svg'
import REDUX_ICON from '../assets/icons/reduxIcon.svg'

export const SkillsContent = () => {
  return (
    <div className='grid grid-cols-3 place-content-center place-items-center gap-3 md:gap-8 p-4 bg-[#353665]/75 overflow-hidden col-span-1 aspect-squere h-full w-full'>
        <img className='w-[100%]' src={HTML_ICON} alt="HTML_ICON" />
        <img className='w-[100%]' src={CSS_ICON} alt="CSS_ICON" /> 
        <img className='w-[100%]' src={JAVASCRIPT_ICON} alt="JAVASCRIPT_ICON" />
        <img className='w-[100%]' src={REACT_ICON} alt="REACT_ICON" />
        <img className='w-[100%]' src={TAILDWIND_ICON} alt="TAILDWIND_ICON" />
        <img className='w-[100%]' src={NEXT_ICON} alt="NEXT_ICON" />
        <img className='w-[100%]' src={JSON_ICON} alt="JSON_ICON" />
        <img className='w-[100%]' src={GIT_ICON} alt="GIT_ICON" /> 
        <img className='w-[100%]' src={REDUX_ICON} alt="REDUX_ICON" />  
    </div>
  )
}
