import Logo from "../assets/logo.png";
import Menu from "../assets/hamburger.png";
import Arrow from "../assets/arrowdown.png";
import Egg from "../assets/desktop/egg.jpg";
import Standout from "../assets/desktop/standout.jpg";
import EggMob from "../assets/mobile/egg.jpg";
import StandoutMob from "../assets/mobile/standout.jpg";
import Emily from "../assets/emily.jpg";
import Thomas from "../assets/thomas.jpg";
import Jennie from "../assets/jennie.jpg";
import Facebook from '../assets/facebook.png'
import Instagram from "../assets/instagram.png"
import Twitter from "../assets/twitter.png"
import Pinterest from "../assets/pinterest.png"

function HomeScreen() {
  return (
    <div className="home-box">
      <header>
        <nav>
          <img src={Logo} alt="logo" />
          <img id="menu" src={Menu} alt="menu" />
          <ul>
            <li>About</li>
            <li>Services</li>
            <li>Project</li>
            <button>Contact</button>
          </ul>
        </nav>
        <div>
          <h1>We are creatives</h1>
          <img src={Arrow} alt="arrow" />
        </div>
      </header>

      <main>
        <div className="info-box">
          <div>
            <img id="mob" src={EggMob} alt="egg" />
            <section className="text-box">
              <aside>
                <h1>Transform your brand</h1>
                <p>
                  We are a full-service agency specializing in helping brands
                  grow fast. Engage your clients through compelling visuals that
                  do most of the marketing for you
                </p>
                <a href="#">LEARN MORE</a>
              </aside>
            </section>
            <section className="image-box1">
              <img id="desk" src={Egg} alt="egg" />
            </section>
          </div>
          <div>
            <section className="image-box2">
              <img id="desk" src={Standout} alt="standout" />
            </section>
            <img id="mob" src={StandoutMob} alt="standout" />
            <section className="text-box">
              <aside>
                <h1>Stand out to the right audience</h1>
                <p>
                  Using a collaborative formula of designers, researchers,
                  photgraphers, videographers, and copywriters, we'll build and
                  extend your brand in digital places
                </p>
                <a id="red" href="#">
                  LEARN MORE
                </a>
              </aside>
            </section>
          </div>
        </div>
        <div className="more-box">
          <div className="image-box3">
            <section>
              <h1>Graphic Design</h1>
              <p>
                Great design makes you memorable, we deliver artwork that
                underscores your brand message and captures potential clients'
                attention
              </p>
            </section>
          </div>
          <div className="image-box4">
            <section>
              <h1>Photgraphy</h1>
              <p>
                Increase your credibility by getting the most stunning,
                high-quality photos that improve your business image
              </p>
            </section>
          </div>
        </div>
        <div className="testimonial-box">
          <section>
            <h1>CLIENT TESTIMONIALS</h1>
            <div>
              <aside className="client-box">
                <img src={Emily} alt="avatar" />
                <p>
                  We put our trust in Sunnyside and they delivered, making sure
                  our needs were and deadlines were always hit.
                </p>
                <summary className="client-footer">
                  <h4>Emily R.</h4>
                  <p>Marketing Director</p>
                </summary>
              </aside>
              <aside className="client-box">
                <img src={Thomas} alt="avatar" />
                <p>
                  Sunnyside's enthusiams coupled with their keen interest in our
                  brand's success made it a satisfying and enjoyable experience.
                </p>
                <summary className="client-footer">
                  <h4>Thomas S.</h4>
                  <p>Chief Operating Officer</p>
                </summary>
              </aside>
              <aside className="client-box">
                <img src={Jennie} alt="avatar" />
                <p>
                  Incredible end result! Our sales increased over 400% when we
                  worked with Sunnyside. Highly recommended.
                </p>
                <summary className="client-footer">
                  <h4>Jennie F.</h4>
                  <p>Business Owner</p>
                </summary>
              </aside>
            </div>
          </section>
        </div>
        <div className="gallery">
            <div className="gallery-box1"></div>
            <div className="gallery-box2"></div>
            <div className="gallery-box3"></div>
            <div className="gallery-box4"></div>
        </div>
      </main>

      <footer>
        <div>
          <h1>sunnsyide</h1>
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Projects</a></li>
            </ul>
            <ul className="socials">
                <li><img src={Facebook} alt="socials" /></li>
                <li><img src={Instagram} alt="socials" /></li>
                <li><img src={Twitter} alt="socials" /></li>
                <li><img src={Pinterest} alt="socials" /></li>
            </ul>
        </div>
      </footer>
    </div>
  );
}

export default HomeScreen;
