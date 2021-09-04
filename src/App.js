import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Navegador from './components/NavBar';

function App() {
  return (
    <div>
      <header className='header'>
          <Navegador/>
      </header>
      <h1 style={{display: 'flex',justifyContent: 'center', fontFamily:'Playfair Display'}}>Bienvenidos al e-commerce</h1>
      <section>
        <ItemListContainer />
      </section>
    </div>
  );
}

export default App;
