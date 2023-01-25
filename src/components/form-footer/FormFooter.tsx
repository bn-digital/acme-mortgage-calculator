import React, {FC} from 'react';
import {Button, Col, Row} from "antd";
import {useNavigate} from "react-router-dom";

type Props = {
    isPreviewButton?: boolean
    isLastStep?: boolean
}
const FormFooter: FC<Props> = ({isPreviewButton = true, isLastStep = false}) => {
    const navigate = useNavigate()
    return (
        <Row justify={'end'} className={'form-footer'}>
            <Col>
                {isPreviewButton && (
                    <Button type={'text'} onClick={() => navigate(-1)}
                            style={{marginRight: 12}}>{'Preview step'}</Button>
                )}
                {isLastStep && (
                    <Button type={'primary'} size={'large'} htmlType={'submit'}>{'Submit'}</Button>
                )}
                {!isLastStep && (
                    <Button type={'primary'} size={'large'} htmlType={'submit'}>{'Next step'}</Button>
                )}
            </Col>
        </Row>
    );
};

export default FormFooter;
