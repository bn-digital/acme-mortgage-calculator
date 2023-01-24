import React, {FC} from 'react';
import {Typography} from "antd";
import './LenderCard.scss'
import accord from '../../assets/accord.png'
import barclays from '../../assets/barclays.png'
import coventry from '../../assets/coventry.jpg'
import halifax from '../../assets/halifax.png'


const {Title, Text} = Typography

type Props = {
    number: string
    name: string
}

const LenderCard: FC<Props> = ({number, name}) => {
    let imageUrl
    switch (number) {
        case '1': imageUrl = accord
            break;
        case '2': imageUrl = barclays
            break;
        case '3': imageUrl = coventry
            break;
        case '4': imageUrl = halifax
            break;
        default: imageUrl = accord
    }
    return (
        <div className={'lender-card'}>
            <div className="image-container">
                <img src={imageUrl} alt="logo"/>
            </div>
            <div className="content">
                <div className="check-box">
                    <Text style={{fontSize: 12}}>{number}</Text>
                </div>
                <Text style={{fontSize: 10}}>{name}</Text>
            </div>
            <div className="selected-overlay"/>

        </div>
    );
};

export default LenderCard;
