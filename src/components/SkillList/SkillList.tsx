import htmlIcon from "../../assets/icons/htmlIcon.png";
import cssIcon from "../../assets/icons/cssIcon.png";
import javascriptIcon from "../../assets/icons/javascriptIcon.png";
import pythonIcon from "../../assets/icons/pythonIcon.png";
import reactIcon from "../../assets/icons/reactIcon.png";
import reduxIcon from "../../assets/icons/reduxIcon.png";
import typescriptIcon from "../../assets/icons/typescriptIcon.png";
import viteIcon from "../../assets/icons/viteIcon.png";
import sassIcon from "../../assets/icons/sassIcon.png";

export const SkillList = () => {
	const iconsList = [

    {icon: htmlIcon, alt: 'htmlicon'},
		{icon: cssIcon, alt: 'cssicon'},
		{icon: javascriptIcon, alt: 'javascriptIcon'},
		{icon: typescriptIcon, alt: 'typescriptIcon'},
		{icon: reactIcon, alt: 'reactIcon'},
		{icon: reduxIcon, alt: 'reduxIcon'},
		{icon: viteIcon, alt: 'viteIcon'},
		{icon: pythonIcon, alt: 'pythonIcon'},
		{icon: sassIcon, alt: 'sassIcon'},
	
  ];
	return <ul className="grid_section-three-columns list">{iconsList.map( ({icon, alt}) => 
  
  <li key={alt}>
     <img src={icon} alt={alt} />
  </li> 
  
  )}</ul>;
};
