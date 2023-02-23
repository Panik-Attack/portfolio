import { useState } from "react"
import { IconSocialSection } from "../IconSocialSeccion/IconSocialSection"
import { Link } from 'react-scroll'

export const NavBar = () => {
	// to handle burger menu
	const [isOpen, setIsOpen] = useState(false)
	
	return (
		<div className="nav_bar-container">
			<h1>Portfolio</h1>
			<nav className="nav_bar">
				<div className={`nav_item ${isOpen && 'open'}`}>
					<Link 	
						to="aboutSection" 
						smooth={true} 
						offset={50} 
						duration={500} 
						delay={250}
						>
						About Me</Link>
					<Link 	
						to='educationSection'
						smooth={true} 
						offset={50} 
						duration={500} 
						delay={250}>Education</Link>
					<Link 	
						to='experienceSection'
						smooth={true} 
						offset={50} 
						duration={500} 
						delay={250}>Experience</Link>
					<Link
						to='skillsSection'
						smooth={true} 
						offset={50} 
						duration={500} 
						delay={250}>Skills</Link>
					
					{/* UNCOMPLETE */}
					{/* <Link 	
						to=''
						smooth={true} 
						offset={50} 
						duration={500} 
						delay={250}>Projects</Link> */}


					{isOpen && <IconSocialSection />}
				</div>
				<div className={`burger_menu ${isOpen && 'open'}`} onClick={ () => setIsOpen(!isOpen)} >
					<span className="line_one"></span>
					<span className="line_two"></span>
					<span className="line_three"></span>
				</div>
			</nav>
		</div>
	)
}
