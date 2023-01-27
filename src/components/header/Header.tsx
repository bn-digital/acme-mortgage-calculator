import {Button, Menu, MenuProps, Typography} from "antd";
import './Header.scss'
import {useLocation, useNavigate} from "react-router-dom";
import logo from './images/fin-logo.png'
import {useState} from "react";
import {SvgIcon} from "../icon";

const {Title} = Typography
const items:MenuProps['items'] = [
    {
        label: 'Home',
        key: 'home',
    },
    {
        label: 'About',
        key: 'about',
    },
    {
        label: 'Contact Us',
        key: 'contact-us',
    },
]
const Header = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [current, setCurrent] = useState('home');
    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return (
        <div className={'app-header'}>
            <div className="container">
                <div className="header-content-wrapper">
                    <div className="logo-block">
                        <img src={logo} alt=""/>
                    </div>
                    <div className="header-menu-wrapper">
                        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} className={'header-menu'}/>
                    </div>

                        <Button className={'header-btn'} type={'text'} icon={<SvgIcon type={'phone'}/>} onClick={() => console.log('on phone click')}>{'+719-967-3377'}</Button>

                </div>
            </div>
        </div>
    );
};

export default Header;
