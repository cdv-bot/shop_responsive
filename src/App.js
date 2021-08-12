import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import RouterApp from './component/Router/RouterApp';
import policyApi from './api/api';
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    policyApi.checkToken();
  }, []);
  return (
    <div className='App'>
      <Router>
        <RouterApp />
      </Router>
    </div>
  );
}

export default App;
