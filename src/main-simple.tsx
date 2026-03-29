import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

const SimpleApp = () => (
  <div className="app-root">
    <div className="noise-overlay" />
    <header className="site-header">
      <div className="header-inner">
        <div className="brand">
          <span className="brand-mark">HK</span>
          <span className="brand-text">Hamza A. Khan</span>
        </div>
      </div>
    </header>
    <main>
      <section className="hero-section">
        <div className="hero-inner">
          <div className="hero-text">
            <h1>Test Page Working!</h1>
            <p>If you can see this, React is working correctly.</p>
          </div>
        </div>
      </section>
    </main>
  </div>
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SimpleApp />
  </React.StrictMode>
);
