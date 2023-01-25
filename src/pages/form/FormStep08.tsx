import {Form, Input} from "antd";
import {useNavigate} from "react-router-dom";
import {useGeneralContext} from "../../components/context/Context";
import StepTitle from "../../components/step-title/StepTitle";
import FormFooter from "../../components/form-footer/FormFooter";

const FormStep08 = () => {
    const navigate = useNavigate()
    const {setDocumentInfo, documentInfo} = useGeneralContext()
    type FormType = {
        remortgageValuation: string
    }
    const onFinish = (values: FormType) => {
        setDocumentInfo({...documentInfo, remortgageValuation: values.remortgageValuation })
        navigate('/form/9')
    }
    return (
        <Form layout={'vertical'} onFinish={onFinish} autoComplete={'off'} initialValues={{remortgageValuation: documentInfo?.remortgageValuation}} className={'form-wrapper'}>
            <StepTitle title={'Remortgage valuation (£)'} subtitle={"This can be obtained online, or by calling 0800 121 7788"} />
            <div className="form-body">
                <Form.Item
                    name={'remortgageValuation'}
                    label={'Remortgage valuation'}
                    rules={[
                        {required: true, message: 'Enter Remortgage valuation'},
                        {message: 'Invalid number', pattern: /^\$?[\d,]+(\.\d{1,2})?$/},
                    ]}>
                    <Input size={'large'} placeholder={'Enter remortgage valuation'} autoFocus={true} prefix={'£'}/>
                </Form.Item>
            </div>
            <FormFooter />
        </Form>
    );
};

export default FormStep08;
