import logo from './logo.svg';
import './App.css';
import './components/Assets/sections.scss';
import './components/defaultStyles.scss';
import Routing from'./components/Routing';
import Main from './components/Main/Main';
import SignIn from './components/SignIn/SignIn';
import { ConfigProvider } from "antd";
import Theme from "./components/Assets/Ant_Design_Theme.json";
import Footer from './components/Footer/Footer';

function App() {
  return (
    <ConfigProvider theme={Theme}>
    <Routing />
    </ConfigProvider>
  )
}

export default App;
