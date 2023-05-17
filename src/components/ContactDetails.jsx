import "../css/AboutMe/contactdetails.css";
import GithubPic from "../assets/GitHub_Logo_White.png";
import LinkedIn from "../assets/linkedin.png";
import Email from "../assets/Graphicloads-100-Flat-2-Email.256.png";

function ContactDetails() {
  return (
    <div className="contact-container">
      <a target="_blank" href="https://github.com/troskan">
        <img src={GithubPic} alt="" />
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/alvin-strandberg-612954253/"
      >
        <img src={LinkedIn} alt="" />
      </a>
      <a target="_blank" href="mailto: alvin.strandberg@proton.me">
        <img src={Email} alt="" />
      </a>
    </div>
  );
}
export default ContactDetails;
