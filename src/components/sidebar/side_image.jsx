import "./sidebar.css";
import bgImage from "../../assets/bg-10.png";
const SideImage = () => (
  <div className="side_image_con">
    <h3>Report Fault</h3>

    <div className="imag_con">
      <img src={bgImage} alt="bg" />
    </div>
    <a href="/">Login here</a>
  </div>
);

export default SideImage;
