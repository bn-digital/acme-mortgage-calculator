import {Button, Typography} from "antd";
import {useNavigate} from "react-router-dom";
import Hero from "../../components/sections/hero/Hero";
import './Home.scss'

const {Title} = Typography

const Home = () => {
    const navigate = useNavigate()
    return (
        <div className={'home'}>
            <Hero />
        </div>
    );
};

export default Home;
