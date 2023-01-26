import React, {useState} from 'react';
import {Button, Col, Form, Radio, RadioChangeEvent, Row, Typography} from "antd";
import {useNavigate} from "react-router-dom";
import {useGeneralContext} from "../../components/context/Context";
import LenderCard from "../../components/lender-card/LenderCard";
import './Form.scss'
import StepTitle from "../../components/step-title/StepTitle";
import FormFooter from "../../components/form-footer/FormFooter";

const {Title, Text, Paragraph} = Typography


const FormStep02 = () => {
    const navigate = useNavigate()
    const {setDocumentInfo, documentInfo} = useGeneralContext()
    const [lenderValue, setLenderValue] = useState(documentInfo?.lender);
    type FormType = {
        lender: string
    }
    const onChange = ({target: {value}}: RadioChangeEvent) => {
        setLenderValue(value)
    }
    const onFinish = (values: FormType) => {
        setDocumentInfo({...documentInfo, lender: values.lender})
        navigate('/form/3')
    }
    const options = [
        {label: <LenderCard number={'1'} name={'Accord Mortgage'}/>, value: 'Accord Mortgage'},
        {label: <LenderCard number={'2'} name={'Barclays'}/>, value: 'Barclays'},
        {label: <LenderCard number={'3'} name={'The Coventry'}/>, value: 'The Coventry'},
        {label: <LenderCard number={'4'} name={'Halifax'}/>, value: 'Halifax'},
    ]
    return (
        <Form layout={'vertical'} onFinish={onFinish} autoComplete={'off'}
              initialValues={{lender: documentInfo?.lender}} className={'form-wrapper'}>
            <StepTitle title={'Current Lender'} subtitle={"Who is your client's mortgage with"}/>
            <div className="form-body">
                <Form.Item
                    name={'lender'}
                    label={'Current Lender'}
                    rules={[
                        {required: true, message: 'Select your current lender'},
                    ]}>
                    <Radio.Group options={options} onChange={onChange} value={lenderValue} optionType="button"
                                 className={'radio-grid-container'}/>
                </Form.Item>
            </div>
            <FormFooter />
        </Form>
    );
};

export default FormStep02;
