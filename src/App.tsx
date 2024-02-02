import { Outlet } from 'react-router-dom';
import MouseCursor from './components/MouseCursor/MouseCursor';
import Header from './components/layout/Header/Header';
import './global.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <MouseCursor />
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
