import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import 'slick-carousel/slick/slick-theme.scss';
import 'slick-carousel/slick/slick.scss';
import './App.scss';
import FooterInfo from './component/footer/FooterInfo';
import FooterTag from './component/footer/FooterTag';
import Footer_bottom from './component/footer/Footer_bottom';
import MailSign from './component/mailSign/MailSign';
import MapStore from './component/mapStore/MapStore';
import MenuBar from './component/menu/MenuBar';
import MenuMobile from './component/menu/MenuMobile';
import ButtonScroll from './component/scrollTop/buttonScroll';
import SideBar from './component/sideBar/SideBar';
import Home from './pages/home';
import { showMenu } from './store/menuMobile';

function App() {
  const data = useSelector((state) => state.menuBar);
  const dispatch = useDispatch();
  const handlerCloseMenu = () => {
    let action = showMenu();
    dispatch(action);
  };
  return (
    <div className='App'>
      <SideBar />
      <MenuBar />
      <div className={classNames('start_main', { tranform_Main: data })}>
        <MenuMobile />
        <Home />
        <MapStore />
        <FooterTag />
        <MailSign />
        <FooterInfo />
        <Footer_bottom />
      </div>
      <ButtonScroll />

      {data ? <div className='close_menu' onClick={handlerCloseMenu}></div> : null}
    </div>
  );
}

export default App;
