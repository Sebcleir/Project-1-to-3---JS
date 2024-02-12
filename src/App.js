import logo from './logo.svg';
import './App.css';
import Header from './Header.js'
import Content from './Content.js';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <Content />
    </div>
  );
}

export default App;
