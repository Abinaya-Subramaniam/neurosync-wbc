import { useState } from 'react';
import './App.css';
import Talkmate from './pages/Talkmate';

const App = () => {
  const [showHeader, setShowHeader] = useState(true);

  return (
    <div className="app">
      <Talkmate/>
    </div>
  );
};

export default App;