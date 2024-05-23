import { Button, Layout, Typography } from "antd";
import logo from "../../assets/Logo.png"
import './Header.scss'
import { useNavigate } from "react-router-dom";

const {Title, Text} = Typography
const Header = () => {
  const navigate = useNavigate()
  return (
    <Layout.Sider width={480} theme={"light"} className={'app-header'}>
      <div className={'header-content-wrapper'}>
        <Button type={'ghost'} onClick={() => navigate('/')} className={"nav-link"}>
          <img src={logo}/>
          {'Mortgage Calculator'}</Button>
        <Title level={1}>{'Find your refinance options'}</Title>
        <Text className={'header-text'}>{'Mortgage refinancing is when you replace your current home loan with a new one.\n' +
          'This is a demo of a form submission.'}</Text>
      </div>
    </Layout.Sider>
  );
};

export default Header;
