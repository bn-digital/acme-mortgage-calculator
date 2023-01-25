import {Button, Typography} from "antd";
import {useNavigate} from "react-router-dom";

const {Title} = Typography

const HomePage = () => {
    const navigate = useNavigate()
    return (
        <div>
            <Title>{'Welcome to Mortgage Mathematics'}</Title>
            <Button style={{minWidth: 150}} size={'large'} type={'primary'} onClick={()=>navigate('/form/1')}>{'Start'}</Button>
        </div>
    );
};

export default HomePage;
