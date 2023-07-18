const Header = () => {
  return (
    <header className='header-app'>
      <div className='header-items'>
        <p>Live</p>
        <p>Push</p>
        <p>Link</p>
        <p>Shop</p>
        <p>Packs</p>
        <p>Help</p>
        <a href='/'>
          <p>More +</p>
        </a>
      </div>
      <div className='header-items2'>
        <p>Try Live for free</p>
        <a href='/'>
          <p>Log in or register</p>
        </a>
      </div>
    </header>
  );
};

export default Header;
