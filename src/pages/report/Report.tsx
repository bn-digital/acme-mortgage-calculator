import {Button, Typography} from "antd";
import './Report.scss'
import {useGeneralContext} from "../../components/context/Context";
import { useNavigate} from "react-router-dom";

const {Title, Text, Paragraph} = Typography
const Report = () => {
    const navigate = useNavigate()
    const {documentInfo} = useGeneralContext()
    const reportInfo = [
        {
            title: 'Remortgage broker fee',
            value: '£' + documentInfo.brokerFee
        },
        {
            title: 'Current Lender',
            value: documentInfo.lender
        },
        {
            title: 'Mortgage Parts',
            value: documentInfo.subAccounts
        },
        {
            title: 'Repayment type',
            value: documentInfo.repayment
        },
        {
            title: 'Current balance',
            value: documentInfo.balance
        },
        {
            title: 'Remaining term in months',
            value: documentInfo.terms
        },
        {
            title: 'Index valuation',
            value: '£' + documentInfo.valuationIndex
        },
        {
            title: 'Remortgage valuation',
            value: '£' + documentInfo.remortgageValuation
        },
        {
            title: 'Product type',
            value: documentInfo.productType
        },
        {
            title: 'Initial Period',
            value: documentInfo.initialPeriod + ' years'
        },
        {
            title: 'Start date',
            value: documentInfo.startDate
        },
        {
            title: 'Exit fee',
            value: '£' + documentInfo.exitFee
        }
    ]
    const onReport = () => {
        navigate('/pdf-report')
        // window.print()
    }
    localStorage.setItem('report',JSON.stringify(reportInfo))
    return (
        <div className={'report-container'}>
            <div className="report-header">
                <Title level={3}>{'Thank you!'}</Title>
                <Paragraph>{'Please, check out provided information:'}</Paragraph>

            </div>
            {reportInfo.map((it) => {
                return (
                    <div key={it.title} className="report-item-wrapper">
                        <div className="title">
                            <Text>{it.title}</Text>
                        </div>
                        <div className="response">
                            <Text>{it.value}</Text>
                        </div>
                    </div>
                );
            })}

            <div className="report-footer">
                <Text>{'Your comparison report is available below'}</Text>
                <div className="buttons-block">
                    <Button type={'text'} size={'middle'} onClick={() => navigate(-1)}
                            style={{marginRight: 12}}>{'Back to form'}</Button>

                    <Button  type={'primary'} onClick={onReport} size={'large'}>{'View report'}</Button>
                </div>
            </div>

        </div>
    );
};

export default Report;
