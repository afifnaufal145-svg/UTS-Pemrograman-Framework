
import { BrowserRouter, Routes, Route, NavLink } from "react-router";
import {
  Button,
  Card,
  CardContent,
  Avatar,
  Chip,
  Stack
} from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import CodeIcon from "@mui/icons-material/Code";

import "./App.css";

// Navigasi utama
function Navigation() {
  const menus = [
    { name: "Profil", path: "/", icon: <PersonIcon /> },
    { name: "Pendidikan", path: "/pendidikan", icon: <SchoolIcon /> },
    { name: "Pengalaman", path: "/pengalaman", icon: <WorkIcon /> },
    { name: "Keahlian", path: "/keahlian", icon: <CodeIcon /> }
  ];

  return (
    <nav className="navigation">
      <NavLink to="/" className="brand">
        AFIF.
      </NavLink>

      <div className="nav-menu">
        {menus.map((menu) => (
          <NavLink
            key={menu.path}
            to={menu.path}
            end={menu.path === "/"}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            {menu.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

// Halaman Profil
function Profil() {
  return (
    <div className="page-content">
      <section className="hero-card">
        <div className="hero-text">
          <span className="small-label">SELAMAT DATANG DI CV SAYA</span>
          <h1>Halo, saya Afif!</h1>
          <h2>Mahasiswa Informatika</h2>

          <p>
            Saya memiliki ketertarikan pada teknologi, pengembangan web,
            desain digital, dan terus berusaha mengembangkan kemampuan
            serta pengalaman saya.
          </p>

          <div className="hero-buttons">
            <Button
              variant="contained"
              component="a"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=afifnaufal@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<EmailIcon />}
              className="main-button"
            >
              Hubungi Saya
            </Button>

            <Button
              variant="contained"
              component="a"
              href="https://www.instagram.com/afif.ishmat/"
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<InstagramIcon />}
              className="secondary-button"
            >
              Instagram
            </Button>
          </div>
        </div>

        <div className="hero-photo">
          <Avatar
            src="/img/AF-1.jpg"
            alt="Foto Afif"
            variant="rounded"
            className="profile-photo"
          />
        </div>
      </section>

      <section className="info-card">
        <h2>Informasi Profil</h2>
        <div className="info-grid">
          <div>
            <span>Nama Lengkap</span>
            <strong>Afif Ishmat Naufal</strong>
          </div>
          <div>
            <span>Tempat, Tanggal Lahir</span>
            <strong>Surabaya, 13 Mei 2004</strong>
          </div>
          <div>
            <span>Status</span>
            <strong>Mahasiswa</strong>
          </div>
          <div>
            <span>Program Studi</span>
            <strong>Informatika</strong>
          </div>
        </div>
      </section>
    </div>
  );
}

// Halaman Pendidikan
function Pendidikan() {
  return (
    <div className="page-content">
      <div className="page-heading">
        <span className="small-label">LATAR BELAKANG AKADEMIK</span>
        <h1>Riwayat Pendidikan</h1>
        <p>Perjalanan pendidikan dan pengembangan akademik saya.</p>
      </div>

      <Card className="content-card">
        <CardContent>
          <div className="timeline-item">
            <Chip label="2019 – 2022" className="date-chip" />
            <h2>SMA Unggulan Amanatul Ummah</h2>
            <p>Sekolah Menengah Atas</p>
          </div>

          <div className="timeline-item">
            <Chip label="2023 – Sekarang" className="date-chip" />
            <h2>Universitas Insan Cita Indonesia</h2>
            <p>S1 Informatika</p>
            <p className="muted-text">
              Program perkuliahan daring.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Halaman Pengalaman
function Pengalaman() {
  return (
    <div className="page-content">
      <div className="page-heading">
        <span className="small-label">PENGALAMAN PROFESIONAL</span>
        <h1>Pengalaman Kerja</h1>
        <p>Pengalaman dan aktivitas yang pernah saya jalani.</p>
      </div>

      <Card className="content-card">
        <CardContent>
          <div className="timeline-item">
            <Chip label="Nov 2025 – Feb 2026" className="date-chip" />
            <h2>Riders Kopi Keliling (Sejuta Jiwa)</h2>
            <p>Pengalaman kerja freelance.</p>
          </div>

          <div className="timeline-item">
            <Chip label="Nov 2025 – Feb 2026" className="date-chip" />
            <h2>PT Danamas Insan Kreasi Andalan (DIKA)</h2>
            <p>Pengalaman kerja freelance.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Halaman Keahlian
function Keahlian() {
  const skills = [
    "Python",
    "Java",
    "CSS",
    "Microsoft Office",
    "Komunikasi",
    "Kerja Sama Tim",
    "Desain Grafis Dasar",
    "CapCut",
    "Kinemaster",
    "Bahasa Inggris Dasar"
  ];

  return (
    <div className="page-content">
      <div className="page-heading">
        <span className="small-label">KEMAMPUAN DIRI</span>
        <h1>Keahlian</h1>
        <p>Kemampuan teknis dan nonteknis yang saya miliki.</p>
      </div>

      <Card className="content-card">
        <CardContent>
          <h2>Daftar Keahlian</h2>
          <Stack direction="row" flexWrap="wrap" gap={1.5}>
            {skills.map((skill) => (
              <Chip
                key={skill}
                label={skill}
                className="skill-chip"
              />
            ))}
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
}

// Komponen utama
function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navigation />

        <main>
          <Routes>
            <Route path="/" element={<Profil />} />
            <Route path="/pendidikan" element={<Pendidikan />} />
            <Route path="/pengalaman" element={<Pengalaman />} />
            <Route path="/keahlian" element={<Keahlian />} />
          </Routes>
        </main>

        <footer>
          <p>© 2026 Afif Ishmat Naufal · Personal CV</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
