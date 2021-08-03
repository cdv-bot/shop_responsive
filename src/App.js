import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import 'slick-carousel/slick/slick-theme.scss';
import 'slick-carousel/slick/slick.scss';
import './App.scss';
import FooterInfo from './component/footer/FooterInfo';
import FooterTag from './component/footer/FooterTag';
import FooterBottom from './component/footer/Footer_bottom';
import MailSign from './component/mailSign/MailSign';
import MapStore from './component/mapStore/MapStore';
import MenuBar from './component/menu/MenuBar';
import MenuMobile from './component/menu/MenuMobile';
import ButtonScroll from './component/scrollTop/ButtonScroll';
import SideBar from './component/sideBar/SideBar';
import Home from './pages/home';
import { showMenu } from './store/menuMobile';
import { SWRConfig } from 'swr';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Page from './component/Router';
import { useEffect, useState } from 'react';
import api from './api/api';

import { addProductApi, fetchUserById } from './store/cart';
const fetcher = (resource) => fetch(resource).then((res) => res.json());

function App() {
  const [scrollFix, setScrollFix] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const userId = window.localStorage.getItem('id_user');
    if (userId) {
      api.postUserId({ id: userId }).then((data) => {
        if (data) {
          dispatch(addProductApi(data));
        }
      });
    } else {
      api.postUserId({ id: null }).then((x) => {
        window.localStorage.setItem('id_user', x);
      });
    }
  }, []);

  const data = useSelector((state) => state.menuBar);
  const handlerCloseMenu = () => {
    let action = showMenu();
    dispatch(action);
  };

  const PageRouter = (Page) => {
    let result = null;
    result = Page.map((value, key) => (
      <Route
        key={key}
        exact={value.exact}
        path={value.path}
        render={(props) => <value.main {...props} />}
      />
    ));
    return result;
  };

  useEffect(() => {
    window.onscroll = () => {
      window.onscroll = () => {
        if (window.pageYOffset > 130) {
          setScrollFix(true);
        }
        if (window.pageYOffset < 20) {
          setScrollFix(false);
        }
      };
    };
  }, []);
  return (
    <div className='App'>
      <Router>
        <SWRConfig value={fetcher}>
          <SideBar />
          <MenuBar />
          <div className={classNames('start_main', { tranform_Main: data })}>
            <MenuMobile scrollFix={scrollFix} />
            <Switch>{PageRouter(Page)}</Switch>
            <MapStore />
            <FooterTag />
            <MailSign />
            <FooterInfo />
            <FooterBottom />
          </div>
          <ButtonScroll scrollFix={scrollFix} />

          {data ? (
            <div className='close_menu' onClick={handlerCloseMenu}></div>
          ) : null}
        </SWRConfig>
      </Router>
    </div>
  );
}

export default App;
