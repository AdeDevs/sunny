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
            </main>
        </div>
    )
}

export default HomeScreen;