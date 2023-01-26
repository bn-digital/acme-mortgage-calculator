import React, {useState} from 'react';
import {Form, Radio, RadioChangeEvent} from "antd";
import {useNavigate} from "react-router-dom";
import {useGeneralContext} from "../../components/context/Context";
import './Form.scss'
import StepTitle from "../../components/step-title/StepTitle";
import RadioOptionCard from "../../components/radio-option-card/RadioOptionCard";
import FormFooter from "../../components/form-footer/FormFooter";

const FormStep04 = () => {
    const navigate = useNavigate()
    const {setDocumentInfo, documentInfo} = useGeneralContext()
    const [value, setValue] = useState(documentInfo?.repayment);
    type FormType = {
        repayment: string
    }
    const onChange = ({target: {value}}: RadioChangeEvent) => {
        setValue(value)
    }
    const onFinish = (values: FormType) => {
        setDocumentInfo({...documentInfo, repayment: values.repayment})
        navigate('/form/5')
    }
    const options = [
        {label: <RadioOptionCard number={'A'} name={'Repayment'}/>, value: 'Repayment'},
        {label: <RadioOptionCard number={'B'} name={'Interests only'}/>, value: 'Interests only'},
    ]
    return (
        <Form layout={'vertical'} onFinish={onFinish} autoComplete={'off'}
              initialValues={{repayment: documentInfo?.repayment}} className={'form-wrapper'}>
            <StepTitle title={'Repayment type'} subtitle={"Select the repayment type for this sole sub account"}/>
            <div className="form-body">
                <Form.Item
                    name={'repayment'}
                    label={'Repayment type'}
                    rules={[
                        {required: true, message: 'Select the repayment type'},
                    ]}>
                    <Radio.Group options={options} onChange={onChange} value={value} optionType="button"
                                 className={'radio-column-container'}/>
                </Form.Item>
            </div>
            <FormFooter/>
        </Form>
    );
};

export default FormStep04;
