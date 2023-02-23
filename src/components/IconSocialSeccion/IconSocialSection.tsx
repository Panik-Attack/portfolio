import gitHubIcon from "../../assets/icons/githubIcon.png";
import linkedinIcon from "../../assets/icons/linkedinIcon.png";
import twitterIcon from "../../assets/icons/twitterIcon.png";
import emailIcon from "../../assets/icons/emailIcon.png";


export const IconSocialSection = () => {
	return (
		<div className="icons_section">
			<a
				className="button_icons"
				href="https://github.com/Panik-Attack"
				target={"_blank"}
			>
				<img src={gitHubIcon} alt="github logo" />
			</a>

			<a
				className="button_icons"
				href="https://www.linkedin.com/in/eduardojga/"
				target="_blank"
			>
				<img
					style={{ maxWidth: "45px", maxHeight: "45px" }}
					src={linkedinIcon}
					alt="linkedin logo"
				/>
			</a>

			<a
				className="button_icons"
				href="https://twitter.com/EduardoJGA1"
				target="_blank"
			>
				<img
					style={{ maxWidth: "4.5rem", maxHeight: "4.5rem" }}
					src={twitterIcon}
					alt="mail logo"
				/>
			</a>
			<a
				className="button_icons"
				target="_blank"
				href="mailto:eduardojga.oficina@gmail.com"
				rel="noreferrer"
			>
				<img 
				style={{ maxWidth: "5.5rem", maxHeight: "5.5rem" }}
				src={emailIcon} 
				alt="emailIcon" />

			</a>
		</div>
	);
};
