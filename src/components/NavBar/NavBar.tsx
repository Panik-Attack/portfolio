export const NavBar = () => {
	return (
		<div className="nav_bar-container">
			<h1>Portfolio</h1>
			<nav className="nav_bar">
				<div className="menu_desktop">
          <a href="">About Me</a>
          <a href="">Studies</a>
          <a href="">Skills</a>
          <a href="">Por ver</a>
        </div>

				<div className="menu_movile">
					<div className="burger_menu">
						<span className="line_one"></span>
						<span className="line_two"></span>
						<span className="line_tree"></span>
					</div>
				</div>
			</nav>
		</div>
	);
};
