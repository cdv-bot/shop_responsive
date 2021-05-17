import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import MenuBar from './component/menu/MenuBar';
import MenuMobile from './component/menu/MenuMobile';
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
