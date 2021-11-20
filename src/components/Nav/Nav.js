import {Link} from 'react-router-dom';
function Nav() {
    return (
        <div>
            <nav>
                <ul>
                    <Link to='/store'><li>Zamów</li></Link>
                    <Link to='/about'><li>O nas</li></Link>
                    <Link to='/cart'><li>Koszyk</li></Link>
                </ul>
            </nav>
        </div>
    )
}

export default Nav