import React, {useState} from 'react';
import {Button, Col, Form, Radio, RadioChangeEvent, Row, Typography} from "antd";
import {useNavigate} from "react-router-dom";
import {useGeneralContext} from "../../components/context/Context";
import LenderCard from "../../components/lender-card/LenderCard";
import './Form.scss'
import StepTitle from "../../components/step-title/StepTitle";

const {Title, Text, Paragraph} = Typography


const FormStep02 = () => {
    const navigate = useNavigate()
    const {setDocumentInfo, documentInfo} = useGeneralContext()
    const [lenderValue, setLenderValue] = useState(documentInfo?.lender);
    type FormType = {
        lender: string
    }
    const onChange = ({target: {value}}: RadioChangeEvent) => {
        console.log(value);
        setLenderValue(value)
    }
    const onFinish = (values: FormType) => {
        setDocumentInfo({...documentInfo, lender: values.lender})
        navigate('/form/3')
    }
    const options = [
        {label: <LenderCard number={'1'} name={'Accord Mortgage'}/>, value: '1'},
        {label: <LenderCard number={'2'} name={'Barclays'}/>, value: '2'},
        {label: <LenderCard number={'3'} name={'The Coventry'}/>, value: '3'},
        {label: <LenderCard number={'4'} name={'Halifax'}/>, value: '4'},
    ]
    return (
        <Form layout={'vertical'} onFinish={onFinish} autoComplete={'off'}
              initialValues={{lender: documentInfo?.lender}} className={'form-wrapper'}>
            <StepTitle title={' Current Lender'} subtitle={"Who is your client's mortgage with"}/>
            <div className="form-body">
                <Form.Item
                    name={'lender'}
                    label={'Current Lender'}
                    rules={[
                        {required: true, message: 'Select your current lender'},
                    ]}>
                    <Radio.Group options={options} onChange={onChange} value={lenderValue} optionType="button"
                                 className={'radio-container'}/>
                </Form.Item>
            </div>
            <Row justify={'end'} className={'form-footer'}>
                <Col>
                    <Button type={'text'} onClick={() => navigate('/form/1')}
                            style={{marginRight: 12}}>{'Preview step'}</Button>
                    <Button type={'primary'} htmlType={'submit'}>{'Next step'}</Button>
                </Col>
            </Row>
        </Form>
    );
};

export default FormStep02;
