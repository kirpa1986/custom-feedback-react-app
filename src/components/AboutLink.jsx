import { Link } from "react-router-dom";
import {FaQuestionCircle} from 'react-icons/fa'


function AboutLink() {
  return (

      <Link to="about" className="about-link"><FaQuestionCircle/></Link>

  );
}

export default AboutLink;
