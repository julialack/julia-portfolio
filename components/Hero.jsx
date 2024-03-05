import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero-container">
      <Image
        src="/katt.jpg"
        className="profile-img"
        width={300}
        height={300}
        alt="Julias personal headshot"
      />
      <div className="hero-text">
        <h1>Hey, I'm Julia 👋</h1>
        <p>
          I'm a software developer based in Stockholm, Sweden with a passion for
          building web applications and solving problems.
        </p>
        <div className="social-icons">
          <a
            href="https://twitter.com"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href="https://github.com/julialack"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
