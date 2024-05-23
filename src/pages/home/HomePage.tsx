import {Button, Typography} from "antd";
import {useNavigate} from "react-router-dom";

const {Title, Paragraph} = Typography

const HomePage = () => {
    const navigate = useNavigate()
    return (
        <section>
          <div className={'container'}>
            <Paragraph className={'subtitle'}>{'Ready to start'}</Paragraph>
            <Title level={2}>{'Ready to find your refinance options?'}</Title>
            <Paragraph className={'description'}>{'To start, find your latest mortgage statement. This will give you the numbers you need to fill the fields in the calculator.'}</Paragraph>
            <Button type={'primary'} onClick={()=>navigate('/form/1')}>{'Start'}</Button>
          </div>
        </section>
    );
};

export default HomePage;
