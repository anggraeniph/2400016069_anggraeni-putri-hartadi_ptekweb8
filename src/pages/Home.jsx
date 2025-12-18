import { Link } from "react-router-dom";
import profile from "../assets/profile.jpeg";

function Home() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <span className="badge">Welcome to my Portofolio</span>

          <h1>
            Hi! I’m <br /> Anggraeni Putri <br /> Hartadi
          </h1>

          <p>
            Saya seorang mahasiswa Sistem Informasi yang tertarik pada web
            development, UI/UX, dan pengembangan aplikasi modern.
          </p>

          <Link to="/contact">
            <button className="btn-primary">Let’s Contact</button>
          </Link>
        </div>

        <div className="hero-image">
          <img src={profile} alt="Profile" />
        </div>
      </div>
    </section>
  );
}

export default Home;
