import {Button, Col, ConfigProvider, DatePicker, Form, Input, Row} from "antd";
import {useNavigate} from "react-router-dom";
import {useGeneralContext} from "../../components/context/Context";
import StepTitle from "../../components/step-title/StepTitle";
import FormFooter from "../../components/form-footer/FormFooter";
import {RangePickerProps} from "antd/es/date-picker";

import enGB from 'antd/locale/en_GB';

import dayjs from 'dayjs';
import 'dayjs/locale/en-gb';
import 'dayjs/plugin/updateLocale'
import {useState} from "react";

const FormStep11 = () => {
    const navigate = useNavigate()
    const {setDocumentInfo, documentInfo} = useGeneralContext()
    const [value, setValue] = useState(documentInfo.startDate ? dayjs(documentInfo.startDate) : dayjs());
    type FormType = {
        startDate: string
    }
    const onFinish = (values: FormType) => {
        setDocumentInfo({...documentInfo, startDate: value?.format('YYYY-MM-DD') })
        navigate('/form/12')
    }
    const disabledDate: RangePickerProps['disabledDate'] = (current) => {
        // Can not select days before today
        return current && current < dayjs().subtract(1, 'day').endOf('day');
    };
    // dayjs.updateLocale('en_GB', {
    //     weekStart: 3
    // });
    const onChange = (value: any) => {
        setValue(value)
    }

    return (
        <Form layout={'vertical'} onFinish={onFinish} autoComplete={'off'} initialValues={{startDate: documentInfo?.startDate}} className={'form-wrapper'}>
            <StepTitle title={'Start date'} subtitle={"If you were to proceed with a product transfer when would this start?"} />
            <div className="form-body">
            <Form.Item
                name={'startDate'}
                label={'Start date'}
                required={true}
                status={ value ? 'success' : 'error'}
                rules={[
                    {
                        required: value === null,
                        message: 'Select start date',
                    }
                ]}

                // rules={[
                //     { required: true, message: 'This field is required', pattern: /^\s*$/ },
                // ]}
            >
                <ConfigProvider locale={enGB}>
                <DatePicker
                    defaultValue={value}
                    format="DD-MM-YYYY"
                    style={{width: '100%'}}
                    size={'large'}
                    placeholder={'Select start date'}
                    disabledDate={disabledDate}
                    value={value}
                    onChange={onChange}
                    allowClear={false}
                    autoFocus
                />
                </ConfigProvider>
            </Form.Item>
            </div>
            <FormFooter />
        </Form>
    );
};

export default FormStep11;
