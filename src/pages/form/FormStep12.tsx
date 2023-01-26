import {Form, Input} from "antd";
import {useNavigate} from "react-router-dom";
import {useGeneralContext} from "../../components/context/Context";
import StepTitle from "../../components/step-title/StepTitle";
import FormFooter from "../../components/form-footer/FormFooter";

const FormStep12 = () => {
    const navigate = useNavigate()
    const {setDocumentInfo, documentInfo, setIsModalOpen, setModalType} = useGeneralContext()
    type FormType = {
        exitFee: string
    }
    const onFinish = (values: FormType) => {
        setDocumentInfo({...documentInfo, exitFee: values.exitFee })
        if(documentInfo.brokerFee &&
        documentInfo.lender
        ) {
            navigate('/report')
        } else {
            setModalType('errorSubmitting')
            setIsModalOpen(true)

        }

    }
    return (
        <Form layout={'vertical'} onFinish={onFinish} autoComplete={'off'} initialValues={{exitFee: documentInfo?.exitFee}} className={'form-wrapper'}>
            <StepTitle title={'Exit fee (£)'} subtitle={"For example, Coventry typically charge £125"} />
            <div className="form-body">
                <Form.Item
                    name={'exitFee'}
                    label={'Exit fee'}
                    rules={[
                        {required: true, message: 'Enter exit fee'},
                        {message: 'Invalid number', pattern: /^\$?[\d,]+(\.\d{1,2})?$/},
                    ]}>
                    <Input size={'large'} placeholder={'Enter exit fee'} autoFocus={true} prefix={'£'}/>
                </Form.Item>
            </div>

            <FormFooter isLastStep={true}/>
        </Form>
    );
};

export default FormStep12;
