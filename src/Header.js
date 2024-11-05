import './styles/header.css';

function Header() {
  return (
    <header>
      <div className='container-header'>
        <div className="menu">
          <nav>
            <ul>
              <li><a href="#about" className="hover:underline">Sobre mí</a></li>
              <li><a href="#projects" className="hover:underline">Proyectos</a></li>
              <li><a href="#blog" className="hover:underline">Blog</a></li>
              <li><a href="#contact" className="hover:underline">Contacto</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;