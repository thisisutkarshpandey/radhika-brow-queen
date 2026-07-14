"use client";

import {
  ArrowUpRight,
  Instagram,
  MapPin,
  MessageCircle,
  Scissors,
  Sparkles,
  Star,
} from "lucide-react";

const phone = "16477668107";
const instagram = "https://www.instagram.com/radhika_the_brow_queen/?hl=en";

const services = [
  ["01", "Brow Threading", "Detailed shaping designed around your natural brow line and facial features."],
  ["02", "Waxing", "Comfortable, efficient waxing for smooth results and a relaxed experience."],
  ["03", "Facials", "Personalized skin care for a clean, refreshed and naturally radiant finish."],
  ["04", "Hair", "Consultation-led haircuts, layers and styling tailored to your look."],
];

const reviews = [
  ["Gurleen Mann", "She always does an amazing job, pays great attention to detail, and makes the experience comfortable every time."],
  ["Shannon Prasad", "I’ve never loved the shape of my eyebrows as much as I do now. She is fast with her threading."],
  ["Adriana A.", "She was incredibly sweet, attentive, and truly listened to what I wanted. My haircut turned out amazing."],
];

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="Radhika the Brow Queen home">
      <span>Radhika</span>
      <small>THE BROW QUEEN</small>
    </a>
  );
}

export default function Home() {
  return (
    <main id="top">
      <header className="nav shell">
        <Brand />
        <nav>
          <a href="#services">Services</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="miniButton" href={`sms:${phone}`}>Book now <ArrowUpRight size={15} /></a>
      </header>

      <section className="hero shell">
        <div className="heroCopy">
          <p className="kicker">PRIVATE BEAUTY STUDIO · SOUTHWEST EDMONTON</p>
          <h1>Beautiful brows.<br /><em>Beautiful confidence.</em></h1>
          <p className="lead">Thoughtful eyebrow threading, beauty and hair services in a warm, welcoming home studio.</p>
          <div className="actions">
            <a className="button solid" href={`sms:${phone}`}><MessageCircle size={17} /> Text to book</a>
            <a className="button quiet" href={instagram} target="_blank" rel="noreferrer"><Instagram size={17} /> View Instagram</a>
          </div>
          <div className="trustLine">
            <div className="stars">★★★★★</div>
            <span>Loved for precise shaping, gentle service and personal attention.</span>
          </div>
        </div>

        <div className="heroVisual" aria-label="Soft feminine brow studio illustration">
          <div className="blushShape blushOne" />
          <div className="blushShape blushTwo" />
          <div className="portraitCard">
            <div className="portraitLine">
              <span className="brow left" /><span className="brow right" />
              <span className="eye eyeLeft" /><span className="eye eyeRight" />
              <span className="nose" />
            </div>
            <p>soft beauty<br />beautifully shaped</p>
          </div>
          <div className="floatingNote"><Sparkles size={17} /> Gentle. Detailed. Personal.</div>
        </div>
      </section>

      <section className="introBand">
        <div className="shell introGrid">
          <p className="kicker">THE EXPERIENCE</p>
          <p className="editorialText">Every appointment is approached with patience, care and an eye for detail—so the result feels polished, natural and completely you.</p>
        </div>
      </section>

      <section className="services shell" id="services">
        <div className="sectionTop">
          <div>
            <p className="kicker">SERVICES</p>
            <h2>Beauty services, made personal.</h2>
          </div>
          <p>Simple, thoughtful care for brows, skin and hair—all in one welcoming space.</p>
        </div>
        <div className="serviceGrid">
          {services.map(([num, title, text], index) => (
            <article className={`serviceCard card${index + 1}`} key={title}>
              <span className="serviceNumber">{num}</span>
              <div className="serviceIcon">{index === 3 ? <Scissors size={19} /> : <Sparkles size={19} />}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <p className="finePrint">Full service availability and pricing can be confirmed directly when booking.</p>
      </section>

      <section className="loveSection shell">
        <div className="loveVisual">
          <span>RQ</span>
          <p>Beauty should feel<br />easy, warm and personal.</p>
        </div>
        <div className="loveCopy">
          <p className="kicker">WHY CLIENTS RETURN</p>
          <h2>A small studio with a loyal following.</h2>
          <ul>
            <li><Star size={16} /> Precise, natural-looking brow shaping</li>
            <li><Star size={16} /> Fast and gentle threading technique</li>
            <li><Star size={16} /> Honest consultation and personal attention</li>
            <li><Star size={16} /> Warm, comfortable home-studio experience</li>
          </ul>
        </div>
      </section>

      <section className="reviews" id="reviews">
        <div className="shell">
          <div className="sectionTop reviewHeading">
            <div>
              <p className="kicker">CLIENT LOVE</p>
              <h2>Kind words from happy clients.</h2>
            </div>
            <a className="textLink" href="https://www.google.com/search?q=Radhika+the+Brow+Queen+Edmonton+reviews" target="_blank" rel="noreferrer">Read Google reviews <ArrowUpRight size={16} /></a>
          </div>
          <div className="reviewGrid">
            {reviews.map(([name, quote]) => (
              <article className="reviewCard" key={name}>
                <div className="smallStars">★★★★★</div>
                <p>“{quote}”</p>
                <strong>{name}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="instagram shell">
        <div>
          <p className="kicker">LATEST WORK</p>
          <h2>See more on Instagram.</h2>
          <p>Browse Radhika’s latest brow shaping, haircuts and client transformations.</p>
          <a className="button quiet" href={instagram} target="_blank" rel="noreferrer"><Instagram size={17} /> @radhika_the_brow_queen</a>
        </div>
        <a className="instagramPanel" href={instagram} target="_blank" rel="noreferrer">
          <span className="instaWord">brows</span>
          <span className="instaWord middle">beauty</span>
          <span className="instaWord end">confidence</span>
          <ArrowUpRight className="instaArrow" size={28} />
        </a>
      </section>

      <section className="contact shell" id="contact">
        <div className="contactCard">
          <p className="kicker">BOOK AN APPOINTMENT</p>
          <h2>Your next beauty appointment starts with a text.</h2>
          <p>Flexible appointments from a private home studio in Southwest Edmonton. Exact arrival details are shared when your appointment is confirmed.</p>
          <div className="actions">
            <a className="button solid" href={`sms:${phone}`}><MessageCircle size={17} /> Text (647) 766-8107</a>
            <a className="button quiet" href={`tel:+${phone}`}>Call instead</a>
          </div>
        </div>
        <div className="locationCard">
          <MapPin size={23} />
          <div><span>LOCATION</span><strong>Southwest Edmonton, Alberta</strong><p>Private home studio · By appointment</p></div>
        </div>
      </section>

      <footer className="footer shell">
        <Brand />
        <p>Threading · Waxing · Facials · Hair</p>
        <div><a href={`tel:+${phone}`}>Call</a><a href={`sms:${phone}`}>Text</a><a href={instagram} target="_blank" rel="noreferrer">Instagram</a></div>
        <small>© 2026 Radhika the Brow Queen</small>
      </footer>

      <a className="mobileBook" href={`sms:${phone}`}><MessageCircle size={17} /> Text to book</a>
    </main>
  );
}
