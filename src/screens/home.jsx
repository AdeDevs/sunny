import Logo from  '../assets/logo.png'
import Menu from '../assets/hamburger.png'
import Arrow from "../assets/arrowdown.png"
import Egg from "../assets/desktop/egg.jpg"
import Standout from "../assets/desktop/standout.jpg"
import EggMob from "../assets/mobile/egg.jpg"
import StandoutMob from "../assets/mobile/standout.jpg"

function HomeScreen() {
    return (
        <div className="home-box">
            <header>
                <nav>
                    <img src={Logo} alt="logo" />
                    <img id='menu' src={Menu} alt="menu" />
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
            <div className='info-box'>
                <div>

                <img id='mob' src={EggMob} alt="egg" />
                    <section className='text-box'>
                        <aside>
                        <h1>Transform your brand</h1>
                        <p>We are a full-service agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you</p>
                        <a href="#">LEARN MORE</a>
                        </aside>
                    </section>
                    <section className='image-box1'>
                        <img id='desk' src={Egg} alt="egg" />
                    </section>
                </div>
                <div>
                    <section className='image-box2'>
                        <img id='desk' src={Standout} alt="standout" />
                    </section>
                        <img id='mob' src={StandoutMob} alt="standout"/>
                    <section className='text-box'>
                        <aside>
                        <h1>Stand out to the right audience</h1>
                        <p>Using a collaborative formula of designers, researchers, photgraphers, videographers, and copywriters, we'll build and extend your brand in digital places</p>
                        <a id='red' href="#">LEARN MORE</a>
                        </aside>
                    </section>
                </div>
            </div>
            <div className='more-box'>
                <div className='image-box3'>
                    <section>
                        <h1>Graphic Design</h1>
                        <p>Great design makes you memorable, we deliver artwork that underscores your brand message and captures potential clients' attention</p>
                    </section>
                </div>
                <div className='image-box4'>
                    <section>
                        <h1>Photgraphy</h1>
                        <p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image</p>
                    </section>
                </div>
            </div>
        </main>
        </div>
    )
}

export default HomeScreen;