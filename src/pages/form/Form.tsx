import {useParams} from "react-router-dom";
import {Typography} from "antd";
import FormStep01 from "./FormStep01";
import FormStep02 from "./FormStep02";

const {Title, Text} = Typography
const Form = () => {
    const params = useParams()
    return (
        <>
            <Title level={2} style={{marginTop: 0, color: '#b8b8b8'}}>{'Mortgage calculator'}</Title>
            <div className={'form-container'}>
                <div className="step-box">
                    <Text>{`Step ${params.step}/4`}</Text>
                </div>
                {params.step === '1' && <FormStep01/>}
                {params.step === '2' && <FormStep02/>}
            </div>
        </>

    );
};

export default Form;
