import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { SWRConfig } from 'swr';
import RouterApp from './component/Router/RouterApp';
import axiosClient from './api/axiosClient';
import policyApi from './api/api';
import './App.scss';
import { useDispatch } from 'react-redux';
import { infoUser } from './store/user';

const fetcher = (url) => {
  return axiosClient.get(url).then((res) => res.data);
};

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      try {
        const data = await policyApi.checkToken();
        dispatch(infoUser(data.authData?.userList));
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <SWRConfig value={fetcher}>
      <div className='App'>
        <Router>
          <RouterApp />
        </Router>
      </div>
    </SWRConfig>
  );
}

export default App;
