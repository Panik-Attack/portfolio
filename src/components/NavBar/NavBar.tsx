import { useState } from "react"
import { IconSocialSection } from "../iconSocialSeccion/IconSocialSection"

export const NavBar = () => {
	// to handle burger menu
	const [isOpen, setIsOpen] = useState(false)
	
	return (
		<div className="nav_bar-container">
			<h1>Portfolio</h1>
			<nav className="nav_bar">
				<div className={`nav_item ${isOpen && 'open'}`}>
					<a href="">About Me</a>
					<a href="">Studies</a>
					<a href="">Skills</a>
					<a href="">Por ver</a>

					{isOpen && <IconSocialSection />}
				</div>
				<div className={`burger_menu ${isOpen && 'open'}`} onClick={ () => setIsOpen(!isOpen)} >
					<span className="line_one"></span>
					<span className="line_two"></span>
					<span className="line_tree"></span>
				</div>
			</nav>
		</div>
	)
}
