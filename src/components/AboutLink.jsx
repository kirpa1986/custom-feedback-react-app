import { Link, useNavigate } from "react-router-dom";
import {FaQuestionCircle} from 'react-icons/fa'


function AboutLink() {
  // const nav = useNavigate();

  // const handleClick = () => {
  //   nav('/about')
  // }
  return (

      <Link to="about" className="about-link"><FaQuestionCircle/></Link>
      // <button onClick={handleClick} className='about-link'><FaQuestionCircle/></button>
  );
}

export default AboutLink;
