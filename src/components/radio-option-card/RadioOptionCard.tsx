import React, {FC} from 'react';
import {Typography} from "antd";
import './RadioOptionCard.scss'

const {Title, Text} = Typography

type Props = {
  number: string
  name: string
}

const RadioOptionCard: FC<Props> = ({number, name}) => {
  return (
    <div className={'radio-option-card'}>
      <div className="content">
        <div className="check-box">
          <Text className={'order'}>{number}</Text>
        </div>
        <Text className={'label'}>{name}</Text>
      </div>
    </div>
  );
};

export default RadioOptionCard;
