import IntroAboutMe from "../components/IntroAboutMe";
import ContactDetails from "../components/ContactDetails";
import Login from "../components/Login/Login";
import Register from "../components/Login/Register";

function AboutMe() {
  return (
    <div>
      <Login />
      <Register />
      <IntroAboutMe />
      <ContactDetails />
    </div>
  );
}

export default AboutMe;
