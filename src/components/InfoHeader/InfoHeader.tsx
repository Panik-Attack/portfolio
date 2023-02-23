import photo from "../../assets/yo.jpg";
import { IconSocialSection } from "../IconSocialSeccion/IconSocialSection";

export const InfoHeader = () => {
	return (
		<div className="info_header-container">
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
				<IconSocialSection />

				<div className="buttons_section">
					<button className="primary_btn">
						Download CV
					</button>
				</div>
			</div>
		</div>
	);
};
