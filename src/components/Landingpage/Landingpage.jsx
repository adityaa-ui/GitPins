import React from "react";
import "./Landingpage.css";
import logo from "../../assets/gplogo.jpg";

const pinCards = [
  {
    title: "framer/motion",
    desc: "Production-ready motion library for React.",
    lang: "TypeScript",
    stars: "18k",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCqfmlOAqxW3HHiqSHvzGMmaOvSv8cdH18daAPn9zgdOmXHNNq2nnXNy_C8vrfooqvdOqSbp3_5o2atFcrlHKeP_TfrDFTfKK__m_DLkU4i5ASz7xGOacsMCey4OuuDRYdsbhKydBqrsz6ViHJhqSIny1F0eo_JUHdKLQxo7L6RwL4ZYHsfqxy9ov1EZ0ZFxYowNm2KqQGnh5qINGlZx8Wime__iefD3TTUvl3PTrVlOVMeTZJ1lb2V7scKL1hmFjfH1JHs3Dv0n5PC",
  },
  {
    title: "rust-lang/rust",
    desc: "Empowering everyone to build reliable and efficient software.",
    lang: "Rust",
    stars: "92k",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA1_ix0ZRyjHSm9QLzP80WpccGsb83HlqruV4Utkt7YqnWcjsCoWLVidiAnGJpetrOVc2GNBKyTvJL7j5AWV_Kh2Izuco-wSbrrrvgbmgubLjBLMXsT5ybX7_s-lRW_3K8C-uddB-Q4ci66oMiECDT5lBD45MQXwFnWOfeGK5E7tQ-zmzRZ__qtK7yNO4GtQOQeBAdzpLJBagBhlp_ufRWa99GvaR-JuUxZT-e01wcTPtW3FB5qPzQRk11khIJppJ5ykYH70teRk-jE",
  },
  {
    title: "arduino/core",
    desc: "Official AVR core for Arduino.",
    lang: "C++",
    stars: "4k",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAmXz-x33W45OOWOg79u7rD4870AraT3rreLkbPY0EiAVZAp4VZeB7lvE1UJr1fLl6NXtXOBP64i3vj-ckSSEI0s09BaJNpmc5FzcMNM5Qwmu7JM6KdCoVoyQeLV3OqRYvfHBFFYZ-DpeVe4KaFJMzbISCXO6Iqb7iRIILiPwxbh6or84JK0Z2qnAFjgdyEg5Uf31XE_zUPnf1vcSTV86fIQhjkeDlASy4zfliPB0ep3EGnUPrOuw11DyB0SVDvfgLLJ-a27-MG7buY",
  },
  {
    title: "d3/d3",
    desc: "Bring data to life using HTML, SVG, and CSS.",
    lang: "JavaScript",
    stars: "106k",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBxVgFsNN6qCPQXg2nzHxRYt1uENE9f-CeFJEqbamt2TWQaJ795VjZrwczPyMByBDIHJ6VE4doER7h96jSFQ0Q3ZVLW-gIh4SV39YSm3_FngjEOQjGcUXg7BwHjhEz940EuycZBIJt7cfM-YhrFzsb5HKtrvKtCo5eUHEfxl_6oOx6fEhB77eDTS_EeOHxFYUDdicQGk3RBFawLgQaGREt6aN_SYGy7qmwA-J_kFzgkXw_GOFXrs4zmtsnYmxMs017zuuf1svpL-fZ6",
  },
];

const boards = [
  {
    title: "React Wizards",
    curator: "Alex Rivers",
    count: "+42",
    image1:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDJx7Htlqgxhqc1geTXZ1ZYy9C3RWRDdmYRur2plPlH1yXkpE9zbXd0eGTIO2SZ1WK7xXNuBk6mg7-siQFA4SSbIzb5yB0djbq_PCqH9R63Q1DIxmyNOOmA6bkNT6shbs9TPd4d5nBrda6QFhf_H5w_0I6YZug2WwMKN7HgrS1mqE9PdVT83dDK6UmXuje1p1QUyku8ILhN6T2KjSk2DikJgwj7Isf3bxTQG45L83BJ-HXwFnjrGsAUl47HySpFRl7biwcvN1aG_iZQ",
    image2:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCxy9HKgGs9AsrENyF-IBCVjPtJgsFTQu6kRjODu0BStVvzjXuXmHd0WRnDw4pqD-wv5iy7eEz40zNl0njYweoPm9rgTbXOYJgFEQVnTQkKmvDdk5XN42utGs6WuE_LN9jCEYnHYWFp2-pYaz3F77lVr6Sd-o1dzd1SlSRzIVEHbpqD08sdhhL9wFy4Z8aQbFmK5teTnxxfbu5Ypi-PaKDpERxAaUW-9Ubb6FXXNIKUHwZC_R_npbqd-mY-oaiUI89RfarqL_6B0qu7",
  },
  {
    title: "Cyberpunk Rust",
    curator: "Sarah .js",
    count: "+12",
    image1:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDXfY1v9kQCad9atCoBhRxDvW4ddZO_FaMiSdypa85jVZvt2MSa8WXSOu34woRfHGErT3RqNkOezWW0oWeidSl3Xm9PtbnDRh7qD6ORRO-aFDklwiZcMMgFZ_WNaaVqU2lfUup7QPSPnVSt_IMDU2dGpgYqHi114TpYNSfbAVScYQNhPoU-u7azoWwXgdCZVPkMDDzJ5PuDOa0LI8OrbxVxggCydoY0Su9PDVLCZsNQGjeNCac9kTOVDKJvAPnPNo_tZ4OfBt9jVOXA",
    image2:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDMUhgjE3yGRLaKyDwqilM7gibF6h9lGoxgImifO9neDxo5bvKzMBCzPzyY8zSWSvgM7KrpGSPzBgf1zhdbIUjxWIxmBF5-gXogY_dn3l2FZy7cTprA2wGGtMNt7WT8UIwiQD_lKa4KQm9XE1oIrMQUUqXIXt6vxD8Jm6S0Oo5RApeVzX4mQofHPEiiUYCFbApGj1Y3VayWCMoe6AsE8neL21a7kkxjv0cNsbysD35chKt-4EOxQV0GzQIgTVH32d3D6rfrpXpzk47M",
  },
  {
    title: "AI Tooling",
    curator: "Vector Labs",
    count: "+89",
    image1:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBmU7fkpFIvkJE7AbH9-metfvqu8N3UT2IEzgyhIHxP1tc8PZK1Mmg77iGbkQEAnC_I3LrKM10Q2OUFkVxQapPUAn6oc-m93XQKyghhzYP1uZjdcbSicr1xMUCuaqZMEizn9mpDpUMEBBJnA5ZkmRcHP34hjgGeQY1BaQxHvPs5h2FnHDL-Jrm8DKdrZwKqnGxMYhpVmjpreFXjXtrswtkdXlxzN8mZMKU0Fo2Shs1BIdB8MIkNJA60qD_n72W6Gp1hn70ajJkMuYAb",
    image2:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAsqYw7W92GS1XCOUSgQ6WY74CV7x-x46fOY9mUbtUTQ6uQGq_k6TuJibQkrnlTSp5b05zNXWj5KfqsTBXOYtAnaNAx9dyjVyTEMaOcElttT2875PewP7VkQUp-bVFvmmnBLv2hoJs27hx7xWHjgICrkNJcc9RNv1qOwL1V7a-LhzYAgRKJ6n6ZvhPXAhTMiPBVvTsuVasOO7hTBls_L6CgWZFupw2JFDQHp3yPdRXB-G5hCpd3A2ImmB0d0_HtSFTlJjuWSabDV8FO",
  },
];

export default function Landingpage() {
  return (
    <div className="gitpins">
     
      <nav className="navbar">
        <div className="nav-left">
        
      <div className="brand">
        <img src={logo} alt="GitPins Logo" />
        <h2>
          Git<span>Pins</span>
        </h2>
      </div>

          <ul>
            <li className="active">Explore</li>
            <li>Curators</li>
            <li>Boards</li>
            <li>Changelog</li>
          </ul>
        </div>

        <div className="nav-right">
          <input type="text" placeholder="Search repositories..." />
          <button>Sign Up</button>
        </div>
      </nav>

   
      <section className="hero">
        <div className="hero-left">
          <span className="tag">Discovery Reimagined</span>
          <h1>
            The Pinterest for <span>Developers</span>
          </h1>
          <p>
            Stop searching through endless GitHub lists. Pin the most beautiful
            repositories, curate thematic boards, and explore code as a visual
            artifact.
          </p>
          <div className="hero-buttons">
            <button className="primary-btn">Start Pinning</button>
            <button className="secondary-btn">Explore</button>
          </div>
        </div>

        <div className="hero-right">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRE5IutY5f3O6KcJOcpoZZLi7mkYWdov1UhxxHgEel2sh6ljRNzcUyjWtXv8qjso1x1IsbwL24ecBKwroQZLXS9QXk2IV4QKPTE5kCATi9eFlxbCwiRHr0R72G4pQB8eWnQXpKwt_F27H-9JISeaEZpNlia8AbaZywbNLtHforamoNTh9M-RGymZDRxC7oePvP4yF9YoUD0eCsaYSba-uE6gPHG1qki-P9H4L8Jax9GHRbFNa11TVoklmGSGHHtcF4EMtmCQLy9QPE"
            alt="hero"
          />
        </div>
      </section>

    
      <section className="pins-section">
        <h2>Gallery of Craftsmanship</h2>
        <p>The most pinned repositories this week.</p>

        <div className="pins-grid">
          {pinCards.map((card, index) => (
            <div className="pin-card" key={index}>
              <img src={card.image} alt={card.title} />
              <div className="pin-content">
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
                <div className="pin-footer">
                  <span>{card.lang}</span>
                  <span>⭐ {card.stars}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="philosophy">
        <div className="philosophy-box">
          <div className="feature">
            <h4>Visual Indexing</h4>
            <p>
              Our engine renders your code into beautiful snapshots, making
              browsing a sensory experience.
            </p>
          </div>
          <div className="feature">
            <h4>Contextual Boards</h4>
            <p>
              Organize by stack, aesthetics, or project goals. A folder is just
              a list; a board is a mood.
            </p>
          </div>
          <div className="feature">
            <h4>Collaborative Curation</h4>
            <p>
              Follow top developers and see the artifacts that inspire their
              daily builds.
            </p>
          </div>
        </div>

        <div className="philosophy-text">
          <span>The Philosophy</span>
          <h2>
            Curation over <br /> <em>Endless Search</em>
          </h2>
          <p>
            Search finds what you know you're looking for. Curation shows you
            what you didn't know you needed. GitPins is the curated layer for
            the GitHub ecosystem.
          </p>
          <a href="/">Read our Manifesto →</a>
        </div>
      </section>

   
      <section className="boards-section">
        <div className="boards-header">
          <div>
            <h2>Featured Boards</h2>
            <p>Hand-picked collections from the world's finest curators.</p>
          </div>
          <button>View all curators</button>
        </div>

        <div className="boards-grid">
          {boards.map((board, index) => (
            <div className="board-card" key={index}>
              <div className="board-images">
                <img src={board.image1} alt={board.title} />
                <div className="board-side">
                  <img src={board.image2} alt={board.title} />
                  <div className="extra-count">{board.count}</div>
                </div>
              </div>
              <div className="board-info">
                <div>
                  <h3>{board.title}</h3>
                  <p>Curated by {board.curator}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

   
      <section className="cta">
        <h2>
          Elevate Your <br /> Code Discovery
        </h2>
        <p>
          Join 50,000+ developers curating the next generation of software
          masterpieces, Your board is waiting.
        </p>
        <div className="cta-buttons">
          <button className="primary-btn">Start Pinning Now</button>
          <button className="secondary-btn">Join the Discord</button>
        </div>
      </section>

     
      <footer className="footer">
        <div>
          <h3>GitPins</h3>
          <p>© 2026 GitPins. Crafted for the Digital Curator.</p>
        </div>

        <div className="footer-links">
          <a href="/">Manifesto</a>
          <a href="/">API Docs</a>
          <a href="/">Privacy</a>
          <a href="/">Terms</a>
        </div>
      </footer>
    </div>
  );
}