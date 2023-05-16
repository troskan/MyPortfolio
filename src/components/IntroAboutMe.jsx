import "../css/AboutMe/aboutme.css";

function IntroAboutMe() {
  return (
    <div className="intro-container">
      <section className="text-section">
        {" "}
        <h2>Hello!👋</h2>
        <p>
          My name is Alvin and I'm 27 years old. I have been working as a
          carpenter for 7 years and have just switched career to programming
          which I totally love!
          <br />
          <br /> If I were to describe myself I'd say I'm a happy and positive
          person, but if you really would like to know more about me dont
          hesitate to contact me!
          <br />
          For more info about who I am and what I do head over to my{" "}
          <a href="/blog">blog</a>.
          <br /> <br /> Contact:
          <a href="mailto: alvin.strandberg@proton.me">
            &nbsp;alvin.strandberg@proton.me
          </a>
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
