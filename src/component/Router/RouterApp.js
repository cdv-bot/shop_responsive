import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
  useParams,
} from 'react-router-dom';
import 'slick-carousel/slick/slick-theme.scss';
import 'slick-carousel/slick/slick.scss';
import { SWRConfig } from 'swr';
import api from '../../api/api';
import { addProductApi } from '../../store/cart';
import { showMenu } from '../../store/menuMobile';
import FooterInfo from '../footer/FooterInfo';
import FooterTag from '../footer/FooterTag';
import FooterBottom from '../footer/Footer_bottom';
import MailSign from '../mailSign/MailSign';
import MapStore from '../mapStore/MapStore';
import MenuBar from '../menu/MenuBar';
import MenuMobile from '../menu/MenuMobile';
import ButtonScroll from '../scrollTop/ButtonScroll';
import SideBar from '../sideBar/SideBar';
import Page from './index';
import './routerApp.scss';

const fetcher = (resource) => fetch(resource).then((res) => res.json());

export default function RouterApp() {
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

  const { location } = useHistory();

  return (
    <SWRConfig value={fetcher}>
      <SideBar />
      <MenuBar />
      <div className={classNames('start_main', { tranform_Main: data })}>
        <MenuMobile scrollFix={scrollFix} />
        <Switch>{PageRouter(Page)}</Switch>
        {location.pathname === '/login' || <MapStore />}
        <FooterTag />
        <MailSign />
        <FooterInfo />
        <FooterBottom />
      </div>
      <ButtonScroll scrollFix={scrollFix} />

      {data ? <div className='close_menu' onClick={handlerCloseMenu}></div> : null}
    </SWRConfig>
  );
}
