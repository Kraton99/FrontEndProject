import {Link} from 'react-router-dom';
import "./Nav.css"
function Nav() {
    return (
        <div>
            <nav>
                <ul className="navList">
                    <Link className="navItem" to='/store'>Zamów</Link>
                    <Link className="navItem" to='/about'>O nas</Link>
                    <Link className="navItem" to='/cart'>Koszyk</Link>
                </ul>
            </nav>
        </div>
    )
}

export default Nav