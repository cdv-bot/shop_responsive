import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { FooterBottom, FooterTag, FooterInfo } from '../footer';
import { Route, Switch } from 'react-router-dom';
import api from '../../api/api';
import { addProductApi } from '../../store/cart';
import { showMenu } from '../../store/menuMobile';
import { MenuBar, MenuMobile } from '../menu';
import MailSign from '../mailSign/MailSign';
import ButtonScroll from '../scrollTop/ButtonScroll';
import SideBar from '../sideBar';
import Page from './Page';
import 'slick-carousel/slick/slick-theme.scss';
import 'slick-carousel/slick/slick.scss';
import './routerApp.scss';

export default function RouterApp() {
  const [scrollFix, setScrollFix] = useState(false);

  const dispatch = useDispatch();
  const data = useSelector((state) => state.menuBar);

  useEffect(() => {
    //create id_user
    (async () => {
      const userId = window.localStorage.getItem('id_user');
      if (!userId) {
        const idAuto = await api.postUserId({ id: null });
        window.localStorage.setItem('id_user', idAuto);
        return;
      }

      const data = await api.postUserId({ id: userId });
      dispatch(addProductApi(data));
    })();
  }, []);

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset > 130) {
        setScrollFix(true);
      }
      if (window.pageYOffset < 20) {
        setScrollFix(false);
      }
    };
  }, []);

  const handlerCloseMenu = () => {
    let action = showMenu();
    dispatch(action);
  };

  const pageRouter = (Page) => {
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

  return (
    <>
      <SideBar />
      <MenuBar />
      <div className={classNames('start_main', { tranform_Main: data })}>
        <MenuMobile scrollFix={scrollFix} />
        <Switch>{pageRouter(Page)}</Switch>
        <FooterTag />
        <MailSign />
        <FooterInfo />
        <FooterBottom />
      </div>
      <ButtonScroll scrollFix={scrollFix} />

      {data ? <div className='close_menu' onClick={handlerCloseMenu}></div> : null}
    </>
  );
}
