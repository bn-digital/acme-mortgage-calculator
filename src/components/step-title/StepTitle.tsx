import React, {FC} from 'react';
import {Typography} from "antd";
import './StepTitle.scss'
type Props = {
    title: string,
    subtitle: string
}
const {Title, Paragraph} = Typography
const StepTitle:FC<Props> = ({title, subtitle}) => {
    return (
        <div className={'step-title'}>
            <Title level={4}>{title}</Title>
            <Paragraph style={{color: 'gray'}}>{subtitle}</Paragraph>
        </div>
    );
};

export default StepTitle;
