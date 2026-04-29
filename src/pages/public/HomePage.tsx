// Public Home Page - mock only, no real submit

import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="public-home">
      <header>
        <img src="/assets/background.jpg" alt="Background" className="hero-background" />
        <div className="hero-content">
          <h1>אף יהודי אינו לבדו</h1>
          <div className="cta-buttons">
            <Link to="/minyan" className="cta-button">בקשה לקריאת מניין</Link>
            <Link to="/kaddish" className="cta-button">בקשה לקדיש</Link>
          </div>
        </div>
      </header>
      <section className="what-we-do">
        <h2>מה אנחנו עושים</h2>
        <div className="cards">
          <div className="card">
            <h3>מניינים</h3>
            <p>מציאת מניינים קרובים למקום מגוריך</p>
          </div>
          <div className="card">
            <h3>קדיש</h3>
            <p>סיוע בבקשות קדיש</p>
          </div>
          <div className="card">
            <h3>מתנדבים</h3>
            <p>הצטרפות כמתנדב</p>
          </div>
        </div>
      </section>
      <section className="activity-numbers">
        <h2>הפעילות שלנו</h2>
        <div className="numbers">
          <div className="number">
            <strong>200+</strong>
            <p>מניינים</p>
          </div>
          <div className="number">
            <strong>500+</strong>
            <p>בקשות קדיש</p>
          </div>
          <div className="number">
            <strong>100+</strong>
            <p>מתנדבים</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;