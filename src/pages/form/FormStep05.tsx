import {Button, Col, Form, Input, Row} from "antd";
import {useNavigate} from "react-router-dom";
import {useGeneralContext} from "../../components/context/Context";
import StepTitle from "../../components/step-title/StepTitle";
import FormFooter from "../../components/form-footer/FormFooter";

const FormStep05 = () => {
    const navigate = useNavigate()
    const {setDocumentInfo, documentInfo} = useGeneralContext()
    type FormType = {
        balance: string
    }
    const onFinish = (values: FormType) => {
        setDocumentInfo({...documentInfo, balance: values.balance })
        navigate('/form/6')
    }
    return (
        <Form layout={'vertical'} onFinish={onFinish} autoComplete={'off'} initialValues={{balance: documentInfo?.balance}} className={'form-wrapper'}>
            <StepTitle title={'Current balance (£)'} subtitle={"Enter the amount payable below"} />
            <div className="form-body">
            <Form.Item
                name={'balance'}
                label={'Current balance'}
                rules={[
                    { required: true, message: 'Enter your current balance' },
                    { message: 'Invalid number', pattern: /^\$?[\d,]+(\.\d{1,2})?$/ },
                ]}>
                <Input size={'large'} placeholder={'Enter your current balance'} autoFocus={true} prefix={'£'} />
            </Form.Item>
            </div>
            <FormFooter />
        </Form>
    );
};

export default FormStep05;
