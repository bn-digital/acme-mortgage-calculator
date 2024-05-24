import React, {useState} from 'react';
import {Form, Radio, RadioChangeEvent} from "antd";
import {useNavigate} from "react-router-dom";
import {useGeneralContext} from "../../components/context/Context";
import './Form.scss'
import StepTitle from "../../components/step-title/StepTitle";
import RadioOptionCard from "../../components/radio-option-card/RadioOptionCard";
import FormFooter from "../../components/form-footer/FormFooter";

const FormStep10 = () => {
  const navigate = useNavigate()
  const {setDocumentInfo, documentInfo} = useGeneralContext()
  const [value, setValue] = useState(documentInfo?.repayment);
  type FormType = {
    initialPeriod: string
  }
  const onChange = ({target: {value}}: RadioChangeEvent) => {
    setValue(value)
  }
  const onFinish = (values: FormType) => {
    setDocumentInfo({...documentInfo, initialPeriod: values.initialPeriod})
    navigate('/form/11')
  }
  const options = [
    {label: <RadioOptionCard number={'1'} name={'2 years'}/>, value: '2'},
    {label: <RadioOptionCard number={'2'} name={'3 years'}/>, value: '3'},
    {label: <RadioOptionCard number={'3'} name={'5 years'}/>, value: '5'},
    {label: <RadioOptionCard number={'4'} name={'10 years'}/>, value: '10'},
  ]
  return (
    <Form layout={'vertical'}
          onFinish={onFinish}
          autoComplete={'off'}
          initialValues={{initialPeriod: documentInfo?.initialPeriod}}
          className={'form-wrapper'}
    >
      <StepTitle title={'Initial Period'} subtitle={"Select an initial period for this new product type"}/>
      <div className="form-body">
        <Form.Item
          name={'initialPeriod'}
          rules={[
            {required: true, message: 'Select Initial Period'},
          ]}
        >
          <Radio.Group
            options={options}
            onChange={onChange}
            value={value}
            optionType={"button"}
            className={'radio-column-container'}
          />
        </Form.Item>
      </div>
      <FormFooter />
    </Form>
  );
};

export default FormStep10;
