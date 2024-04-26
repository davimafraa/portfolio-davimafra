function NavBar() {
  return (
    <div>
        <header>
            <nav>
                <h1 id="logo"><a href="#"><span>./</span>DaviDev</a></h1>
                <ul className="nav-menu">
                    <li><a className="nav-li" href="#">Home</a></li>
                    <li><a className="nav-li" href="#second-container">Projects</a></li>
                    <li><a className="nav-li" href="#third-container">Contact</a></li>
                    <li><a className="nav-li" href="#">About me</a></li>
                </ul>
                <i className='bx bx-search'></i>
                <div className="menu">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default NavBar
