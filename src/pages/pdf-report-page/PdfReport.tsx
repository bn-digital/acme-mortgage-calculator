import {Spin, Typography} from "antd";
import './PdfReport.scss'
import {useGeneralContext} from "../../components/context/Context";
import {useEffect} from "react";

const {Title, Text, Paragraph} = Typography
const PdfReport = () => {
    const {documentInfo} = useGeneralContext()

    // const reportInfo = [
    //     {
    //         title: 'Remortgage broker fee',
    //         value: '£' + documentInfo.brokerFee
    //     },
    //     {
    //         title: 'Current Lender',
    //         value: documentInfo.lender
    //     },
    //     {
    //         title: 'Mortgage Parts',
    //         value: documentInfo.subAccounts
    //     },
    //     {
    //         title: 'Repayment type',
    //         value: documentInfo.repayment
    //     },
    //     {
    //         title: 'Current balance',
    //         value: documentInfo.balance
    //     },
    //     {
    //         title: 'Remaining term in months',
    //         value: documentInfo.terms
    //     },
    //     {
    //         title: 'Index valuation',
    //         value: '£' + documentInfo.valuationIndex
    //     },
    //     {
    //         title: 'Remortgage valuation',
    //         value: '£' + documentInfo.remortgageValuation
    //     },
    //     {
    //         title: 'Product type',
    //         value: documentInfo.productType
    //     },
    //     {
    //         title: 'Initial Period',
    //         value: documentInfo.initialPeriod + ' years'
    //     },
    //     {
    //         title: 'Start date',
    //         value: documentInfo.startDate
    //     },
    //     {
    //         title: 'Exit fee',
    //         value: '£' + documentInfo.exitFee
    //     }
    // ]
    const reportString = localStorage.getItem('report') as string
    const reportInfo =JSON.parse(reportString);

    useEffect(() => {
        if(reportInfo && reportInfo.length ) window.print()
    }, [])
    return (
        reportInfo && reportInfo.length ? (
                <div className={'pdf-report-container'}>
                    <div className="report-header">
                        <Title level={3}>{'PDF report'}</Title>
                        <Paragraph>{'Your comparison report calculation based on provided information'}</Paragraph>
                    </div>
                    <div className="report-body">
                        {reportInfo.map((it: Record<string,string>) => {
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
                    </div>
                    <div className="report-footer">
                        <Text>{'Mortgage Mathematics ' + new Date().getFullYear()}</Text>
                        <Paragraph style={{fontSize: 10}}>{'Press Ctrl+P to save the report'}</Paragraph>
                    </div>
                </div>
            ) : <Spin />)


    };

export default PdfReport;
