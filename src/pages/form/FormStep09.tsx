import React, {useState} from 'react';
import {Form, Radio, RadioChangeEvent} from "antd";
import {useNavigate} from "react-router-dom";
import {useGeneralContext} from "../../components/context/Context";
import './Form.scss'
import StepTitle from "../../components/step-title/StepTitle";
import RadioOptionCard from "../../components/radio-option-card/RadioOptionCard";
import FormFooter from "../../components/form-footer/FormFooter";

const FormStep09 = () => {
    const navigate = useNavigate()
    const {setDocumentInfo, documentInfo} = useGeneralContext()
    const [value, setValue] = useState(documentInfo?.repayment);
    type FormType = {
        productType: string
    }
    const onChange = ({target: {value}}: RadioChangeEvent) => {
        setValue(value)
    }
    const onFinish = (values: FormType) => {
        setDocumentInfo({...documentInfo, productType: values.productType})
        navigate('/form/10')
    }
    const options = [
        {label: <RadioOptionCard number={'A'} name={'Fixed'}/>, value: 'Fixed'},
        {label: <RadioOptionCard number={'B'} name={'Variable'}/>, value: 'Variable'},
        {label: <RadioOptionCard number={'C'} name={'Flex'}/>, value: 'Flex'},
    ]
    return (
        <Form layout={'vertical'} onFinish={onFinish} autoComplete={'off'}
              initialValues={{productType: documentInfo?.productType}} className={'form-wrapper'}>
            <StepTitle title={'Product type'} subtitle={"Select a new product type"}/>
            <div className="form-body">
                <Form.Item
                    name={'productType'}
                    label={'Product type'}
                    rules={[
                        {required: true, message: 'Select product type'},
                    ]}>
                    <Radio.Group options={options} onChange={onChange} value={value} optionType="button"
                                 className={'radio-column-container'}/>
                </Form.Item>
            </div>
            <FormFooter />
        </Form>
    );
};

export default FormStep09;
