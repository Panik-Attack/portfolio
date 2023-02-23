import { BackgroundAnimation } from "../../components/BackgroundAnimation/BackgroundAnimation";
import { Tittle } from "../../components/Tittle/Tittle";

export const EducationSection = () => {
	return (
		<section className="generic_section-container-transparent" id="educationSection">
			<BackgroundAnimation />
			<div className="section">
				<Tittle tittle="Education" />
				<p>
					Computer Engineer:<br/>
					<br/>
          2023 to present:<br/>
          University of Sancti Spiritus Jose Marti, Sancti Spiritus, Cuba
          <br/>
          <br/>
          2021-09 to 2023-02:<br/> 
          University of Computer Science, Havana, Cuba
				</p>
			</div>
		</section>
	);
};
