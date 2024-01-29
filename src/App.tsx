import { Outlet } from 'react-router-dom';
import MouseCursor from './components/MouseCursor/MouseCursor';
import './App.css';

function App() {
  return (
    <div className="App">
      <MouseCursor />

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
