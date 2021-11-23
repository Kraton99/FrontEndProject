import "./Header.css"
function Header() {
    return (
        <div className="header">
            <header>
                <img src={require('../../assets/images/header.webp').default} alt="tibia"/>
            </header>
        </div>
    )
}

export default Header