import './App.css';
import Header from './components/header/Header';

function App() {
  return (
    <>
      <Header />
      <div className='app'>
        <div className='container-img'>
          <img src='/src/assets/pexels-belle-co-402028.jpg' />
          <div className='text'>
            <h1>Ableton</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
