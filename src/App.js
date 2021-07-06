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
const fetcher = (resource) => fetch(resource).then((res) => res.json());
function App() {
  const data = useSelector((state) => state.menuBar);
  const dispatch = useDispatch();
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

  return (
    <div className='App'>
      <Router>
        <SWRConfig value={fetcher}>
          <SideBar />
          <MenuBar />
          <div className={classNames('start_main', { tranform_Main: data })}>
            <MenuMobile />
            <Switch>{PageRouter(Page)}</Switch>
            <MapStore />
            <FooterTag />
            <MailSign />
            <FooterInfo />
            <FooterBottom />
          </div>
          <ButtonScroll />

          {data ? (
            <div className='close_menu' onClick={handlerCloseMenu}></div>
          ) : null}
        </SWRConfig>
      </Router>
    </div>
  );
}

export default App;
