function Navbar() {
  return (
    <>
      <section className="top-navbar">
        <h1>Lokmat</h1>
      </section>
      <nav className="navbar">
        <div className="nav-toggle">
          <button className="nav-toggle-btn">
            <span className="nav-toggle-icon"></span>
            <span className="nav-toggle-icon"></span>
            <span className="nav-toggle-icon"></span>
          </button>
        </div>
        <a className="nav-home" href="#">
          Home
        </a>
        <ul className="nav-options">
          <li>
            <a href="#featured">Featured News</a>
          </li>
          <li>
            <a href="#web-stories">Web Stories</a>
          </li>
          <li>
            <a href="#manoranjan">Manoranjan</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
