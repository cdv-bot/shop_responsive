import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import './App.scss';
import MenuBar from './component/menu/MenuBar';
import MenuMobile from './component/menu/MenuMobile';
import Home from './pages/home';
import { showMenu } from './store/menuMobile';
import SideBar from './component/sideBar/SideBar';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';

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
      </div>
      {data ? <div className='close_menu' onClick={handlerCloseMenu}></div> : null}
    </div>
  );
}

export default App;
