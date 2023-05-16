import "../css/AboutMe/aboutme.css";

function IntroAboutMe() {
  return (
    <div className="intro-container">
      <section className="text-section">
        {" "}
        <h2>Hello!</h2>
        <p>
          Who am I? My name is Alvin and live on the country side in west coast
          Sweden. I am of 27 years of age and I am a former carpenter by 7 seven
          years. I am now on a path to become a full stack developer and is
          studying .Net platform.
          <br /> <br /> My free time is spent with my family and the other half
          is spent working on the house, logging or just simply riding my
          bicycle.
          <br /> <br /> I have huge interest in programming, hit me up:
          Alvin.strandberg@proton.me
        </p>
      </section>

      <img
        src="src\assets\profile-pic-blur.png"
        alt="picture of Alvin Strandberg"
        className="profile-pic"
      />
    </div>
  );
}

export default IntroAboutMe;
