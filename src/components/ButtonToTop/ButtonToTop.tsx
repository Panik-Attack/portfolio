import { useEffect, useState } from 'react'
import { animateScroll as scroll} from 'react-scroll'
import upArrow from '../../assets/icons/upArrow.png'


export const ButtonToTop = () => {
  
  
  const toTop = () => {
    scroll.scrollToTop()
  }
  const [show, setShow] = useState(false)  
  const [scrollPosition, setScrollPosition] = useState(0)

  addEventListener('scroll', () => {
    setScrollPosition( window.pageYOffset)
    if(scrollPosition > 500) {
      setShow(true)
    }
    else if(scrollPosition < 500){
      setShow(false)
    }
    
  })


  
  return (
    <button className={`shadow_btn button_to_up ${ show && 'show_button'}`} 
      onClick={toTop}>
      <img src={upArrow} alt="up Arrow" />
    </button>
  )
}
