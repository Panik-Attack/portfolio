import { IconSocialSection } from "../../components/IconSocialSeccion/IconSocialSection";
import { Tittle } from "../../components/Tittle/Tittle";

export const Footer = () => {
	return (
		<footer className="footer_container">
			<div className="footer">
				<div className="tittle_container">
					<Tittle tittle="Contact" />
				</div>
				<IconSocialSection />
			</div>
		</footer>
	);
};
