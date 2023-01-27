import {Button, Typography} from "antd";
import './Header.scss'
import {useLocation, useNavigate} from "react-router-dom";

const {Title} = Typography
const Header = () => {
    const location = useLocation()
    const navigate = useNavigate()
    return (
        <div className={'app-header'}>
            <div className="container">
                <div className="header-content-wrapper">
                    <Title level={3} className={'title-box'}>{'Financial-freedom'}</Title>
                    {location.pathname !== '/' && (
                        <Button type={'ghost'} onClick={() => navigate('/')}>{'Home'}</Button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
