import Logo from './Images/logo.png'
const Header = () => {
    return (
        <header id="header" className="transparent-nav">
            <div className="container">
                <div className="navbar-header">
                    <div className="navbar-brand">
                        <a className="logo" href="index.html">
                            <img src={Logo} alt="logo"></img>
                        </a>
                    </div>
                    <button className="navbar-toggle">
                        <span></span>
                    </button>
                </div>
                <nav id="nav">
                    <ul className="main-menu nav navbar-nav navbar-right">
                        <li><a href="#">Login/Register</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
