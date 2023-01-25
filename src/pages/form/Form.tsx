import {useParams} from "react-router-dom";
import {Typography} from "antd";
import FormStep01 from "./FormStep01";
import FormStep02 from "./FormStep02";
import FormStep03 from "./FormStep03";
import FormStep04 from "./FormStep04";
import FormStep05 from "./FormStep05";
import FormStep06 from "./FormStep06";
import FormStep07 from "./FormStep07";
import FormStep08 from "./FormStep08";
import FormStep09 from "./FormStep09";
import FormStep10 from "./FormStep10";
import FormStep11 from "./FormStep11";
import FormStep12 from "./FormStep12";

const {Text} = Typography
const Form = () => {
    const params = useParams()
    return (
            <div className={'form-container'}>
                <div className="step-box">
                    <Text>{`Step ${params.step}/12`}</Text>
                </div>
                {params.step === '1' && <FormStep01/>}
                {params.step === '2' && <FormStep02/>}
                {params.step === '3' && <FormStep03/>}
                {params.step === '4' && <FormStep04/>}
                {params.step === '5' && <FormStep05/>}
                {params.step === '6' && <FormStep06/>}
                {params.step === '7' && <FormStep07/>}
                {params.step === '8' && <FormStep08/>}
                {params.step === '9' && <FormStep09/>}
                {params.step === '10' && <FormStep10/>}
                {params.step === '11' && <FormStep11/>}
                {params.step === '12' && <FormStep12/>}
            </div>
    );
};

export default Form;
