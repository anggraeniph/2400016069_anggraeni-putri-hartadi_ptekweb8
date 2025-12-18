import "./Projects.css";
import { useState } from "react";
import { Link } from "react-router-dom";


const projectsData = [
  {
    title: "Sistem Informasi Perpustakaan",
    desc: "Aplikasi untuk pengelolaan buku dan peminjaman.",
    tech: "React, Node.js",
    category: "Web App",
  },
  {
    title: "Aplikasi Kasir",
    desc: "Aplikasi POS sederhana untuk toko kecil.",
    tech: "React, Tailwind",
    category: "Web App",
  },
  {
    title: "Landing Page UMKM",
    desc: "Website promosi produk UMKM lokal.",
    tech: "HTML, CSS, JS",
    category: "Website",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <section className="projects-page">
      <h1 className="projects-title">Proyek Saya</h1>

      <div className="projects-filter">
        <button
          className={filter === "All" ? "active" : ""}
          onClick={() => setFilter("All")}
        >
          All
        </button>
        <button
          className={filter === "Web App" ? "active" : ""}
          onClick={() => setFilter("Web App")}
        >
          Web App
        </button>
        <button
          className={filter === "Website" ? "active" : ""}
          onClick={() => setFilter("Website")}
        >
          Website
        </button>
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <span className="tech">Teknologi: {project.tech}</span>
            <Link to={`/projects/${index}`} className="detail-btn">Lihat Detail</Link>

          </div>
        ))}
      </div>
    </section>
  );
}
