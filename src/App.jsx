import './App.css';

function App() {
  return (
    <>
      {' '}
      <header className='header-app'>
        <div className='header-items'>
          <p>Live</p>
          <p>Push</p>
          <p>Link</p>
          <p>Shop</p>
          <p>Packs</p>
          <p>Help</p>
          <p>More +</p>
        </div>
        <div className='header-items2'>
          <p>Try Live for free</p>
          <a href='/'>
            <p>Log in or register</p>
          </a>
        </div>
      </header>
      <div className='app'>
        {' '}
        <div>Esto es la APP</div>
      </div>
    </>
  );
}

export default App;
