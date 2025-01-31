import { useState } from "react";
import "./App.css";

function App() {
  const [tab, setTab] = useState("home");

  const blogPosts = [
    { title: "Jak skutecznie się uczyć?", description: "Poznaj metody efektywnej nauki i popraw swoje wyniki!", id: 1 },
    { title: "5 najlepszych aplikacji do nauki", description: "Sprawdź, jakie narzędzia pomogą Ci w codziennej nauce.", id: 2 },
    { title: "Jak organizować czas?", description: "Zarządzanie czasem to klucz do sukcesu – zobacz nasze porady.", id: 3 },
  ];

  return (
    <div className="container bg-[#f4f4f4]">
      <header className="header text-white">
        <h1 className="logo">Portal Edukacyjny</h1>
        <nav className="nav">
          <button onClick={() => setTab("home")} className={`nav-btn ${tab === "home" ? "active" : ""}`}>
            Home
          </button>
          <button onClick={() => setTab("about")} className={`nav-btn ${tab === "about" ? "active" : ""}`}>
            O nas
          </button>
          <button onClick={() => setTab("contact")} className={`nav-btn ${tab === "contact" ? "active" : ""}`}>
            Kontakt
          </button>
          <button onClick={() => setTab("dashboard")} className={`nav-btn ${tab === "dashboard" ? "active" : ""}`}>
            Panel
          </button>
        </nav>
      </header>

      {/* Treść strony */}
      <main className="content">
        {tab === "home" && (
          <section className="section">
            <h2>Witamy w Portalu Edukacyjnym</h2>
            <p>Twoje miejsce do nauki i rozwoju!</p>
            <p>Sprawdź nasze kursy i dołącz do społeczności uczniów!</p>

            <h3 className="blog-title">Najnowsze artykuły</h3>
            <div className="blog-grid">
              {blogPosts.map((post) => (
                <div key={post.id} className="blog-card">
                  <h4>{post.title}</h4>
                  <p>{post.description}</p>
                  <button className="blog-btn">Przejdź</button>
                </div>
              ))}
            </div>
          </section>
        )}
        {tab === "about" && (
          <section className="section">
            <h2>O nas</h2>
            <p>Jesteśmy zespołem pasjonatów, którzy chcą pomóc uczniom w nauce.</p>
            <h3>Co oferujemy?</h3>
            <ul className="list">
              <li>✅ Darmowe materiały edukacyjne</li>
              <li>✅ Dostęp do interaktywnych kursów</li>
              <li>✅ Wsparcie nauczycieli i mentorów</li>
              <li>✅ Forum dla uczniów</li>
            </ul>
          </section>
        )}
        {tab === "contact" && (
          <section className="section">
            <h2>Kontakt</h2>
            <p>Masz pytania? Skontaktuj się z nami:</p>
            <form className="contact-form">
              <input type="text" placeholder="Twoje imię" className="input" />
              <input type="email" placeholder="Twój email" className="input" />
              <textarea placeholder="Twoja wiadomość" className="textarea"></textarea>
              <button type="submit" className="submit-btn">Wyślij</button>
            </form>
          </section>
        )}
        {tab === "dashboard" && (
          <section className="section">
            <h2>Panel użytkownika</h2>
            <p>Tu znajdziesz swoje kursy i materiały edukacyjne.</p>
            <div className="course-grid">
              <div className="course-card">
                <h3>📘 Kurs HTML & CSS</h3>
                <p>Podstawy tworzenia stron internetowych</p>
              </div>
              <div className="course-card">
                <h3>📗 Kurs JavaScript</h3>
                <p>Programowanie w języku JS</p>
              </div>
              <div className="course-card">
                <h3>📙 Kurs React</h3>
                <p>Tworzenie dynamicznych aplikacji</p>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
