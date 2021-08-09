import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import RouterApp from './component/Router/RouterApp';

function App() {
  return (
    <div className='App'>
      <Router>
        <RouterApp />
      </Router>
    </div>
  );
}

export default App;
