import IntroAboutMe from "../components/IntroAboutMe";
import ContactDetails from "../components/ContactDetails";
import Login from "../components/Login/Login";
import Register from "../components/Login/Register";
import Dashboard from "../components/Login/Dashboard";

function AboutMe() {
  return (
    <div>
      <Dashboard />
      <Login />
      <Register />
      <IntroAboutMe />
      <ContactDetails />
    </div>
  );
}

export default AboutMe;
