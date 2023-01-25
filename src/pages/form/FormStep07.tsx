import {Form, Input} from "antd";
import {useNavigate} from "react-router-dom";
import {useGeneralContext} from "../../components/context/Context";
import StepTitle from "../../components/step-title/StepTitle";
import FormFooter from "../../components/form-footer/FormFooter";

const FormStep07 = () => {
    const navigate = useNavigate()
    const {setDocumentInfo, documentInfo} = useGeneralContext()
    type FormType = {
        valuationIndex: string
    }
    const onFinish = (values: FormType) => {
        setDocumentInfo({...documentInfo, valuationIndex: values.valuationIndex })
        navigate('/form/8')
    }
    return (
        <Form layout={'vertical'} onFinish={onFinish} autoComplete={'off'} initialValues={{valuationIndex: documentInfo?.valuationIndex}} className={'form-wrapper'}>
            <StepTitle title={'Index valuation (£)'} subtitle={"This can be obtained online, or by calling 0800 121 7788"} />
            <div className="form-body">
                <Form.Item
                    name={'valuationIndex'}
                    label={'Index valuation'}
                    rules={[
                        {required: true, message: 'Enter Index valuation'},
                        {message: 'Invalid number', pattern: /^\$?[\d,]+(\.\d{1,2})?$/},
                    ]}>
                    <Input size={'large'} placeholder={'Enter remaining terms in months'} autoFocus={true} prefix={'£'}/>
                </Form.Item>
            </div>
            <FormFooter />
        </Form>
    );
};

export default FormStep07;
