import { BackgroundAnimation } from "../../components/BackgroundAnimation/BackgroundAnimation";
import { SkillList } from "../../components/SkillList/SkillList";
import { Tittle } from "../../components/Tittle/Tittle";

export const SkillsSection = () => {
	return (
		<section className="generic_section-container-transparent" id="skillsSection">
      <BackgroundAnimation />
			<div className="section">
				<Tittle tittle="Soft Skills" />
        <div className="grid_section">
            <p>-English: B2</p>
            <p>-Spanish: Native</p>
            <p>-Teamwork</p>
            <p>-Empathy</p>
            <p>-Good sense of humor</p>
            <p>-TDD</p>
            <p>-Scrum</p>
            <p>-Colective poprerty</p>
            <p>-Web Development</p>
            <p>-Movile Development</p>
        </div>
        <Tittle tittle="Hard Skills" />
        <SkillList />
			</div>
		</section>
	);
};
