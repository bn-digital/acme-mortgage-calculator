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
                    <Text style={{fontSize: 12}}>{number}</Text>
                </div>
                <Text style={{fontSize: 12}}>{name}</Text>
            </div>
            <div className="selected-overlay"/>
        </div>
    );
};

export default RadioOptionCard;
