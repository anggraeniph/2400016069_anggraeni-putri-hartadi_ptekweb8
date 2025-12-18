import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{
        height: "calc(100vh - 80px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        background: "linear-gradient(135deg, #2b1055, #12002f)",
        textAlign: "center",
    }}>

      <h1 style={{ fontSize: "64px", marginBottom: "10px" }}>404</h1>
      <p style={{ fontSize: "18px", marginBottom: "30px" }}>
        Halaman detail project belum tersedia.
      </p>
      <Link
        to="/projects"
        style={{
          padding: "12px 24px",
          borderRadius: "999px",
          background: "#a855f7",
          color: "white",
          textDecoration: "none",
          fontWeight: "600",
        }}
      >
        Kembali ke Projects
      </Link>
    </div>
  );
}
