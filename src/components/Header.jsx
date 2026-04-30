import logo from '../assets/logos/savremena-logo-white.svg'

function Header({ isMenuOpen, onMenuToggle }) {
  return (
    <header className="site-header">
      <a className="site-header__brand" href="/" aria-label="Savremena">
        <img
          className="site-header__logo"
          src={logo}
          alt="Savremena gimnazija"
        />
      </a>

      <button
        className={`site-header__menu-button ${isMenuOpen ? 'is-active' : ''}`}
        type="button"
        aria-label={isMenuOpen ? 'Zatvori meni' : 'Otvori meni'}
        aria-expanded={isMenuOpen}
        onClick={onMenuToggle}
      >
        <span></span>
        <span></span>
      </button>
    </header>
  )
}

export default Header