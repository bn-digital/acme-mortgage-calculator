import {Form, Input} from "antd";
import {useNavigate} from "react-router-dom";
import {useGeneralContext} from "../../components/context/Context";
import StepTitle from "../../components/step-title/StepTitle";
import FormFooter from "../../components/form-footer/FormFooter";

const FormStep06 = () => {
    const navigate = useNavigate()
    const {setDocumentInfo, documentInfo} = useGeneralContext()
    type FormType = {
        terms: string
    }
    const onFinish = (values: FormType) => {
        setDocumentInfo({...documentInfo, terms: values.terms })
        navigate('/form/7')
    }
    return (
        <Form layout={'vertical'} onFinish={onFinish} autoComplete={'off'} initialValues={{terms: documentInfo?.terms}} className={'form-wrapper'}>
            <StepTitle title={'Remaining term in months'} subtitle={"Type the duration in months below"} />
            <div className="form-body">
                <Form.Item
                    name={'terms'}
                    label={'Remaining term'}
                    rules={[
                        {required: true, message: 'Enter remaining terms'},
                        {message: 'Only whole number allowed', pattern: /^\d+$/},
                    ]}>
                    <Input size={'large'} placeholder={'Enter remaining terms in months'} autoFocus={true}/>
                </Form.Item>
            </div>
            <FormFooter />
        </Form>
    );
};

export default FormStep06;
