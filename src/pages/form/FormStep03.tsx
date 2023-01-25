import React, {useState} from 'react';
import {Button, Col, Form, Radio, RadioChangeEvent, Row, Typography} from "antd";
import {useNavigate} from "react-router-dom";
import {useGeneralContext} from "../../components/context/Context";
import LenderCard from "../../components/lender-card/LenderCard";
import './Form.scss'
import StepTitle from "../../components/step-title/StepTitle";
import RadioOptionCard from "../../components/radio-option-card/RadioOptionCard";
import FormFooter from "../../components/form-footer/FormFooter";

const {Title, Text, Paragraph} = Typography


const FormStep03 = () => {
    const navigate = useNavigate()
    const {setDocumentInfo, documentInfo} = useGeneralContext()
    const [value, setValue] = useState(documentInfo?.subAccounts);
    type FormType = {
        subAccounts: string
    }
    const onChange = ({target: {value}}: RadioChangeEvent) => {
        console.log(value);
        setValue(value)
    }
    const onFinish = (values: FormType) => {
        setDocumentInfo({...documentInfo, subAccounts: values.subAccounts})
        navigate('/form/4')
    }
    const options = [
        {label: <RadioOptionCard number={'A'} name={'1 sub account'}/>, value: '1 sub account'},
        {label: <RadioOptionCard number={'B'} name={'2 sub accounts'}/>, value: '2 sub accounts'},
        {label: <RadioOptionCard number={'C'} name={'3 sub accounts'}/>, value: '3 sub accounts'},
        {label: <RadioOptionCard number={'D'} name={'4 sub accounts'}/>, value: '4 sub accounts'},
    ]
    return (
        <Form layout={'vertical'} onFinish={onFinish} autoComplete={'off'}
              initialValues={{subAccounts: documentInfo?.subAccounts}} className={'form-wrapper'}>
            <StepTitle title={'Mortgage Parts'} subtitle={"How many sub accounts does this mortgage have?"}/>
            <div className="form-body">
                <Form.Item
                    name={'subAccounts'}
                    label={'Sub accounts amount'}
                    rules={[
                        {required: true, message: 'Select your sub accounts amount'},
                    ]}>
                    <Radio.Group options={options} onChange={onChange} value={value} optionType="button"
                                 className={'radio-column-container'}/>
                </Form.Item>
            </div>
            <FormFooter />
        </Form>
    );
};

export default FormStep03;
