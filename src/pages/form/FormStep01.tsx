import {Button, Col, Form, Input, Row} from "antd";
import {useNavigate} from "react-router-dom";
import {useGeneralContext} from "../../components/context/Context";
import StepTitle from "../../components/step-title/StepTitle";
import FormFooter from "../../components/form-footer/FormFooter";

const FormStep01 = () => {
    const navigate = useNavigate()
    const {setDocumentInfo, documentInfo} = useGeneralContext()
    type FormType = {
        brokerFee: string
    }
    const onFinish = (values: FormType) => {
        setDocumentInfo({...documentInfo, brokerFee: values.brokerFee })
        navigate('/form/2')
    }
    return (
        <Form layout={'vertical'} onFinish={onFinish} autoComplete={'off'} initialValues={{brokerFee: documentInfo?.brokerFee}} className={'form-wrapper'}>
            <StepTitle title={'Remortgage broker fee (£)'} subtitle={"Enter the amount payable below"} />
            <div className="form-body">
            <Form.Item
                name={'brokerFee'}
                label={'Remortgage broker fee (£) '}
                rules={[
                    { required: true, message: 'This field is required' },
                    { message: 'Invalid number', pattern: /^\$?[\d,]+(\.\d{1,2})?$/ },
                ]}>
                <Input size={'large'} placeholder={'Enter remortgage broker fee'} autoFocus={true} prefix={'£'} />
            </Form.Item>
            </div>
            <FormFooter isPreviewButton={false}/>
        </Form>
    );
};

export default FormStep01;
