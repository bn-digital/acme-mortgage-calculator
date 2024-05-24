import { Button, Row, Typography } from "antd";
import { useNavigate} from "react-router-dom";
import PdfReport from "../../components/pdf-report/PdfReport"
import { PDFDownloadLink } from "@react-pdf/renderer";
import './Report.scss'
import {useGeneralContext} from "../../components/context/Context";


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
    }]
  const onReport = () => {
    navigate('/pdf-report')
    // window.print()
  }

  const onDownload = () => {

  }

  localStorage.setItem('report',JSON.stringify(reportInfo))

  return (
    <section>
      <div className={'report-container'}>
        <div className={'report-header'}>
          <Paragraph className={'subtitle'}>{'Almost done!'}</Paragraph>
          <Title level={2}>{'Please verify your input'}</Title>
        </div>
        <div className={'report-body'}>
          {reportInfo.map((it) => {
            return (
              <Row key={it.title} justify={'space-between'} className={'report-item-wrapper'}>
                <Text>{it.title}</Text>
                <Text>{it.value}</Text>
              </Row>
            );
          })}
        </div>
        <div className={'report-footer'}>
          <Row>
            <Button
              type={'text'}
              onClick={() => navigate(-1)}
              style={{marginRight: 12}}
            >
              {'Back to form'}
            </Button>
            <Button type={'primary'} onClick={onReport}>{'Submit'}</Button>
          </Row>
          <PDFDownloadLink document={<PdfReport />} fileName={'report'}>
            <Button type={'text'}>{'Download PDF'}</Button>
          </PDFDownloadLink>
        </div>
      </div>
    </section>
  );
};

export default Report;
