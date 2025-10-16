import React from "react";
import "./GospelitoPageV2.css";
import { FaEnvelope, FaInstagram } from "react-icons/fa";

export default function GospelitoPageV2() {
  const buyUrl = "https://www.amazon.com/author/gospelito-books"; // LIVE product/author link
  const email = "gospelitobooks@gmail.com";
  const instagram = "https://www.instagram.com/gospelcoloringbook/";

  return (
    <div className="gp-page">
      <header className="gp-header">
        <div className="gp-header__inner">
          <div className="gp-logo">Gospelito Books</div>
          <nav className="gp-nav">
            <a href="#inside" className="gp-nav__link">
              Inside
            </a>
            <a href="#details" className="gp-nav__link">
              Details
            </a>
            <a href="#reviews" className="gp-nav__link">
              Reviews
            </a>
            <a href="#faq" className="gp-nav__link">
              FAQ
            </a>
          </nav>
        </div>
      </header>

      <main>
        <div className="gp-container">
          {/* Hero */}
          <section className="gp-hero">
            <div className="gp-hero__left">
              <div className="gp-badge">
                <span>2026 Edition</span>
                <span className="gp-badge__divider" />
                <span>Weekly coloring + Gospel</span>
              </div>
              <h1 className="gp-title">Sunday Gospel Coloring Book</h1>
              <div className="gp-subtitle">
                Built for families, catechists, and classrooms.
              </div>
              <p className="gp-subcopy"></p>
              <div className="gp-hero__buttons">
                <a
                  href={buyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="gp-btn gp-btn--primary"
                >
                  Get the 2026 Edition on Amazon →
                </a>
                <a href="#inside" className="gp-btn gp-btn--ghost">
                  Preview pages
                </a>
              </div>
              {/* <div className="gp-trust">
                <div className="gp-stars" aria-label="5 out of 5 stars">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
                <span className="gp-trust__text">
                  Loved by parents & teachers
                </span>
              </div> */}
            </div>

            <aside className="gp-book">
              <a href={buyUrl} target="_blank" rel="noreferrer">
                <img
                  src="/professional_cover_3.png"
                  alt="Sunday Gospel Coloring Book 2026 cover"
                  className="gp-book__img"
                />
              </a>
              <div className="gp-book__meta">8.5" × 11" • 120+ pages</div>
            </aside>
          </section>

          {/* Features */}
          <section id="details" className="gp-section">
            <h2 className="gp-section__title">Why parents choose Gospelito</h2>
            <div className="gp-features">
              <div className="gp-feature">
                <div className="gp-feature__title">Weekly Rhythm</div>
                <p>
                  Follow the liturgical year with bite-sized summaries written
                  for young readers.
                </p>
              </div>
              <div className="gp-feature">
                <div className="gp-feature__title">Engaging Art</div>
                <p>
                  Original, joyful illustrations that invite kids to color,
                  reflect, and remember.
                </p>
              </div>
              <div className="gp-feature">
                <div className="gp-feature__title">
                  Made for Families & Classrooms
                </div>
                <p>
                  Perfect for Sunday mornings, CCD/RE programs, or quiet time
                  activities.
                </p>
              </div>
            </div>
          </section>

          {/* Inside preview */}
          <section id="inside" className="gp-section">
            <h2 className="gp-section__title">A peek inside</h2>
            <div className="gp-gallery">
              <img
                className="gp-thumb"
                src="/preview4.png"
                alt="Inside preview 1"
              />
              <img
                className="gp-thumb"
                src="/preview3.png"
                alt="Inside preview 2"
              />
              <img
                className="gp-thumb"
                src="/preview1.png"
                alt="Inside preview 3"
              />
            </div>
          </section>

          {/* Perfect for */}
          <section className="gp-section">
            <h2 className="gp-section__title">Perfect for</h2>
            <div className="gp-perfect">
              <div className="gp-checklist">
                <div className="gp-check">
                  <span className="gp-check__dot" />
                  Parents guiding kids through the weekly Gospel at home
                </div>
                <div className="gp-check">
                  <span className="gp-check__dot" />
                  Religious educators & catechists seeking engaging handouts
                </div>
                <div className="gp-check">
                  <span className="gp-check__dot" />
                  Grandparents gifting a faith-filled activity book
                </div>
              </div>
              <div className="gp-checklist">
                <div className="gp-check">
                  <span className="gp-check__dot" />
                  Homeschool families building a Sunday routine
                </div>
                <div className="gp-check">
                  <span className="gp-check__dot" />
                  Parishes looking for simple weekly take-home resources
                </div>
                <div className="gp-check">
                  <span className="gp-check__dot" />
                  Kids ages 2–10 who love to color and create
                </div>
              </div>
            </div>
          </section>

          {/* Reviews */}
          <section id="reviews" className="gp-section">
            <h2 className="gp-section__title">What readers say</h2>
            <div className="gp-reviews">
              <div className="gp-review">
                <div className="gp-stars" aria-label="5 out of 5 stars">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
                <div className="gp-review__title">
                  I can use in my CCD class
                </div>
                <p>
                  “At first look, I knew I could use it in my CCD classes. The
                  lessons line up perfectly with the weekly Gospels, and the
                  kids actually look forward to coloring time!”<br></br>
                  <br></br>— Rena M., <b>CCD Teacher</b>
                </p>
              </div>

              <div className="gp-review">
                <div className="gp-stars" aria-label="5 out of 5 stars">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
                <div className="gp-review__title">
                  A part of our Sunday routine
                </div>
                <p>
                  “Each page sparks a great conversation about Jesus, and it’s
                  become part of our Sunday morning routine.”<br></br>
                  <br></br> — Jackie B., <b>Mom of 5</b>
                </p>
              </div>

              <div className="gp-review">
                <div className="gp-stars" aria-label="5 out of 5 stars">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
                <div className="gp-review__title">
                  Keeps my girls happy during Mass
                </div>
                <p>
                  “This keeps my girls quietly occupied during Mass while
                  they’re unconsciously learning the Gospel stories. It’s
                  exactly what I was looking for.”<br></br>
                  <br></br>— Amy B., <b>Mom of 2</b>
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="gp-section">
            <h2 className="gp-section__title">Frequently asked questions</h2>
            <div className="gp-faq">
              <div className="gp-faq__item">
                <div className="gp-faq__q">What age range?</div>
                <p>
                  Ideal for ages 2–10 - or whatever age your child can draw!
                  Older siblings can help read the weekly summary.
                </p>
              </div>
              <div className="gp-faq__item">
                <div className="gp-faq__q">
                  What days does the coloring book cover?
                </div>
                <p>
                  All 52 Sundays of the year, including Easter and Christmas!
                </p>
              </div>
              <div className="gp-faq__item">
                <div className="gp-faq__q">
                  What’s the best way to use the coloring book with a young
                  child?
                </div>
                <p>
                  Many parents bring it to Mass so their children can quietly
                  color during the readings or homily - keeping them engaged
                  while gently learning the Gospel message. Afterwards, you can
                  read the short summary together at home and talk about what
                  the story means.
                </p>
              </div>
              <div className="gp-faq__item">
                <div className="gp-faq__q">
                  Can I get this coloring book for next year?
                </div>
                <p>
                  Yes! Our team releases a new edition of the Sunday Gospel
                  Coloring Book every October — just in time for early Christmas
                  shopping! Check back here to order the upcoming year’s
                  edition!
                </p>
              </div>
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="gp-section">
            <div className="gp-cta">
              <div>
                <div className="gp-cta__title">
                  Ready to start a joyful Sunday routine?
                </div>
                <div className="gp-cta__sub">
                  Grab the 2026 edition and make every week creative and
                  prayerful.
                </div>
              </div>
              <a
                href={buyUrl}
                target="_blank"
                rel="noreferrer"
                className="gp-btn gp-btn--blue"
              >
                Buy on Amazon →
              </a>
            </div>
          </section>
        </div>
      </main>

      <footer className="gp-footer">
        <div className="gp-container gp-footer__inner">
          <div>© {new Date().getFullYear()} Gospelito Books</div>
          <div className="gp-footer__links">
            <a
              href={instagram}
              className="gp-footer__link"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="icon" />
            </a>
            <a
              href={`mailto:${email}`}
              className="gp-footer__link gp-footer__link--email"
            >
              <FaEnvelope className="icon" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
