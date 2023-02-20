import photo from "../../assets/yo.jpg";
import gitHubIcon from "../../assets/icons/githubIcon.png";
import linkedinIcon from "../../assets/icons/linkedinIcon.png";
import mailIcon from "../../assets/icons/emailIcon.png";

export const InfoHeader = () => {
	return (
		<div className="info_header">
			<img className="img_header" src={photo} alt="eduardo photo" />
			<div className="info_section">
				<h1>
					Eduardo Javier <br />
					Garcia Alfonso
				</h1>
				<h2>- Computer Engineer</h2>
				<h2>- Frontend Developer</h2>
			</div>
			<div className="icons_section">
				<button className="button_icons">
					<img src={gitHubIcon} alt="github logo"/>
				</button>

				<button className="button_icons">
					<img
					 style={{maxWidth: '45px',maxHeight: '45px' }}
						src={linkedinIcon}
						alt="linkedin logo"
					/>
				</button>

				<button className="button_icons">
					<img src={mailIcon} alt="mail logo" />
				</button>
			</div>

			<div className="buttons_section">
				<button
				className="secundary_btn"
				>Contact</button>

				<button
				className="primary_btn"
				>Download CV</button>
			</div>
		</div>
	);
};
