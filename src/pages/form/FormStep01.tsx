import {Button, Col, Form, Input, Row, Typography} from "antd";
import {useNavigate} from "react-router-dom";
import {useGeneralContext} from "../../components/context/Context";
import StepTitle from "../../components/step-title/StepTitle";

const{Title, Paragraph} = Typography
const FormStep01 = () => {
    const navigate = useNavigate()
    const {setDocumentInfo, documentInfo} = useGeneralContext()
    type FormType = {
        fee: string
    }
    const onFinish = (values: FormType) => {
        setDocumentInfo({...documentInfo, fee: values.fee })
        navigate('/form/2')
    }
    return (
        <Form layout={'vertical'} onFinish={onFinish} autoComplete={'off'} initialValues={{fee: documentInfo?.fee}} className={'form-wrapper'}>
            <StepTitle title={'Remortgage broker fee (€)'} subtitle={"Enter the amount payable below"} />
            <div className="form-body">
            <Form.Item
                name={'fee'}
                label={'Remortgage broker fee (€) '}
                rules={[
                    { required: true, message: 'This field is required' },
                    { message: 'Invalid number', pattern: /^\$?[\d,]+(\.\d{1,2})?$/ },
                    // { message: 'Invalid input', pattern: /^\$?\d+(,\d{3})*(\.\d*)?$/ },
                ]}>
                <Input size={'large'} placeholder={'Enter remortgage broker fee'} autoFocus={true} prefix={'€'} />
            </Form.Item>
            </div>
            <Row justify={'end'}>
                <Col>
                    <Button type={'primary'} htmlType={'submit'}>{'Next step'}</Button>
                </Col>
            </Row>
        </Form>
    );
};

export default FormStep01;
