import styles from './Header.module.css'

function Header() {
  return (
    <>
      <header className={styles.navbarHeader}>
        <img src="https://placeholder.com/200x200" alt="Logo" style={{ height: '50px' }} />
        <nav>
          <a href="/home" style={{ margin: '0 10px' }}>Home</a>
          <a href="/about" style={{ margin: '0 10px' }}>Sobre</a>
          <a href="/services" style={{ margin: '0 10px' }}>Serviços</a>
          <a href="/contact" style={{ margin: '0 10px' }}>Contato</a>
        </nav>
      </header>
    </>
  )
}

export default Header