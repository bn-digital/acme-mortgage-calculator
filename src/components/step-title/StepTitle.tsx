import React, {FC} from 'react';
import {Typography} from "antd";
// import './StepTitle.scss'
type Props = {
  title: string,
  subtitle: string
}
const {Title, Paragraph} = Typography
const StepTitle:FC<Props> = ({title, subtitle}) => {
  return (
    <div className={'step-title'}>
      <Title level={2}>{title}</Title>
      <Paragraph className={'description'}>{subtitle}</Paragraph>
    </div>
  );
};

export default StepTitle;
